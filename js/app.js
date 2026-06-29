//======================================
// Original Gacha Maker
// app.js
//======================================

import {

    initDatabase

} from "./database/database.js";

import {

    initTabs

} from "./components/tabs.js";

window.addEventListener(

    "DOMContentLoaded",

    async()=>{

        try{

            await initDatabase();

            initTabs();

            console.log(

                "Original Gacha Maker v2"

            );

        }catch(error){

            console.error(error);

            alert(

                "初期化に失敗しました。"

            );

        }

    }

);
