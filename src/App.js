import React from "react";
import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/containers/ItemListContainer";

const App = () => {
  const name = "Fernando";

  return (
    <div style={estilo}>
      <NavBar nombre={name} />
      <ItemListContainer greetings={"Licorería"} />
    </div>
  );
};
export default App;

const estilo = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
};
