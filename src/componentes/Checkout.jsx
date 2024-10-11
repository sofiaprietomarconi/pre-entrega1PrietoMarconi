import { useState, useContext } from "react"
import { CarritoContext } from "../context/carritoContext"
import {db} from "./services/config"
import { collection, addDoc } from "firebase/firestore"
import "./Checkout.css"

const checkout = () => {


    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")
    const [ordenId, setOrdenId] = useState("")

    const {carrito, vaciarCarrito, total} = useContext(CarritoContext)


    const formulario =(e) => {
        e.preventDefault()


        if(!nombre || !apellido || !telefono || !email) {
            setError("Debes completar todos los campos antes de continuar")
            return;
        }
        

        const orden = {
            items: carrito.map (producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        };

        addDoc(collection(db, "ordenes"), orden)
            .then(docRef => {
                setOrdenId(docRef.id)
                vaciarCarrito();
                setNombre("")
                setApellido("")
                setTelefono("")
                setEmail("")
            })
            .catch(error => {
                console.log("Error al crear la orden", error)
                setError("Se producjo un error al crear la orden!")
            })
    }

  return (
    <div className="formularioClases">
        <h2>Completa este formulario para terminar tu compra</h2>
        <form onSubmit={formulario}>
            {   
                carrito.map(producto => (
                    <div key={producto.item.id}>
                        <p>Producto: {producto.item.nombre}</p>
                        <p>Cantidad: {producto.cantidad}</p>
                        <p>Precio: {producto.item.precio}</p>
                    </div>
                ))
            }
            <div>
                 <label htmlFor=""> Nombre </label>
                 <input type="text" onChange={(e)=>setNombre(e.target.value)} value={nombre} />                
            </div>
            <div>
                <label htmlFor=""> Apellido </label> 
                <input type="text" onChange={(e)=>setApellido(e.target.value)} value={apellido} /> 
            </div>
            <div>
            <label htmlFor=""> Telefono </label> 
            <input type="text" onChange={(e)=>setTelefono(e.target.value)} value={telefono} /> 
            </div>
            <div>
            <label htmlFor=""> Email </label> 
            <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} />
            </div>
 
                {
                    error && <p> {error}</p>
                }

            <button type="submit"> Confirmar Compra </button>
            {
                ordenId && (
                    <strong>¡Muchas gracias por tu compra! Tu amiguito peludo estará muy feliz :) Tu numero de orden es: {ordenId}</strong>
                )
            }
        </form>
        
    </div>

  )
}


export default checkout