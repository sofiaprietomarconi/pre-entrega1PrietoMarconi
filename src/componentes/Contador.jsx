import { useState } from "react"
import "./Contador.css"


const Contador = ({inicial, stock, agregarProductos}) => {

    const [contador, setContador] = useState(inicial)

    const sumarContador=  () =>{
        if (contador < stock ){
            setContador(contador + 1)
        }
    }

    const restarContador= () => {
        if (contador > inicial){
            setContador(contador - 1)
        }
    }

  return (
    <>
    <div className="contenedorContainer">
        <button onClick={sumarContador}> + </button>
        <strong> {contador} </strong>
        <button onClick={restarContador}> - </button>
    </div>

    <button onClick={()=> agregarProductos(contador)}> Agregar al carrito </button>

  </>
  )
}

export default Contador