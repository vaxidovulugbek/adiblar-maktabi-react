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

import { Objects } from './companent/Object/Object';

import { useEffect, useState } from 'react';
import Profil from './companent/Profil/Profil';
import Saved from './companent/Saved/Saved';
import Edit from './companent/Edit/Edit';
import Kitoblar from './companent/Kitoblar/Kitoblar';

function App() {

  let [newarr, setnewarr] = useState([])

  let savehendler = (e) => {
    if(newarr.indexOf(e) !== -1) return
    setnewarr([...newarr,e])
    console.log(newarr);
  }
  let removeSaveItem = (e) => {
    setnewarr(newarr.filter(item=> {
      return item.id !== e
    }))
  }

  const [Firstname, setfirstname] = useState("")
  const [Lasttname, setlastname] = useState("")

  return (
    <div>
       <Header/>
       {/* <Hero/> */}
       <Routes>
        <Route  path='main' element={ <Main /> }></Route>
        <Route  path='main/item/:id' element={ <AbdullaAvloniy /> }></Route>
        <Route  path='/' element={ <Signup setfirstname={setfirstname} setlastname={setlastname}/>} />
        <Route  path='signin' element={ <Signin />} />
        <Route  path='main/main/:id' element={ <Book savehendler={savehendler}/>} />
        <Route  path='main/main/:id/recommends/:id' element={ <RecommendsBooks />} />
        <Route  path='main/main/:id/recommends/:id/RecommendAthor' element={ <RecommendAthor />} />
        <Route  path='Profil' element={ <Profil setfirstname={setfirstname} Firstname={Firstname} Lasttname={Lasttname} />} />
        <Route  path='Saved' element={ <Saved newarr={newarr} removeSaveItem={removeSaveItem}/>} />
        <Route  path='Edit' element={ <Edit setfirstname={setfirstname} setlastname={setlastname}/> } />
        <Route  path='nasr' element={ <Kitoblar/>} />
      </Routes>
    </div>
  );
}

export default App;
