import { KolButton, KolTable, createReactRenderElement } from "@public-ui/react";
import { useCustomers } from "../../../services/customer.service"
import { KoliBriTableDataType } from "@public-ui/components";
import { createRoot } from 'react-dom/client';


export function CustomerList() {

    const customers = useCustomers();
    const headers = {
        horizontal: [
            [
                { label: '#', key: 'id' },
                { label: 'Name', key: 'name' },
                { label: 'Credit', key: 'credit', textAlign: "right"},
                {
                    label: '', key: 'id', 
                    textAlign: 'right',
                   
                    render(el: HTMLElement, cell: any) {
                        createRoot(createReactRenderElement(el))
                            .render(
                                <>
                                
                                    <KolButton 
                                        _label="Delete" 
                                        _variant="danger"
                                        ></KolButton>
                                        <span>&nbsp;</span>
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
            <div className="d-flex justify-content-between">
                <KolButton _label="New"></KolButton>
                <KolButton _label="Refresh"></KolButton>
            </div>

            <KolTable
                _data={customers as unknown as KoliBriTableDataType[]}
                _headers={headers}
                _label="Kundenliste"
            ></KolTable>
        </>
    )
}