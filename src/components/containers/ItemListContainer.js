import React, {useEffect, useState} from "react";
import { ItemList } from "../ItemList";
import { ExistenciaProductos } from "../ExitenciaProductos";
import ClipLoader from "react-spinners/ClipLoader";


const promesa = new Promise((res) => {
    setTimeout(() => {
        res(ExistenciaProductos);
    }, 1000);
});

export const ItemListContainer = ({greetings}) => {

    const [productos, setProductos] = useState([]);
    const [cargar, setCarga] = useState(true);

    useEffect(() => {
        promesa
        .then((productos) => {
            setProductos(productos);
        })
        .catch((error) => {
            console.error("error: ", error);
        })
        .finally(() => {
            setCarga(false);
        });
    }, []);

    return (
        <>
        <h1>{greetings}</h1>
        {cargar ? (
            <span>
                <ClipLoader color = {"green"} cargar = {cargar} size = {150} />
            </span>
        ) : (
            <ItemList productos={productos} />
        )}
        </>
        );
    };
