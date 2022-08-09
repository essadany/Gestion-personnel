import React from 'react'
import "./Gestion_Production.css"
export default function Gestion_Production() {
  return (
    <div className="gestionP">
      <h4>Gestion des projets</h4>
      <button type="button" class="btn btn-success CreationP"><i class="fa-solid fa-plus"></i>Créer un nouveau projet</button>
      <form className='row'>
        <legend>Filtres</legend>
        <div className="mb-3 col-md-5 col-sm-8">
            <label for="exampleFormControlInput1" className="form-label">Date  du debut</label>
            <input type="date" className="form-control" id="exampleFormControlInput1"  required/>
        </div>
          <div className='col-md-5 col-sm-8'>
            <label for="OP">Opérateur</label>
            <select className="form-select OP" aria-label="Default select example" required>
                <option selected>SFR</option>
                <option value="ORANGE">ORANGE</option>
                <option value="FREE">FREE</option>
                <option value="B&YOU">B&YOU</option>
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
            <div className='col-md-5 col-sm-8'>
              <label for='staut'>Statut</label>
              <select className="form-select statut" aria-label="Default select example" required> 
                  <option value="2">Etat 0</option>
                  <option value="2">En cours</option>
                  <option value="3">Terminé</option>
              </select>
            </div>
            <div>
                <button type="button" class="btn filter"><i class="fa-solid fa-filter"></i>Afficher</button>
            </div>
      </form>
      
      <table className="table">
          <thead>
              <tr>
                  <th scope="col">Intitulé</th>
                  <th scope="col">Date de debut</th>
                  <th scope="col">Opérateur</th>
                  <th scope="col">Client</th>
                  <th scope="col">Nombre d'équipes</th>
                  <th scope="col">Statut</th>
                  <th scope="col">Modifier</th>
              </tr>
          </thead>
          <tbody>
              <tr className='table-success'>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
              </tr>
              <tr className='table-warning'>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
              </tr>
              <tr className='table-info'>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
              </tr>
              <tr className='table-danger'>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
              </tr>
          </tbody>
      </table>
    </div>
  )
}
