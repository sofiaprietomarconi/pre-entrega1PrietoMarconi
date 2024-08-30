import React from 'react'
import ItemListContainer from './assets/componentes/ItemListContainer'
import NavBar from './assets/componentes/NavBar'
import "../src/assets/componentes/ItemListContainer.css"


const App = () => {
  
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Bienvenido al shop mas completo para tu amigo/a de cuatro patitas!"/>
    </>
  )
  
  
 
}

export default App
