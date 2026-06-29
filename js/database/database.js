//======================================
// Original Gacha Maker
// database/database.js
//======================================

const DB_NAME =
    "OriginalGachaMaker";

const DB_VERSION =
    1;

const STORES = {

    gachas:"gachas",

    characters:"characters"

};

let database = null;

export async function initDatabase(){

    if(database){

        return database;

    }

    return new Promise(

        (resolve,reject)=>{

            const request =

                indexedDB.open(

                    DB_NAME,

                    DB_VERSION

                );

            request.onupgradeneeded = ()=>{

                const db =
                    request.result;

                Object.values(

                    STORES

                ).forEach(

                    store=>{

                        if(

                            !db.objectStoreNames.contains(

                                store

                            )

                        ){

                            db.createObjectStore(

                                store,

                                {

                                    keyPath:"id"

                                }

                            );

                        }

                    }

                );

            };

            request.onsuccess = ()=>{

                database =
                    request.result;

                resolve(

                    database

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

export function getDatabase(){

    return database;

}

export function getStore(

    storeName,

    mode="readonly"

){

    return database

        .transaction(

            storeName,

            mode

        )

        .objectStore(

            storeName

        );

}

export {

    STORES

};
