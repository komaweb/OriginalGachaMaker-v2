//======================================
// Original Gacha Maker
// app.js
//======================================

import {

    initDatabase

} from "./database/database.js";

import {

    createLayout

} from "./components/layout.js";

import {

    initTabs

} from "./components/tabs.js";

import {

    renderHome

} from "./pages/home.js";

import {

    renderEditor

} from "./pages/editor.js";

window.addEventListener(

    "DOMContentLoaded",

    async()=>{

        await initDatabase();

        const app =

            document.getElementById(

                "app"

            );

        const pages = {

            home:

                await renderHome(),

            gacha:

                document.createElement(

                    "main"

                ),

            collection:

                document.createElement(

                    "main"

                ),

            editor:

                renderEditor(),

            settings:

                document.createElement(

                    "main"

                )

        };

        pages.gacha.className =

            "page";

        pages.collection.className =

            "page";

        pages.settings.className =

            "page";

        pages.gacha.id =

            "gacha";

        pages.collection.id =

            "collection";

        pages.settings.id =

            "settings";

        pages.gacha.innerHTML =

            `<div class="panel"><h2>ガチャ</h2></div>`;

        pages.collection.innerHTML =

            `<div class="panel"><h2>図鑑</h2></div>`;

        pages.settings.innerHTML =

            `<div class="panel"><h2>設定</h2></div>`;

        const layout =

            createLayout(

                pages.home

            );

        layout.querySelector(

            "main"

        ).append(

            pages.gacha,

            pages.collection,

            pages.editor,

            pages.settings

        );

        app.replaceChildren(

            layout

        );

        initTabs();

    }

);
