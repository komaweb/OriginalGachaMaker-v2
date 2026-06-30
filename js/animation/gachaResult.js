//======================================
// Original Gacha Maker
// animation/gachaResult.js
//======================================

import {

    blobToURL

} from "../utils/image.js";

export async function showResultDetail(

    overlay,

    grid,

    character,

    onClose

){

    grid.innerHTML = "";

    grid.className =

        "gacha-grid";

    grid.style.display =

        "flex";

    grid.style.justifyContent =

        "center";

    grid.style.alignItems =

        "center";

    const standImage =

        character.standImage

        ?

        blobToURL(

            character.standImage

        )

        :

        blobToURL(

            character.iconImage

        );

    const card =

        document.createElement(

            "div"

        );

    card.className =

        "gacha-result";

    card.innerHTML = `

<div class="gacha-result-body">

<img
class="gacha-result-image"
src="${standImage}">

<h2>

${character.name}

</h2>

<p
class="gacha-result-stars">

${"★".repeat(
    character.rarity
)}

</p>

<p
class="gacha-result-quote">

「${character.quote}」

</p>

<p
class="gacha-result-description">

${character.description}

</p>

</div>

<button
id="closeResult"
class="primary-button">

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

                    onClose();

                    resolve();

                };

        }

    );

}

export async function showResultList(

    overlay,

    grid,

    results

){

    grid.innerHTML = "";

    grid.className =

        "gacha-list";

    grid.style.display =

        "";

    grid.style.justifyContent =

        "";

    grid.style.alignItems =

        "";

    const list =

        document.createElement(

            "div"

        );

    list.className =

        "gacha-list-grid";

    for(

        const character

        of results

    ){

        const card =

            document.createElement(

                "div"

            );

        card.className =

            "gacha-list-card";

        const img =

            document.createElement(

                "img"

            );

        img.className =

            "gacha-list-image";

        img.src =

            blobToURL(

                character.iconImage

            );

        const stars =

            document.createElement(

                "div"

            );

        stars.className =

            "gacha-list-stars";

        stars.textContent =

            "★".repeat(

                character.rarity

            );

        card.append(

            img,

            stars

        );

card.onclick =

    async()=>{

        await showResultDetail(

            overlay,

            grid,

            character,

            async()=>{

                await showResultList(

                    overlay,

                    grid,

                    results

                );

            }

        );

    };

        list.appendChild(

            card

        );

    }

    grid.appendChild(

        list

    );

    const close =

        document.createElement(

            "button"

        );

    close.className =

        "primary-button";

    close.textContent =

        "閉じる";

    close.onclick =

        ()=>{

            overlay.remove();

        };

    grid.appendChild(

        close

    );

}
