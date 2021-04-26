import React from 'react';
import ProductList from "./redux/components/ProductList/ProductList";
import Header from "./redux/components/header/Header";

function App() {
  return (
      <div>
          <Header/>
        <ProductList/>
      </div>

  );
}

export default App;
