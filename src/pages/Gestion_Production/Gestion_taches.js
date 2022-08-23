
import { Link } from 'react-router-dom'
import PopupCentrer from '../../fonctions/PopupCentrer'
import "./Gestion_taches.css"
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap'
import Production from './production'
import Select from 'react-select'
import React, { useState, useEffect, useRef } from 'react'
import { useDownloadExcel } from 'react-export-table-to-excel'
export default function Gestion_taches() {

     //filter table
  const [selectedDate, setSelectedDate] = useState([]);
  const [selectedProjet, setSelectedProjet] = useState([]);
  const [selectedClient, setSelectedClient] = useState([]);
  const [selectedCat1, setSelectedCat1] = useState([]);
  const [selectedCat2, setSelectedCat2] = useState([]);
  const filterDate = (e) => {
    console.log(e.target.value);
    setSelectedDate(e.target.value);
  }
  const filterProjet = (e) => {
      console.log(e.target.value);
      setSelectedProjet(e.target.value);
  }
  const filterClient = (e) => {
    console.log(e.target.value);
    setSelectedClient(e.target.value);
  }
  const filterCat1 = (e) => {
      console.log(e.target.value);
      setSelectedCat1(e.target.value);
  }
  const filterCat2 = (e) => {
    console.log(e.target.value);
    setSelectedCat2(e.target.value);
};//////////////////////////////////////
  //exporter la table des projets........................................................
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
    const [show, setShow] = useState(false);
    const [selected, setSelected] = React.useState("");

/** Function that will set different values to state variable
* based on which dropdown is selected
*/
const changeSelectOptionHandler = (event) => {
	setSelected(event.target.value);
};

/** Different arrays for different dropdowns */
const KYNTUS = ["ANFI","VDLF","ELN FTTH", "FIBRE 31", "FIRALP_ENN27", "H-TEL-ANFI", "SCOPELEC","SYADEN CD11", "LOSANGE", "FTTE_ORANGE"];
const CIRCET = ["BUYGUES", "CD 89", "VDLF", "COVAGE 77", "INTER UU","SFR CD89","SFR IDF","SFR IDF 91","SFR PROVINCE","SFR PROVINCE 01","SFR PROVINCE 19","SFR PROVINCE 63","SFR PROVINCE 71","SFR SUD","YCONIC"];
const AXIONE = ["ADTIM", "BERRY THD", "DORSAL", "EURE","LIMOUSIN","Charente"]
const JSC = ["JSC-GARD", "JSC-ISERE"]
const SOGEA = ["LOSANGE"]
const ETM = ["SFR IDF"]
const IDOM = ["SFR"]
const SCOPELEC_DR_SUD = ["RIP 48","RIP 34","RIP 82","RIP 31","SUPERSONIC ORANGE SUD"]
const SCOPELEC_DR_SUD_OUEST = ["SUPERSONIC ORANGE SUD"]
const SCOPELEC_DR_SUD_EST = ["SUPERSONIC ORANGE SUD"]
const BFC_Fibre = ["ORANGE"]
const ORANGE = ["HSN"]
const ETPR = ["RIP48"]
const ICART = ["SFR ZMD 27","SFR ZMD 28","SFR ZMD 35","SFR ZMD 76","SFR ZMD 77","SFR ZMD 92","SFR ZMD 93","SFR ZMD 95"]
const EOS = ["SFR ZMD 81","SFR ZMD 28","SFR ZMD 77","COVAGE 77","TARN FIBRE"]
const CTBE = ["BUYGUES"]

/** Type variable to store different array for different dropdown */
let type = null;

/** This will be used to create set of options that user will see */
let options = null;

/** Setting Type variable according to dropdown */
switch (selected){
  case "KYNTUS": type = KYNTUS;break;
  case "CIRCET": type = CIRCET;break;
  case "AXIONE": type = AXIONE;break;
  case "JSC": type = JSC; break;
  case "SOGEA": type = SOGEA; break;
  case "ETM": type = ETM; break;
  case "IDOM": type = IDOM; break;
  case "SCOPELEC_DR_SUD": type = SCOPELEC_DR_SUD; break;
  case " SCOPELEC_DR_SUD_OUEST": type =  SCOPELEC_DR_SUD_OUEST; break;
  case "SCOPELEC_DR_SUD_EST": type = SCOPELEC_DR_SUD_EST; break;
  case "BFC_Fibre": type = BFC_Fibre; break;
  case "ORANGE": type = ORANGE; break;
  case "ETPR": type = ETPR; break;
  case "ICART_TELECOM": type = ICART; break;
  case "EOS_TELECOM": type = EOS; break;
  case "CTBE": type = CTBE; break;
}


/** If "Type" is null or undefined then options will be null,
* otherwise it will create a options iterable based on our array
*/
if (type) {
	options = type.map((el) => <option key={el}>{el}</option>);
}


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const Activites = [{label:"Ac1", value :"1"},{label:"Ac2", value : "2"},{label : "Ac3", value: "3"},{label : "Ac4", value : "4"}] 
    
  return (
    
    <div className="GestionA">
      <h4>Gestion des projets</h4>
     
     <div className='ajout-export'>
        <button type="button" className="btn btn-success CreationP" onClick={handleShow}><i className="fa-solid fa-plus"></i>Avancement d'une activité</button>
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
                <select className="form-select client " aria-label="Default select example" onChange={changeSelectOptionHandler} required>
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
            <label>Projet</label>
                <select className="form-select projet" aria-label="Default select example" required>
                {options}
                </select>
            </div>
            <div className='col-md-4 col-sm-8'>
            <label>Activités</label>
            <Select className="activites-select" style={{font_size:14}} isMulti options={Activites} required />
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
            <input type="date" className="form-control" id="exampleFormControlInput1" onChange={filterDate} required/>
        </div>
            <div className='col-md-5 col-sm-8'>
                <label for='client'>Client</label>
                <select className="form-select client " aria-label="Default select example" onChange={filterClient} required>
                    <option selected></option>
                    {data
                    .map((item,i)=>(<option key={i} value={i}>{item.id}</option>))
                  }
                </select>
            </div>
            <div className='col-md-5 col-sm-8'>
                <label for="equipe">Projet</label>
                <select className="form-select projet" aria-label="Default select example" onChange={filterProjet} required>
                    <option selected></option>
                    {data
                    .map((item,i)=>(<option key={i} value={i}>{item.id}</option>))
                  }
                </select>
            </div>
            <div>
                <button type="button" className="btn filter"><i className="fa-solid fa-filter"></i>Afficher</button>
            </div>
            <div className='col-md-5 col-sm-8'>
            <label for="equipe">Catégorie1</label>
                <select className="form-select projet" aria-label="Default select example" onChange={filterCat1} required>
                    <option selected></option>
                    <option value="3">Génie civil</option>
                    <option value="4">Autre</option>
                    <option value="qui est esse">qui est esse</option>
                </select>
            </div>
            <div className='col-md-5 col-sm-8'>
            <label for="equipe">Catégorie2</label>
                <select className="form-select projet" aria-label="Default select example" onChange={filterCat2} required>
                    <option selected></option>
                    <option value="1">APS</option>
                    <option value="2">APD</option>
                    <option value="3">DOE</option>
                    
                </select>
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
          {data
            
            .filter((value) => {
              return String(value.title) === String(selectedClient) 
              ||  String(value.title) === String(selectedProjet) ||  String(value.title) === String(selectedCat1) ||  String(value.title) === String(selectedCat2)
              })
          .map((item, i) => (
                  <tr key={i}>
                      <td>{item.userId}</td>
                      <td>{item.id}</td>
                      <td>{item.title}</td>
                      <td>{item.body}</td>
                      <td>{item.userId}</td>
                      <td>{item.id}</td>
                      <td>{item.title}</td>
                      <td>{item.userId}</td>
                      <td><button className='btn btn-outline-primary'><i class="fa-solid fa-pen-to-square"></i></button></td>
            </tr>
            ))
            }
          </tbody>
      </table>
    </div>
  )
}
