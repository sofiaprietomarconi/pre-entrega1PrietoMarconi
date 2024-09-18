import { Item } from "./Item"

export const ItemList = ({productos}) => {
  return (
    <div className="contenedor">
      {productos.map(item => <Item key={item.id} {...item} />)}
    </div>
  )
}

