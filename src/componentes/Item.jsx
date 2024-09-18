import { Link } from "react-router-dom"

export const Item = ({ id, nombre, precio, img }) => {
  return (
    <div className="cardProductos">
      <img src={img} alt={nombre} />
      <h3>{nombre}</h3>
      <p>{precio}</p>
      <p>{id}</p>
      <Link to={` /item/${id} `}>Ver detalles</Link>
    </div>
  )
}
