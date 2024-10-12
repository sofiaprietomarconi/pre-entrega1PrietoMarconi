import Contador from "./contador";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./ItemDetail.css"
import { CarritoContext } from "../context/carritoContext";
import { useContext } from "react";


const ItemDetail = ({ id, nombre, precio, img, stock, detalles}) => {

  const {sumarAlCarrito}= useContext(CarritoContext)

  const [actualizarCant, setActualizarCont] = useState(0)
  const manejadorCantidad =(cantidad)=>{
    setActualizarCont(cantidad)

    const item = {id, nombre, precio}
    sumarAlCarrito(item, cantidad)
  }

    return (
      <div className="detailContainer">
        <img src={img} alt={nombre} />
        <h2>{nombre}</h2>
        <p>{precio}</p>
        <p>{id}</p>
        <p>{detalles}</p>

        {
          actualizarCant > 0 ? (<Link to="/Cart">Terminar compra </Link>) : (<Contador inicial={1} stock = {stock} agregarProductos={manejadorCantidad}/>)
        }

      </div>
    );
  };
  
  export default ItemDetail;