import React from 'react'

const ItemListContainer = (props) => {
  return (
    <div>
        <h2 className='itemClass'>{props.greeting}</h2>
    </div>
  )
}

export default ItemListContainer