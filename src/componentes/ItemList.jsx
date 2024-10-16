import { Item } from "./Item"
import "./ItemList.css"

export const ItemList = ({productos}) => {
  return (
    <div className="contenedor">
      {productos.map(item => <Item key={item.id} {...item} />)}
    </div>
  )
}

