import { KolButton, KolTable, createReactRenderElement } from "@public-ui/react";
import { useCustomers } from "../../../services/customer.service"
import { KoliBriTableDataType } from "@public-ui/components";
import { createRoot } from 'react-dom/client';
import { useNavigate } from "react-router-dom";


export function CustomerList() {
    const navigate = useNavigate();
    const customers = useCustomers();
    const headers = {
        horizontal: [
            [
                { label: '#', key: 'id' },
                { label: 'Name', key: 'name' },
                { label: 'Credit', key: 'credit', textAlign: "right" },
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
                                        _on={{
                                            onClick: deleteButtonHandler
                                        }}
                                    ></KolButton>
                                    <span>&nbsp;</span>
                                    <KolButton
                                        _label="Edit"
                                        _on={{ onClick: editButtonHandler }}></KolButton >
                                </>
                            )
                    }
                }
            ]
        ],
    };

    const newButtonHandler = () => {
        console.log('handler')
        navigate('/dashboard/new');
    }

    const editButtonHandler = () => {
        console.log('edit')
    }

    const deleteButtonHandler = () => {
        console.log('delete')
    }

    const refreshButtonHandler = () => {
        console.log('delete')
    }

    return (
        <>
            <h2>Customer List</h2>
            {/* {JSON.stringify(customers)} */}
            <div className="d-flex justify-content-between my-4">
                <KolButton _label="New" _on={{
                    onClick: newButtonHandler
                }}></KolButton>
                <KolButton 
                _label="Refresh"
                _on={{
                    onClick: refreshButtonHandler
                }}
                ></KolButton>
            </div>

            <KolTable
                _data={customers as unknown as KoliBriTableDataType[]}
                _headers={headers}
                _label="Kundenliste"
            ></KolTable>
        </>
    )
}