import { useState } from 'react'
import { Header, Hero, FormContainer } from './components'

function App() {
  const [airline, setAirline] = useState()

  return (
    <div className="App">
      <Header airline={airline} setAirline={setAirline} />
      <Hero airline={airline} />
      <FormContainer />
    </div>
  );
}

export default App;
