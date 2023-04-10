import React from "react";

import { Routes, Route } from "react-router-dom";

import store from "./redux/index"
import { Provider } from "react-redux"

import CharectersPage from "./pages/CharectersPage";
import PersonPage from "./pages/PersonPage";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";

const App = () => {

  return (
    <div className="bg-bgcolor">
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/charecters' element={<CharectersPage />} />
          <Route path='/charecter' element={<PersonPage />} />
        </Routes>
      </Provider>
    </div>
  )
}

export default App;

