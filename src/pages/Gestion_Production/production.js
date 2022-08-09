import React from 'react'

export default function Production() {
  return (
    <div className='production'>
        <h4>Mettre à jour mes taches</h4>
        <form className='row'>
        <div className='col-md-5 col-sm-8'>
            <label for="OP">Opérateur</label>
            <select className="form-select OP" aria-label="Default select example" required>
                <option selected>SFR</option>
                <option value="ORANGE">ORANGE</option>
                <option value="FREE">FREE</option>
                <option value="B&&YOU">B&&YOU</option>
            </select>
        </div>
        <div className='col-md-5 col-sm-8'>
            <label for='client'>Client</label>
            <select className="form-select client " aria-label="Default select example" required>
                <option selected>ICART</option>
                <option value="EOS">EOS</option>
                <option value="AXION">AXION</option>
            </select>
        </div>
        <div className='col-md-5 col-sm-8'>
        <label for="equipe">Intitulé du projet</label>
            <select className="form-select projet" aria-label="Default select example" required>
                <option valure="1">projet1</option>
                <option value="2">projet2</option>
                <option value="3">projet3</option>
            </select>
        </div>
        <div className='col-md-5 col-sm-8'>
            <label for="equipe">Equipe</label>
            <select className="form-select equipe" aria-label="Default select example" required>
                <option valure="1">equipe1</option>
                <option value="2">equipe2</option>
                <option value=" col-md-5 col-sm-83">equipe3</option>
            </select>
        </div>
        <div className="form-floating col-md-5 col-sm-8">
            <label for="floatingTextarea">Taches</label>
            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" required></textarea>
        </div>
        <div className="mb-3 col-md-5 col-sm-8">
            <label for="exampleFormControlInput1" className="form-label">Date de debut</label>
            <input type="date" className="form-control" id="exampleFormControlInput1"  required/>
        </div>
        <div className='col-md-5 col-sm-8'>
            <label for="exampleFormControlInput1" className="form-label">Date de fin</label>
            <input type="date" className="form-control" id="exampleFormControlInput1"  />
        </div>
        <div className='col-md-5 col-sm-8'>
            <label for='etat'>Etat</label>
            <select className="form-select etat" aria-label="Default select example" required>Etat 
                <option value="2">Etat 0</option>
                <option value="2">En cours</option>
                <option value="3">Terminé</option>
            </select>
        </div>
        
        <div className="form-floating col-md-5 col-sm-8 ">
            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
            <label for="floatingTextarea">Commentaire</label>
        </div>
        
        </form><br/>
        <div>
        <button type="button" className="btn btn-success  ">Valider</button>
        </div><br/>
        <div>
            <button type="button" className="btn btn-primary ">Modifier</button>
        </div>
        
    </div>
  )
}
