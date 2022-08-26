import React from "react";
import { Link } from "react-router-dom";
import { Navs } from "../components/Navs";
 export default function Accueil() {
   return (
    <>
    <Navs/>
     <div className="row main">
        
        <div className="card col-lg-3 col-sm-10">
            <div className="card-header">PROCHAINES ABSENCES</div>
            <div className="card-body">
                <h6>Aucune absence à venir.</h6>
            </div>
            <div className="card-footer">
                <button className="btn btn-success"><i className="fa-solid fa-circle-plus"></i> Ajouter une absence</button>
            </div>
        </div>
        <div className="card col-lg-3 col-sm-10">
            <div className="card-header"><i className="fa-solid fa-bell"> </i> Mes notifications</div>
            <div className="card-body">
                <h6>Il n'y a pas de notifications</h6>
            </div>
        </div>


        <div className="card col-lg-3 col-sm-10">
            <div className="card-header">TACHES EN ATTENTE</div>
            <div className="card-body">
                <h6>Vous n'avez aucune tâche à effectuer pour le moment.</h6>
            </div>
            <div className="card-footer">
                <button className="btn btn-success"><i className="fa-solid fa-circle-plus"></i>    Ajouter une tâche</button>
            </div>
        </div>

        <div className="card col-lg-3 col-sm-10">
            <div className="card-header">PROCHAINES ENTRETIENS</div>
            <div className="card-body">
                <h6>Il n'y a pour le moment aucune entretien à venir.</h6>
            </div>
        </div>

     </div></>
   )
 }
 