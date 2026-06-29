const DB_NAME =
    "OriginalGachaMaker";

const DB_VERSION = 1;

let db;

export async function initDatabase(){

    return new Promise(

        (resolve,reject)=>{

            const request =

                indexedDB.open(

                    DB_NAME,

                    DB_VERSION

                );

            request.onupgradeneeded = ()=>{

                db = request.result;

                if(

                    !db.objectStoreNames.contains(

                        "gachas"

                    )

                ){

                    db.createObjectStore(

                        "gachas",

                        {

                            keyPath:"id"

                        }

                    );

                }

                if(

                    !db.objectStoreNames.contains(

                        "characters"

                    )

                ){

                    db.createObjectStore(

                        "characters",

                        {

                            keyPath:"id"

                        }

                    );

                }

            };

            request.onsuccess = ()=>{

                db = request.result;

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
