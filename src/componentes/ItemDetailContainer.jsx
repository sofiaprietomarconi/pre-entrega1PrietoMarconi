import { useEffect, useState } from "react"
import { buscarProducto } from "../asynmock"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState(null)

    const {idItem} = useParams()

    useEffect(() =>{
        buscarProducto(idItem)
        .then(respuesta => setProducto(respuesta))
    }, [idItem])

  return (
    <div><ItemDetail {...producto}/></div>
  )
}

export default ItemDetailContainer