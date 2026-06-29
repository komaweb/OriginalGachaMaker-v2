//======================================
// Original Gacha Maker
// pages/editor.js
//======================================

import {

    createElement

} from "../utils/dom.js";

import {

    createGacha

} from "../models/gacha.js";

import {

    addGacha,

    getGachas

} from "../database/gachaRepository.js";

import {

    loadHome

} from "./home.js";

export function renderEditor(){

    const page =

        createElement(

            "section",

            "page"

        );

    page.id =

        "editor";

    page.innerHTML = `

<div class="panel">

<h2>

ガチャシリーズ

</h2>

<input
id="seriesName"
class="text-input"
placeholder="シリーズ名">

<br><br>

<button
id="saveSeries"
class="primary-button">

シリーズを保存

</button>

<hr>

<div
id="seriesList">

</div>

</div>

`;

    initEditor();

    return page;

}

function initEditor(){

    setTimeout(()=>{

        const button =

            document.getElementById(

                "saveSeries"

            );

        if(!button){

            return;

        }

        button.onclick =

            saveSeries;

        loadSeries();

    });

}

async function saveSeries(){

    const input =

        document.getElementById(

            "seriesName"

        );

    const name =

        input.value.trim();

    if(name===""){

        alert(

            "シリーズ名を入力してください"

        );

        return;

    }

    const gacha =

        createGacha();

    gacha.name =

        name;

    await addGacha(

        gacha

    );

    input.value="";

    await loadSeries();

    await loadHome();

}

async function loadSeries(){

    const list =

        document.getElementById(

            "seriesList"

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
