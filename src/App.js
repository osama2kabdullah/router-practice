import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Countries from './components/Countries';
import About from './components/About';
import Guide from './components/Guide';
import Contact from './components/Contact';
import CountryDetail from './components/CountryDetail';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Countries></Countries>}>
          <Route path='/:countryDetails' element={<CountryDetail></CountryDetail>}></Route>
        </Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/tourguid' element={<Guide></Guide>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes>
    </div>
  );
}

export default App;
