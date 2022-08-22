import React from "react";
import Select from 'react-select'
import Personnel from "./Personnel";
export default function formPersonnel() {
    const roles =[{value:"1", label: "SA"},{value: "2", label: "A"},{value:"3", label: "TE"},{value:"4", label: "C"},,{value:"5", label: "CA"},{value:"6", label: "BE"}]

  return (
    <div>
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
    </div>
  )
}
