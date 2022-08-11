import React from 'react'

export default function Creer_absences() {
  return (
    <div>
        <form class="d-flex justify-content-around " method="post" action="">
                        <div class="row">
                         <div class="form-group col-4">
                            <label for="debut" class="form-label form-label-sm">Du</label>
                            <input type="date" class="form-control form-control-sm" name="debut"id="debut" required />
                          </div>
                          <div class="form-group col-2">
                            <select id="type" class="form-select" name="du">
                                <option selected>Matin</option>
                                <option value="1">Midi</option>
                                <option value="2">Soir</option>
                            </select>
                          </div>
                        
                        <div class="form-group col-4">
                            <label for="fin" class="form-label form-label-sm">Au</label>
                            <input type="date" class="form-control form-control-sm" name="fin" id="fin" />
                        </div>
                        <div class="form-group col-2">
                            <select id="type" class="form-select " name="au">
                                <option selected>Matin</option>
                                <option value="1">Midi</option>
                                <option value="2">Soir</option>
                            </select>
                        </div>
                        <div class="form-group col-4">
                            <label for="type">Type d'absence</label>
                            <select id="type" class="form-select " name="type">
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
                        <div class="form-group col-4">
                            <label for="justificatif" class="form-label form-label-sm">Pièces justificatifs</label>
                            <input type="file" multiple class="form-control form-control-sm" name="justificatif" id="justificatif" />
                        </div>
                        <div class="form-group col-4">
                            <label for="comment" class="form-label form-label-sm">Commentaire</label>
                            <textarea class="form-control form-control-sm" name="comment" id="comment" ></textarea>
                        </div>
                        
                        </div>
                        
                    </form>
    </div>
  )
}
