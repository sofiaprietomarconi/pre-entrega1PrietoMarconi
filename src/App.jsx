import ItemListContainer from './componentes/ItemListContainer'
import NavBar from './componentes/NavBar'
import "./componentes/ItemListContainer.css"
import ItemDetailContainer from './componentes/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


const App = () => {
  
  return (
    <>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/categoria/:idCategoria' element={<ItemListContainer/>}/>
        <Route path='/item/:idItem' element={ <ItemDetailContainer/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
  
  
 
}

export default App
