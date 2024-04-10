import { useState } from "react";
import "./App.css";
import Hero from "./components/pages/Hero";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./components/pages/SharedLayout";
import Error from "./components/pages/Error";
import Longbreak from "./components/pages/Longbreak";
import Shortbreak from "./components/pages/Shortbreak";
import Settings from "./components/pages/Settings";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Hero />} />
            <Route path="/Longbreak" element={<Longbreak />} />
            <Route path="/Shortbreak" element={<Shortbreak />} />
            {/* <Route path="/settings" element={<Settings />} /> */}
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
