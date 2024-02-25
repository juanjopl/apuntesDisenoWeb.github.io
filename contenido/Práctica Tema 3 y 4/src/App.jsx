import { BrowserRouter,Routes, Route } from "react-router-dom";
import Videos from "./paginas/Videos.jsx";
import Home from "./paginas/Home.jsx";
import Menu from "./componentes/Menu.jsx";
import Footer from "./componentes/Footer.jsx";
import Error from "./componentes/Error.jsx";
import './estilos/main.scss';

function App() {
  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Videos/>} />
        <Route path="/*" element={<Error/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
