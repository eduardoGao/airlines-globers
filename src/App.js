import { useState } from 'react'
import { Header, Hero, FormContainer, Sign } from './components'

function App() {
  const [airline, setAirline] = useState()

  return (
    <div className="App">
      <Header airline={airline} setAirline={setAirline} />
      <Hero airline={airline} />
      <FormContainer />
      <Sign />
    </div>
  );
}

export default App;
