//======================================
// Original Gacha Maker
// pages/gacha.js
//======================================

import {

    createElement

} from "../utils/dom.js";

import {

    getCurrentGacha,

    getGachas

} from "../database/gachaRepository.js";

export function renderGacha(){

    const page =

        createElement(

            "section",

            "page"

        );

    page.id =

        "gacha";

    page.innerHTML = `

<div class="panel">

<h2>

ガチャ

</h2>

<div
id="currentGachaInfo">

</div>

<br>

<button
id="singleGachaButton"
class="primary-button">

1回引く

</button>

<button
id="tenGachaButton"
class="primary-button">

10連

</button>

</div>

`;

    return page;

}

export async function loadGacha(){

    const root =

        document.getElementById(

            "currentGachaInfo"

        );

    if(!root){

        return;

    }

    const currentId =

        getCurrentGacha();

    if(!currentId){

        root.innerHTML =

            "<p>ガチャシリーズを選択してください。</p>";

        return;

    }

    const gachas =

        await getGachas();

    const gacha =

        gachas.find(

            g=>g.id===currentId

        );

    if(!gacha){

        root.innerHTML =

            "<p>ガチャシリーズが見つかりません。</p>";

        return;

    }

    root.innerHTML = `

<h3>

${gacha.name}

</h3>

`;

}
