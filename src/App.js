import React from 'react';
import {Header, ProductDetails} from './components'
import ProductList from "./components/ProductList";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, Redirect
} from "react-router-dom";

// такий імпорт бо різні види функцій в компонентах!!!


function App() {
  return (
      <Router>
      <div>
          <Header/>

          <Switch>
              <Route path={'/'} exact>
                  <Redirect to = '/products'/>
              </Route>
              <Route path={'/products'} exact>
                  <ProductList/>
              </Route>
              <Route path={'/products/:id'}>
                  <ProductDetails/>
              </Route>
              <Route path={'/wishlist'}>
                  <div>wishlist</div>
              </Route>
              <Route path={'/cart'}>
                  <div>cart</div>
              </Route>


          </Switch>
        {/*<ProductList/>*/}
      </div>
      </Router>
  );
}

export default App;
