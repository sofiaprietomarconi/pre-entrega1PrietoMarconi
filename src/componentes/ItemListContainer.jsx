import { useState, useEffect } from "react"
import { getProductos, buscarPorCategoria } from "../asynmock"
import { ItemList } from "./ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {

  const [productos, setProductos] = useState([])

  const {idCategoria} = useParams()

  useEffect(() =>{
    const productosCategoria = idCategoria ? buscarPorCategoria : getProductos

    productosCategoria(idCategoria)
    .then (respuesta => setProductos(respuesta))

  }, [idCategoria])

  return (
    <> 
    <ItemList productos={productos}/>
    </>
  )
}

export default ItemListContainer