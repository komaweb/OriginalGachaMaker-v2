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

    renderHome

} from "./pages/home.js";

window.addEventListener(

    "DOMContentLoaded",

    async()=>{

        await initDatabase();

        const app =

            document.getElementById(

                "app"

            );

        app.replaceChildren(

            createLayout(

                renderHome()

            )

        );

    }

);
