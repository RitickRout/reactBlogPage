import './App.css';
import NavBar from './component/NavBar';
import { createContext } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomePage from './component/HomePage';
import Hollywood from './component/Hollywood';
import BollyWood from './component/Bollywood';
import Technology from './component/Technology';
import Fitness from './component/Fitness';
import Food from './component/Food';
import {Data} from "./component/Data/Data"
import NewEle from './component/NewEle';


const data = Data;

export const contextCreated = createContext();


console.log(data)

function App() {

  return (<BrowserRouter>
  <contextCreated.Provider value={data}>
  <div className="App">
   <NavBar/>
  
   <Routes>
         <Route path='/article/:id' element={<NewEle/>} >
           </Route> //dyanamic route for all home artical ids
         <Route path='/' element={<HomePage/>}  /  >
         <Route path='/bollywood' element={<BollyWood/>}  /  >
         <Route path='/hollywood' element={<Hollywood/>}  /  >
         <Route path='/technology' element={<Technology/>}  /  >
         <Route path='/fitness' element={<Fitness/>}  /  >
         <Route path='/food' element={<Food/>}  /  >         
   </Routes>
    </div>
    </contextCreated.Provider>
  </BrowserRouter>
 
  );
}

export default App;
