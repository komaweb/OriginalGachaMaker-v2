//======================================
// Original Gacha Maker
// components/tabs.js
//======================================

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

export function initTabs(){

    const buttons =

        document.querySelectorAll(

            ".tab-button"

        );

    const pages =

        document.querySelectorAll(

            ".page"

        );

    buttons.forEach(button=>{

        button.onclick = async()=>{

            buttons.forEach(

                b=>b.classList.remove(

                    "active"

                )

            );

            pages.forEach(

                p=>p.classList.remove(

                    "active"

                )

            );

            button.classList.add(

                "active"

            );

            const page =

                document.getElementById(

                    button.dataset.page

                );

            if(page){

                page.classList.add(

                    "active"

                );

            }

            switch(

                button.dataset.page

            ){

                case "home":

                    await loadHome();

                    break;

                case "gacha":

                    await loadGacha();

                    break;

            }

        };

    });

}
