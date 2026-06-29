//======================================
// Original Gacha Maker
// pages/home.js
//======================================

export function renderHome(){

    return `

<header class="header">

    <h1>

        Original Gacha Maker

    </h1>

</header>

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

<main>

<section
    id="home"
    class="page active">

    <div class="panel hero">

        <h2>

            Original Gacha Maker

        </h2>

        <p>

            オリジナルキャラクターで遊べる
            ガチャメーカー

        </p>

    </div>

    <div class="panel">

        <h3>

            開催中のガチャ

        </h3>

        <div id="homeGachaList">

        </div>

    </div>

</section>

<section
    id="gacha"
    class="page">

</section>

<section
    id="collection"
    class="page">

</section>

<section
    id="editor"
    class="page">

</section>

<section
    id="settings"
    class="page">

</section>

</main>

`;

}
