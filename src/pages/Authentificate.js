import React from 'react'
import logo from '../assets/img/logo.png'
import './Auth.css'
const Authentificate = () => {
  return (
    <div className='mr'>
        <img className="mb-4 img_logo image_fluid" src={logo} alt="" />
      <h1 className="h3 mb-3 fw-normal" >Gestion du Personnel</h1>
      <form className="container col-lg-4 col-md-8 col-xs-10 " method="post" action="" >
          <div className="mb-3  ">
            <label for="exampleInput" className="form-label">Identifiant :</label>
            <input type="text" className="form-control" id="exampleInput" name="id" />
          </div>
          <div className="mb-3 ">
            <label for="exampleInputPassword1" className="form-label">Mot de passe :</label>
            <input type="password" className="form-control" id="exampleInputPassword1" name="pwd" />
          </div>
          <div className="mb-3  form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" for="exampleCheck1">Resté connecté?</label>
          </div>
          <div>
            <input type="submit" className="btn btn-primary col-3" name="valider" value="Connecter" />
          </div>
          
      </form>
    </div>
  )
}
export default Authentificate;