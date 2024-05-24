import { Route, Routes } from "react-router-dom";
import { CustomerList } from "./pages/CustomerList";
import { CustomerNew } from "./pages/CustomerNew";
import { CustomerEdit } from "./pages/CustomerEdit";

export function CustomersIndex () {
    return (
        <>
            <h1>Dashboard</h1>
            <Routes>
            <Route path='' element={<CustomerList></CustomerList>}></Route>
            <Route path='new' element={<CustomerNew></CustomerNew>}></Route>
            <Route path='edit' element={<CustomerEdit></CustomerEdit>}></Route>
            </Routes>
        </>
    )
}