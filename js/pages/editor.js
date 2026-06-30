//======================================
// Original Gacha Maker
// pages/editor.js
//======================================
import {

    fileToBlob

} from "../utils/image.js";
import {

    createCharacter

} from "../models/character.js";

import {

    getCharacters,

    addCharacter,

    deleteCharacter,

    deleteCharactersByGacha

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

    updateGacha,

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

<label>

バナー画像

</label>

<input
id="seriesBanner"
type="file"
accept="image/*">

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

<br><br>

<label>

セリフ

</label>

<input
id="characterQuote"
class="text-input"
placeholder="よろしくね！">

<br><br>

<label>

説明

</label>

<textarea
id="characterDescription"
class="text-input"
rows="4"
placeholder="キャラクターの説明"></textarea>

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

const banner =

    document.getElementById(

        "seriesBanner"

    ).files[0];

if(

    banner

){

    gacha.banner =

        await fileToBlob(

            banner

        );

}

    await addGacha(

        gacha

    );

    input.value="";

document.getElementById(

    "seriesBanner"

).value="";
    

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

    list.innerHTML = "";

    const gachas =

        await getGachas();

    const characters =

        await getCharacters();

    gachas.forEach(gacha=>{

        const card =

            createElement(

                "div",

                "character-card"

            );

        const count =

            characters.filter(

                character=>

                    character.gachaId===gacha.id

            ).length;

        card.innerHTML = `

<div style="flex:1;">

<b>

${gacha.name}

</b>

<br>

キャラクター ${count}種類

</div>

`;

        const renameButton =

            document.createElement(

                "button"

            );

        renameButton.textContent =

            "名前変更";

        renameButton.onclick =

            async()=>{

                const name =

                    prompt(

                        "新しいシリーズ名",

                        gacha.name

                    );

                if(

                    !name ||

                    name.trim()===""

                ){

                    return;

                }

                gacha.name =

                    name.trim();

await updateGacha(

    gacha

);

                await loadSeries();

                await loadCharacterSeries();

                await loadHome();

            };

        const deleteButton =

            document.createElement(

                "button"

            );

        deleteButton.textContent =

            "削除";

        deleteButton.onclick =

            async()=>{

                const ok =

                    confirm(

`「${gacha.name}」を削除しますか？

このシリーズに登録されている
キャラクター ${count}体も
一緒に削除されます。`

                    );

                if(!ok){

                    return;

                }

                await deleteCharactersByGacha(

                    gacha.id

                );

                await deleteGacha(

                    gacha.id

                );

                await loadSeries();

                await loadCharacterSeries();

                await loadCharacterList();

                await loadHome();

            };

        card.appendChild(

            renameButton

        );

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

        await fileToBlob(

            iconFile

        );

}

if(standFile){

    character.standImage =

        await fileToBlob(

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

    character.quote =

    document.getElementById(

        "characterQuote"

    ).value.trim();

character.description =

    document.getElementById(

        "characterDescription"

    ).value.trim();

    await addCharacter(

        character

    );
    document.getElementById(
    "characterName"
).value="";

document.getElementById(
    "characterQuote"
).value="";

document.getElementById(
    "characterDescription"
).value="";

document.getElementById(
    "characterIcon"
).value="";

document.getElementById(
    "characterStand"
).value="";


name.value="";

rarity.value="1";

document.getElementById(

    "characterQuote"

).value="";

document.getElementById(

    "characterDescription"

).value="";
    document.getElementById(
    "characterIcon"
).value="";

document.getElementById(
    "characterStand"
).value="";

await loadCharacterList();

await loadSeries();

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

        const iconUrl =

    character.iconImage

    ?

    URL.createObjectURL(

        character.iconImage

    )

    :

    "https://placehold.co/64x64?text=?";

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

src="${iconUrl}"

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

await loadSeries();

await loadHome();

            };


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
