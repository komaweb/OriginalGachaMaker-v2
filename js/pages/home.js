//======================================
// Original Gacha Maker
// pages/home.js
//======================================

import {

    createElement

} from "../utils/dom.js";

export function renderHome(){

    const page =

        createElement(

            "main"

        );

    const hero =

        createElement(

            "div",

            "panel hero"

        );

    hero.innerHTML =

        `

        <h2>

            Original Gacha Maker

        </h2>

        <p>

            オリジナルキャラクターで遊べる
            ガチャメーカー

        </p>

        `;

    const panel =

        createElement(

            "div",

            "panel"

        );

    panel.innerHTML =

        `

        <h3>

            開催中のガチャ

        </h3>

        <div id="homeGachaList">

        </div>

        `;

    page.append(

        hero,

        panel

    );

    return page;

}
