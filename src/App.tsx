import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import FormCategoria from './components/categorias/FormCategoria';
import ListarCategorias from './components/categorias/ListaCategorias';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Home from './paginas/home';
import DeletarCategoria from './components/categorias/DeletarCategorias';


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='min-h-[90vh] bg-gray-200'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListarCategorias />} />
            <Route path="/cadcategoria" element={<FormCategoria />} />
            <Route path="/editarcategoria/:id" element={<FormCategoria />} />
            <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
            </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App