import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import ContactListComponent from './components/container/componente_A';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* componente de greeting */}
        {/* <Greeting name= {"Martin"}></Greeting> */}
        {/* <GreetingF name="Martin"></GreetingF> */}
        <ContactListComponent></ContactListComponent>
      </header>
    </div>
  );
}

export default App;
