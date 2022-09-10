import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Countries from './components/Countries';
import Guide from './components/Guide';
import Contact from './components/Contact';
import CountryDetail from './components/CountryDetail';
import DataChart from './components/DataChart';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Countries></Countries>}>
          <Route path='/:countryDetails' element={<CountryDetail></CountryDetail>}>
          </Route>
        </Route>
        
        <Route path='/chart' element={<DataChart></DataChart>}></Route>
        <Route path='/tourguid' element={<Guide></Guide>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes>
    </div>
  );
}

export default App;
