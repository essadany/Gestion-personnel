import React from 'react'
import "./Planing_Absences.css"
import Calendrier from '../Calendrier';
import { Modal } from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import { useState } from 'react';
import Creer_absences from './Creer_absences';

export default function Planing_Absences() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div className='planning_Absences'>
        <h4>Planing absences</h4>
        <div className='ajout-export'>
            <button type='button' className='btn btn-warning' onClick={handleShow}><i className='fa-solid fa-plus'></i>NOUVELLE DEMANDE</button>
          <button type='button' className='btn btn-success'><i className='fa-solid fa-file-excel'></i>EXPORT EXCEL</button>
        </div>
            
        <Modal
            size='lg'
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
            <Modal.Title>Creation d'une demande d'absence</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Creer_absences />
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Annuler
            </Button>
            <Button variant="primary">Enregistrer</Button>
            <Button variant="success">Valider</Button>
            </Modal.Footer>
        </Modal>
        <h5>Filtres</h5>
        <form className='row'> 
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
        <Calendrier />
    </div>
  )
}
