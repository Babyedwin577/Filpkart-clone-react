import { Home } from "./pages/Home";
import { ProductPage } from "./pages/ProductPage";
import { Routes,Route } from "react-router-dom";
import './App.css'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path=":category/:subCategory/:subOptions" element={<ProductPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
