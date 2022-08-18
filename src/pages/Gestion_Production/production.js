import React from 'react'
import "./production.css"
export default function Production() {
    const [selected, setSelected] = React.useState("");

/** Function that will set different values to state variable
* based on which dropdown is selected
*/
const changeSelectOptionHandler = (event) => {
	setSelected(event.target.value);
};

/** Different arrays for different dropdowns */
const KYNTUS = ["ANFI","VDLF","ELN FTTH", "FIBRE 31", "FIRALP_ENN27", "H-TEL-ANFI", "SCOPELEC","SYADEN CD11", "LOSANGE", "FTTE_ORANGE"];
const CIRCET = ["BUYGUES", "CD 89", "VDLF", "COVAGE 77", "INTER UU","SFR CD89","SFR IDF","SFR IDF 91","SFR PROVINCE","SFR PROVINCE 01","SFR PROVINCE 19","SFR PROVINCE 63","SFR PROVINCE 71","SFR SUD","YCONIC"];
const AXIONE = ["ADTIM", "BERRY THD", "DORSAL", "EURE","LIMOUSIN","Charente"]
const JSC = ["JSC-GARD", "JSC-ISERE"]
const SOGEA = ["LOSANGE"]
const ETM = ["SFR IDF"]
const IDOM = ["SFR"]
const SCOPELEC_DR_SUD = ["RIP 48","RIP 34","RIP 82","RIP 31","SUPERSONIC ORANGE SUD"]
const SCOPELEC_DR_SUD_OUEST = ["SUPERSONIC ORANGE SUD"]
const SCOPELEC_DR_SUD_EST = ["SUPERSONIC ORANGE SUD"]
const BFC_Fibre = ["ORANGE"]
const ORANGE = ["HSN"]
const ETPR = ["RIP48"]
const ICART = ["SFR ZMD 27","SFR ZMD 28","SFR ZMD 35","SFR ZMD 76","SFR ZMD 77","SFR ZMD 92","SFR ZMD 93","SFR ZMD 95"]
const EOS = ["SFR ZMD 81","SFR ZMD 28","SFR ZMD 77","COVAGE 77","TARN FIBRE"]
const CTBE = ["BUYGUES"]

/** Type variable to store different array for different dropdown */
let type = null;

/** This will be used to create set of options that user will see */
let options = null;

/** Setting Type variable according to dropdown */
switch (selected){
  case "KYNTUS": type = KYNTUS;break;
  case "CIRCET": type = CIRCET;break;
  case "AXIONE": type = AXIONE;break;
  case "JSC": type = JSC; break;
  case "SOGEA": type = SOGEA; break;
  case "ETM": type = ETM; break;
  case "IDOM": type = IDOM; break;
  case "SCOPELEC_DR_SUD": type = SCOPELEC_DR_SUD; break;
  case " SCOPELEC_DR_SUD_OUEST": type =  SCOPELEC_DR_SUD_OUEST; break;
  case "SCOPELEC_DR_SUD_EST": type = SCOPELEC_DR_SUD_EST; break;
  case "BFC_Fibre": type = BFC_Fibre; break;
  case "ORANGE": type = ORANGE; break;
  case "ETPR": type = ETPR; break;
  case "ICART_TELECOM": type = ICART; break;
  case "EOS_TELECOM": type = EOS; break;
  case "CTBE": type = CTBE; break;
}


/** If "Type" is null or undefined then options will be null,
* otherwise it will create a options iterable based on our array
*/
if (type) {
	options = type.map((el) => <option key={el}>{el}</option>);
}
  return (
    <div className=" production">
        <form className='row'>
            <div className="mb-3 col-md-5 col-sm-8">
                <label for="exampleFormControlInput1" className="form-label">Date</label>
                <input type="date" className="form-control" id="exampleFormControlInput1"  required/>
            </div>
            <div className="mb-3 col-md-5 col-sm-8">
            <label for='client'>Client</label>
            <select className="form-select client " aria-label="Default select example" onChange={changeSelectOptionHandler}  required>
            <option selected value="KYNTUS">KYNTUS</option>
                    <option value="CIRCET">CIRCET</option>
                    <option value="AXIONE">AXIONE</option>
                    <option value="JSC">JSC</option>
                    <option value="SOGEA">SOGEA</option>
                    <option value="ETM">ETM</option>
                    <option value="IDOM">IDOM</option>
                    <option value="SCOPELEC_DR_SUD">SCOPELEC_DR_SUD</option>
                    <option value="SCOPELEC_DR_SUD_OUEST">SCOPELEC_DR_SUD_OUEST</option>
                    <option value="SCOPELEC_DR_SUD_EST">SCOPELEC_DR_SUD_EST</option>
                    <option value="BFC_Fibre">BFC Fibre</option>
                    <option value="ORANGE">ORANGE</option>
                    <option value="ETPR">ETPR</option>
                    <option value="ICART_TELECOM">ICART TELECOM</option>
                    <option value="EOS_TELECOM">EOS TELECOM</option>
                    <option value="CTBE">CTBE</option>
            </select>
        </div>
        <div className='col-md-5 col-sm-8'>
        <label for="equipe">Projet</label>
            <select className="form-select projet" aria-label="Default select example" required>
            {options}
            </select>
        </div>
        <div className='col-md-5 col-sm-8'>
        <label for="equipe">Catégorie1</label>
            <select className="form-select projet" aria-label="Default select example" required>
                <option valure="1">Génie civil</option>
                <option value="2">Autre</option>
            </select>
        </div>
        <div className='col-md-5 col-sm-8'>
        <label for="equipe">Catégorie2</label>
            <select className="form-select projet" aria-label="Default select example" required>
                <option valure="1">APS</option>
                <option value="2">APD</option>
                <option value="3">DOE</option>
            </select>
        </div>
        <div className='col-md-5 col-sm-8'>
        <label for="equipe">Activités</label>
            <select className="form-select projet" aria-label="Default select example" multiple required>
                <option valure="1">Ac1</option>
                <option value="2">Ac2</option>
                <option value="3">Ac3</option>
                <option value="3">Ac4</option>
            </select>
        </div>
        <div className=" col-md-5 col-sm-8">
            <label for="prod">Production</label>
            <input type="number" className="form-control"  id="prod" required />
        </div>

        <div className="form-floating col-md-5 col-sm-8">
            <label for="floatingTextarea">Commentaire</label>
            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" required></textarea>
        </div>
        </form>
        
    </div>
  )
}
