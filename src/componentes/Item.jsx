import "./Item.css"
import React from 'react';
   import { useNavigate } from 'react-router-dom';

   export const Item = ({ id, nombre, precio, img }) => {
     const navigate = useNavigate();

     return (
       <div className="cardProductos">
         <img src={img} alt={nombre}/>
         <h3 className='nombreProducto'>{nombre}</h3>
         <p className='precioProducto'>{precio}</p>
         <p>{id}</p>
         <button onClick={() => navigate(`/item/${id}`)}>Ver detalles</button>
       </div>
     );
   }
   
   