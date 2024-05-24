import { KolButton, KolTable, createReactRenderElement } from "@public-ui/react";
import { useCustomers } from "../../../services/customer.service"
import { KoliBriTableDataType } from "@public-ui/components";
import { createRoot, Root } from 'react-dom/client';
/* 
const REACT18_ROOTS = new WeakMap<Element | DocumentFragment, Root>();
export const getRoot = (el: Element | DocumentFragment): Root => {
    if (REACT18_ROOTS.has(el) === false) {
        REACT18_ROOTS.set(el, createRoot(el));
    }
    return REACT18_ROOTS.get(el) as Root;
}; */


export function CustomerList() {

    const customers = useCustomers();
    const headers = {
        horizontal: [
            [
                { label: '#', key: 'id' },
                { label: 'Name', key: 'name' },
                { label: 'Credit', key: 'credit' },
                {
                    label: '', key: 'id',
                    render(el: HTMLElement, cell: any) {
                        createRoot(createReactRenderElement(el))
                            .render(
                                <>
                                    <KolButton _label="Edit" ></KolButton >
                                </>
                            )
                    }
                }
            ]
        ],
    };

    return (
        <>
            <h2>Customer List</h2>
            {/* {JSON.stringify(customers)} */}

            <KolTable
                _data={customers as unknown as KoliBriTableDataType[]}
                _headers={headers}
                _label="Kundenliste"
            ></KolTable>
        </>
    )
}