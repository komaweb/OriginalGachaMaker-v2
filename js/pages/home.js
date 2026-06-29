//======================================
// Original Gacha Maker
// pages/home.js
//======================================
import {

    getCharacters

} from "../database/characterRepository.js";

import {

    openPage

} from "../components/tabs.js";

import {

    getGachas,

    getCurrentGacha,

    setCurrentGacha

} from "../database/gachaRepository.js";


import {

    createElement

} from "../utils/dom.js";


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

    const characters =

    await getCharacters();

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
${
    characters.filter(

        character=>

            character.gachaId===gacha.id

    ).length
}種類

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

card.onclick = async()=>{

    setCurrentGacha(

        gacha.id

    );

    await loadHome();

    await openPage(

    "gacha"

);

};

list.appendChild(

    card

);

    });

}
