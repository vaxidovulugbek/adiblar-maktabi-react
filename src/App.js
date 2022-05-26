import './App.css';
import Header from './companent/header/Header';
import Hero from './companent/hero/Hero';
import Main from './companent/main/Main';

import { Route, Routes } from 'react-router-dom';
import AbdullaAvloniy from './companent/InfoPoets/InfiPoets';
import Signup from './companent/Signup/Signup';
import Signin from './companent/Signin/Signin';
import Book from './companent/Book/Book';
import RecommendsBooks from './companent/RecommendsBooks/RecommendsBooks';
import RecommendAthor from './companent/RecommendAthor/RecommendAthor';


import { useEffect, useState } from 'react';
import Profil from './companent/Profil/Profil';
import Saved from './companent/Saved/Saved';

function App() {
  const [Firstname, setfirstname] = useState([])

  let hendler = () => {
    console.log(Firstname);
  }

  return (
    <div>
       <Header/>
       {/* <Hero/> */}
       <Routes>
        {/* <Route path='ff' element={<Header />}></Route> */}
        {/* <Route path='/' element={<Hero />}></Route> */}
        <Route  path='main' element={ <Main /> }></Route>
        <Route  path='main/item/:id' element={ <AbdullaAvloniy /> }></Route>
        <Route  path='/' element={ <Signup setfirstname={setfirstname}/>}              />
        <Route  path='signin' element={ <Signin />} />
        <Route  path='main/main/:id' element={ <Book hendler={hendler} setfirstname={setfirstname}/>} />
        <Route  path='main/main/:id/recommends/:id' element={ <RecommendsBooks />} />
        <Route  path='main/main/:id/recommends/:id/RecommendAthor' element={ <RecommendAthor />} />
        <Route  path='Profil' element={ <Profil setfirstname={setfirstname} Firstname={Firstname}/>} />
        <Route  path='Saved' element={ <Saved/>} />
      </Routes>
    </div>
  );
}

export default App;

