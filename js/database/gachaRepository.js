//======================================
// Original Gacha Maker
// database/gachaRepository.js
//======================================

import {

    STORES,

    getStore

} from "./database.js";

//==============================
// 全取得
//==============================

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

//==============================
// 追加
//==============================

export async function addGacha(gacha){

    return new Promise(

        (resolve,reject)=>{

            const request =

                getStore(

                    STORES.gachas,

                    "readwrite"

                ).add(gacha);

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

export async function updateGacha(gacha){

    return new Promise(

        (resolve,reject)=>{

            const request =

                getStore(

                    STORES.gachas,

                    "readwrite"

                ).put(gacha);

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

export async function deleteGacha(id){

    return new Promise(

        (resolve,reject)=>{

            const request =

                getStore(

                    STORES.gachas,

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


const CURRENT_GACHA_KEY =

    "ogm_current_gacha";

export function getCurrentGacha(){

    return localStorage.getItem(

        CURRENT_GACHA_KEY

    );

}

export function setCurrentGacha(

    id

){

    localStorage.setItem(

        CURRENT_GACHA_KEY,

        id

    );

}
