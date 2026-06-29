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

    firstPage

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

    main.id =

        "pages";

    main.appendChild(

        firstPage

    );

    root.appendChild(

        main

    );

    return root;

}
