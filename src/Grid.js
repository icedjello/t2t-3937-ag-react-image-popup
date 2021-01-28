import React, {useState} from 'react';

import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import {PopupRenderer} from "./Popup";
import {TooltipRenderer} from "./Tooltip"

export const Grid = () => {
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);

    const [rowData, setRowData] = useState([
        {food: "Pizza", flavour: "Margherita", picture: null},
    ]);

    const gridOptions = {
        rowData: rowData,
        frameworkComponents: {
            'popupRenderer': PopupRenderer,
            'tooltipRenderer': TooltipRenderer
        }
    };

    const gridStyles = {
        height: 400, width: 800
    }

    return (
        <div
            className="ag-theme-alpine"
            style={gridStyles}
        >
            <AgGridReact
                gridOptions={gridOptions}
                getRowHeight={() => 50}
            >
                <AgGridColumn field="food"/>
                <AgGridColumn field="flavour"/>
                <AgGridColumn
                    field="picture"
                    headerName="Popup Renderer"
                    cellRenderer="popupRenderer"
                />
                <AgGridColumn
                    field="picture"
                    headerName="Tooltip Renderer"
                    cellRenderer="tooltipRenderer"
                />
            </AgGridReact>
        </div>
    );
};

