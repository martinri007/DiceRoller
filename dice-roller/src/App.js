import logo from './logo.svg';
import './App.css';
import RollDice from './RollDice'
import { Helmet } from "react-helmet";
function App() {

  return (

    <div className="App">
      <Helmet>
        <title>Hoď si!</title>
      </Helmet>
      <header className="App-header">
        <div>
          <RollDice />
        </div>
      </header>
    </div>
  );
}

export default App;
