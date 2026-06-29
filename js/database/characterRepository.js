//======================================
// Original Gacha Maker
// database/characterRepository.js
//======================================

import {

    STORES,

    getStore

} from "./database.js";

export async function getCharacters(){

    return new Promise(

        (resolve,reject)=>{

            const request =

                getStore()

                .transaction(

                    STORES.characters,

                    "readonly"

                )

                .objectStore(

                    STORES.characters

                )

                .getAll();

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

export async function addCharacter(character){

    return new Promise(

        (resolve,reject)=>{

            const request =

                getStore()

                .transaction(

                    STORES.characters,

                    "readwrite"

                )

                .objectStore(

                    STORES.characters

                )

                .add(character);

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

export async function updateCharacter(character){

    return new Promise(

        (resolve,reject)=>{

            const request =

                getStore()

                .transaction(

                    STORES.characters,

                    "readwrite"

                )

                .objectStore(

                    STORES.characters

                )

                .put(character);

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

export async function deleteCharacter(id){

    return new Promise(

        (resolve,reject)=>{

            const request =

                getStore()

                .transaction(

                    STORES.characters,

                    "readwrite"

                )

                .objectStore(

                    STORES.characters

                )

                .delete(id);

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
