import './App.css';
import Header from './companent/header/Header';
import Hero from './companent/hero/Hero';
import Main from './companent/main/Main';

import avloniy from './assets/ims/avloniy.png'
import nusrat from './assets/ims/nusrat.png'
import rahmonberdi from './assets/ims/rahmonberdi.png'
import hamza from './assets/ims/hamza.png'
import cholpon from './assets/ims/cholpon.png'
import fitrat from './assets/ims/fitrat.png'
import qodiriy from './assets/ims/qodiriy.png'
import munavvar from './assets/ims/munavvar.png'
import abdulla from './assets/ims/abdulla.png'
import behmudiy from './assets/ims/behmudiy.png'
import hoji from './assets/ims/hoji.png'

function App() {
  let arr =[
    {
      id:1,
      name:"Abdulla Avloniy",
      img:avloniy,
      wasborn:1978,
      died:1993,
    },
    {
      id:2,
      name:"Nusrat Rahmat",
      img:nusrat,
      wasborn:1941,
      died:2017,
    },
    {
      id:3,
      name:"Rahmonberdi Madazimov",
      img:rahmonberdi,
      wasborn:1875,
      died:1933,
    },
    {
      id:4,
      name:"Hamza Hakimzoda Niyoziy",
      img:hamza,
      wasborn:1889,
      died:1929,
    },
    {
      id:5,
      name:"Abdulhamid Cho'lpon",
      img:cholpon,
      wasborn:1897,
      died:1938,
    },
    {
      id:6,
      name:"Abdurauf Fitrat",
      img:fitrat,
      wasborn:1886,
      died:1938,
    },
    {
      id:7,
      name:"Abdulmajid Qodiriy",
      img:qodiriy,
      wasborn:1880,
      died:1938,
    },
    {
      id:8,
      name:"Munavvarqori Abdurashidxonov",
      img:munavvar,
      wasborn:1878,
      died:1931,
    },
    {
      id:9,
      name:"Abdulla Qodiriy",
      img:abdulla,
      wasborn:1894,
      died:1938,
    },
    {
      id:10,
      name:"Mahmuxo'ja Behbudiy",
      img:behmudiy,
      wasborn:1875,
      died:1919,
    },
    {
      id:11,
      name:"Hoji Muin",
      img:hoji,
      wasborn:1883,
      died:1942,
    },
  ]

  return (
    <div>
       <Header/>
       <Hero/>
       <Main arr={arr}
       />
    </div>
  );
}

export default App;



















