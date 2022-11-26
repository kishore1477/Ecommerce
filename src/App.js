import './App.css';
import NavBar from './navComponent/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Component/Home';
import Electronics from './navComponent/Electronics';
import Jwelery from './navComponent/Jwelery';
import MenCloth from './navComponent/MenCloth';
import WomenCloth from './navComponent/WomenCloth';
import Item from './Component/Item';
import Footer from './navComponent/Footer';
import Checkout from './Component/Checkout';
function App() {
  return (
   <>
   <BrowserRouter>
   <NavBar/>
    <Routes>
        <Route  exact path='/' element={<Home />} />
        <Route exact path='/electronics' element={<Electronics />} />
        <Route exact path='/jewlery' element={<Jwelery/>} />
        <Route exact path='/menCloth' element={<MenCloth/>} />
        <Route exact path='/womenCloth' element={<WomenCloth/>} />
        <Route exact path='/item/:itemId' element={<Item/>} />
        <Route exact path='/checkout/:checkOutId' element={<Checkout/>} />
    </Routes>
     <Footer/>
  </BrowserRouter>
   </>
  );
}

export default App;
