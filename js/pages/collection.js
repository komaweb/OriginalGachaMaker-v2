//======================================
// Original Gacha Maker
// pages/collection.js
//======================================

import {

    createElement

} from "../utils/dom.js";

export function renderCollection(){

    const page =

        createElement(

            "section",

            "page"

        );

    page.id =

        "collection";

    const panel =

        createElement(

            "div",

            "panel"

        );

    panel.innerHTML = `

        <h2>

            図鑑

        </h2>

    `;

    page.appendChild(

        panel

    );

    return page;

}
