import React from "react";
import Navi from "../navi/Navi";
import { Container } from "reactstrap";
import Dasboard from "./Dasboard";
import { Route, Routes } from "react-router-dom";
import CartDetail from "../cart/CartDetail";

function App() {
  return (
    <div>
      <Container>
        <Navi />
        <Routes>
          <Route path="/" element={<Dasboard />} />
          <Route path="/cart" element={<CartDetail />} />
          <Route path="/*" element={<div></div>} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
