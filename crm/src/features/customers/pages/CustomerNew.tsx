import { KolButton, KolForm, KolInputNumber, KolInputText } from "@public-ui/react"
import { FormEvent, useState } from "react";

export function CustomerNew() {

    const [customer, setCustomer] = useState({
        name: '',
        credit: 0
    })

    const formSubmitHandler = (event: FormEvent) => {
        //event.preventDefault();
        console.log(event);
    }

    const handleInputChange = (e) => {
        console.log(e.target.value);
    }

    return (
        <>


            <h2>New Customer</h2>
            <KolForm _requiredText="Sternchen heißt Pflichtfeld." _on={{
                onSubmit: formSubmitHandler
            }}>

                <div className="mb-3">
                    <KolInputText _label="Name" _value="test" _on={{
                        onInput: handleInputChange
                    }}></KolInputText>
            </div>
            <div className="mb-3">
                <KolInputNumber _label="Credit" _value={0} _on={{
                        onInput: handleInputChange
                    }}></KolInputNumber>
            </div>
            <div className="mb-3">
                <KolButton _label="Submit" _type="submit"></KolButton>
            </div>
        </KolForm >

        </>
    )
}