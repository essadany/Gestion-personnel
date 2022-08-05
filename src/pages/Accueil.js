import React from "react";
import "./Accueil.css";
import { Link } from "react-router-dom";

 
 export default function Accueil() {
   return (
     <div classNameName="row accueil">
        <div className="card text-center col-md-6 col-lg-3" >
            <div className="card-header">
                Featured
            </div>
            <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                {/* <Link to="" className="btn btn-primary">Go somewhere</Link> */}
            </div>
            <div className="card-footer text-muted">
                2 days ago
            </div>
        </div>
        <div className="card text-center col-md-6 col-lg-3" >
            <div className="card-header">
                Featured
            </div>
            <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                {/* <Link to="" className="btn btn-primary">Go somewhere</Link> */}
            </div>
            <div className="card-footer text-muted">
                2 days ago
            </div>
        </div>
        <div className="card text-center col-md-6 col-lg-3" >
            <div className="card-header">
                Featured
            </div>
            <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                {/* <Link to="" className="btn btn-primary">Go somewhere</Link> */}
            </div>
            <div className="card-footer text-muted">
                2 days ago
            </div>
        </div>

     </div>
   )
 }
 