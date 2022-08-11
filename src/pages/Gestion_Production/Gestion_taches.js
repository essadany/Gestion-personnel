import React from 'react'
import { Link } from 'react-router-dom'
import PopupCentrer from '../../fonctions/PopupCentrer'
import "./Gestion_taches.css"
import Modal from 'react-bootstrap/Modal'
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import Production from './production'

export default function Gestion_taches() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    
    <div className="GestionA">
      <h4>Gestion des projets</h4>
     <button type="button" className="btn btn-success CreationP" onClick={handleShow}><i className="fa-solid fa-plus"></i>Avancement d'une activité</button>
     <Modal
        size='lg'
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Creation d'une nouvelle production</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Annuler
          </Button>
          <Button variant="primary">Enregistrer</Button>
        </Modal.Footer>
      </Modal>
      <form className='row'>
        <legend>Filtres</legend>
        <div className="mb-3 col-md-5 col-sm-8">
            <label for="exampleFormControlInput1" className="form-label">Date</label>
            <input type="date" className="form-control" id="exampleFormControlInput1"  required/>
        </div>
            <div className='col-md-5 col-sm-8'>
                <label for='client'>Client</label>
                <select className="form-select client " aria-label="Default select example" required>
                    <option selected value="KYNTUS">KYNTUS</option>
                    <option value="CIRCET">CIRCET</option>
                    <option value="AXIONE">AXIONE</option>
                    <option value="JSC">JSC</option>
                    <option value="SOGEA">SOGEA</option>
                    <option value="ETM">ETM</option>
                    <option value="IDOM">IDOM</option>
                    <option value="SCOPELEC_DR_SUD">SCOPELEC_DR_SUD</option>
                    <option value="SCOPELEC_DR_SUD_OUEST">SCOPELEC_DR_SUD_OUEST</option>
                    <option value="SCOPELEC_DR_SUD_EST">SCOPELEC_DR_SUD_EST</option>
                    <option value="BFC_Fibre">BFC Fibre</option>
                    <option value="ORANGE">ORANGE</option>
                    <option value="ETPR">ETPR</option>
                    <option value="ICART_TELECOM">ICART TELECOM</option>
                    <option value="EOS_TELECOM">EOS TELECOM</option>
                    <option value="CTBE">CTBE</option>
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
            <div>
                <button type="button" className="btn filter"><i className="fa-solid fa-filter"></i>Afficher</button>
            </div>
      </form>
      
      <table className="table">
          <thead>
              <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Client</th>
                  <th scope="col">Projet</th>
                  <th scope="col">Catégorie1</th>
                  <th scope="col">Catégorie2</th>
                  <th scope="col">Activités</th>
                  <th scope="col">Production</th>
                  <th scope="col">Commentaire</th>
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
                  <td>@mdo</td>
                  <td>@mdo</td>
              </tr>
          </tbody>
      </table>
    </div>
  )
}
