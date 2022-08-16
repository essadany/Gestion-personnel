import React from 'react';
import './App.css';
import Authentificate from './pages/Authentificate';
import Profile from './pages/Profile';
import Accueil from './pages/Accueil';
import Planing_Absences from './pages/Congés_Absences/Planing_Absences';
import Demandes from './pages/Congés_Absences/Demandes';
import Compteurs from './pages/Congés_Absences/Compteurs';
import Notes_Frais from './pages/Notes_Frais';
import Messages from './pages/Messages';
import Documents from './pages/Documents';
import Gestion_Production from './pages/Gestion_Production/Gestion_Production';
import Gestion_taches from './pages/Gestion_Production/Gestion_taches';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Navs} from "./components/Navs";
import Personnel from './pages/Personnel';



function App() {
  return (
    <div className='App'>
      <Authentificate />
    {/* <Navs/>
    <Router>
      <Routes>
          <Route exact path='/Accueil' element={< Accueil />}>  </Route>
          <Route exact path='/Profile' element={<Profile />}>  </Route>
          <Route exact path='/Personnel' element={<Personnel />}></Route>
          <Route exact path='/Planing_Absences' element={<Planing_Absences />}>  </Route>
          <Route exact path='/Demandes' element={<Demandes />}>  </Route>
          <Route exact path='/Gestion_Production' element={< Gestion_Production />}>  </Route>
          <Route exact path='/Gestion_taches' element={< Gestion_taches />}>  </Route>
          <Route exact path='/Notes_Frais' element={<Notes_Frais />}>  </Route>
          <Route exact path='/documents' element={<Documents />}>  </Route>
          <Route exact path='/Messages' element={<Messages />}>  </Route>
          <Route exact path='/Authentificate' element={<Authentificate />}>  </Route>
          <Route exact path='/production' element={<production />}>  </Route>
          <Route exact path='*' element="error 404">  </Route>
      </Routes>
    </Router> */}
    </div>
  );
}

export default App;
