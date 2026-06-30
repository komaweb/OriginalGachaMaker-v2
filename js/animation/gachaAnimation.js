//======================================
// Original Gacha Maker
// animation/gachaAnimation.js
//======================================

import {

    blobToURL

} from "../utils/image.js";

import {

    showResultDetail,

    showResultList

} from "./gachaResult.js";

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

    if(

        results.length===1

    ){

        await showResultDetail(

            overlay,

            grid,

            results[0],

            ()=>{

                overlay.remove();

            }

        );

    }else{

        await showResultList(

            overlay,

            grid,

            results

        );

    }

    return results;

}
