//======================================
// Original Gacha Maker
// components/layout.js
//======================================

import {

    createHeader

} from "./header.js";

import {

    createTabs

} from "./tabs.js";

export function createLayout(

    page

){

    return `

${createHeader()}

${createTabs()}

<main>

${page}

</main>

`;

}
