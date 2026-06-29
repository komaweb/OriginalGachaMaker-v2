//======================================
// Original Gacha Maker
// components/tabs.js
//======================================

import {

    createElement

} from "../utils/dom.js";

export function createTabs(){

    const nav =

        createElement(

            "nav",

            "tab-bar"

        );

    const tabs = [

        "home",
        "gacha",
        "collection",
        "editor",
        "settings"

    ];

    const names = {

        home:"ホーム",

        gacha:"ガチャ",

        collection:"図鑑",

        editor:"編集",

        settings:"設定"

    };

    tabs.forEach((id,index)=>{

        const button =

            createElement(

                "button",

                "tab-button"

            );

        button.dataset.page =

            id;

        button.textContent =

            names[id];

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

    buttons.forEach(button=>{

        button.addEventListener(

            "click",

            ()=>{

                buttons.forEach(

                    b=>b.classList.remove(

                        "active"

                    )

                );

                button.classList.add(

                    "active"

                );

            }

        );

    });

}
