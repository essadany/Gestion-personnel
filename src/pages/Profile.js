import React from 'react';
import "./Profile.css";
export default function () {
  return (
    <div className="profile ">
        <form className='row'>
                    <legend className="titres">Mes informations personnelles</legend>
                        <div className=" form-group col-lg-3 col-md-5 col-sm-10">
                            <label for="nom" className="form-label form-label-sm">Nom</label>
                            <input type="text" className="form-control form-control-sm"  name="nom" id="nom" disabled />
                        </div>
                        <div className="form-group col-lg-3 col-md-5 col-sm-10">
                            <label for="prenom" className="form-label form-label-sm">Prénom</label>
                            <input type="text" className="form-control form-control-sm" name="prenom" id="prenom" disabled />
                        </div>
                        <div className="form-check col-lg-3 col-md-5 col-sm-10">
                            <label className="form-label form-label-sm" for="flexRadioDefault1" >Sexe</label>
                            <input type="radio" name="flexRadioDefault" value="homme" id="flexRadioDefault1" /> Homme
                            <input type="radio" name="flexRadioDefault" value="femme" id="flexRadioDefault2"  /> Femme
                        </div>
                        <div className="form-group col-lg-3 col-md-5 col-sm-10">
                            <label for="naissance" className="form-label form-label-sm">Date de naissance</label>
                            <input type="date" className="form-control form-control-sm" name="naissance"id="naissance" disabled />
                        </div>
                        <div className="form-group col-lg-3 col-md-5 col-sm-10">
                            <label for="natio" className="form-label form-label-sm">Narionalité</label>
                            <input type="text" className="form-control form-control-sm" name="natio" id="natio" disabled />
                        </div>
                        <div className="form-group col-lg-3 col-md-5 col-sm-10">
                            <label for="securite" className="form-label form-label-sm">N° Sécurité sociale</label>
                            <input type="number" min="1000000000000" max="" className="form-control form-control-sm" name="securite" id="securite" disabled />
                        </div>
                         <div className="form-group col-lg-3 col-md-5 col-sm-10">
                            <label for="inputAddress" className="form-label form-label-sm">Addresse</label>
                            <input type="text" className="form-control form-control-sm" id="inputAddress" placeholder="N° Rue" disabled />
                            <input type="text" className="form-control form-control-sm" id="inputAddress" placeholder="Code postale" disabled />
                            <input type="text" className="form-control form-control-sm" id="inputAddress" placeholder="Ville" disabled />
                            <input type="text" className="form-control form-control-sm" id="inputAddress" placeholder="Pays" disabled />
                         </div>
                        <div className="form-group col-lg-3 col-md-5 col-sm-10">   
                            <label for="statut" className="form-label form-label-sm">Statut matrimonial</label>
                            <input type="text" className="form-control form-control-sm" name="statut" id="statut" disabled />
                        </div>
                        <div className="form-group col-lg-3 col-md-5 col-sm-10">
                            <label for="enfants" className="form-label form-label-sm">Nombre d'enfants</label>
                            <input type="number" min="0" max="10" className="form-control form-control-sm" name="enfants" id="enfants" disabled />
                        </div>
                        <div className="form-group col-lg-3 col-md-5 col-sm-10">   
                            <label for="identite" className="form-label form-label-sm">Type du pièce d'identité</label>
                            <input type="text" className="form-control form-control-sm" name="identite" id="identite" disabled />
                        </div>
                        <div className="form-group col-lg-3 col-md-5 col-sm-10">
                            <label for="tel1" className="form-label form-label-sm">Tél portable</label>
                            <input type="tel" className="form-control form-control-sm" name="tel1" id="tel1" disabled />
                        </div>
                        <div className="form-group col-lg-3 col-md-5 col-sm-10">
                            <label for="tel" className="form-label form-label-sm">Tél fixe</label>
                            <input type="tel" className="form-control form-control-sm" name="tel2" id="tel2" disabled />
                        </div>
                        <div className="form-group col-lg-3 col-md-5 col-sm-10">
                            <label for="emailPe" className="form-label form-label-sm">Email Personnel</label>
                            <input type="email" className="form-control form-control-sm" id="emailPe" disabled />
                        </div>
                        <div className="form-group col-lg-3 col-md-5 col-sm-10">
                            <label for="emailPr" className="form-label form-label-sm">Email Professionnel</label>
                            <input type="email" className="form-control form-control-sm" id="emailPr"disabled />
                        </div>
                        <div className="form-group col-lg-3 col-md-5 col-sm-10">
                            <label for="tel1" className="form-label form-label-sm">Contact d'urgence</label>
                            <input type="tel" className="form-control form-control-sm" name="tel1" id="tel1" disabled />
                        </div>
                    <legend className="titres">Poste</legend>
                        <div className="form-group col-lg-3 col-md-5 col-sm-10">
                            <label for="fonction" className="form-label form-label-sm">Fonction</label>
                            <input type="text" min="13" className="form-control form-control-sm" id="fonction" disabled />
                        </div>
                        <div className="form-group col-lg-3 col-md-5 col-sm-10">
                            <label for="contrat" className="form-label form-label-sm">Type de contrat</label>
                            <input type="text" min="13" className="form-control form-control-sm" id="contrat" disabled />
                        </div>
                        <div className="form-group col-lg-3 col-md-5 col-sm-10">
                            <label for="matricule" className="form-label form-label-sm">Matricule</label>
                            <input type="text" className="form-control form-control-sm" id="matricule" name="matricule" disabled />
                        </div>
                        <div className="form-group col-lg-3 col-md-5 col-sm-10">
                            <label for="entree" className="form-label form-label-sm">Date d'entrée</label>
                            <input type="date" className="form-control form-control-sm" id="entree" disabled value="" />
                        </div>
                    <legend className="titres">Banque</legend>
                        <div className="form-group col-lg-3 col-md-5 col-sm-10">
                            <label for="Intitule" className="form-label form-label-sm">Intitulé</label>
                            <input type="text" min="13" className="form-control form-control-sm" id="Intitule" disabled />
                        </div>
                        <div className="form-group col-lg-3 col-md-5 col-sm-10">
                            <label for="iban" className="form-label form-label-sm">IBAN</label>
                            <input type="text" min="13" className="form-control form-control-sm" id="iban" disabled />
                        </div>
                        <div className="form-group col-lg-3 col-md-5 col-sm-10">
                            <label for="RIB" className="form-label form-label-sm">RIB</label>
                            <input type="text" className="form-control form-control-sm" id="RIB" name="RIB" disabled />
                        </div>
                      
        </form>
    </div>
  )
}
