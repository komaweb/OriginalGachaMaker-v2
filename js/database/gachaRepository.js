//======================================
// Original Gacha Maker
// database/gachaRepository.js
//======================================

import {

    STORES,

    getStore

} from "./database.js";

export async function getGachas(){

    return new Promise(

        (resolve,reject)=>{

            const request =
    getStore(
        STORES.gachas,
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

export async function addGacha(gacha){

    return new Promise(

        (resolve,reject)=>{

            const request =

                getStore()

                .transaction(

                    STORES.gachas,

                    "readwrite"

                )

                .objectStore(

                    STORES.gachas

                )

                .add(gacha);

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

export async function updateGacha(gacha){

    return new Promise(

        (resolve,reject)=>{

            const request =

                getStore()

                .transaction(

                    STORES.gachas,

                    "readwrite"

                )

                .objectStore(

                    STORES.gachas

                )

                .put(gacha);

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

export async function deleteGacha(id){

    return new Promise(

        (resolve,reject)=>{

            const request =

                getStore()

                .transaction(

                    STORES.gachas,

                    "readwrite"

                )

                .objectStore(

                    STORES.gachas

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
