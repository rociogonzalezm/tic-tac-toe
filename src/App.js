import logo from './logo.svg';
import './App.css';
import Header from './Header.js'
import Tablero from './Tablero.js'
import { useState } from 'react';

const X = "X";
const O = "O";

function App() {
  const [turno,setTurno] = useState(X);
  const [tab,setTab] = useState([["-","-","-"],["-","-","-"],["-","-","-"]]);
  
  function pulsar(user,row,column){
    if(turno === "X"){
      setTab("X");//en casilla row column
      setTurno("O");
    }else{
      setTab("O");//en casilla row column
      setTurno("X");
    }

  }
  return (
    <div className="App">
      <Header turno={turno}/>
      <Tablero estado={tab} onClick={()=>pulsar(turno,1,1)}/>
      
      
    </div>
  );
}

export default App;
