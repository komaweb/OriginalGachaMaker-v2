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

        obtained:false

    };

}

export function createGacha(){

    return{

        id:crypto.randomUUID(),

        name:"",

        banner:null

    };

}
