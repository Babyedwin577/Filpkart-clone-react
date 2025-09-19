import { Home } from "./pages/Home";
import { ProductPage } from "./pages/ProductPage";
import { Routes,Route } from "react-router-dom";
import { SingleProductPage } from "./pages/SingleProductPage";
import './App.css'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path=":category/:subCategory/:subOptions" element={<ProductPage/>}/>
        <Route path="product/:productName" element={<SingleProductPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
