import {

    createElement

} from "../utils/dom.js";

export function renderGacha(){

    const page =

        createElement(

            "section",

            "page"

        );

    page.id =

        "gacha";

    page.innerHTML = `

        <div class="panel">

            <h2>

                ガチャ

            </h2>

        </div>

    `;

    return page;

}
