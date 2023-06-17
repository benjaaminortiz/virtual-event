import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Info from './components/Info/Info'
import Logos from './components/Logos/Logos'
import Form from './components/Form/Form'
function App() {
  return (
    <div className="App">
      <div><Header /></div>

      <div className='body'>
        <div className='left-content'>
          <Logos />
          <Info />
          <Logos />
        </div>
        <div className='form-wrapper'>
        <Form />
        </div>
     
      </div>
      <div className='footer-wrapper'>
        <Footer />
      </div>

    </div>
  );
}

export default App;
