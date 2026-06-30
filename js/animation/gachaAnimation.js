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

if(

    results.length===1

){

    await showResultDetail(

        overlay,

        grid,

        results[0]

    );

}else{

    await showResultList(

        overlay,

        grid,

        results

    );

}

return results;


    async function showResultDetail(

    overlay,

    grid,

    character

){

    grid.innerHTML = "";

    grid.classList.remove(
        "single"
    );

    grid.style.display = "flex";
    grid.style.justifyContent = "center";
    grid.style.alignItems = "center";

    const card =
        document.createElement(
            "div"
        );

    card.className =
        "gacha-result";

    card.innerHTML = `

<div
class="gacha-result-body">

<img
class="gacha-result-image"
src="${blobToURL(
    character.standImage
)}">

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

}

}
async function showResultList(

    overlay,

    grid,

    results

){

    grid.innerHTML="";

    grid.className="gacha-list";

    const list=

        document.createElement(

            "div"

        );

    list.className=

        "gacha-list-grid";

    for(

        const character

        of results

    ){

        const img=

            document.createElement(

                "img"

            );

        img.className=

            "gacha-list-image";

        img.src=

            blobToURL(

                character.iconImage

            );

        img.onclick=

            async()=>{

                await showResultDetail(

                    overlay,

                    grid,

                    character

                );

            };

        list.appendChild(

            img

        );

    }

    grid.appendChild(

        list

    );

    const close=

        document.createElement(

            "button"

        );

    close.textContent=

        "閉じる";

    close.onclick=()=>{

        overlay.remove();

    };

    grid.appendChild(

        close

    );

}
