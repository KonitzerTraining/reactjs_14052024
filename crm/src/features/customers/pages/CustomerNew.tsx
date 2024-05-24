import { customerService } from "../../../services/customer.service";
import { useNavigate } from "react-router-dom";
import { CustomerForm } from "../components/CustomerForm";
import { Customer } from "../../../model/Customer";

export function CustomerNew() {

    const navigate = useNavigate();

    const createCustomer = (customer: Omit<Customer, 'id'>) => {
        console.log('test');
        //event.preventDefault();
        customerService.post(customer).then((newCustomer) => {
            console.log(newCustomer);
            navigate('/dashboard')
        });
    }

    return (
        <>
          <CustomerForm formData={{ 
            data: {
                credit: 0,
                name: ''
            },
            callback: createCustomer
          }}></CustomerForm>

        </>
    )
}