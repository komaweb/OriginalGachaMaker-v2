//======================================
// Original Gacha Maker
// pages/settings.js
//======================================

import {

    createElement

} from "../utils/dom.js";

export function renderSettings(){

    const page =

        createElement(

            "section",

            "page"

        );

    page.id =

        "settings";

    const panel =

        createElement(

            "div",

            "panel"

        );

    panel.innerHTML = `

        <h2>

            設定

        </h2>

    `;

    page.appendChild(

        panel

    );

    return page;

}
