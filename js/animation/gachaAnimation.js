//======================================
// Original Gacha Maker
// animation/gachaAnimation.js
//======================================

import {

    blobToURL

} from "../utils/image.js";

function wait(ms){

    return new Promise(

        resolve=>setTimeout(

            resolve,

            ms

        )

    );

}

export async function playGachaAnimation(

    gacha,

    results

){

    const overlay =

        document.createElement(

            "div"

        );

    overlay.className =

        "gacha-overlay";

    const grid =

        document.createElement(

            "div"

        );

    grid.className =

        results.length===1

        ?

        "gacha-grid single"

        :

        "gacha-grid";

    overlay.appendChild(

        grid

    );

    document.body.appendChild(

        overlay

    );

    for(

        const character

        of results

    ){

        const box =

            document.createElement(

                "div"

            );

        box.className =

            "gacha-box";

        const image =

            document.createElement(

                "img"

            );

        image.className =

            "gacha-image";

        image.src =

            gacha.boxImage

            ||

            gacha.banner

            ||

            "";

        box.appendChild(

            image

        );

        grid.appendChild(

            box

        );

        await wait(

            180

        );

        box.classList.add(

            "poyon"

        );

        await wait(

            280

        );

        box.classList.remove(

            "poyon"

        );

        image.src =

            blobToURL(

                character.iconImage

            );

    }

await wait(
    800
);

grid.innerHTML = "";
grid.classList.remove(
    "single"
);

grid.style.display = "flex";
grid.style.justifyContent = "center";
grid.style.alignItems = "center";    

const character =
    results[0];

const card =
    document.createElement(
        "div"
    );

card.className =
    "gacha-result";

card.innerHTML = `

<img
class="gacha-result-image"
src="${blobToURL(
    character.standImage
)}">

<h2>

${character.name}

</h2>

<p>

☆${character.rarity}

</p>

<p>

${character.quote}

</p>

<p>

${character.description}

</p>

<button
id="closeResult">

閉じる

</button>

`;

grid.appendChild(
    card
);

await new Promise(
    resolve=>{

        document
        .getElementById(
            "closeResult"
        )
        .onclick=()=>{

            overlay.remove();

            resolve();

        };

    }

);

return results;

}
