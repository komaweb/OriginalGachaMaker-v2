//======================================
// Original Gacha Maker
// components/layout.js
//======================================

import {

    createElement

} from "../utils/dom.js";

import {

    createHeader

} from "./header.js";

import {

    createTabs

} from "./tabs.js";

export function createLayout(

    page

){

    const root =

        createElement(

            "div"

        );

    root.id =

        "layout";

    root.appendChild(

        createHeader()

    );

    root.appendChild(

        createTabs()

    );

    const main =

        createElement(

            "main"

        );

    main.appendChild(

        page

    );

    root.appendChild(

        main

    );

    return root;

}
