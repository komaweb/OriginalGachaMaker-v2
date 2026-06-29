import {
    initDatabase,
    addGacha,
    getGachas
} from "./db.js";

let selectedBanner = null;

window.addEventListener(

    "DOMContentLoaded",

    async()=>{

        await initDatabase();

        initTabs();

        initEditor();

        renderHome();

        renderSeriesList();

    }

);

//==============================
// タブ
//==============================

function initTabs(){

    const buttons =
        document.querySelectorAll(".tab-button");

    const pages =
        document.querySelectorAll(".page");

    buttons.forEach(button=>{

        button.addEventListener("click",()=>{

            buttons.forEach(

                b=>b.classList.remove("active")

            );

            pages.forEach(

                p=>p.classList.remove("active")

            );

            button.classList.add("active");

            document

                .getElementById(

                    button.dataset.page

                )

                .classList.add("active");

        });

    });

}

//==============================
// 編集画面
//==============================

function initEditor(){

    const saveButton =
        document.getElementById("saveSeries");

    const nameInput =
        document.getElementById("seriesName");

    const bannerInput =
        document.getElementById("seriesBanner");

    const preview =
        document.getElementById("seriesPreview");

    bannerInput.addEventListener(

        "change",

        ()=>{

            const file =
                bannerInput.files[0];

            if(!file){

                return;

            }

            const reader =
                new FileReader();

            reader.onload = ()=>{

                selectedBanner =
                    reader.result;

                preview.src =
                    selectedBanner;

                preview.style.display =
                    "block";

            };

            reader.readAsDataURL(file);

        }

    );

    saveButton.addEventListener(

        "click",

        async()=>{

            const name =
                nameInput.value.trim();

            if(name===""){

                alert("シリーズ名を入力してください");

                return;

            }

            await addGacha({

                id:crypto.randomUUID(),

                name,

                banner:selectedBanner

            });

            nameInput.value="";

            bannerInput.value="";

            preview.src="";

            preview.style.display="none";

            selectedBanner=null;

            renderSeriesList();

            renderHome();

        }

    );

}

//==============================
// ホーム
//==============================

async function renderHome(){

    const list =
        document.getElementById("homeGachaList");

    list.innerHTML="";

    const gachas =
        await getGachas();

    gachas.forEach(gacha=>{

        const card =
            document.createElement("div");

        card.className="home-banner";

        card.textContent =
            gacha.name;

        list.appendChild(card);

    });

}

//==============================
// 編集一覧
//==============================

async function renderSeriesList(){

    const list =
        document.getElementById("seriesList");

    list.innerHTML="";

    const gachas =
        await getGachas();

    gachas.forEach(gacha=>{

        const card =
            document.createElement("div");

        card.className="series-card";

        card.textContent=
            gacha.name;

        list.appendChild(card);

    });

}
