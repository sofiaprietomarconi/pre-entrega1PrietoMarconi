import { useState, useEffect } from "react"
import { ItemList } from "./ItemList"
import { useParams } from "react-router-dom"
import { db } from "./services/config"
import { collection, getDocs, query, where } from "firebase/firestore"

const ItemListContainer = () => {

  const [productos, setProductos] = useState([])

  const {idCategoria} = useParams()

  useEffect (() =>{
    const productosDoggi = idCategoria ? query(collection(db, "productos"), where("categoria", "==", idCategoria)) : (collection(db, "productos"))

    getDocs(productosDoggi)
    .then(res=>{
      const nuevosProductos = res.docs.map(doc=>{
        const data =doc.data()
        return {id:doc.id, ...data} 
      })
      setProductos(nuevosProductos)
    })
    .catch(error => console.log(error))
    .finally("proceso ended")
  }, [idCategoria])


  return (
    <> 
    <ItemList productos={productos}/>
    </>
  )
}

export default ItemListContainer