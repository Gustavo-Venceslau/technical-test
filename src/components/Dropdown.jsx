import { useState } from 'react'
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'
import { DropdownItem } from './DropdownItem';

export function Dropdown({id}){

    const [isActive, setIsActive] = useState(false);
    const [dropdownDisplayName, setDropdownDisplayName] = useState('');
    const [enterPressed, setEnterPressed] = useState(false);

    const inputToChangeDisplay = <input 
        type="text" 
        onChange={(e) => setDropdownDisplayName(e.target.value)}
        onKeyDown={event => handleDisplayName(event.key)}
        placeholder='type a dropdown name...'
        className="dropdown-input"
    />

    function handleDisplayName(key){
        if(key === 'Enter'){
           setEnterPressed(true);
        }
    }

    function handleCheckBox(){
        if(enterPressed === true){
            setIsActive(!isActive)
        }
    }

    /* handle dropdown items */

    const [dropdownElementsList, setDropdownElementsList] = 
        useState([<DropdownItem key={0} id={0} handleDeleteDropdownItems={handleDeleteDropdownItems} title={`Option ${0}`}/>,
                  <DropdownItem key={1} id={1} handleDeleteDropdownItems={handleDeleteDropdownItems} title={`Option ${1}`}/>]);

    function handledropdownElementsList(){
        setDropdownElementsList(prevState => 
            [...prevState, 
                <DropdownItem 
                    key={dropdownElementsList.length} 
                    id={dropdownElementsList.length}
                    handleDeleteDropdownItems={handleDeleteDropdownItems} 
                    title={`Option ${dropdownElementsList.length}`}
                />]);
    }

    function handleDeleteDropdownItems(dropdownKey){
        setDropdownElementsList(prevState => prevState.filter(Element => Element.props.id !== dropdownKey));
    }

    return(
        <div className="dropdown">
            <button 
                className="dropdown-btn"
            >
                    <div>
                        <span>
                            {
                                enterPressed === true ? dropdownDisplayName : inputToChangeDisplay
                            }
                            
                        </span> 
                        <button 
                                className='dropdown-add-btn'
                                onClick={() => handledropdownElementsList()}
                            >
                                add
                        </button>
                    </div>
                    <div onClick={() => handleCheckBox()}>
                        {isActive === false ? <AiFillCaretDown /> : <AiFillCaretUp />}
                    </div>
            </button>
            {isActive && (
                <div className="dropdown-content">
                    {dropdownElementsList}
                </div>
            )}
        </div>
    )
}