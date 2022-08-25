
import Creer_absences from './Creer_absences'
import { Modal,Button } from 'react-bootstrap'
import React, { useState, useEffect, useRef } from 'react'
import { useDownloadExcel } from 'react-export-table-to-excel'

export default function Demandes() {
    //Trier la table
    const [order,setOrder] = useState("ASC")
    const sortingD = (col)=>{
        if (order ==="ASC"){
        const sorted = [...data].sort((a,b) =>
        a[col] > b[col]? 1: -1
        );
        getData(sorted)
        setOrder("DSC")
        }
        if (order ==="DSC"){
        const sorted = [...data].sort((a,b) =>
        a[col] < b[col]? 1: -1
        );
        getData(sorted);
        setOrder("ASC")
        }
    }
    const sortingS = (col)=>{
    if (order ==="ASC"){
      const sorted = [...data].sort((a,b) =>
      a[col].toLowerCase() > b[col].toLowerCase() ? 1: -1
    );
    getData(sorted)
    setOrder("DSC")
    }
    if (order ==="DSC"){
      const sorted = [...data].sort((a,b) =>
      a[col].toLowerCase() < b[col].toLowerCase() ? 1: -1
    );
    getData(sorted);
    setOrder("ASC")
    }
    }
    const sortingN = (col)=>{
    if (order ==="ASC"){
        const sorted = [...data].sort((a,b) =>
        Number(a[col]) > Number(b[col]) ? 1: -1
    );
    getData(sorted)
    setOrder("DSC")
    }
    if (order ==="DSC"){
        const sorted = [...data].sort((a,b) =>
        Number(a[col]) < Number(b[col]) ? 1: -1
    );
    getData(sorted);
    setOrder("ASC")
    }
    }
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
const URL = 'http://localhost:8000/api/lista';

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
//Ajouter une absence
    const [debut,setDebut]=useState("")
    const [fin,setFin]=useState("")
    const [du,setDu]=useState("")
    const [au,setAu]=useState("")
    const [statut,setStatut]=useState("")
    const [type,setType]=useState("")
    const [justificatif,setJustificatif]=useState("")
    const [commentaire,setCommentaire]=useState("")
    async function ajouterAbsence()
    {
        let item={debut,fin,du,au,statut,type,justificatif,commentaire}
        let res=await fetch("http://localhost:8000/api/ajouabsence",{
            method:'POST',
            body:JSON.stringify(item),
            headers:{
                "Content-Type":'application/json',
                "Accept":'application/json'
            }
        })
        res=await res.json()
        alert("L'absence à été ajouté avec succès")
    }///////////////////////
//........................................................................................................................
  
  return (
    <div className='main'>
        <h4>Mes demandes</h4>
        
        <div className='ajout-export'>
            <button type="button" className="btn btn-warning CreationP" onClick={handleShow}><i class="fa-solid fa-plus"></i>Ajouter une absence</button>
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
            <form className="d-flex justify-content-around " method="post" action="">
                        <div className="row">
                         <div className="form-group col-md-5 col-sm-6">
                            <label for="debut" className="form-label form-label-sm">Du</label>
                            <input type="date" className="form-control form-control-sm" name="debut"id="debut" value={debut} onChange={(e)=>setDebut(e.target.value)} required />
                          </div>
                          <div className="form-group col-md-5 col-sm-6">
                            <select id="type" className="form-select" value={du} onChange={(e)=>setDu(e.target.value)}name="du">
                                <option selected>Matin</option>
                                <option value="1">Midi</option>
                                <option value="2">Soir</option>
                            </select>
                          </div>
                        
                        <div className="form-group col-md-5 col-sm-6">
                            <label for="fin" className="form-label form-label-sm">Au</label>
                            <input type="date" className="form-control form-control-sm" value={fin} onChange={(e)=>setFin(e.target.value)} name="fin" id="fin" />
                        </div>
                        <div className="form-group col-md-5 col-sm-6">
                            <select id="type" className="form-select " value={au} onChange={(e)=>setAu(e.target.value)} name="au">
                                <option selected>Matin</option>
                                <option value="1">Midi</option>
                                <option value="2">Soir</option>
                            </select>
                        </div>
                        <div className="form-group col-md-5 col-sm-6">
                            <label for="type">Type d'absence</label>
                            <select id="type" className="form-select " value={type} onChange={(e)=>setType(e.target.value)} name="type">
                                <option selected value="Absence non justifiée">Absence non justifiée</option>
                                <option value="Arrêt maladie">Arrêt maladie</option>
                                <option value="Accident de travail">Accident de travail</option>
                                <option value="Congés payés">Congés payés</option>
                                <option value="Congé sans solde">Congé sans solde</option>
                                <option value="Congé parental ou postnatal">Congé parental ou postnatal</option>
                                <option value="Conjointe ou partenaire de PACS enceinte">Conjointe ou partenaire de PACS enceinte</option>
                                <option value="Congé sabbatique">Congé sabbatique</option>
                                <option value="Congés création d'entreprise">Congés création d'entreprise </option>
                                <option value="Congé pour service national">Congé pour service national </option>
                                <option value="Congé pour catastrophe naturelle">Congé pour catastrophe naturelle</option>
                            </select>
                        </div>
                        <div className="form-group col-md-5 col-sm-6">
                            <label for="justificatif" className="form-label form-label-sm">Pièces justificatifs</label>
                            <input type="file" multiple className="form-control form-control-sm" name="justificatif" value={justificatif} onChange={(e)=>setJustificatif(e.target.value)}id="justificatif" />
                        </div>
                        <div className="form-group col-md-5 col-sm-6">
                            <label for="comment" className="form-label form-label-sm">Commentaire</label>
                            <textarea className="form-control form-control-sm" name="comment" id="comment" value={commentaire} onChange={(e)=>setCommentaire(e.target.value)} ></textarea>
                        </div>
                        
                        </div>
                        
                    </form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Annuler
            </Button>
            <Button variant="success" onClick={ajouterAbsence}>Valider</Button>
            </Modal.Footer>
        </Modal>



        <form className='row'>
            <legend>Filtres</legend>
            <div className="form-group col-md-5 col-sm-8">
                <label for="type">Type d'absence</label>
                <select id="type" className="form-select " name="type" onChange={filterType}>
                    <option selected></option>
                    <option value="Absence non justifiée">Absence non justifiée</option>
                    <option value="Arrêt maladie">Arrêt maladie</option>
                    <option value="Accident de travail">Accident de travail</option>
                    <option value="Congés payés">Congés payés</option>
                    <option value="Congé sans solde">Congé sans solde</option>
                    <option value="Congé parental ou postnatal">Congé parental ou postnatal</option>
                    <option value="conjointe ou partenaire de PACS enceinte">conjointe ou partenaire de PACS enceinte</option>
                    <option value="Congé sabbatique">Congé sabbatique</option>
                    <option value="Congés création d'entreprise">Congés création d'entreprise </option>
                    <option value="Congé pour service national">Congé pour service national </option>
                    <option value="Congé pour catastrophe naturelle">Congé pour catastrophe naturelle</option>
                </select>
            </div>
            <div className="form-group col-md-5 col-sm-8">
                <label for="statut">Statut</label>
                <select id="statut" className="form-select " name="statut" onChange={filterStatut} multiple>
                    <option selected></option>
                    <option value="En attente">En attente</option>
                    <option value="Validée">Validée</option>
                    <option value="Refusée">Refusée</option>
                </select>
            </div>
        </form>
        
        <table className="table table-bordered" ref={tableRef}>
            <thead>
                <tr>
                    <th scope="col" onClick={()=>sortingD("debut")}>Debut</th>
                    <th scope="col" onClick={()=>sortingD("fin")}>Fin</th>
                    <th scope="col">Type d'absence</th>
                    <th scope="col">Statut</th>
                    <th scope="col">Modifier</th>
                </tr>
            </thead>
            <tbody>
            {data
               .filter((value) => {
                if (String(selectedStatut)=="" && String(selectedType)==""){
                    return String(value.type) !== String(selectedType)
                  }else{
                    return  String(value.statut) === String(selectedStatut) ||  String(value.type) === String(selectedType)
                  }
                
                }) 
               .map((item, i) => (
                    <tr key={i}>
                        <td>{item.debut}</td>
                        <td>{item.fin}</td>
                        <td>{item.type}</td>
                        <td>{item.statut}</td>
                        <td><button className='btn btn-outline-primary'><i class="fa-solid fa-pen-to-square"></i></button></td>
               </tr>
               ))
               }
               
            </tbody>
        </table>
    </div>
  )
}
