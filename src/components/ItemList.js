import React from "react";
import { Item } from "./Item";

const estilo = {
    contenedor : {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
    }
}
export const ItemList = ({productos}) => {
    return(
        <div style={estilo.contenedor}>
            {productos.map((productos) => (
                <Item key = {productos.id} productos = {productos} />
            ))}
        </div>
    );
};
