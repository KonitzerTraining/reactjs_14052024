import { KolButton, KolForm, KolInputNumber, KolInputText } from "@public-ui/react"
import { FormEvent, useState } from "react";
import { customerService } from "../../../services/customer.service";
import { useNavigate } from "react-router-dom";

export function CustomerNew() {

    const navigate = useNavigate();
    const [customer, setCustomer] = useState({
        name: '',
        credit: 0
    })

    const formSubmitHandler = () => {
        //event.preventDefault();
        customerService.post(customer).then((newCustomer) => {
            console.log(newCustomer);
            navigate('/dashboard')
        });
    }

    const handleInputChange = (e: any) => {
        let value = e.target.value;
        const prop = e.target.id;

        if(prop === 'credit') {
            value = +value;
        }

        const newCustomer = {
          ...customer, // Spread-Operator
          [prop]: value
        }

        setCustomer(newCustomer);
    }

    return (
        <>
            <h2>New Customer</h2>
            <KolForm _requiredText="Sternchen heißt Pflichtfeld." _on={{
                onSubmit: formSubmitHandler
            }}>

                <div className="mb-3">
                    <KolInputText _label="Name" _value={customer.name} _id="name" _on={{
                        onInput: handleInputChange
                    }}></KolInputText>
            </div>
            <div className="mb-3">
                <KolInputNumber _label="Credit" _value={customer.credit} _id="credit" _on={{
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