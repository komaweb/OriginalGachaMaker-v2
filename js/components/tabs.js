//======================================
// Original Gacha Maker
// components/tabs.js
//======================================

import {

    loadCollection

} from "../pages/collection.js";


import {

    createElement

} from "../utils/dom.js";

import {

    loadHome

} from "../pages/home.js";

import {

    loadGacha

} from "../pages/gacha.js";

export function createTabs(){

    const nav =

        createElement(

            "nav",

            "tab-bar"

        );

    const tabs = [

        ["home","ホーム"],
        ["gacha","ガチャ"],
        ["collection","図鑑"],
        ["editor","編集"],
        ["settings","設定"]

    ];

    tabs.forEach((tab,index)=>{

        const button =

            createElement(

                "button",

                "tab-button"

            );

        button.dataset.page =

            tab[0];

        button.textContent =

            tab[1];

        if(index===0){

            button.classList.add(

                "active"

            );

        }

        nav.appendChild(

            button

        );

    });

    return nav;

}

export async function openPage(

    pageId

){

    const buttons =

        document.querySelectorAll(

            ".tab-button"

        );

    const pages =

        document.querySelectorAll(

            ".page"

        );

    buttons.forEach(

        button=>{

            button.classList.toggle(

                "active",

                button.dataset.page===pageId

            );

        }

    );

    pages.forEach(

        page=>{

            page.classList.toggle(

                "active",

                page.id===pageId

            );

        }

    );

    switch(pageId){

        case "home":

            await loadHome();

            break;

        case "gacha":

            await loadGacha();

            break;

            case "collection":

    await loadCollection();

    break;
    }

}

export function initTabs(){

    const buttons =

        document.querySelectorAll(

            ".tab-button"

        );

    buttons.forEach(

        button=>{

            button.onclick = ()=>{

                openPage(

                    button.dataset.page

                );

            };

        }

    );

}
