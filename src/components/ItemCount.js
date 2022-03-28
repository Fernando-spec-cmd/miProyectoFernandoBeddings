import React, {useState} from "react";

export const ItemCount = () => {

    const [numeroDeItems, setContador] = useState(0);

    const sumar = () => {
        setContador(numeroDeItems + 1);
    };
    const quitar = () => {
        setContador(numeroDeItems - 1);
    };
    const vaciar = () => {
        setContador(0);
    };
    return(
        <>
        <h1>{numeroDeItems}</h1>
        <button disabled={numeroDeItems > 5} onClick={sumar}>+</button>
        <button disabled={numeroDeItems < 1} onClick={quitar}>-</button>
        <button onClick={vaciar}>Vaciar carro</button>
        </>
    )
};