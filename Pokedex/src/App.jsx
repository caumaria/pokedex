import './App.css';
import { Home } from './pages/Home';
import MediaCard from './components/Card';

function App() {
  return (
    <>
      <Home />
      <br />
      <div className="App">
      <h1 style={{textAlign:"center", color:"black"}}>Pokedex</h1>
        <div className="card" style={{ display:"flex", justifyContent:"center", alignItens:"center" }}>          
          <MediaCard />
          <MediaCard />
          <MediaCard />
        </div>
      </div>
    </>
  )
}

export default App
