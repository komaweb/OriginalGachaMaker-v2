//======================================
// Original Gacha Maker
// pages/editor.js
//======================================
import {

    createCharacter

} from "../models/character.js";

import {

    getCharacters,

    addCharacter,

    deleteCharacter

} from "../database/characterRepository.js";

import {

    createElement

} from "../utils/dom.js";

import {

    createGacha

} from "../models/gacha.js";

import {

    addGacha,

    getGachas,

    deleteGacha

} from "../database/gachaRepository.js";

import {

    loadHome

} from "./home.js";

export function renderEditor(){

    const page =

        createElement(

            "section",

            "page"

        );

    page.id =

        "editor";

    page.innerHTML = `

<div class="panel">

<h2>

ガチャシリーズ

</h2>

<input
id="seriesName"
class="text-input"
placeholder="シリーズ名">

<br><br>

<button
id="saveSeries"
class="primary-button">

シリーズを保存

</button>

<hr>

<div
id="seriesList">

</div>

</div>

<div class="panel">

<h2>

キャラクター登録

</h2>

<select
id="characterSeries"
class="text-input">

</select>

<br><br>

<input
id="characterName"
class="text-input"
placeholder="キャラクター名">

<br><br>

<label>

アイコン画像

</label>

<input
id="characterIcon"
type="file"
accept="image/*">

<br><br>

<label>

立ち絵画像

</label>

<input
id="characterStand"
type="file"
accept="image/*">

<br><br>

<select
id="characterRarity"
class="text-input">

<option value="1">

☆1

</option>

<option value="2">

☆2

</option>

<option value="3">

☆3

</option>

<option value="4">

☆4

</option>

<option value="5">

☆5

</option>

</select>

<br><br>

<button
id="saveCharacter"
class="primary-button">

キャラクターを保存

</button>

</div>

<div class="panel">

<h2>

登録済みキャラクター

</h2>

<div
id="characterList">

</div>

</div>

`;
    
    initEditor();

    return page;

}

function initEditor(){

    setTimeout(()=>{

        const button =

            document.getElementById(

                "saveSeries"

            );

        if(!button){

            return;

        }

        button.onclick =

            saveSeries;

        loadSeries();

        loadCharacterSeries();

        loadCharacterList();

        const saveCharacterButton =

            document.getElementById(

                "saveCharacter"

            );

        if(saveCharacterButton){

            saveCharacterButton.onclick =

                saveCharacter;

        }

    });

}


async function saveSeries(){

    const input =

        document.getElementById(

            "seriesName"

        );

    const name =

        input.value.trim();

    if(name===""){

        alert(

            "シリーズ名を入力してください"

        );

        return;

    }

    const gacha =

        createGacha();

    gacha.name =

        name;

    await addGacha(

        gacha

    );

    input.value="";

await loadSeries();

await loadCharacterSeries();

await loadHome();

}

async function loadSeries(){

    const list =

        document.getElementById(

            "seriesList"

        );

    if(!list){

        return;

    }

    list.innerHTML="";

    const gachas =

        await getGachas();

    gachas.forEach(gacha=>{

        const card =

    createElement(

        "div",

        "character-card"

    );

card.innerHTML = `

<b>

${gacha.name}

</b>

`;
        const deleteButton =

    document.createElement(

        "button"

    );

deleteButton.textContent =

    "削除";

deleteButton.onclick =

    async()=>{

        if(

            !confirm(

                "シリーズを削除しますか？"

            )

        ){

            return;

        }

        await deleteGacha(

            gacha.id

        );

        await loadSeries();

        await loadCharacterSeries();

        await loadHome();

    };

card.appendChild(

    deleteButton

);

        list.appendChild(

            card

        );

    });

}


async function loadCharacterSeries(){

    const select =

        document.getElementById(

            "characterSeries"

        );

    if(!select){

        return;

    }

    select.innerHTML = "";

    const gachas =

        await getGachas();

    gachas.forEach(gacha=>{

        const option =

            document.createElement(

                "option"

            );

        option.value =

            gacha.id;

        option.textContent =

            gacha.name;

        select.appendChild(

            option

        );

    });

}


async function saveCharacter(){

    const series =

        document.getElementById(

            "characterSeries"

        );

    const name =

        document.getElementById(

            "characterName"

        );

    const rarity =

        document.getElementById(

            "characterRarity"

        );

    if(

        name.value.trim()===""

    ){

        alert(

            "キャラクター名を入力してください"

        );

        return;

    }

    const character =

        createCharacter();
const iconFile =

    document.getElementById(

        "characterIcon"

    ).files[0];

const standFile =

    document.getElementById(

        "characterStand"

    ).files[0];

if(iconFile){

    character.iconImage =

        await fileToDataURL(

            iconFile

        );

}

if(standFile){

    character.standImage =

        await fileToDataURL(

            standFile

        );

}
    

    character.gachaId =

        series.value;

    character.name =

        name.value.trim();

    character.rarity =

        Number(

            rarity.value

        );

    await addCharacter(

        character

    );

    name.value = "";

    rarity.value = "1";

    await loadCharacterList();

    await loadHome();

}
async function loadCharacterList(){

    const list =

        document.getElementById(

            "characterList"

        );

    if(!list){

        return;

    }

    list.innerHTML = "";

    const characters =

        await getCharacters();

    const gachas =

        await getGachas();

    characters.forEach(character=>{

        const gacha =

            gachas.find(

                g=>g.id===character.gachaId

            );

        const card =

            createElement(

                "div",

                "panel"

            );

       card.innerHTML = `

<div
style="display:flex;align-items:center;gap:12px;">

<img

src="${
    character.iconImage ??

    "https://placehold.co/64x64?text=?"
}"

style="

width:64px;
height:64px;
object-fit:cover;
border-radius:12px;

">

<div>

<b>

${character.name}

</b>

<br>

${gacha?.name ?? "不明"}

<br>

☆${character.rarity}

</div>

</div>

`;

        const buttonArea =

    document.createElement(

        "div"

    );

buttonArea.className =

    "character-buttons";

const editButton =

    document.createElement(

        "button"

    );

editButton.textContent =

    "編集";

editButton.onclick = ()=>{

    alert(

        "編集機能は次回実装"

    );

};

        const deleteButton =

            document.createElement(

                "button"

            );

        deleteButton.textContent =

            "削除";

        deleteButton.onclick =

            async()=>{

                if(

                    !confirm(

                        "このキャラクターを削除しますか？"

                    )

                ){

                    return;

                }

                await deleteCharacter(

                    character.id

                );

                await loadCharacterList();

                await loadHome();

            };
buttonArea.appendChild(

    editButton

);

buttonArea.appendChild(

    deleteButton

);

card.appendChild(

    buttonArea

);

        list.appendChild(

            card

        );

    });

}

function fileToDataURL(

    file

){

    return new Promise(

        resolve=>{

            const reader =

                new FileReader();

            reader.onload = ()=>{

                resolve(

                    reader.result

                );

            };

            reader.readAsDataURL(

                file

            );

        }

    );

}
