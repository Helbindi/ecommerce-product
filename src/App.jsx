import React, { useState } from "react";
import "./index.css";
import Navigation from "./components/Navigation";
import Product from "./components/Product";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="product-container">
      <Navigation />
      <Product />
    </div>
  );
}

export default App;
