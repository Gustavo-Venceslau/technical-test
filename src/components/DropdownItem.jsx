import { useState } from "react";

export function DropdownItem(props){

    const [editStatus, setEditStatus] = useState(false);
    const [elementName, setElementName] = useState(props.title);

    const inputToChangeElementName = <input 
        type="text" 
        onChange={(e) => setElementName(e.target.value)}
        onKeyDown={event => handleElementNameChange(event.key)}
        placeholder='type a dropdown name...'
        className="dropdown-input"
    />

    function handleEditStatus(){
        setEditStatus(true);
    }

    function handleElementNameChange(key){
        if(key === 'Enter'){
            setEditStatus(false);
        }
    }

    return(
        <div className='dropdown-item'>
            <div>
                <input type="checkbox" className="checkbox"/>
                {editStatus === false ? elementName : inputToChangeElementName}
            </div>
            <div>
                <button 
                    className="dropdown-item-btn"
                    onClick={() => {}}
                >
                    Delete
                </button>
                <button 
                    className="dropdown-item-btn left"
                    onClick={() => handleEditStatus()}
                >
                    edit
                </button>
            </div>
        </div>
    )
}