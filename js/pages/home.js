//======================================
// Original Gacha Maker
// pages/home.js
//======================================
import {

    getGachas,

    getCurrentGacha,

    setCurrentGacha

} from "../database/gachaRepository.js";


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

    list.innerHTML = "";

    const gachas =

        await getGachas();
    const currentGacha =

    getCurrentGacha();

    if(gachas.length===0){

        list.innerHTML = `

<p>

まだガチャシリーズがありません。

</p>

`;

        return;

    }

    gachas.forEach(gacha=>{

        const card =

            createElement(

                "div",

                "home-gacha-card"

            );

        card.innerHTML = `

<div
class="home-gacha-banner">

${
    gacha.banner
    ? `
<img
src="${gacha.banner}">
`
    : `
<div
class="home-gacha-placeholder">

No Image

</div>
`
}

</div>

<div
class="home-gacha-body">

<h3>

${gacha.name}

</h3>

<p>

キャラクター
0種類

</p>

</div>

`;

        if(

    gacha.id===currentGacha

){

    card.classList.add(

        "selected"

    );

}

card.onclick =

    async()=>{

        setCurrentGacha(

            gacha.id

        );

        await loadHome();

    };

        list.appendChild(

            card

        );

    });

}
