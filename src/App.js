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
  

  function calcularGanador(tab){
    /*FILAS*/
    if(tab[0][0] !== "-" && tab[0][0]===tab[0][1] && tab[0][1]===tab[0][2]){
      if(tab[0][0] == "X")
        return(X
      )
      if(tab[0][0] == "O")
        return(O
      )
    }
    if(tab[1][0] !== "-" && tab[1][0]===tab[1][1] && tab[1][1]===tab[1][2]){
      if(tab[1][0] == "X")
        return(X)
      
      if(tab[1][0] == "O")
        return(O)
    }
    if(tab[2][0] !== "-" && tab[2][0]===tab[2][1] && tab[2][1]===tab[2][2]){
      if(tab[2][0]== "X")
        return(X)
      
      if(tab[2][0] == "O")
        return(O)
    }
    /*COLUMNAS*/
    if(tab[0][0] !== "-" && tab[0][0]===tab[1][0] && tab[1][0]===tab[2][0]){
      if(tab[0][0] == "X")
        return(X)
      
      if(tab[0][0] == "O")
        return(O)
    }
    if(tab[0][1] !== "-" && tab[0][1]===tab[1][1] && tab[1][1]===tab[2][1]){
      if(tab[0][1] == "X")
        return(X)
      
      if(tab[0][1] == "O")
        return(O)
    }
    if(tab[0][2] !== "-" && tab[0][2]===tab[1][2] && tab[1][2]===tab[2][2]){
      if(tab[0][2] == "X")
        return(X)
      
      if(tab[0][2] == "O")
        return(O)
    }
      /*DIAGONALES*/
    if(tab[0][0] !== "-" && tab[0][0]===tab[1][1] && tab[1][1]===tab[2][2]){
      if(tab[0][0] == "X")
        return(X)
      
      if(tab[0][0] == "O")
        return(O)
    }
    if(tab[0][2] !== "-" && tab[0][2]===tab[1][1] && tab[1][1]===tab[2][0]){
      if(tab[0][2] == "X")
        return(X)
      
      if(tab[0][2] == "O")
        return(O)
    return
    }
    else{
      return(null)
    }
  }
  const winner = calcularGanador(tab);

  function pulsar(user,row,column){
      let copia = tab.map((x)=>[...x])
      if(copia[row][column] !== "-")
        return
      if(winner)
        return
      if(turno === "X"){
        copia[row][column]= "X";
        setTab(copia);
        setTurno("O");
        }
        /*setTab("X");//en casilla row column
        setTurno("O");*/
      else{
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
      {winner && <h2>Ganan las {winner}</h2>}
    </div>
  );
}
export default App;
