import React from "react";
import NavBar from "./components/NavBar";
import { ItemListContainer } from "./components/containers/ItemListContainer";
import { ItemCount } from "./components/ItemCount";

const App = () =>{
  return(
    <>
    <NavBar/>
    <ItemListContainer greetings= "Sólo se pueden comprar 6 unidades"/>
    <ItemCount/>
    </>
  )
}

export default App
