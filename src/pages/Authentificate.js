import React from 'react'
import logo from '../assets/img/logo.png'
import './Auth.css'
const Authentificate = () => {
  return (
    <div className='mr'>
        <img className="mb-4 img_logo" src={logo} alt="" width="500" height="200" />
      <h1 className="h3 mb-3 fw-normal" >Gestion du Personnel</h1>
      <form className="container col-3" method="post" action="" >
          <div className="mb-3 ">
            <label htmlFor="exampleInput" className="form-label">Email:</label>
            <input type="text" className="form-control" id="exampleInput" name="id" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Mot de passe:</label>
            <input type="password" className="form-control" id="exampleInputPassword1" name="pwd" />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label rest" htmlFor="exampleCheck1">Resté connecté?</label>
          </div>
          <input type="submit" className="btn btn-primary" name="valider" value="Connecter" />
      </form>
    </div>
  )
}
export default Authentificate;