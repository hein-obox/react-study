import React, { useState } from 'react';

interface Props {
    listItem: string;
    index: number;
    onDeleteClickHandler: (index: number) => void;
    onUpdateClickHandler: (itemValue: string, itemArrayIndex: number) => void;
}

const ToDoItem: React.FC<Props> = ( { listItem, index, onDeleteClickHandler, onUpdateClickHandler } ) => {
    const [ currTextValue, setCurrTextValue ] = useState( listItem );
    return (
        <li className="list-group-item">
            <input
                value={ currTextValue }
                className="list-group-edit-field"
                onChange={ ( event ) => setCurrTextValue( event.target.value ) }
            />

            <button
                className="list-group-edit-button"
                data-index={ index }
                onClick={ () => onUpdateClickHandler( currTextValue, index ) }
            >Update</button>

            <button
                className="list-group-delete-button"
                id={ listItem }
                onClick={ () => onDeleteClickHandler( index ) }
            >Delete</button>
        </li>
    );
};

export default ToDoItem;
