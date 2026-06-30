//======================================
// Original Gacha Maker
// animation/gachaAnimation.js
//======================================

function wait(ms){

    return new Promise(

        resolve=>{

            setTimeout(

                resolve,

                ms

            );

        }

    );

}

async function poyon(element){

    element.classList.remove(

        "poyon"

    );

    void element.offsetWidth;

    element.classList.add(

        "poyon"

    );

    await wait(280);

    element.classList.remove(

        "poyon"

    );

}

export async function playGachaAnimation(

    gacha,

    results

){

    const overlay =

        document.getElementById(

            "gachaOverlay"

        );

    const boxes =

        document.querySelectorAll(

            ".present-box"

        );

    overlay.classList.remove(

        "hidden"

    );

    boxes.forEach(

        box=>{

            box.style.display="none";

            box.classList.remove(

                "open"

            );

        }

    );

    for(

        let i=0;

        i<results.length;

        i++

    ){

        const box =

            boxes[i];

        const character =

            results[i];

        box.style.display =

            "flex";

        box.innerHTML = `

<img
class="present-image"
src="${
    gacha.boxImage ??
    gacha.banner ??
    ""
}">

`;

        await wait(

            180

        );

        await poyon(

            box

        );

        box.classList.add(

            "open"

        );

        box.innerHTML = `

<img
class="present-image"
src="${
    URL.createObjectURL(
        character.iconImage
    )
}">

`;

    }

    await wait(

        800

    );

    return results;

}

export function closeAnimation(){

    document

        .getElementById(

            "gachaOverlay"

        )

        .classList

        .add(

            "hidden"

        );

}