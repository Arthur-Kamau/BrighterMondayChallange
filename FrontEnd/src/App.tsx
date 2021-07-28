import React from 'react';
import { Route, Switch } from "react-router-dom"
import ProductList from "./views/product_categories";
import ProductCreate from "./views/product_create";
import Home from "./views/Home";
import ProductCreateVariant from './views/product_create_variants';

function App() {
  return (
      <Switch>

          <Route path="/categories">
              <ProductList />
          </Route>
          <Route path="/create">
              <ProductCreate />
          </Route>
          <Route path="/create/variant">
              <ProductCreateVariant />
          </Route>
          <Route path="/">
              <Home />
          </Route>
      </Switch>
  );
}

export default App;
