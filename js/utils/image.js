
//======================================
// Original Gacha Maker
// utils/image.js
//======================================

export function fileToBlob(

    file

){

    return new Promise(

        resolve=>{

            const reader =

                new FileReader();

            reader.onload = ()=>{

                resolve(

                    new Blob(

                        [

                            reader.result

                        ],

                        {

                            type:file.type

                        }

                    )

                );

            };

            reader.readAsArrayBuffer(

                file

            );

        }

    );

}

export function blobToURL(

    blob

){

    if(

        !blob

    ){

        return "";

    }

    return URL.createObjectURL(

        blob

    );

}

export function revokeURL(

    url

){

    if(

        url

    ){

        URL.revokeObjectURL(

            url

        );

    }

}
