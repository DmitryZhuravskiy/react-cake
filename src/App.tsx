import "./scss/app.scss";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import Fag from "./pages/Fag/Fag";
import Work from "./pages/Work/Work";

const Cart = React.lazy(
  () => import(/* webpackChunkName: "Cart" */ "./pages/Cart")
);
const FullCake = React.lazy(
  () => import(/* webpackChunkName: "FullCake" */ "./pages/FullCake/FullCake")
);
const NotFound = React.lazy(
  () => import(/* webpackChunkName: "NotFound" */ "./pages/NotFound")
);

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="cart"
              element={
                <Suspense fallback={<div>Корзины подгружается...</div>}>
                  <Cart />
                </Suspense>
              }
            />
            <Route
              path="/cake/:id"
              element={
                <Suspense fallback={<div>Идёт загрузка...</div>}>
                  <FullCake />
                </Suspense>
              }
            />
            <Route
              path="/fag"
              element={
                <Suspense fallback={<div>Идёт загрузка...</div>}>
                  <Fag />
                </Suspense>
              }
            />
            <Route
              path="/work"
              element={
                <Suspense fallback={<div>Идёт загрузка...</div>}>
                  <Work />
                </Suspense>
              }
            />
            <Route
              path="*"
              element={
                <Suspense fallback={<div>Идёт загрузка...</div>}>
                  <NotFound />
                </Suspense>
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
