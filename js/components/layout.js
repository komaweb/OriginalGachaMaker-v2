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

    createTabs,

    initTabs

} from "./tabs.js";

export function createLayout(

    page

){

    const root =

        createElement(

            "div"

        );

    root.appendChild(

        createHeader()

    );

    root.appendChild(

        createTabs()

    );

    root.appendChild(

        page

    );

    requestAnimationFrame(

        ()=>{

            initTabs();

        }

    );

    return root;

}
