//======================================
// Original Gacha Maker
// utils/dom.js
//======================================

export function createElement(

    tag,

    className=""

){

    const element =

        document.createElement(

            tag

        );

    if(className){

        element.className =

            className;

    }

    return element;

}
