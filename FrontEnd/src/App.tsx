import React from 'react';
import { Route, Switch } from "react-router-dom"
import ProductList from "./views/product_list";
import Home from "./views/Home";

function App() {
  return (
      <Switch>

          <Route path="/list">
              <ProductList />
          </Route>
          <Route path="/">
              <Home />
          </Route>
      </Switch>
  );
}

export default App;
