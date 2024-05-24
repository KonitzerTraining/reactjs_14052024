import { useParams } from "react-router-dom"

export function CustomerEdit() {

    const { id } = useParams();

    
    return (
        <>
            <h2>Edit Customer with ID {id}</h2>
        </>
    )
}