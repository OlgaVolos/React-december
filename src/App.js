import React from 'react';
import {Header} from './components'
import ProductList from "./components/ProductList";

// такий імпорт бо різні види функцій в компонентах!!!


function App() {
  return (
      <div>
          <Header/>
        <ProductList/>
      </div>

  );
}

export default App;
