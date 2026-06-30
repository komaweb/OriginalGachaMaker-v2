//======================================
// Original Gacha Maker
// pages/gacha.js
//======================================
import {

    blobToURL

} from "../utils/image.js";

import {

    getCharacters

} from "../database/characterRepository.js";

import {

    createElement

} from "../utils/dom.js";

import {

    getCurrentGacha,

    getGachas

} from "../database/gachaRepository.js";

import {

    playGachaAnimation

} from "../animation/gachaAnimation.js";

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

    <div
    id="gachaInfo">

    </div>

    <div
    class="gacha-buttons">

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

</div>

`;

    return page;

}

export async function loadGacha(){

    const root =

        document.getElementById(

            "gachaInfo"

        );

    if(!root){

        return;

    }

    const currentId =

        getCurrentGacha();

    if(!currentId){

        root.innerHTML = `

<h2>

ガチャ

</h2>

<p>

ホームでガチャシリーズを選択してください。

</p>

`;

        return;

    }

    const gachas =

        await getGachas();
    const characters =

    await getCharacters();

    const gacha =

        gachas.find(

            g=>g.id===currentId

        );

    if(!gacha){

        root.innerHTML = `

<h2>

ガチャ

</h2>

<p>

選択中のシリーズがありません。

</p>

`;

        return;

    }

root.innerHTML = `

<div class="gacha-header">

    <div class="gacha-banner">

        ${
            gacha.banner
            ?
            `<img
            src="${blobToURL(
                gacha.banner
            )}">`
            :
            `
<div
class="home-gacha-placeholder">

No Image

</div>
`
        }

    </div>

    <div
    class="home-series-header">

        <div
        class="home-series-title">

            ${
                gacha.boxImage
                ?
                `<img
                class="home-box-icon"
                src="${blobToURL(
                    gacha.boxImage
                )}">`
                :
                ""
            }

            <h2>

                ${gacha.name}

            </h2>

        </div>

        <span
        class="home-character-count">

            ${
                characters.filter(
                    character=>
                        character.gachaId===gacha.id
                ).length
            }種類

        </span>

    </div>

</div>

`;
    document.getElementById(

    "singleGachaButton"

).onclick = async()=>{

    const pool =

        characters.filter(

            character=>

                character.gachaId===gacha.id

        );

    if(

        pool.length===0

    ){

        alert(

            "キャラクターが登録されていません"

        );

        return;

    }

    await playGachaAnimation(

        gacha,

        [

            pool[0]

        ]

    );

};

    document.getElementById(

    "tenGachaButton"

).onclick = async()=>{

    const pool =

        characters.filter(

            character=>

                character.gachaId===gacha.id

        );

    if(

        pool.length===0

    ){

        alert(

            "キャラクターが登録されていません"

        );

        return;

    }

    const results = [];

    for(

        let i=0;

        i<10;

        i++

    ){

        const random =

            pool[
                Math.floor(
                    Math.random() *
                    pool.length
                )
            ];

        results.push(

            random

        );

    }

    await playGachaAnimation(

        gacha,

        results

    );

};
    
}
