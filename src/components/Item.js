import React from "react";

const estilo = {
    contenedor:{
        flexDirection: "column",
        width: window.innerHeight > 900 ? "25%" : "90%",
        justifyContent: "center",
        alignItems: "center",
        margin: 20,
        textAlign: "center",
        backgroundColor: "rgba(229, 249, 147, 0.7)",
        borderRadius:20,
    },
    imgContenedor:{
        width: "100%",
        height: 300,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    img:{
        width: "20%"
    }
};

export const Item = ({ productos }) => {
    return(
        <div style={estilo.contenedor}>
            <div style={estilo.imgContenedor}>
                <img style={estilo.img} src={productos.url} alt={productos.name} />
            </div>
            <h3>{productos.nombre}</h3>
            <p>${productos.precio}</p>
        </div>
    );
};
