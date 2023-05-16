import { Dropdown } from './components/Dropdown';
import { useState } from 'react';
import './style.css'

function App() {

  const [elementsList, setElementsList] = useState([]);

  function handleElementsList(){

    const element = <Dropdown key={elementsList.length} id={elementsList.length}/>;

      setElementsList(prevState => [...prevState, element])
  }

  function handleDeleteDropdown(){
    setElementsList(prevState => prevState.filter(element => element.props.id !== elementsList.length - 1))
  }

  return (
    <div className="container">
        <div className="checklist">
          <h1 className="checklist-title">CheckList</h1>
          <div style={{display: 'flex'}}>
            <button
              className='checklist-btn'
              onClick={() => handleElementsList()}
            >
              
              Add Dropdown
            </button>
            <button 
              className='checklist-btn'
              onClick={() => handleDeleteDropdown()}
            >
              
              Delete Dropdown
            </button>
          </div>
          {elementsList}
        </div>
    </div>
  );
}

export default App;
