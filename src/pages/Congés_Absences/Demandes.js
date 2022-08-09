import React from 'react'
import './Demandes.css'

export default function Demandes() {
  return (
    <div className='demandes'>
        <h4>Mes demandes</h4>
        <button type="button" class="btn btn-warning CreationP"><i class="fa-solid fa-plus"></i>Ajouter une absence</button>
        <form className='row'>
            <legend>Filtres</legend>
            <div className="form-group col-md-5 col-sm-8">
                <label for="debut" className="form-label form-label-sm">Du</label>
                <input type="date" className="form-control form-control-sm" name="debut"id="debut" required />
            </div>
            <div className="form-group col-md-5 col-sm-8">
                <label for="fin" className="form-label form-label-sm">Au</label>
                <input type="date" className="form-control form-control-sm" name="fin" id="fin" />
            </div>
            <div className="form-group col-md-5 col-sm-8">
                <label for="type">Type d'absence</label>
                <select id="type" className="form-select " name="type">
                    <option selected value="ENJ">Absence non justifiée</option>
                    <option value="AM">Arrêt maladie</option>
                    <option value="ADT">Accident de travail</option>
                    <option value="CP">Congés payés</option>
                    <option value="CSS">Congé sans solde</option>
                    <option value="CPOP">Congé parental ou postnatal</option>
                    <option value="PACS">conjointe ou partenaire de PACS enceinte</option>
                    <option value="CS">Congé sabbatique</option>
                    <option value="CCE">Congés création d'entreprise </option>
                    <option value="CSN">Congé pour service national </option>
                    <option value="CCB">Congé pour catastrophe naturelle</option>
                </select>
            </div>
            <div className="form-group col-md-5 col-sm-8">
                <label for="statut">Statut</label>
                <select id="statut" className="form-select " name="statut" multiple>
                    <option selected value="Prévisionnelle">Prévisionnelle</option>
                    <option value="En attente">En attente</option>
                    <option value="Validée">Validée</option>
                    <option value="Refusée">Refusée</option>
                </select>
            </div>
            <div>
                <button type="button" class="btn filter"><i class="fa-solid fa-filter"></i>Afficher</button>
            </div>
        </form>
        
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Debut</th>
                    <th scope="col">Fin</th>
                    <th scope="col">Durée d'absence</th>
                    <th scope="col">Type d'absence</th>
                    <th scope="col">Traité par</th>
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
