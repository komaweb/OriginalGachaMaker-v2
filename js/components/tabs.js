//======================================
// Original Gacha Maker
// components/tabs.js
//======================================

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

                    button=>{

                        button.classList.remove(

                            "active"

                        );

                    }

                );

                pages.forEach(

                    page=>{

                        page.classList.remove(

                            "active"

                        );

                    }

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
