import logo from './logo.svg';
import './App.css';
import Viewall from './components/Viewall';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddNews from './components/AddNews';
import SearchNews from './components/SearchNews';
import DeleteNews from './components/DeleteNews';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<AddNews/>}/>
      <Route path='/search'element={<SearchNews/>}/>
      <Route path='/delete'element={<DeleteNews/>}/>
      <Route path='/view'element={<Viewall/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
