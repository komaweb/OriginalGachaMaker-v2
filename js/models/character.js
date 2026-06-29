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

    iconImage:null,

    standImage:null,

    quote:"",

    description:"",

    obtained:false,

    createdAt:Date.now()

};

}
