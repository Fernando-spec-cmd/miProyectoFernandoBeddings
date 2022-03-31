import React from "react";
import estilo from "./EstiloNavBar";
import { CartWidget } from "./cartwidget/CartWidget";

export const NavBar = ({nombre}) =>{
    const categorias = [
      { nombre: "Whisky", route: "#", id: 1},
      { nombre: "Tequila", route: "#", id: 2},
      { nombre: "Vodka", route: "#", id: 3},
      { nombre: "Gin", route: "#", id: 4}
    ];

  return(
    <div style = {estilo.contenedor}>
      <div style={estilo.branchContainer}>
        
        <h1 style={estilo.titulo}>Bienvenido {nombre}</h1>
      </div>
      <div style={estilo.links}>
        <nav>
          {categorias.map((element) => {
            return (
              <a style={estilo.link} key={element.id} href={element.route}>
                {element.nombre}
              </a>
            );
          })}
        </nav>
        <CartWidget/>
      </div>
    </div>

    );

};
