//======================================
// Original Gacha Maker
// pages/editor.js
//======================================

import {

    createElement

} from "../utils/dom.js";

import {

    addGacha,

    getGachas

} from "../database/gachaRepository.js";

export function renderEditor(){

    const page =

        createElement(

            "main"

        );

    page.id =

        "editor";

    const panel =

        createElement(

            "div",

            "panel"

        );

    panel.innerHTML = `

        <h2>

            ガチャシリーズ

        </h2>

        <input
            id="seriesName"
            placeholder="シリーズ名">

        <br><br>

        <button
            id="saveSeries">

            保存

        </button>

        <div
            id="seriesList"
            style="margin-top:24px;">

        </div>

    `;

    page.appendChild(

        panel

    );

    requestAnimationFrame(

        initEditor

    );

    return page;

}

async function initEditor(){

    const button =

        document.getElementById(

            "saveSeries"

        );

    if(!button){

        return;

    }

    button.onclick =

        async()=>{

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

            await addGacha({

                id:crypto.randomUUID(),

                name,

                banner:null

            });

            input.value="";

            renderSeriesList();

        };

    renderSeriesList();

}

async function renderSeriesList(){

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

        const div =

            createElement(

                "div",

                "panel"

            );

        div.textContent =

            gacha.name;

        list.appendChild(

            div

        );

    });

}
