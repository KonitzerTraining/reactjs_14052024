import { KolButton, KolForm, KolInputNumber, KolInputText } from "@public-ui/react";
import { useState } from "react";
import { Customer } from "../../../model/Customer";

interface Props {
    callback ?: (customer: Omit<Customer, 'id'>) => void,
    data ?: Omit<Customer, 'id'> | Customer
}

export function CustomerForm({formData}: {formData: Props}) {

    const { callback, data } = formData;
    console.log(formData);

    const [customer, setCustomer] = useState(data)

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

    const formSubmitHandler = () => {
        callback(customer);
    }

    return (
        <>
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