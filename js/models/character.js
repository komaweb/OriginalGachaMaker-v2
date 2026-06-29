//======================================
// Original Gacha Maker
// models/character.js
//======================================

export function createCharacter(){

    return{

        id:crypto.randomUUID(),

        gachaId:"",

        name:"",

        rarity:1,

        image:null,

        detailImage:null,

        quote:"",

        description:"",

        obtained:false,

        createdAt:Date.now()

    };

}
