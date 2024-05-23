import { helpService } from "../../services/help.service"

export function HelpIndex () {

    helpService.getAll().then((articles) => {
        console.log(articles);
    });


    return (
        <>
            <h1>Help</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt atque, hic aspernatur laborum optio molestias excepturi sint id tempore minima. Porro tempore repudiandae corporis reprehenderit laudantium sapiente fugit, numquam deserunt.</p>
        </>
    )
}