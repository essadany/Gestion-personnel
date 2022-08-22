import React,{ useState } from 'react'
import Profile from './Profile'
import  Modal  from 'react-bootstrap/Modal'
import {Button} from 'react-bootstrap'
import './Personnel.css'

export default function Personnel() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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

  return (
    <div className='personnel'>
        <h4>Gestion des salariés</h4>
        <div id="ab">
            <button type='button' className='btn btn-warning' onClick={handleShow}><i className='fa-solid fa-plus'></i>NOUVEAU SALARIE</button>
            
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
                            <label for="nom" className="form-label form-label-sm">Nom</label>
                            <input type="text" className="form-control form-control-sm" name="nom" id="nom"  value={nom} onChange={(e)=>setnom(e.target.value)}/>
                        </div>
                        <div className="form-group col-lg-3 col-md-5 col-sm-10">
                            <label for="prenom" className="form-label form-label-sm">Prénom</label>
                            <input type="text" className="form-control form-control-sm" name="prenom" id="prenom"  value={prenom} onChange={(e)=>setprenom(e.target.value)}/>
                        </div>
                        <div className="form-check col-lg-3 col-md-5 col-sm-10">
                            <label className="form-label form-label-sm" for="flexRadioDefault1" >Sexe</label>
                            <input type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={sexe} onChange={(e)=>setsexe("Homme")}/> Homme
                            <input type="radio" name="flexRadioDefault" id="flexRadioDefault2" value={sexe} onChange={(e)=>setsexe("Femme")}  /> Femme
                        </div>
                        <div className="form-group col-lg-3 col-md-5 col-sm-10">
                            <label for="naissance" className="form-label form-label-sm">Date de naissance</label>
                            <input type="date" className="form-control form-control-sm" name="naissance"id="naissance" value={date_naissance} onChange={(e)=>setdate_naissance(e.target.value)} />
                        </div>
                        <div className="form-group col-lg-3 col-md-5 col-sm-10">
                            <label for="natio" className="form-label form-label-sm">Nationalité</label>
                            <input type="text" className="form-control form-control-sm" name="natio" id="natio"  value={nationalite} onChange={(e)=>setnationalite(e.target.value)}/>
                        </div>
                        <div className="form-group col-lg-3 col-md-5 col-sm-10">
                            <label for="securite" className="form-label form-label-sm">N° Sécurité sociale</label>
                            <input type="number" min="1000000000000" max="" className="form-control form-control-sm" name="securite" id="securite"  value={securite_social} onChange={(e)=>setsecurite_social(e.target.value)}/>
                        </div>
                         <div className="form-group col-lg-3 col-md-5 col-sm-10">
                            <label for="inputAddress" className="form-label form-label-sm">Addresse</label>
                            <input type="text" className="form-control form-control-sm" id="inputAddress" placeholder="N° Rue" value={rue} onChange={(e)=>setrue(e.target.value)} />
                            <input type="text" className="form-control form-control-sm" id="inputAddress" placeholder="Code postale"  value={codep} onChange={(e)=>setcodep(e.target.value)}/>
                            <input type="text" className="form-control form-control-sm" id="inputAddress" placeholder="Ville"  value={ville} onChange={(e)=>setville(e.target.value)}/>
                            <input type="text" className="form-control form-control-sm" id="inputAddress" placeholder="Pays"  value={pays} onChange={(e)=>setpays(e.target.value)}/>
                         </div>
                        <div className="form-group col-lg-3 col-md-5 col-sm-10">   
                            <label for="statut" className="form-label form-label-sm">Statut matrimonial</label>
                            <input type="text" className="form-control form-control-sm" name="statut" id="statut"  value={statu_matrimonial} onChange={(e)=>setstatu_matrimonial(e.target.value)}/>
                        </div>
                        <div className="form-group col-lg-3 col-md-5 col-sm-10">
                            <label for="enfants" className="form-label form-label-sm">Nombre d'enfants</label>
                            <input type="number" min="0" max="10" className="form-control form-control-sm" name="enfants" id="enfants"  value={nombre_enfant} onChange={(e)=>setnombre_enfant(e.target.value)}/>
                        </div>
                        <div className="form-group col-lg-3 col-md-5 col-sm-10">   
                            <label for="identite" className="form-label form-label-sm">Type du pièce d'identité</label>
                            <input type="text" className="form-control form-control-sm" name="identite" id="identite"  value={identite} onChange={(e)=>setidentite(e.target.value)}/>
                        </div>
                        <div className="form-group col-lg-3 col-md-5 col-sm-10">
                            <label for="tel1" className="form-label form-label-sm">Tél portable</label>
                            <input type="tel" className="form-control form-control-sm" name="tel1" id="tel1" value={tel_p} onChange={(e)=>settel_p(e.target.value)}/>
                        </div>
                        <div className="form-group col-lg-3 col-md-5 col-sm-10">
                            <label for="tel" className="form-label form-label-sm">Tél fixe</label>
                            <input type="tel" className="form-control form-control-sm" name="tel2" id="tel2"  value={tel_f} onChange={(e)=>settel_f(e.target.value)}/>
                        </div>
                        <div className="form-group col-lg-3 col-md-5 col-sm-10">
                            <label for="emailPe" className="form-label form-label-sm">Email Personnel</label>
                            <input type="email" className="form-control form-control-sm" id="emailPe"  value={email_perso} onChange={(e)=>setemail_perso(e.target.value)}/>
                        </div>
                        <div className="form-group col-lg-3 col-md-5 col-sm-10">
                            <label for="emailPr" className="form-label form-label-sm">Email Professionnel</label>
                            <input type="email" className="form-control form-control-sm" id="emailPr" value={email} onChange={(e)=>setemail(e.target.value)}/>
                        </div>
                        <div className="form-group col-lg-3 col-md-5 col-sm-10">
                            <label for="tel1" className="form-label form-label-sm">Contact d'urgence</label>
                            <input type="tel" className="form-control form-control-sm" name="tel1" id="tel1"  value={contact_urgence} onChange={(e)=>setcontact_urgence(e.target.value)}/>
                        </div>
                    <legend className="titres">Poste</legend>
                        <div className="form-group col-lg-3 col-md-5 col-sm-10">
                            <label for="fonction" className="form-label form-label-sm">Fonction</label>
                            <input type="text" min="13" className="form-control form-control-sm" id="fonction"  value={fonction} onChange={(e)=>setfonction(e.target.value)}/>
                        </div>
                        <div className="form-group col-lg-3 col-md-5 col-sm-10">
                            <label for="contrat" className="form-label form-label-sm">Type de contrat</label>
                            <input type="text" min="13" className="form-control form-control-sm" id="contrat"  value={type_contart} onChange={(e)=>settype_contart(e.target.value)}/>
                        </div>
                        <div className="form-group col-lg-3 col-md-5 col-sm-10">
                            <label for="matricule" className="form-label form-label-sm">Matricule</label>
                            <input type="text" className="form-control form-control-sm" id="matricule" name="matricule"  value={matricule} onChange={(e)=>setmatricule(e.target.value)}/>
                        </div>
                        <div className="form-group col-lg-3 col-md-5 col-sm-10">
                            <label for="entree" className="form-label form-label-sm">Date d'entrée</label>
                            <input type="date" className="form-control form-control-sm" id="entree"  value={date_entree} onChange={(e)=>setdate_entree(e.target.value)}/>
                        </div>
                        <legend className="titres">Banque</legend>
                        <div className="form-group col-lg-3 col-md-5 col-sm-10">
                            <label for="Intitule" className="form-label form-label-sm">Intitulé</label>
                            <input type="text" min="13" className="form-control form-control-sm" id="Intitule"  value={banque} onChange={(e)=>setbanque(e.target.value)}/>
                        </div>
                        <div className="form-group col-lg-3 col-md-5 col-sm-10">
                            <label for="iban" className="form-label form-label-sm">IBAN</label>
                            <input type="text" min="13" className="form-control form-control-sm" id="iban"  value={iban} onChange={(e)=>setiban(e.target.value)}/>
                        </div>
                        <div className="form-group col-lg-3 col-md-5 col-sm-10">
                            <label for="RIB" className="form-label form-label-sm">RIB</label>
                            <input type="text" className="form-control form-control-sm" id="RIB" name="RIB"  value={rib} onChange={(e)=>setrib(e.target.value)}/>
                        </div>
                      
                    </form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Annuler
                </Button>
                <Button variant="success" onClick={ajoute}>Valider</Button>
                </Modal.Footer>
            </Modal>
            <button type='button' className='btn btn-success'><i className='fa-solid fa-file-excel'></i>EXPORT EXCEL</button>
            <button type='button' className='btn btn-primary'><i className='fa-solid fa-print'></i>IMPRIMER</button>
        </div>
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

        <table className="p">
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
                <tr>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td><button><i class="fa-solid fa-user-xmark"></i></button></td>
                </tr>
                <tr>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td><button><i class="fa-solid fa-user-xmark"></i></button></td>
                </tr>
                <tr>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td><button><i class="fa-solid fa-user-xmark"></i></button></td>
                </tr>
                <tr>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td><button><i class="fa-solid fa-user-xmark"></i></button></td>
                </tr>
            </tbody>
        </table>

      
    </div>
  )
}
