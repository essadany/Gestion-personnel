import React from 'react'
import './Gestion_taches.css'

export default function Gestion_taches() {
  return (
    <div className='Gestion_taches'>
        <h4>Gestion des tâches</h4>
        <button type="button" class="btn btn-success CreationP"><i class="fa-solid fa-plus"></i>Ajouter des tâches</button>
        <form className='row'>
            <legend>Filtres </legend>
            <div className="mb-3 col-md-5 col-sm-8">
            <label for="exampleFormControlInput1" className="form-label">Date</label>
            <input type="date" className="form-control" id="exampleFormControlInput1"  required/>
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
                    <th scope="col">Date</th>
                    <th scope="col">Projet</th>
                    <th scope="col">Equipe d'absence</th>
                    <th scope="col">Taches</th>
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
                </tr>
                <tr className='table-warning'>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr className='table-info'>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr className='table-danger'>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
