import React from 'react';
import './App.css';
import Authentificate from './pages/Authentificate';
import Profile from './pages/Profile';
import Accueil from './pages/Accueil';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<Navs />} />
          <Route path='/' element={<Accueil />} />
          <Route path='/profile' element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
