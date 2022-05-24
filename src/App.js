import './App.css';
import Header from './companent/header/Header';
import Hero from './companent/hero/Hero';
import Main from './companent/main/Main';

import { Route, Routes } from 'react-router-dom';
import AbdullaAvloniy from './companent/InfoPoets/InfiPoets';
import Signup from './companent/Signup/Signup';
import Signin from './companent/Signin/Signin';
import Book from './companent/Book/Book';

function App() {

  return (
    <div>
       <Header/>
       <Hero/>
       <Routes>
        <Route path='menu'></Route>
        <Route path='main' element={ <Main/> }></Route>
        <Route path='main/item/:id' element={ <AbdullaAvloniy /> }></Route>
        <Route path='/' element={ <Signup />}              />
        <Route  path='signin' element={ <Signin />} />
        <Route  path='main/main/:id' element={ <Book/>} />
      </Routes>
    </div>
  );
}

export default App;

