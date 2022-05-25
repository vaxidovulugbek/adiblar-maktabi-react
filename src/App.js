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

function App() {
  return (
    <div>
       <Header/>
       <Hero/>
       <Routes>
        {/* <Route path='ff' element={<Header />}></Route>
        <Route path='/' element={<Hero />}></Route> */}
        <Route path='/' element={ <Main /> }></Route>
        <Route path='main/item/:id' element={ <AbdullaAvloniy /> }></Route>
        <Route path='forum' element={ <Signup />}              />
        <Route  path='signin' element={ <Signin />} />
        <Route  path='main/main/:id' element={ <Book />} />
        <Route  path='main/main/:id/recommends/:id' element={ <RecommendsBooks />} />
        <Route  path='main/main/:id/recommends/:id/RecommendAthor' element={ <RecommendAthor />} />
      </Routes>
    </div>
  );
}

export default App;

