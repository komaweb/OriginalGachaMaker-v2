//======================================
// Original Gacha Maker
// pages/collection.js
//======================================

import {

    createElement

} from "../utils/dom.js";

import {

    getCharacters

} from "../database/characterRepository.js";

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

        const character

        of characters

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

    grid.appendChild(

        heading

    );

}

        const card =

            createElement(

                "div",

                "collection-card"

            );

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
class="collection-stars">

${"★".repeat(

    character.rarity

)}

</div>

<div
class="collection-name">

${character.name}

</div>

`;

        grid.appendChild(

            card

        );

    }

}
