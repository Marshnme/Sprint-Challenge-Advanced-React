import React, {useState,useEffect} from 'react';
import axios from "axios"
import './App.css';
import PlayerCard from "./components/PlayerCard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {useAxiosCall} from "./customHooks/useAxiosCall";



class App extends React.Component {
  constructor(){
    super();

    this.state = {
      player:[]
    }
  }

  


  componentDidMount(){
    axios
    .get("http://localhost:5000/api/players")
    .then(res => {
      console.log(res.data)
      this.setState({
        player:res.data
      })
    })
  }

  render(){
    
  return (
    <div className="App">
      <PlayerCard player={this.state.player}/>
    </div>
  );
}
}
export default App;
