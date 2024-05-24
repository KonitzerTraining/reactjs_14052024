import { useNavigate, useParams } from "react-router-dom"
import { customerService, useCustomer } from "../../../services/customer.service";
import { CustomerForm } from "../components/CustomerForm";
import { Customer } from "../../../model/Customer";

export function CustomerEdit() {

    const { id } = useParams<{id: string}>();
    const { customer } = useCustomer(id as string);
    const navigate = useNavigate();

    const updateCustomer = (customer: Omit<Customer, 'id'>) => {
        console.log(customer);
        const customerForUpdate: Customer = {
            ...customer,
            id: (id !== void 0) ? +id : null
        }
        //event.preventDefault();
        customerService.put(customerForUpdate).then((newCustomer) => {
            console.log(newCustomer);
            navigate('/dashboard')
        });
    }

    
   
    return (
        <>
            <h2>Edit Customer with ID {id}</h2>
            {
                (() => {
                    console.log(customer);
                    if (customer.id !== null) {

                        return (
                            <CustomerForm formData={{
                                data: customer,
                                callback: updateCustomer
                            }}></CustomerForm>
                        )

                    } else {
                        return <strong>loading</strong>
                    }
                })()
            }
        
        </>
    )
}