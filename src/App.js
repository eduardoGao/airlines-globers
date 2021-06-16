import { useState } from 'react'
import { Header, Hero, Form } from './components'
// import './App.css';

function App() {
  const [airline, setAirline] = useState()

  return (
    <div className="App">
      <Header airline={airline} setAirline={setAirline} />
      <Hero airline={airline} />
      <Form />
    </div>
  );
}

export default App;
