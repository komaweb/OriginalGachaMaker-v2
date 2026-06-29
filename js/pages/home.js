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

export function renderHome(){

    const page =

        createElement(

            "section",

            "page active"

        );

    page.id =

        "home";

    page.innerHTML = `

<div class="panel hero">

<h2>

Original Gacha Maker

</h2>

<p>

オリジナルキャラクターで遊べる
ガチャメーカー

</p>

</div>

<div class="panel">

<h3>

開催中のガチャ

</h3>

<div id="homeGachaList">

</div>

</div>

`;

    return page;

}

export async function loadHome(){

    const list =

        document.getElementById(

            "homeGachaList"

        );

    if(!list){

        return;

    }

    list.innerHTML="";

    const gachas =

        await getGachas();

    gachas.forEach(gacha=>{

        const card =

            createElement(

                "div",

                "panel"

            );

        card.textContent =

            gacha.name;

        list.appendChild(

            card

        );

    });

}
