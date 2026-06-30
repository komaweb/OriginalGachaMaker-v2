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

    for(

        const character

        of characters

    ){

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
