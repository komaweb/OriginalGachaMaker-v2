//======================================
// Original Gacha Maker
// components/header.js
//======================================

import {

    createElement

} from "../utils/dom.js";

export function createHeader(){

    const header =

        createElement(

            "header",

            "header"

        );

    const title =

        createElement(

            "h1"

        );

    title.textContent =

        "Original Gacha Maker";

    header.appendChild(

        title

    );

    return header;

}
