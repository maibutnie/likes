import React from "react";
import ProductsPage from './pages/ProductsPage';

import store from "./redux/index"
import { Provider } from "react-redux"

const App = () => {

  return (
    <>
      <Provider store={store}>

        <ProductsPage />

      </Provider>
    </>
  )
}

export default App;

