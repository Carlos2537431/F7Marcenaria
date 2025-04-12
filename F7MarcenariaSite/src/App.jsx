import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './assets/pages/Home';
import Produto from './assets/pages/Produto';
import Carrinho from './assets/pages/Carrinho';
import Header from './assets/components/Header';
import Footer from './assets/components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produto/:id" element={<Produto />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="*" element={<h1>Página não encontrada</h1>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;