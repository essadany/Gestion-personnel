import React from 'react';
import './App.css';
import Authentificate from './pages/Authentificate';
import Profile from './pages/Profile';
import Accueil from './pages/Accueil';
import Production from './pages/Production'
import Planing_Absences from './pages/Congés_Absences/Planing_Absences';
import Demandes from './pages/Congés_Absences/Demandes';
import Compteurs from './pages/Congés_Absences/Compteurs';
import Notes_Frais from './pages/Notes_Frais';
import Messages from './pages/Messages';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Navs} from "./components/Navs";

function App() {
  return (
    <div className='App'>
    < Navs />
    <Router>
      <Routes>
        
          <Route exact path='/' element={< Accueil />}>  </Route>
          <Route exact path='/Profile' element={<Profile />}>  </Route>
          <Route exact path='/Gongés_Absences/Planing_Absences' element={<Planing_Absences />}>  </Route>
          <Route exact path='/Gestion_Production' element={< Production />}>  </Route>
          <Route exact path='/Notes_Frais' element={<Notes_Frais />}>  </Route>
          <Route exact path='/Messages' element={<Messages />}>  </Route>
          <Route exact path='/Authentificate' element={<Authentificate />}>  </Route>
        
      </Routes>
    </Router>
    </div>
  );
}

export default App;
