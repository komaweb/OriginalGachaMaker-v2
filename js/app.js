import {

    initDatabase

} from "./db.js";

window.addEventListener(

    "DOMContentLoaded",

    async()=>{

        await initDatabase();

        console.log(

            "Original Gacha Maker v2"

        );

    }

);
