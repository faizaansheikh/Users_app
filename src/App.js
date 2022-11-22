


import { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Axios from './components/Consts/Axios'
import AddUser from "./components/form/AddUser";
import Form from "./components/form/Form";
import Cards from "./components/users/Cards";

import Users from "./components/users/Users";
export const GlobalInfo = createContext()
function App() {
  const [editForm,setEditForm] = useState('')
  const apiValues = (data)=>{
    setEditForm(data);
  }
  
  return (
    <>
  <GlobalInfo.Provider value={{apiValues:apiValues,editForm:editForm}}>
    <Routes>
      <Route path="/" element={<Users/>}/>
      <Route path="/edit/:id" element={<Form/>}/>
      <Route path="/adduser" element={ <AddUser/>}/>
    </Routes>
  </GlobalInfo.Provider>
    </>
  );
}

export default App;
