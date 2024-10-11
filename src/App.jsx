import ItemListContainer from './componentes/ItemListContainer'
import NavBar from './componentes/NavBar'
import "./componentes/ItemListContainer.css"
import ItemDetailContainer from './componentes/ItemDetailContainer'
import { CarritoProvider } from './context/carritoContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './componentes/Cart'


const App = () => {
  
  return (
    <>
      <BrowserRouter>
      <CarritoProvider>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/categoria/:idCategoria' element={<ItemListContainer/>}/>
        <Route path='/item/:idItem' element={ <ItemDetailContainer/>}/>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
      </CarritoProvider>
      </BrowserRouter>
    </>
  )
  
  
 
}

export default App
