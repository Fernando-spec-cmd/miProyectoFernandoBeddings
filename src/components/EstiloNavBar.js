import { Colores } from "./Colores";

const estilo = {
  contenedor: {
    backgroundColor: Colores.green,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%"
  },
  branchContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  titulo: {
    fontSize: 25
  },
  links: {
    display: "flex"
  },
  link: {
    fontSize: 16,
    padding: 20
  }
};

export default estilo;