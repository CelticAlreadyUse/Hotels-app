import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home'
import Details from './Detail'
function App() {
  return (

    <Routes>
      <Route element={<Home/>} path='/'></Route>
      <Route element={<Details/>} path='/hotel/:id'></Route>
    </Routes> 
  );
}

export default App;
