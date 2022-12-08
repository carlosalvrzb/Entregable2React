import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/containers/ItemListContainer/ItemListContainer';
import { BrowserRouter, Navigate, Routes } from 'react-router-dom';

function App() {

  let saludo = 'saludo'


    return (
      <BrowserRouter>
        <NavBar />

        <Routes >
          <Route path='/' element={ <ItemListContainer saludo={saludo} />} />
          <Route path='/category/:id' element={ <ItemListContainer saludo={saludo} />} />
          <Route path='/detail/:productId' element={ <ItemDetailContainer />} />
          <Route path='/cart' element={ <CartContainer />} />

          <Route path='*' element={ <Navigate to ='/' />} />
        </Routes>

      </BrowserRouter>

    )
}

export default App
