import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import User from './component/UserPage/User';
import Admin from './component/AdminPage/Admin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user/*" element={<User />} />
        <Route path="/admin/*" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
