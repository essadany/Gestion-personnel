import React from 'react'
import "./production.css"
export default function Production() {
  return (
    <div className=" production">
        <form className='row'>
            <div className="mb-3 col-md-5 col-sm-8">
                <label for="exampleFormControlInput1" className="form-label">Date</label>
                <input type="date" className="form-control" id="exampleFormControlInput1"  required/>
            </div>
            <div className="mb-3 col-md-5 col-sm-8">
            <label for='client'>Client</label>
            <select className="form-select client " aria-label="Default select example" required>
                <option selected>ICART</option>
                <option value="EOS">EOS</option>
                <option value="AXION">AXION</option>
            </select>
        </div>
        <div className='col-md-5 col-sm-8'>
        <label for="equipe">Projet</label>
            <select className="form-select projet" aria-label="Default select example" required>
                <option valure="1">projet1</option>
                <option value="2">projet2</option>
                <option value="3">projet3</option>
            </select>
        </div>
        <div className='col-md-5 col-sm-8'>
        <label for="equipe">Catégorie1</label>
            <select className="form-select projet" aria-label="Default select example" required>
                <option valure="1">Génie civil</option>
                <option value="2">Autre</option>
            </select>
        </div>
        <div className='col-md-5 col-sm-8'>
        <label for="equipe">Catégorie2</label>
            <select className="form-select projet" aria-label="Default select example" required>
                <option valure="1">APS</option>
                <option value="2">APD</option>
                <option value="3">DOE</option>
            </select>
        </div>
        <div className='col-md-5 col-sm-8'>
        <label for="equipe">Activités</label>
            <select className="form-select projet" aria-label="Default select example" multiple required>
                <option valure="1">Ac1</option>
                <option value="2">Ac2</option>
                <option value="3">Ac3</option>
                <option value="3">Ac4</option>
            </select>
        </div>
        <div className=" col-md-5 col-sm-8">
            <label for="prod">Production</label>
            <input type="number" className="form-control"  id="prod" required />
        </div>

        <div className="form-floating col-md-5 col-sm-8">
            <label for="floatingTextarea">Commentaire</label>
            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" required></textarea>
        </div>
        </form>
        
    </div>
  )
}
