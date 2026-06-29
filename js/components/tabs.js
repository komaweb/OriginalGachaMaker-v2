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

                const page =

                    document.getElementById(

                        button.dataset.page

                    );

                if(page){

                    page.classList.add(

                        "active"

                    );
                }

                document.dispatchEvent(

                    new CustomEvent(

                        "pagechange",

                        {

                            detail:{

                                page:

                                    button.dataset.page

                            }

                        }

                    )

                );

            }

        );

    });

}
