import React from 'react';
import "./css.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function AppliWiewed() {
  return (
    <div>
    <div className="etatG">
      <div className="etatR" >Call</div>
      <p className="centered">Bot send message to "Mum" for "News" etat= "mal"</p>
    </div>
      <div className="etatG">
        <div className="etatC" >:)</div>
        <p className="centered">" Mal" le Mardi 25 - 10:50</p>
      </div>
      <div className="etatG">
        <div className="etatC" >:)</div>
        <p className="centered">"Tout va bien" le Mardi 25 - 10:50</p>
      </div>
      <div className="etatG">
        <div className="etatC" >:)</div>
        <p className="centered">"Tout va bien" le Mardi 25 - 10:50</p>
      </div>
      <div className="etatG">
        <div className="etatC" >:)</div>
        <p className="centered">Mardi 25 - 10:50</p>
      </div>
      <div className="etatG">
        <div className="etatC" >:)</div>
        <p className="centered">Mardi 25 - 10:50</p>
      </div>
    </div>
  );
}

export default AppliWiewed;