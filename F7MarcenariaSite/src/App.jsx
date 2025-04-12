import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Site from "./assets/components/Site";
import Compra from "./assets/components/Compra";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Site />} />
        <Route path="/compra" element={<Compra />} />
      </Routes>
    </Router>
  );
};

export default App;