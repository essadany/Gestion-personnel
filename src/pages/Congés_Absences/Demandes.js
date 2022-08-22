import React, { useState, useEffect, useRef } from 'react'
import { useDownloadExcel } from 'react-export-table-to-excel'
import Creer_absences from './Creer_absences'
import './Demandes.css'
import { Modal,Button } from 'react-bootstrap'

export default function Demandes() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  /* const [prenom,setPrenom]=useState("")
    const [nom,setNom]=useState("")
    const [email,setEmail]=useState("")
    const [pass,setPass]=useState("")
    const [sexe,setSexe]=useState("")
    const [date_debut,setDate_debut]=useState("")
    const [date_fin,setDate_fin]=useState("")
    const [journee1,setJournee1]=useState("")
    const [journee2,setJournee2]=useState("")
    const [typeAbs,setTypeAbs]=useState("")
    const [justificatif,setJustificatif]=useState("")
    const [comment,setComment]=useState("")
    
    async function ajouterAbs()
    {
        let item={prenom,nom,email,pass,sexe,date_naissance,nombre_enfant,nationalite,identite,rue,codep,ville,pays,tel_p,tel_f,statu_matrimonial,email_perso,contact_urgence,fonction,type_contart,date_entree,date_sortie,banque,iban,rib,securite_social,matricule,role}
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
    //exporter la table d'historiques d'absences........................................................
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
    //.............................................................

  return (
    <div className='demandes'>
        <h4>Mes demandes</h4>
        <div className='ajout-export'>
          <button type="button" class="btn btn-warning CreationP" onClick={handleShow}><i class="fa-solid fa-plus"></i>Ajouter une absence</button>
          <button type='button' className='btn btn-success' onClick={onDownload}><i className='fa-solid fa-file-excel' ></i>EXPORT EXCEL</button>
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
            {/* onClick={ajouterAbs} */}<Button variant="success">Valider</Button>
            </Modal.Footer>
        </Modal>



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
                {data.map((item, i) => (
                        <tr key={i}>
                            <td>{item.userId}</td>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.body}</td>
                            <td>{item.userId}</td>
                            <td>{item.id}</td>
                            <td><button className='btn btn-outline-primary'><i class="fa-solid fa-pen-to-square"></i></button></td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
