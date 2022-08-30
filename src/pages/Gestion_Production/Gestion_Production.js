
import { Link } from 'react-router-dom'
import PopupCentrer from '../../fonctions/PopupCentrer'
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap'
import Production from './production'
import React, { useState, useEffect, useRef } from 'react'
import { useDownloadExcel } from 'react-export-table-to-excel'
import { Navs } from '../../components/Navs'
export default function Gestion_Production() {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose1 = () => setShow(false);
  const handleShow1 = () => setShow(true);
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
  const URL = 'http://127.0.0.1:8000/api/listp';

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
        filename: 'Projet table',
        sheet: 'Projets'
    })
  //........................................................................................................................
    const [show, setShow] = useState(false);

//Ajouter un projet
    const [id,setId]=useState(null)
    const [name,setName]=useState([])
    const [client,setClient]=useState([])
    const [date,setDate]=useState([])
    const [activite,setActivite]=useState([])
    const [objectif,setObjectif]=useState([])
    const [percentage,setPercentage]=useState([])
    const [categ1,setCateg1]=useState([])
    const [categ2,setCateg2]=useState([])
    const [commentaire,setCommentaire]=useState([])
    const [eq,setEq]=useState([])
    async function creerProjet()
    {
        let item={name,client,date,activite,objectif,percentage,commentaire,date,eq,categ1,categ2}
        let res=await fetch("http://localhost:8000/api/addprojet",{
            method:'POST',
            body:JSON.stringify(item),
            headers:{
                "Content-Type":'application/json',
                "Accept":'application/json'
            }
        })
        res=await res.json()
        alert("Le projet à été ajouté avec succès")
      //filtrer la liste des projets selon la liste des clients  
    }///////////////////////
  function selectProjet(i)
  {
      let item=data[i]
       setActivite(item.activite)
        setObjectif(item.objectif)
        setCommentaire(item.commentaire)
        setId(item.id)
  }
    // Modifier le projet
  function updateProjet(){
    let item={activite,objectif,commentaire,id}
    console.warn("item",item)
    fetch(`http://localhost:8000/api/updateProjet/${id}`, {
      method: 'PUT',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(item)
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
        fetchData()
      })
    })
    alert("Votre projet a été modifié")

  }
  //Supprimer un projet
  function deleteProjet(id) {
    fetch(`http://127.0.0.1:8000/api/delete/${id}`, {
      method: 'DELETE'
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
        fetchData()
      })
    })
  }
  return (
    <>
    <Navs/>
    <div className="main">
      
      <h4>Gestion des projets</h4>
      <div className='ajout-export'>
          <button type="button" className="btn btn-success CreationP" onClick={handleShow}><i className="fa-solid fa-plus"></i>Créer un nouveau projet</button>
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
          <Modal.Title>Creation d'un nouveau projet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='row'>
              <div className="mb-3 col-md-5 col-sm-8">
                  <label for="exampleFormControlInput1" className="form-label">Date</label>
                  <input type="date" className="form-control" id="exampleFormControlInput1"  required="required" value={date} onChange={(e)=>setDate(e.target.value)} />
              </div>
              <div className="mb-3 col-md-5 col-sm-8">
              <label for='client'>Client</label>
              <select className="form-select client " name='client' aria-label="Default select example" onChange={(e)=>setClient(e.target.value)} >
                   <option value="" selected></option>
                  {data
                    .map((item,i)=>(<option key={i} value={item.client}>{item.client}</option>))
                  }
              </select>
              <input type="text" className="form-control"  id="projet" required value={client} onChange={(e)=>setClient(e.target.value)}/>
              </div>
              <div className='col-md-5 col-sm-8'>
                  <label for="projet">Projet</label>
                  <input type="text" className="form-control"  id="projet" required value={name} onChange={(e)=>setName(e.target.value)} />
              </div>
              <div className='col-md-5 col-sm-8'>
                <label for="equipe">Catégorie1</label>
                  <select className="form-select" aria-label="Default select example" value={categ1} onChange={(e)=>setCateg1(e.target.value)} required>
                  <option value="" selected></option>
                  {data
                    .map((item,i)=>(<option key={i} value={item.categ1}>{item.categ1}</option>))
                  }
                  </select>
                  <input type="text" className="form-control"  id="categ1" required value={categ1} onChange={(e)=>setCateg1(e.target.value)}/>
              </div>
              <div className='col-md-5 col-sm-8'>
                <label for="equipe">Catégorie2</label>
                <select className="form-select" aria-label="Default select example" value={categ2} onChange={(e)=>setCateg2(e.target.value)} required>
                    <option value="" selected></option>
                    {data
                      .map((item,i)=>(<option key={i} value={item.categ2}>{item.categ2}</option>))
                    }
                    </select>
                    <input type="text" className="form-control"  id="categ2" required value={categ2} onChange={(e)=>setCateg2(e.target.value)}/>
              </div>
              <div className='col-md-5 col-sm-8'>
                  <label for="equipe">Activités</label>
                  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" value={activite} onChange={(e)=>setActivite(e.target.value)} required></textarea>
              </div>
              <div className=" col-md-5 col-sm-8">
                  <label for="prod">Production</label>
                  <input type="number" className="form-control"  id="prod" value={objectif} onChange={(e)=>setObjectif(e.target.value)} required />
              </div>

              <div className="form-floating col-md-5 col-sm-8">
                  <label for="floatingTextarea">Commentaire</label>
                  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" value={commentaire} onChange={(e)=>setCommentaire(e.target.value)} required></textarea>
              </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Annuler
          </Button>
          <Button variant="primary" onClick={creerProjet}>Enregistrer</Button>
        </Modal.Footer>
      </Modal>
      <form className='row form-filtre' name='formulaire'>
        <legend>Filtres</legend>
            <div className='col-md-5 col-sm-8'>
                <label for='client'>Client</label>
                <select className="form-select client " name='client' aria-label="Default select example" onChange={filterClient} >
                   <option value="" selected></option>
                  {data
                    .map((item,i)=>(<option key={i} value={item.client}>{item.client}</option>))
                  }
                </select>

            </div>
            <div className='col-md-5 col-sm-8'>
                <label for="equipe">Projet</label>
                <select className="form-select projet" name='projet' aria-label="Default select example" onChange={filterProjet} required >
                  <option value="" selected></option>
                  {data
                    .map((item,i)=>(<option key={i} value={item.name}>{item.name}</option>))
                  }
                </select>
            </div>
            <div className='col-md-5 col-sm-8'>
            <label for="equipe">Catégorie1</label>
                <select className="form-select projet" aria-label="Default select example" onChange={filterCat1} required>
                    <option   value="" selected></option>
                    {data
                    .map((item,i)=>(<option key={i} value={item.categ1}>{item.categ1}</option>))
                  }
                </select>
            </div>
            <div className='col-md-5 col-sm-8'>
            <label for="cat2">Catégorie2</label>
                <select className="form-select projet" aria-label="Default select example" onChange={filterCat2} required>
                    <option  value="" selected></option>
                    {data
                    .map((item,i)=>(<option key={i} value={item.categ2}>{item.categ2}</option>))
                  }
                    
                </select>
            </div>
      </form>
      <div className='table-responsive table-wrapper-scroll-y my-custom-scrollbar'>
      <table className="table table-bordered " ref={tableRef}>
          <thead>
              <tr>
                  <th scope="col" onClick={()=>sortingD("date")}>Date</th>
                  <th scope="col" onClick={()=>sortingS("client")}>Client</th>
                  <th scope="col" onClick={()=>sortingS("name")}>Projet</th>
                  <th scope="col" >Catégorie1</th>
                  <th scope="col" >Catégorie2</th>
                  <th scope="col" onClick={()=>sortingS("activite")}>Activités</th>
                  <th scope="col" onClick={()=>sortingN("objectif")}>Production</th>
                  <th scope="col">Commentaire</th>
                  <th scope="col">Traité par</th>
                  <th scope="col">Modifier</th>
                  <th scope="col">Supprimer</th>
              </tr>
          </thead>
          <tbody >
             {data
            
                .filter((value) => {
                  if (String(selectedClient)=="" && String(selectedProjet)=="" && (selectedCat1)=="" && String(selectedCat2)==""){
                    return String(value.client) !== String(selectedClient)
                  }else{
                      return (String(value.client) === String(selectedClient)||  String(value.name) === String(selectedProjet) 
                  ||  String(value.categ1) === String(selectedCat1) ||  String(value.categ2) === String(selectedCat2))
                  }
                  })
              .map((item, i) => (
                      <tr key={i}>
                          <td>{item.date}</td>
                          <td>{item.client}</td>
                          <td>{item.name}</td>
                          <td>{item.categ1}</td>
                          <td>{item.categ2}</td>
                          <td>{item.activite}</td>
                          <td>{item.objectif}</td>
                          <td>{item.commentaire}</td>
                          <td></td>
                          <td><button className='btn btn-outline-primary' onClick={()=>selectProjet(i)}><i class="fa-solid fa-pen-to-square"></i></button></td>
                          <td><button className='btn btn-outline-danger' onClick={()=>deleteProjet(item.id)}><i class="fa-solid fa-trash-can"></i></button></td>
                </tr>
                ))
                }
          </tbody>
        </table>
        <div>
          <input type="text" value={activite}  onChange={(e)=>{setActivite(e.target.value)}}/> <br /><br />
          <input type="number" value={objectif}  onChange={(e)=>{setObjectif(e.target.value)}}/> <br /><br />
          <input type="text" value={commentaire}   onChange={(e)=>{setCommentaire(e.target.value)}} /> <br /><br />
          <button onClick={updateProjet} >Modifier</button>  
      </div>
      </div>
      
    </div></>
  )
}
