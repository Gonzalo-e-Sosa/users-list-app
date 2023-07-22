import './App.css'
import { useState, useEffect } from 'react'
import { users, header, action } from './types'
import Table from './components/Table';

const Results = 100;
const API_URL = `https://randomuser.me/api?results=${Results}`;

const Headers: header[] = ['Foto', 'Nombre', 'Apellido', 'País', 'Acciones']
const Action: action = 'Delete';

function App() {
  const [users, setUsers] = useState<users>([]);

  useEffect(() => {
    fetch(API_URL)
    .then(async response => await response.json())
    .then(response => {
      setUsers(response.results)
    })
    .catch(err => {
      console.log(err);
    })
  }, []);

  const deleteRow: React.MouseEventHandler<HTMLButtonElement> = (e: React.MouseEvent) => {
    console.log(e)
  };

  return (
    <div className="App">
      <h1>Lista de usuarios</h1>
      <Table 
        headers={Headers} 
        data={users} 
        actionName={Action}
        actionClick={deleteRow}
      />
    </div>
  )
}

export default App
