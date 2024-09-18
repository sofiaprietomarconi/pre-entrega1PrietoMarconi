
const ItemDetail = ({ id, nombre, precio, img }) => {
    return (
      <div>
        <img src={img} alt={nombre} />
        <h2>{nombre}</h2>
        <h2>{precio}</h2>
        <h2>{id}</h2>
        <p>detalles del producto</p>
      </div>
    );
  };
  
  export default ItemDetail;