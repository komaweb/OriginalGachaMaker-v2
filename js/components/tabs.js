//======================================
// Original Gacha Maker
// components/tabs.js
//======================================

export function createTabs(){

    return `

<nav class="tab-bar">

    <button
        class="tab-button active"
        data-page="home">

        ホーム

    </button>

    <button
        class="tab-button"
        data-page="gacha">

        ガチャ

    </button>

    <button
        class="tab-button"
        data-page="collection">

        図鑑

    </button>

    <button
        class="tab-button"
        data-page="editor">

        編集

    </button>

    <button
        class="tab-button"
        data-page="settings">

        設定

    </button>

</nav>

`;

}

export function initTabs(){

    const buttons =

        document.querySelectorAll(

            ".tab-button"

        );

    const pages =

        document.querySelectorAll(

            ".page"

        );

    buttons.forEach(button=>{

        button.addEventListener(

            "click",

            ()=>{

                buttons.forEach(

                    b=>b.classList.remove(

                        "active"

                    )

                );

                pages.forEach(

                    p=>p.classList.remove(

                        "active"

                    )

                );

                button.classList.add(

                    "active"

                );

                document

                    .getElementById(

                        button.dataset.page

                    )

                    .classList.add(

                        "active"

                    );

            }

        );

    });

}
