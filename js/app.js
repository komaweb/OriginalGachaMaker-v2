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

    renderHome,

    loadHome

} from "./pages/home.js";

import {

    renderGacha,

    loadGacha

} from "./pages/gacha.js";

import {

    renderCollection

} from "./pages/collection.js";

import {

    renderEditor

} from "./pages/editor.js";

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

        home.classList.add(

            "active"

        );

        app.replaceChildren(

            layout

        );

        initTabs();

        await loadHome();

        await loadGacha();

    }

);
