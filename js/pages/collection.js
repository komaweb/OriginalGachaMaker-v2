//======================================
// Original Gacha Maker
// pages/collection.js
//======================================

import {

    createElement

} from "../utils/dom.js";
import {

    showResultDetail

} from "../animation/gachaResult.js";

import {

    getCharacters

} from "../database/characterRepository.js";

import {

    getGachas

} from "../database/gachaRepository.js";

import {

    blobToURL

} from "../utils/image.js";

export function renderCollection(){

    const page =

        createElement(

            "section",

            "page"

        );

    page.id =

        "collection";

    const panel =

        createElement(

            "div",

            "panel"

        );

    panel.innerHTML = `

<h2>

図鑑

</h2>

<div
id="collectionGrid">

</div>

`;

    page.appendChild(

        panel

    );

    setTimeout(

        loadCollection

    );

    return page;

}

async function loadCollection(){

    const grid =

        document.getElementById(

            "collectionGrid"

        );

    if(

        !grid

    ){

        return;

    }

    grid.innerHTML = "";

    const characters =

        await getCharacters();

    const gachas =

    await getGachas();
    
    characters.sort(

    (a,b)=>{

        if(

            b.rarity!==a.rarity

        ){

            return b.rarity-a.rarity;

        }

        return a.name.localeCompare(

            b.name,

            "ja"

        );

    }

);

    let currentRarity = 0;

for(

    const gacha

    of gachas

){

    const details =

        document.createElement(

            "details"

        );

    details.open = true;

    const summary =

        document.createElement(

            "summary"

        );

    summary.className =

        "collection-series";

const boxImage =

    gacha.boxImage

    ?

    blobToURL(

        gacha.boxImage

    )

    :

    "";

summary.innerHTML = `

<div class="collection-series-left">

    ${
        boxImage

        ?

        `<img
        class="collection-series-icon"
        src="${boxImage}">`

        :

        ""
    }

    <span>

        ${gacha.name}

    </span>

</div>

`;

    details.appendChild(

        summary

    );

    const seriesGrid =

        document.createElement(

            "div"

        );

    seriesGrid.className =

        "collection-series-grid";

    const seriesCharacters =

        characters.filter(

            character=>

                character.gachaId===gacha.id

        );

    let currentRarity = 0;

    for(

        const character

        of seriesCharacters

    ){

        if(

            character.rarity!==currentRarity

        ){

            currentRarity =

                character.rarity;

            const heading =

                document.createElement(

                    "h3"

                );

            heading.className =

                "collection-heading";

            heading.textContent =

                "★".repeat(

                    currentRarity

                );

            seriesGrid.appendChild(

                heading

            );

        }

        const card =

            createElement(

                "div",

                "collection-card"

            );

        card.style.cursor =

            "pointer";

        const image =

            character.iconImage

            ?

            blobToURL(

                character.iconImage

            )

            :

            "https://placehold.co/72x72?text=?";

        card.innerHTML = `

<img

src="${image}"

class="collection-image">

<div
class="collection-name">

${character.name}

</div>

`;

        card.onclick =

            async()=>{

                const overlay =

                    document.createElement(

                        "div"

                    );

                overlay.className =

                    "gacha-overlay";

                const resultGrid =

                    document.createElement(

                        "div"

                    );

                overlay.appendChild(

                    resultGrid

                );

                document.body.appendChild(

                    overlay

                );

                await showResultDetail(

                    overlay,

                    resultGrid,

                    character,

                    ()=>{

                        overlay.remove();

                    }

                );

            };

        seriesGrid.appendChild(

            card

        );

    }

details.appendChild(

    seriesGrid

);

grid.appendChild(

    details

);

}

}
