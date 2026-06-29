//======================================
// Original Gacha Maker
// pages/gacha.js
//======================================

import {

    createElement

} from "../utils/dom.js";

export function renderGacha(){

    const page =

        createElement(

            "section",

            "page"

        );

    page.id =

        "gacha";

    const panel =

        createElement(

            "div",

            "panel"

        );

    panel.innerHTML = `

        <h2>

            ガチャ

        </h2>

    `;

    page.appendChild(

        panel

    );

    return page;

}
