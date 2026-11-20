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
    let copia = tab.map((x)=>[...x])
    if(turno === "X" && copia[row][column] !== "O"){
      copia[row][column]= "X";
      setTab(copia);
      setTurno("O");
      }
      /*setTab("X");//en casilla row column
      setTurno("O");*/
    else if(turno === "O" && copia[row][column] !== "X"){
      copia[row][column]= "O";
      setTab(copia);
      setTurno("X");
      /*setTab("O");//en casilla row column
      setTurno("X");*/
    }

  }
  return (
    <div className="App">
      <Header turno={turno}/>
      <Tablero estado={tab} turno={turno} onClick={pulsar}/>
      
      
    </div>
  );
}

export default App;
