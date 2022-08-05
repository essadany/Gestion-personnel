import React from 'react';
import "./Profile.css";



export default function () {
  return (
    <div className="profile ">
        <form className='row'>
                    <legend>Mes informations personnels</legend>
                        <div class=" form-group col-md-6 col-lg-4">
                            <label for="nom" class="form-label form-label-sm">Nom</label>
                            <input type="text" class="form-control form-control-sm" name="nom" id="nom" disabled />
                        </div>
                        <div class="form-group col-md-6 col-lg-4">
                            <label for="prenom" class="form-label form-label-sm">Prénom</label>
                            <input type="text" class="form-control form-control-sm" name="prenom" id="prenom" disabled />
                        </div>
                        <div class="form-check col-md-6 col-lg-4">
                            <label class="form-label form-label-sm" for="flexRadioDefault1" >Sexe</label>
                            <input type="radio" name="flexRadioDefault" value="homme" id="flexRadioDefault1" /> Homme
                            <input type="radio" name="flexRadioDefault" value="femme" id="flexRadioDefault2"  /> Femme
                        </div>
                        <div class="form-group col-md-6 col-lg-4">
                            <label for="naissance" class="form-label form-label-sm">Date de naissance</label>
                            <input type="date" class="form-control form-control-sm" name="naissance"id="naissance" disabled />
                        </div>
                        <div class="form-group col-md-6 col-lg-4">
                            <label for="natio" class="form-label form-label-sm">Narionalité</label>
                            <input type="text" class="form-control form-control-sm" name="natio" id="natio" disabled />
                        </div>
                        <div class="form-group col-md-6 col-lg-4">
                            <label for="securite" class="form-label form-label-sm">N° Sécurité sociale</label>
                            <input type="number" min="1000000000000" max="" class="form-control form-control-sm" name="securite" id="securite" disabled />
                        </div>
                         <div class="form-group col-md-6 col-lg-4">
                            <label for="inputAddress" class="form-label form-label-sm">Addresse</label>
                            <input type="text" class="form-control form-control-sm" id="inputAddress" placeholder="N° Rue" disabled />
                            <input type="text" class="form-control form-control-sm" id="inputAddress" placeholder="Code postale" disabled />
                            <input type="text" class="form-control form-control-sm" id="inputAddress" placeholder="Ville" disabled />
                            <input type="text" class="form-control form-control-sm" id="inputAddress" placeholder="Pays" disabled />
                         </div>
                        <div class="form-group col-md-6 col-lg-4">   
                            <label for="statut" class="form-label form-label-sm">Statut matrimonial</label>
                            <input type="text" class="form-control form-control-sm" name="statut" id="statut" disabled />
                        </div>
                        <div class="form-group col-md-6 col-lg-4">
                            <label for="enfants" class="form-label form-label-sm">Nombre d'enfants</label>
                            <input type="number" min="0" max="10" class="form-control form-control-sm" name="enfants" id="enfants" disabled />
                        </div>
                        <div class="form-group col-md-6 col-lg-4">   
                            <label for="identite" class="form-label form-label-sm">Type du pièce d'identité</label>
                            <input type="text" class="form-control form-control-sm" name="identite" id="identite" disabled />
                        </div>
                        <div class="form-group col-md-6 col-lg-4">
                            <label for="tel1" class="form-label form-label-sm">Tél portable</label>
                            <input type="tel" class="form-control form-control-sm" name="tel1" id="tel1" disabled />
                        </div>
                        <div class="form-group col-md-6 col-lg-4">
                            <label for="tel" class="form-label form-label-sm">Tél fixe</label>
                            <input type="tel" class="form-control form-control-sm" name="tel2" id="tel2" disabled />
                        </div>
                        <div class="form-group col-md-6 col-lg-4">
                            <label for="emailPe" class="form-label form-label-sm">Email Personnel</label>
                            <input type="email" class="form-control form-control-sm" id="emailPe" disabled />
                        </div>
                        <div class="form-group col-md-6 col-lg-4">
                            <label for="emailPr" class="form-label form-label-sm">Email Professionnel</label>
                            <input type="email" class="form-control form-control-sm" id="emailPr"disabled />
                        </div>
                        <div class="form-group col-md-6 col-lg-4">
                            <label for="tel1" class="form-label form-label-sm">Contact d'urgence</label>
                            <input type="tel" class="form-control form-control-sm" name="tel1" id="tel1" disabled />
                        </div>
                    <legend>Poste</legend>
                        <div class="form-group col-md-6 col-lg-4">
                            <label for="fonction" class="form-label form-label-sm">Fonction</label>
                            <input type="text" min="13" class="form-control form-control-sm" id="fonction" disabled />
                        </div>
                        <div class="form-group col-md-6 col-lg-4">
                            <label for="contrat" class="form-label form-label-sm">Type de contrat</label>
                            <input type="text" min="13" class="form-control form-control-sm" id="contrat" disabled />
                        </div>
                        <div class="form-group col-md-6 col-lg-4">
                            <label for="matricule" class="form-label form-label-sm">Matricule</label>
                            <input type="text" class="form-control form-control-sm" id="matricule" name="matricule" disabled />
                        </div>
                        <div class="form-group col-md-6 col-lg-4">
                            <label for="entree" class="form-label form-label-sm">Date d'entrée</label>
                            <input type="date" class="form-control form-control-sm" id="entree" disabled value="" />
                        </div>
                    <legend>Banque</legend>
                        <div class="form-group col-md-6 col-lg-4">
                            <label for="Intitule" class="form-label form-label-sm">Intitulé</label>
                            <input type="text" min="13" class="form-control form-control-sm" id="Intitule" disabled />
                        </div>
                        <div class="form-group col-md-6 col-lg-4">
                            <label for="iban" class="form-label form-label-sm">IBAN</label>
                            <input type="text" min="13" class="form-control form-control-sm" id="iban" disabled />
                        </div>
                        <div class="form-group col-md-6 col-lg-4">
                            <label for="RIB" class="form-label form-label-sm">RIB</label>
                            <input type="text" class="form-control form-control-sm" id="RIB" name="RIB" disabled />
                        </div>
                      
        </form>
    </div>
  )
}
