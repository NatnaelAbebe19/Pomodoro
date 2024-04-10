import { useState } from "react";
import "./App.css";
import Hero from "./components/pages/Hero";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./components/pages/SharedLayout";
import Error from "./components/pages/Error";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Hero />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
