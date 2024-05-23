import { Route, Routes } from "react-router-dom";
import { CustomerList } from "./views/CustomerList";
import { CustomerNew } from "./views/CustomerNew";
import { CustomerEdit } from "./views/CustomerEdit";

export function CustomerIndex() {
    return (
        <>
            <h1>Customer Dashboard</h1>
            <Routes>
                <Route path="" element={<CustomerList />}></Route>
                <Route path="new" element={<CustomerNew />}></Route>
                <Route path="edit" element={<CustomerEdit />}></Route>
            </Routes>
        </>
    )
}