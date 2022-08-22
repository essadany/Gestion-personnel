import React from 'react'

export default function Creer_absences() {
  
  return (
    <div>
        <form className="d-flex justify-content-around " method="post" action="">
                        <div className="row">
                         <div className="form-group col-md-5 col-sm-6">
                            <label for="debut" className="form-label form-label-sm">Du</label>
                            <input type="date" className="form-control form-control-sm" name="debut"id="debut"  value="" required />
                          </div>
                          <div className="form-group col-md-5 col-sm-6">
                            <select id="type" className="form-select" name="du">
                                <option selected>Matin</option>
                                <option value="1">Midi</option>
                                <option value="2">Soir</option>
                            </select>
                          </div>
                        
                        <div className="form-group col-md-5 col-sm-6"> value=""
                            <label for="fin" className="form-label form-label-sm">Au</label>
                            <input type="date" className="form-control form-control-sm" value="" name="fin" id="fin" />
                        </div>
                        <div className="form-group col-md-5 col-sm-6">
                            <select id="type" className="form-select " name="au">
                                <option selected>Matin</option>
                                <option value="1">Midi</option>
                                <option value="2">Soir</option>
                            </select>
                        </div>
                        <div className="form-group col-md-5 col-sm-6">
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
                        <div className="form-group col-md-5 col-sm-6">
                            <label for="justificatif" className="form-label form-label-sm">Pièces justificatifs</label>
                            <input type="file" multiple className="form-control form-control-sm" value="" name="justificatif" id="justificatif" />
                        </div>
                        <div className="form-group col-md-5 col-sm-6">
                            <label for="comment" className="form-label form-label-sm">Commentaire</label>
                            <textarea className="form-control form-control-sm" value="" name="comment" id="comment" ></textarea>
                        </div>
                        
                        </div>
                        
                    </form>
    </div>
  )
}
