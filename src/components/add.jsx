import React from 'react';
import axios from 'axios';
import "./css.css";
import {
  BrowserRouter as
  Link
} from "react-router-dom";

const selectOne = ["heure","jour","semaine", "mois"];
const number = [1,2,3,4,5,6,7,8,9,10];
const typerdv = ['Durée du traitement','prise de poids', 'prise medicament', 'prise de rendez- vous','prise de sang'];
const selection = ['aucun',"grossesse","diabete","rythme cardiaque"]

class Add extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tableau : [1],
      selectionTemp : [],
    };
  }
componentDidMount(){
    const set = this
      axios.get("http://localhost:8000/templates")
      .then(function (response) {

  const data = response.data;
  set.setState({ selectionTemp : data })
  console.log(data);
})
.catch(function (error) {
  // handle error
  console.log(error);
})
.then(function () {
  // always executed
});
  }

  ajouter(){
    const newtableau = this.state.tableau
    newtableau.push(this.state.tableau.length + 1)
    this.setState({ tableau : newtableau })
    console.log(this.state.tableau)
  }


  render(){
  return (
    <div>
      {this.props.id}
    <h3>Type et durée :</h3>
    {this.state.tableau.map( (type) => { return (
      <div className="flex">
      <select className='etatG'>
      {typerdv.map((n) => <option>{n}</option> )}
      </select>
      <select className='etatG'>
      {number.map((num) => <option>{num}</option> )}
      </select>
      <select className='etatG'>
        {selectOne.map( (item) => <option>{item}</option> )}
      </select>

      </div>
    )} )}
    <input type="button" className="valid" onClick={() => this.ajouter()} value="Ajouter" />
    <h3>Questionaire pré-remplis</h3>
    <select className='etatG'>{this.state.selectionTemp.map( (type) => <option>{type.name}</option> )}</select>

  <Link to="/suivis"><input type='button' className="valid" value="Valider" /> </Link>

    </div>
  );
}
}

export default Add;
