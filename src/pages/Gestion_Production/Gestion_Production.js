
import { Link } from 'react-router-dom'
import PopupCentrer from '../../fonctions/PopupCentrer'
import "./Gestion_Production.css"
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap'
import Production from './production'
import React, { useState, useEffect, useRef } from 'react'
import { useDownloadExcel } from 'react-export-table-to-excel'

export default function Gestion_Production() {
  /* const [projet,setProjet]=useState("")
    const [client,setClient]=useState("")
    const [date,setDate]=useState("")
    const [activites,setActivites]=useState("")
    const [production,setProduction]=useState("")
    const [categorie1,setCategorie1]=useState("")
    const [categorie2,setCategorie]=useState("")
    const [comment,setComment]=useState("")

    async function CreerProjet()
    {
        let item={projet,client,date,activites,production,sexe,date_naissance,nombre_enfant,nationalite,identite,rue,codep,ville,pays,tel_p,tel_f,statu_matrimonial,email_perso,contact_urgence,fonction,type_contart,date_entree,date_sortie,banque,iban,rib,securite_social,matricule,role}
        let res=await fetch("http://localhost:8000/api/register",{
            method:'POST',
            body:JSON.stringify(item),
            headers:{
                "Content-Type":'application/json',
                "Accept":'application/json'
            }
        })
        res=await res.json()
    }  */

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
  //........................................................................................................................
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

  return (
    
    <div className="gestionP">
      <h4>Gestion des projets</h4>
      <div className='ajout-export'>
          <button type="button" className="btn btn-success CreationP" onClick={handleShow}><i className="fa-solid fa-plus"></i>Créer un nouveau projet</button>
          <button type='button' className='btn btn-success'><i className='fa-solid fa-file-excel'></i>EXPORT EXCEL</button>
            <button type='button' className='btn btn-primary'><i className='fa-solid fa-print'></i>IMPRIMER</button>
        </div>
     <Modal
        size='lg'
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Creation d'un nouveau projet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Production />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Annuler
          </Button>
          {/* onClick={CreerProjet} */}<Button variant="primary">Enregistrer</Button>
        </Modal.Footer>
      </Modal>
      <form className='row' name='formulaire'>
        <legend>Filtres</legend>
        <div className="mb-3 col-md-5 col-sm-8">
            <label for="exampleFormControlInput1" className="form-label">Date  du debut</label>
            <input type="date" className="form-control" id="exampleFormControlInput1"  required/>
        </div>
            <div className='col-md-5 col-sm-8'>
                <label for='client'>Client</label>
                <select className="form-select client " name='client' aria-label="Default select example" onChange={changeSelectOptionHandler} required>
                    <option selected value="KYNTUS">KYNTUS</option>
                    <option value="CIRCET" >CIRCET</option>
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
                <select className="form-select projet" name='projet' aria-label="Default select example" required >
                  {options}
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
            <div>
                <button type="button" className="btn filter"><i className="fa-solid fa-filter"></i>Afficher</button>
            </div>
      </form>
      
      <table className="table" ref={tableRef}>
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
            {data.map((item, i) => (
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
                ))}
          </tbody>
      </table>
    </div>
  )
}
