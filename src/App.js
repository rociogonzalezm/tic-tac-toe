import logo from './logo.svg';
import './App.css';

function App() {
  const [turno,setTurno] = useState("");
  const [tab,setTab] = useState("[[-,-,-],[-,-,-],[-,-,-]]");
  
  return (
    <div className="App">
      <Header turno={turno}/>
      <Tablero estado={tab}/>
      
      
    </div>
  );
}

export default App;
