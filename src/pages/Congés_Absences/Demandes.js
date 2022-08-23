
import Creer_absences from './Creer_absences'
import './Demandes.css'
import { Modal,Button } from 'react-bootstrap'
import React, { useState, useEffect, useRef } from 'react'
import { useDownloadExcel } from 'react-export-table-to-excel'

export default function Demandes() {
    //filter table
  const [selectedDebut, setSelectedDebut] = useState([]);
  const [selectedFin, setSelectedFin] = useState([]);
  const [selectedType, setSelectedType] = useState([]);
  const [selectedStatut, setSelectedStatut] = useState([]);
  const filterDebut = (e) => {
    console.log(e.target.value);
    setSelectedDebut(e.target.value);
  }
  const filterFin = (e) => {
      console.log(e.target.value);
      setSelectedFin(e.target.value);
  }
  const filterType = (e) => {
    console.log(e.target.value);
    setSelectedType(e.target.value);
  }
  const filterStatut = (e) => {
      console.log(e.target.value);
      setSelectedStatut(e.target.value);
  };//////////////////////////////////////
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
//exporter la table d'historique d'absences........................................................
const [data, getData] = useState([])
const URL = 'https://jsonplaceholder.typicode.com/posts';

useEffect(() => {
    fetchData()
}, [])


const fetchData = () => {
    fetch(URL)
        .then((res) =>
            res.json())

        .then((response) => {
            console.log(response);
            getData(response);
        })

}
const tableRef = useRef(null);
const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: 'Users table',
    sheet: 'Users'
})
//........................................................................................................................
  
  return (
    <div className='demandes'>
        <h4>Mes demandes</h4>
        
        <div className='ajout-export'>
            <button type="button" class="btn btn-warning CreationP" onClick={handleShow}><i class="fa-solid fa-plus"></i>Ajouter une absence</button>
          <button type='button' className='btn btn-success' onClick={onDownload}><i className='fa-solid fa-file-excel'></i>EXPORT EXCEL</button>
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



        <form className='row'>
            <legend>Filtres</legend>
            <div className="form-group col-md-5 col-sm-8">
                <label for="debut" className="form-label form-label-sm">Du</label>
                <input type="date" className="form-control form-control-sm" name="debut"id="debut" onChange={filterDebut} />
            </div>
            <div className="form-group col-md-5 col-sm-8">
                <label for="fin" className="form-label form-label-sm">Au</label>
                <input type="date" className="form-control form-control-sm" name="fin" id="fin" onChange={filterFin}/>
            </div>
            <div className="form-group col-md-5 col-sm-8">
                <label for="type">Type d'absence</label>
                <select id="type" className="form-select " name="type" onChange={filterType}>
                    <option selected></option>
                    {data
                    .map((item,i)=>(<option key={i} value={i}>{item.id}</option>))
                  }
                </select>
            </div>
            <div className="form-group col-md-5 col-sm-8">
                <label for="statut">Statut</label>
                <select id="statut" className="form-select " name="statut" onChange={filterStatut} multiple>
                    <option value="En attente">En attente</option>
                    <option value="Validée">Validée</option>
                    <option value="Refusée">Refusée</option>
                </select>
            </div>
            <div>
                <button type="button" class="btn filter"><i class="fa-solid fa-filter"></i>Afficher</button>
            </div>
        </form>
        
        <table className="table" ref={tableRef}>
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
            {data
                .filter((value) => {
                    return  String(value.title) === String(selectedType) ||  String(value.title) === String(selectedStatut)
                    })
               .map((item, i) => (
                    <tr key={i}>
                        <td>{item.userId}</td>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.body}</td>
                        <td>{item.userId}</td>
                        <td>{item.userId}</td>
                        <td><button className='btn btn-outline-primary'><i class="fa-solid fa-pen-to-square"></i></button></td>
               </tr>
               ))}
            </tbody>
        </table>
    </div>
  )
}
