//======================================
// Original Gacha Maker
// models/gacha.js
//======================================

export function createGacha(){

    return{

        id:crypto.randomUUID(),

        name:"",

        banner:null,

        createdAt:Date.now()

    };

}
