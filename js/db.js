const DB_NAME = "OriginalGachaMaker";
const DB_VERSION = 1;

let db;

export function initDatabase(){

    return new Promise((resolve,reject)=>{

        const request = indexedDB.open(
            DB_NAME,
            DB_VERSION
        );

        request.onupgradeneeded = ()=>{

            db = request.result;

            if(!db.objectStoreNames.contains("gachas")){

                db.createObjectStore(
                    "gachas",
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

            reject(request.error);

        };

    });

}

export function addGacha(gacha){

    return new Promise((resolve,reject)=>{

        const tx =
            db.transaction(
                "gachas",
                "readwrite"
            );

        const store =
            tx.objectStore("gachas");

        const request =
            store.add(gacha);

        request.onsuccess =
            ()=>resolve();

        request.onerror =
            ()=>reject(request.error);

    });

}

export function getGachas(){

    return new Promise((resolve,reject)=>{

        const tx =
            db.transaction("gachas");

        const store =
            tx.objectStore("gachas");

        const request =
            store.getAll();

        request.onsuccess =
            ()=>resolve(request.result);

        request.onerror =
            ()=>reject(request.error);

    });

}
