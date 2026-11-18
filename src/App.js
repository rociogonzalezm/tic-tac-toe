import logo from './logo.svg';
import './App.css';

function App() {
  const [turno,setTurno] = useState("");
  const [tab,setTab] = useState("[[-,-,-],[-,-,-],[-,-,-]]");
  
  return (
    <div className="App">
      <Header turno={turno}/>
      
      
    </div>
  );
}

export default App;
