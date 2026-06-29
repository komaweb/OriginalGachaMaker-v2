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

import {

    renderGacha

} from "./pages/gacha.js";

import {

    renderCollection

} from "./pages/collection.js";

import {

    renderSettings

} from "./pages/settings.js";

window.addEventListener(

    "DOMContentLoaded",

    async()=>{

        await initDatabase();

        const app =

            document.getElementById(

                "app"

            );

        const home =

renderHome();

        const gacha =

            renderGacha();

        const collection =

            renderCollection();

        const editor =

            renderEditor();

        const settings =

            renderSettings();

        const layout =

            createLayout(

                home

            );

        const pages =

            layout.querySelector(

                "#pages"

            );

        pages.append(

            gacha,

            collection,

            editor,

            settings

        );

        app.replaceChildren(

            layout

        );

        initTabs();
await loadHome();
    }

);
