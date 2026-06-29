//======================================
// Original Gacha Maker
// pages/home.js
//======================================

import {

    createElement

} from "../utils/dom.js";

import {

    getGachas

} from "../database/gachaRepository.js";

export async function renderHome(){

    const page =

        createElement(

            "main"

        );

    const hero =

        createElement(

            "div",

            "panel hero"

        );

    hero.innerHTML = `

        <h2>

            Original Gacha Maker

        </h2>

        <p>

            オリジナルキャラクターで遊べる
            ガチャメーカー

        </p>

    `;

    page.appendChild(

        hero

    );

    const panel =

        createElement(

            "div",

            "panel"

        );

    panel.innerHTML = `

        <h3>

            開催中のガチャ

        </h3>

    `;

    const list =

        createElement(

            "div"

        );

    list.id =

        "homeGachaList";

    panel.appendChild(

        list

    );

    page.appendChild(

        panel

    );

    await renderHomeGachas();

    return page;

}

async function renderHomeGachas(){

    const list =

        document.getElementById(

            "homeGachaList"

        );

    if(!list){

        return;

    }

    list.innerHTML = "";

    const gachas =

        await getGachas();

    gachas.forEach(gacha=>{

        const card =

            createElement(

                "div",

                "panel"

            );

        card.innerHTML = `

            <strong>

                ${gacha.name}

            </strong>

        `;

        list.appendChild(

            card

        );

    });

}
