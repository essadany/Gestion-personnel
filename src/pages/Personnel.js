import React, { useState, useEffect, useRef } from 'react'
import Profile from './Profile'
import  Modal  from 'react-bootstrap/Modal'
import {Button} from 'react-bootstrap'
import { useDownloadExcel } from 'react-export-table-to-excel'
import Select from 'react-select'
import './Personnel.css'

export default function Personnel() {
    const roles =[{value:"1", label: "SA"},{value: "2", label: "A"},{value:"3", label: "TE"},{value:"4", label: "C"},,{value:"5", label: "CA"},{value:"6", label: "BE"}]
    /* 
    const [prenom,setprenom]=useState("")
    const [nom,setnom]=useState("")
    const [email,setemail]=useState("")
    const [pass,setpass]=useState("")
    const [sexe,setsexe]=useState("")
    const [date_naissance,setdate_naissance]=useState("")
    const [nombre_enfant,setnombre_enfant]=useState("")
    const [nationalite,setnationalite]=useState("")
    const [identite,setidentite]=useState("")
    const [rue,setrue]=useState("")
    const [codep,setcodep]=useState("")
    const [ville,setville]=useState("")
    const [pays,setpays]=useState("")
    const [tel_p,settel_p]=useState("")
    const [tel_f,settel_f]=useState("")
    const [statu_matrimonial,setstatu_matrimonial]=useState("")
    const [email_perso,setemail_perso]=useState("")
    const [contact_urgence,setcontact_urgence]=useState("")
    const [fonction,setfonction]=useState("")
    const [type_contart,settype_contart]=useState("")
    const [date_entree,setdate_entree]=useState("")
    const [date_sortie,setdate_sortie]=useState("")
    const [banque,setbanque]=useState("")
    const [iban,setiban]=useState("")
    const [rib,setrib]=useState("")
    const [securite_social,setsecurite_social]=useState("")
    const [matricule,setmatricule]=useState("")
    const [role,setrole]=useState("")

    async function ajoute()
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
    } 
    async function licencier({
    async function modifier(){
        
    }
    }) */
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    //exporter la table des salariés........................................................
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
    <div className='personnel'>
        <h4>Gestion des salariés</h4>
        <div className='ajout-export'>
            <button type='button' className='btn btn-warning' onClick={handleShow}><i className='fa-solid fa-user-plus'></i>Nouveau salarié</button>
          <button type='button' className='btn btn-success' onClick={onDownload}><i className='fa-solid fa-file-excel' ></i>EXPORT EXCEL</button>
          <button type='button' className='btn btn-primary'><i className='fa-solid fa-print'></i>IMPRIMER</button>
        </div>
            
        <Modal
            size='xl'
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
            <Modal.Title>Ajouter un nouveau personnel</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form className='row'>
                    <legend className="titres">Informations personnelles</legend>
                        <div className=" form-group col-lg-3 col-md-5 col-sm-10">
                            <label for="pwd" className="form-label form-label-sm">Mot de passe</label>
                            <input type="text" className="form-control form-control-sm" name="pwd" id="nom"  />
                        </div>
                        <div className='select-group col-lg-3 col-md-5 col-sm-10'>
                            <label for="role">Rôle</label>
                            <Select id="role" options={roles} />
                        </div>
                        <div className=" form-group col-lg-3 col-md-5 col-sm-10">
                            <label for="nom" className="form-label form-label-sm">Nom</label>
                            <input type="text" className="form-control form-control-sm" name="nom" id="nom"  />
                        </div>
                        <div className="form-group col-lg-3 col-md-5 col-sm-10">
                            <label for="prenom" className="form-label form-label-sm">Prénom</label>
                            <input type="text" className="form-control form-control-sm" name="prenom" id="prenom"  />
                        </div>
                        <div className="form-check col-lg-3 col-md-5 col-sm-10">
                            <label className="form-label form-label-sm" for="flexRadioDefault1" >Sexe</label>
                            <input type="radio" name="flexRadioDefault" value="homme" id="flexRadioDefault1" /> Homme
                            <input type="radio" name="flexRadioDefault" value="femme" id="flexRadioDefault2"  /> Femme
                        </div>
                        <div className="form-group col-lg-3 col-md-5 col-sm-10">
                            <label for="naissance" className="form-label form-label-sm">Date de naissance</label>
                            <input type="date" className="form-control form-control-sm" name="naissance"id="naissance"  />
                        </div>
                        <div className="form-group col-lg-3 col-md-5 col-sm-10">
                            <label for="natio" className="form-label form-label-sm">Narionalité</label>
                            <input type="text" className="form-control form-control-sm" name="natio" id="natio"  />
                        </div>
                        <div className="form-group col-lg-3 col-md-5 col-sm-10">
                            <label for="securite" className="form-label form-label-sm">N° Sécurité sociale</label>
                            <input type="text" min="1000000000000" max="" className="form-control form-control-sm" name="securite" id="securite"  />
                        </div>
                         <div className="form-group col-lg-3 col-md-5 col-sm-10">
                            <label for="inputAddress" className="form-label form-label-sm">Addresse</label>
                            <input type="text" className="form-control form-control-sm" id="inputAddress" placeholder="N° Rue"  />
                            <input type="text" className="form-control form-control-sm" id="inputAddress" placeholder="Code postale"  />
                            <input type="text" className="form-control form-control-sm" id="inputAddress" placeholder="Ville"  />
                            <input type="text" className="form-control form-control-sm" id="inputAddress" placeholder="Pays"  />
                         </div>
                        <div className="form-group col-lg-3 col-md-5 col-sm-10">   
                            <label for="statut" className="form-label form-label-sm">Statut matrimonial</label>
                            <input type="text" className="form-control form-control-sm" name="statut" id="statut"  />
                        </div>
                        <div className="form-group col-lg-3 col-md-5 col-sm-10">
                            <label for="enfants" className="form-label form-label-sm">Nombre d'enfants</label>
                            <input type="number" min="0" max="10" className="form-control form-control-sm" name="enfants" id="enfants"  />
                        </div>
                        <div className="form-group col-lg-3 col-md-5 col-sm-10">   
                            <label for="identite" className="form-label form-label-sm">Type du pièce d'identité</label>
                            <input type="text" className="form-control form-control-sm" name="identite" id="identite"  />
                        </div>
                        <div className="form-group col-lg-3 col-md-5 col-sm-10">
                            <label for="tel1" className="form-label form-label-sm">Tél portable</label>
                            <input type="tel" className="form-control form-control-sm" name="tel1" id="tel1"  />
                        </div>
                        <div className="form-group col-lg-3 col-md-5 col-sm-10">
                            <label for="tel" className="form-label form-label-sm">Tél fixe</label>
                            <input type="tel" className="form-control form-control-sm" name="tel2" id="tel2"  />
                        </div>
                        <div className="form-group col-lg-3 col-md-5 col-sm-10">
                            <label for="emailPe" className="form-label form-label-sm">Email Personnel</label>
                            <input type="email" className="form-control form-control-sm" id="emailPe"  />
                        </div>
                        <div className="form-group col-lg-3 col-md-5 col-sm-10">
                            <label for="emailPr" className="form-label form-label-sm">Email Professionnel</label>
                            <input type="email" className="form-control form-control-sm" id="emailPr" />
                        </div>
                        <div className="form-group col-lg-3 col-md-5 col-sm-10">
                            <label for="tel1" className="form-label form-label-sm">Contact d'urgence</label>
                            <input type="tel" className="form-control form-control-sm" name="tel1" id="tel1"  />
                        </div>
                    <legend className="titres">Poste</legend>
                        <div className="form-group col-lg-3 col-md-5 col-sm-10">
                            <label for="fonction" className="form-label form-label-sm">Fonction</label>
                            <input type="text" min="13" className="form-control form-control-sm" id="fonction"  />
                        </div>
                        <div className="form-group col-lg-3 col-md-5 col-sm-10">
                            <label for="contrat" className="form-label form-label-sm">Type de contrat</label>
                            <input type="text" min="13" className="form-control form-control-sm" id="contrat"  />
                        </div>
                        <div className="form-group col-lg-3 col-md-5 col-sm-10">
                            <label for="matricule" className="form-label form-label-sm">Matricule</label>
                            <input type="text" className="form-control form-control-sm" id="matricule" name="matricule"  />
                        </div>
                        <div className="form-group col-lg-3 col-md-5 col-sm-10">
                            <label for="entree" className="form-label form-label-sm">Date d'entrée</label>
                            <input type="date" className="form-control form-control-sm" id="entree"  value="" />
                        </div>
                        <legend className="titres">Banque</legend>
                        <div className="form-group col-lg-3 col-md-5 col-sm-10">
                            <label for="Intitule" className="form-label form-label-sm">Intitulé</label>
                            <input type="text" min="13" className="form-control form-control-sm" id="Intitule"  />
                        </div>
                        <div className="form-group col-lg-3 col-md-5 col-sm-10">
                            <label for="iban" className="form-label form-label-sm">IBAN</label>
                            <input type="text" min="13" className="form-control form-control-sm" id="iban"  />
                        </div>
                        <div className="form-group col-lg-3 col-md-5 col-sm-10">
                            <label for="RIB" className="form-label form-label-sm">RIB</label>
                            <input type="text" className="form-control form-control-sm" id="RIB" name="RIB"  />
                        </div>
                      
                    </form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Annuler
                </Button>
                {/* onClick={ajouteAbs} */}<Button variant="success" >Valider</Button>
                </Modal.Footer>
            </Modal>
        <h5>Filtres</h5>
        <form className='row'>
            <div className="mb-3 col-md-5 col-sm-8">
            <label for="exampleFormControlInput1" className="form-label">Date  d'entrée</label>
            <input type="date" className="form-control" id="exampleFormControlInput1"  required/>
            </div>
            <div className=" form-group col-lg-3 col-md-5 col-sm-10">
                <label for="nom" className="form-label form-label-sm">Nom</label>
                <input type="text" className="form-control form-control-sm" name="nom" id="nom"  />
            </div>
            <div className="form-group col-lg-3 col-md-5 col-sm-10">
                <label for="prenom" className="form-label form-label-sm">Prénom</label>
                <input type="text" className="form-control form-control-sm" name="prenom" id="prenom"  />
            </div>
            <div className="form-group col-lg-3 col-md-5 col-sm-10">
                <label for="fonction" className="form-label form-label-sm">Fonction</label>
                <input type="text" min="13" className="form-control form-control-sm" id="fonction"  />
            </div>
            <div>
                <button type="button" className="btn filter"><i className="fa-solid fa-filter"></i>Afficher</button>
            </div>
        </form>

        <table className="table p" ref={tableRef}>
            <thead>
                <tr>
                    <th >Nom</th>
                    <th >Prénom</th>
                    <th >Date de naissance</th>
                    <th >Poste</th>
                    <th >Date d'entrée</th>
                    <th >Date de sortie</th>
                    <th >Dernière fiche du paie</th>
                    <th >Congés restants</th>
                    <th >Modifier</th>
                    <th >Licencier</th>
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
                        {/* onClick={modifierS} */}<td><button className='btn btn-outline-primary'><i class="fa-solid fa-pen-to-square"></i></button></td>
                        {/* onClick={licencier} */}<td><button className='btn btn-outline-danger' ><i class="fa-solid fa-user-xmark"></i></button></td>
               </tr>
               ))}
            </tbody>
        </table>

      
    </div>
  )
}
