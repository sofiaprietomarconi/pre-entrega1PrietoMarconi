
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {collection, doc, writeBatch} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBiHwhPw8kwK3i1IVPUNxhLLf0Weg61zfg",
  authDomain: "doggi-shop.firebaseapp.com",
  projectId: "doggi-shop",
  storageBucket: "doggi-shop.appspot.com",
  messagingSenderId: "182185357646",
  appId: "1:182185357646:web:8ad9ce8649464e879bae1f",
  measurementId: "G-30QKYN3348"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

/*const productosDoggi = [
    {nombre: "Cadena de paseo", precio: "$14000", stock:10, categoria: "paseo", detalles:"Cadena de paseo con manopla soft de tela en diferentes colores", img: "../src/assets/imagenes/cadenaPaseo.webp"},
    {nombre: "Cama para Auto", precio: "$25000", stock:25, categoria: "auto",  detalles:"Cama Para Perros Huella Living Car Doble Talle 5 Para Autos", img:"../src/assets/imagenes/camaAutp.webp"},
    {nombre: "Comedero", precio: "$10000", stock: 50, categoria: "casa", detalles:"Comedero para raza pequeña de aluminio",img:"../src/assets/imagenes/comedero.webp"},
    {nombre: "Comedero come lento", precio: "$25000", stock: 5, categoria: "casa", detalles:"Comedero diseñado para aliviar la ansiedad a la hora de comer. De plástico en varios colores",img:"../src/assets/imagenes/comederoComelentoo.webp"},
    {nombre: "Comedero automático", precio: "$15000", stock: 40, categoria: "casa", detalles:"Comedero con reposición automática",img:"../src/assets/imagenes/comederoAutomaticp.webp"},
    {nombre: "Hueso de tela", precio: "$5000", stock:100,  categoria: "juguetes", detalles:"Jueguete de tela para tirar en varios colores",img:"../src/assets/imagenes/huesoTela.jfif"}
]

const vincularProductos = async ()=>{
    const batch = writeBatch(db)
    const productosRef = collection(db, "productos")

    productosDoggi.forEach((producto)=>{
        const crearDoc = doc(productosRef)
        batch.set(crearDoc, producto)
    })

   try {
        await batch.commit()
        console.log("el producto se subio bien")
    }catch(error){
        console.log("error")
    }
}

vincularProductos()*/