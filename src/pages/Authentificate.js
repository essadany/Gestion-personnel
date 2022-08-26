import React,{useState} from 'react'
import logo from '../assets/img/logo.png'
import Accueil from './Accueil'
import { useNavigate } from "react-router-dom";

const Authentificate = () => {
  const [email, setemail] = useState(""); 
  const [pass, setpass] = useState(""); 
  const navigate = useNavigate();

async function loginn() { 
  let item = { email, pass }; 
  let res = await fetch("http://127.0.0.1:8000/api/login", 
  { 
    method: "POST", 
    body: JSON.stringify(item), 
    headers: { "Content-Type": "application/json", 
    Accept: "application/json", }, 
}); 
res = await res.json(); 
localStorage.setItem("user-info", JSON.stringify(res));
navigate("/Accueil"); 
}

  return (
    <div className='mr'>
        <img className="mb-4 img_logo image_fluid" src={logo} alt="" />
      <h1 className="h3 mb-3 fw-normal" >Gestion du Personnel</h1>
      <div className='form-connect  container col-lg-4 col-md-8 col-xs-10 '>
          <div className="mb-3">
            <label for="exampleInput" className="form-label">Identifiant :</label>
            <input type="text" className="form-control " id="exampleInput" name="id" onChange={(e) => setemail(e.target.value)} />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Mot de passe :</label>
            <input type="password" className="form-control " id="exampleInputPassword1" name="pwd" onChange={(e) => setpass(e.target.value)} />
          </div>
          <div >
            <input type="submit" className="btn btn-primary connecter col-3" name="valider" value="Connecter" onClick={loginn} />
          </div>
        </div>
      </div>
    
  )
}
export default Authentificate;