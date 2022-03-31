import React, {useState} from "react";

export const ItemCount = ({stock, inicial, onAdd}) => {

    const [numeroDeItems, setContador] = useState(inicial);

    const sumar = () => {
        if(numeroDeItems < stock) setContador(numeroDeItems + 1);
    };
    const quitar = () => {
        if(numeroDeItems > 0) setContador(numeroDeItems - 1);
    };
    const agregar = () => {
        if(numeroDeItems > 0) onAdd(numeroDeItems);
    };
    return(
        <div>
        <button onClick={sumar}>+</button>
        <span>{numeroDeItems}</span>
        <button onClick={quitar}>-</button>
        <button onClick={agregar}>Agregar al Carro</button>
        </div>
    );
};
