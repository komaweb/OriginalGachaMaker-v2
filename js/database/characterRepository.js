//======================================
// Original Gacha Maker
// database/characterRepository.js
//======================================

import {

    STORES,

    getStore

} from "./database.js";

//==============================
// 全取得
//==============================

export async function getCharacters(){

    return new Promise(

        (resolve,reject)=>{

            const request =

                getStore(

                    STORES.characters,

                    "readonly"

                ).getAll();

            request.onsuccess = ()=>{

                resolve(

                    request.result

                );

            };

            request.onerror = ()=>{

                reject(

                    request.error

                );

            };

        }

    );

}

//==============================
// ガチャごとの取得
//==============================

export async function getCharactersByGacha(

    gachaId

){

    const characters =

        await getCharacters();

    return characters.filter(

        character=>

            character.gachaId===gachaId

    );

}

//==============================
// 追加
//==============================

export async function addCharacter(

    character

){

    return new Promise(

        (resolve,reject)=>{

            const request =

                getStore(

                    STORES.characters,

                    "readwrite"

                ).add(character);

            request.onsuccess = ()=>{

                resolve();

            };

            request.onerror = ()=>{

                reject(

                    request.error

                );

            };

        }

    );

}

//==============================
// 更新
//==============================

export async function updateCharacter(

    character

){

    return new Promise(

        (resolve,reject)=>{

            const request =

                getStore(

                    STORES.characters,

                    "readwrite"

                ).put(character);

            request.onsuccess = ()=>{

                resolve();

            };

            request.onerror = ()=>{

                reject(

                    request.error

                );

            };

        }

    );

}

//==============================
// 削除
//==============================

export async function deleteCharacter(

    id

){

    return new Promise(

        (resolve,reject)=>{

            const request =

                getStore(

                    STORES.characters,

                    "readwrite"

                ).delete(id);

            request.onsuccess = ()=>{

                resolve();

            };

            request.onerror = ()=>{

                reject(

                    request.error

                );

            };

        }

    );

}
