import { Dropdown } from './components/Dropdown';
import { useState } from 'react';
import './style.css'

function App() {

  const [elementsList, setElementsList] = useState([]);

  function handleElementsList(){

    const element = <Dropdown key={elementsList.length} title="dsds"/>;

    setElementsList(prevState => [...prevState, element])
  }

  return (
    <div className="container">
        <div className="checklist">
          <h1 className="checklist-title">CheckList</h1>
          <button 
            className='checklist-btn'
            onClick={() => handleElementsList()}
          >
            
            Add Dropdown
          </button>
          {elementsList}
        </div>
    </div>
  );
}

export default App;
