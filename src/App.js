import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { animals } from './data';
import Main from './Main';

function App() {
  return (
    <div className="App">
      <Header greeting='Welcome to the Alchemy Farm!' />
      <main>
        <Main animals={animals} />
      </main>
      <Footer email="Contact us at al@chemy.com" /> 
    </div>
  );
}

export default App;
