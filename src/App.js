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


import { Route, Routes } from 'react-router-dom';
import AbdullaAvloniy from './companent/AbdullaAvloniy/AbdullaAvloniy';

function App() {
  let arr =[
    {
      id:1,
      fname:"AbdullaAvloniy",
      name:"Abdulla Avloniy",
      img:avloniy,
      wasborn:1978,
      died:1993,
      birthAddress:"Toshkent, Uzbekistan",
      desc:`XIX asr oxiri XX asr boshidagi ozbek milliy madaniyatining mashhur vakillaridan biri maʼrifatparvar shoir, dramaturg, jurnalist, olim, davlat va jamoat arbobi Abdulla Avloniydir. U 1878 yilning 12 iyulida Toshkentning Mergancha mahallasida, toquvchi Miravlon aka oilasida dunyoga keldi. Bolaligi Mirobod mahallasining egri-bugri kochalarida, kopchilik qismini ruslar tashkil qilgan temir yol ishchilari bolalari orasida kechdi. Oqchidagi eski maktabda, song madrasada oqidi (1885–1886). Mustaqil mutolaa bilan shugʻullandi. Arab, fors, rus tillarini organdi. Orenburg, Qozon, Tiflisda chiqib turgan gazeta-jurnallarni kuzatib bordi. Qisqa muddat ichida u maʼrifatparvar sifatida tanildi va olkadagi ijgimoiy-madaniy harakatchilikning faol namoyandalaridan biriga aylandi.`,
      worklife:"Yozuvchining ilk asari 1962-yilda „Poʻlat chavandoz“ nomida ocherklar toʻplami tarzida nashrdan chiqdi. Ammo yozuvchiga muvaffaqiyat keltirgan asar 1970-yilda nashr qilingan „Bahor qaytmaydi“ qissasi boʻldi.",
      books:[
        {
          bookname:"Pinak",
          bookpic:"https://saviya.uz/wp-content/uploads/2017/04/abdulla_avloniy-640x400.jpg?x94708"
        }
      ],
    },
    {
      id:2,
      fname:"Nusrat",
      name:"Nusrat Rahmat",
      img:nusrat,
      wasborn:1941,
      died:2017,
      birthAddress:"Toshkent, Uzbekistan",
      desc:`XIX asr oxiri XX asr boshidagi ozbek milliy madaniyatining mashhur vakillaridan biri maʼrifatparvar shoir, dramaturg, jurnalist, olim, davlat va jamoat arbobi Abdulla Avloniydir. U 1878 yilning 12 iyulida Toshkentning Mergancha aa bilan shugʻullandi. Arab, fors, rus tillarini organdi. Orenburg, Qozon, Tiflisda chiqib turgan gazeta-jurnallarni kuzatib bordi. Qisqa muddat ichida u maʼrifatparvar sifatida tanildi va olkadagi ijgimoiy-madaniy harakatchilikning faol namoyandalaridan biriga aylandi.`,
      worklife:"Yozuvchining ilk asari 1962-yilda „Poʻlat chavandoz“ nomida ocherklar toʻplami tarzida nashrdan chiqdi. Ammo yozuvchiga muvaffaqiyat keltirgan asar 1970-yilda nashr qilingan „Bahor qaytmaydi“ qissasi boʻldi.",
      books:[
        {
          bookname:"Pinaklll",
          bookpic:"https://saviya.uz/wp-content/uploads/2017/04/abdulla_avloniy-640x400.jpg?x94708"
        }
      ],
    },
    {
      id:3,
      fname:"Rahmonberdi",
      name:"Rahmonberdi Madazimov",
      img:rahmonberdi,
      wasborn:1875,
      died:1933,
      birthAddress:"Toshkent, Uzbekistan",
      desc:`XIX asr oxiri XX asr boshidagi ozbek milliy madaniyatining mashhur vakillaridan biri maʼrifatparvar shoir, dramaturg, jurnalist, olim, davlat va jamoat arbobi Abdulla Avloniydir. U 1878 yilning 12 iyulida Toshkentning Mergancha mahallasida, toquvchi Miravlon aka oilasida dunyoga keldi. Bolaligi Mirobod mahallifatparvar sifatida tanildi va olkadagi ijgimoiy-madaniy harakatchilikning faol namoyandalaridan biriga aylandi.`,
      worklife:"Yozuvchining ilk asari 1962-yilda „Poʻlat chavandoz“ nomida ocherklar toʻplami tarzida nashrdan chiqdi. Ammo yozuvchiga muvaffaqiyat keltirgan asar 1970-yilda nashr qilingan „Bahor qaytmaydi“ qissasi boʻldi.",
      books:[
        {
          bookname:"Pinak",
          bookpic:"https://saviya.uz/wp-content/uploads/2017/04/abdulla_avloniy-640x400.jpg?x94708"
        }
      ],
    },
    {
      id:4,
      fname:"Hamza",
      name:"Hamza Hakimzoda Niyoziy",
      img:hamza,
      wasborn:1889,
      died:1929,
      birthAddress:"Toshkent, Uzbekistan",
      desc:`XIX asr oxiri XX asr boshidagi ozbek milliy madaniyatining mashhur vakillaridan biri maʼrifatparvar shoir, dramaturg, jurnalist, olim, davlat va jamoat arbobi Abdulla Avloniydir. U 1878 yilning 12 iyulida Toshkentning Mergancha mahallasida, toquvchi Miravlon aka oilasida dunyoga keldi. Bolaligi Mirobod mahallifatparvar sifatida tanildi va olkadagi ijgimoiy-madaniy harakatchilikning faol namoyandalaridan biriga aylandi.`,
      worklife:"Yozuvchining ilk asari 1962-yilda „Poʻlat chavandoz“ nomida ocherklar toʻplami tarzida nashrdan chiqdi. Ammo yozuvchiga muvaffaqiyat keltirgan asar 1970-yilda nashr qilingan „Bahor qaytmaydi“ qissasi boʻldi.",
      books:[
        {
          bookname:"Pinak",
          bookpic:"https://saviya.uz/wp-content/uploads/2017/04/abdulla_avloniy-640x400.jpg?x94708"
        }
      ],
    },
    {
      id:5,
      fname:"Abdulhamid",
      name:"Abdulhamid Cho'lpon",
      img:cholpon,
      wasborn:1897,
      died:1938,
      birthAddress:"Toshkent, Uzbekistan",
      desc:`XIX asr oxiri XX asr boshidagi ozbek milliy madaniyatining mashhur vakillaridan biri maʼrifatparvar shoir, dramaturg, jurnalist, olim, davlat va jamoat arbobi Abdulla Avloniydir. U 1878 yilning 12 iyulida Toshkentning Mergancha mahallasida, toquvchi Miravlon aka oilasida dunyoga keldi. Bolaligi Mirobod mahallifatparvar sifatida tanildi va olkadagi ijgimoiy-madaniy harakatchilikning faol namoyandalaridan biriga aylandi.`,
      worklife:"Yozuvchining ilk asari 1962-yilda „Poʻlat chavandoz“ nomida ocherklar toʻplami tarzida nashrdan chiqdi. Ammo yozuvchiga muvaffaqiyat keltirgan asar 1970-yilda nashr qilingan „Bahor qaytmaydi“ qissasi boʻldi.",
      books:[
        {
          bookname:"Pinak",
          bookpic:"https://saviya.uz/wp-content/uploads/2017/04/abdulla_avloniy-640x400.jpg?x94708"
        }
      ],
    },
    {
      id:6,
      fname:"Abdurauf",
      name:"Abdurauf Fitrat",
      img:fitrat,
      wasborn:1886,
      died:1938,
      birthAddress:"Toshkent, Uzbekistan",
      desc:`XIX asr oxiri XX asr boshidagi ozbek milliy madaniyatining mashhur vakillaridan biri maʼrifatparvar shoir, dramaturg, jurnalist, olim, davlat va jamoat arbobi Abdulla Avloniydir. U 1878 yilning 12 iyulida Toshkentning Mergancha mahallasida, toquvchi Miravlon aka oilasida dunyoga keldi. Bolaligi Mirobod mahallifatparvar sifatida tanildi va olkadagi ijgimoiy-madaniy harakatchilikning faol namoyandalaridan biriga aylandi.`,
      worklife:"Yozuvchining ilk asari 1962-yilda „Poʻlat chavandoz“ nomida ocherklar toʻplami tarzida nashrdan chiqdi. Ammo yozuvchiga muvaffaqiyat keltirgan asar 1970-yilda nashr qilingan „Bahor qaytmaydi“ qissasi boʻldi.",
      books:[
        {
          bookname:"Pinak",
          bookpic:"https://saviya.uz/wp-content/uploads/2017/04/abdulla_avloniy-640x400.jpg?x94708"
        }
      ],
    },
    {
      id:7,
      fname:"Abdulmajid",
      name:"Abdulmajid Qodiriy",
      img:qodiriy,
      wasborn:1880,
      died:1938,
      birthAddress:"Toshkent, Uzbekistan",
      desc:`XIX asr oxiri XX asr boshidagi ozbek milliy madaniyatining mashhur vakillaridan biri maʼrifatparvar shoir, dramaturg, jurnalist, olim, davlat va jamoat arbobi Abdulla Avloniydir. U 1878 yilning 12 iyulida Toshkentning Mergancha mahallasida, toquvchi Miravlon aka oilasida dunyoga keldi. Bolaligi Mirobod mahallifatparvar sifatida tanildi va olkadagi ijgimoiy-madaniy harakatchilikning faol namoyandalaridan biriga aylandi.`,
      worklife:"Yozuvchining ilk asari 1962-yilda „Poʻlat chavandoz“ nomida ocherklar toʻplami tarzida nashrdan chiqdi. Ammo yozuvchiga muvaffaqiyat keltirgan asar 1970-yilda nashr qilingan „Bahor qaytmaydi“ qissasi boʻldi.",
      books:[
        {
          bookname:"Pinak",
          bookpic:"https://saviya.uz/wp-content/uploads/2017/04/abdulla_avloniy-640x400.jpg?x94708"
        }
      ],
    },
    {
      id:8,
      fname:"Munavvarqori",
      name:"Munavvarqori Abdurashidxonov",
      img:munavvar,
      wasborn:1878,
      died:1931,
      birthAddress:"Toshkent, Uzbekistan",
      desc:`XIX asr oxiri XX asr boshidagi ozbek milliy madaniyatining mashhur vakillaridan biri maʼrifatparvar shoir, dramaturg, jurnalist, olim, davlat va jamoat arbobi Abdulla Avloniydir. U 1878 yilning 12 iyulida Toshkentning Mergancha mahallasida, toquvchi Miravlon aka oilasida dunyoga keldi. Bolaligi Mirobod mahallifatparvar sifatida tanildi va olkadagi ijgimoiy-madaniy harakatchilikning faol namoyandalaridan biriga aylandi.`,
      worklife:"Yozuvchining ilk asari 1962-yilda „Poʻlat chavandoz“ nomida ocherklar toʻplami tarzida nashrdan chiqdi. Ammo yozuvchiga muvaffaqiyat keltirgan asar 1970-yilda nashr qilingan „Bahor qaytmaydi“ qissasi boʻldi.",
      books:[
        {
          bookname:"Pinak",
          bookpic:"https://saviya.uz/wp-content/uploads/2017/04/abdulla_avloniy-640x400.jpg?x94708"
        }
      ],
    },
    {
      id:9,
      fname:"Abdulla",
      name:"Abdulla Qodiriy",
      img:abdulla,
      wasborn:1894,
      died:1938,
      birthAddress:"Toshkent, Uzbekistan",
      desc:`XIX asr oxiri XX asr boshidagi ozbek milliy madaniyatining mashhur vakillaridan biri maʼrifatparvar shoir, dramaturg, jurnalist, olim, davlat va jamoat arbobi Abdulla Avloniydir. U 1878 yilning 12 iyulida Toshkentning Mergancha mahallasida, toquvchi Miravlon aka oilasida dunyoga keldi. Bolaligi Mirobod mahallifatparvar sifatida tanildi va olkadagi ijgimoiy-madaniy harakatchilikning faol namoyandalaridan biriga aylandi.`,
      worklife:"Yozuvchining ilk asari 1962-yilda „Poʻlat chavandoz“ nomida ocherklar toʻplami tarzida nashrdan chiqdi. Ammo yozuvchiga muvaffaqiyat keltirgan asar 1970-yilda nashr qilingan „Bahor qaytmaydi“ qissasi boʻldi.",
      books:[
        {
          bookname:"Pinak",
          bookpic:"https://saviya.uz/wp-content/uploads/2017/04/abdulla_avloniy-640x400.jpg?x94708"
        }
      ],
    },
    {
      id:10,
      fname:"Mahmud",
      name:"Mahmudo'ja Behbudiy",
      img:behmudiy,
      wasborn:1875,
      died:1919,
      birthAddress:"Toshkent, Uzbekistan",
      desc:`XIX asr oxiri XX asr boshidagi ozbek milliy madaniyatining mashhur vakillaridan biri maʼrifatparvar shoir, dramaturg, jurnalist, olim, davlat va jamoat arbobi Abdulla Avloniydir. U 1878 yilning 12 iyulida Toshkentning Mergancha mahallasida, toquvchi Miravlon aka oilasida dunyoga keldi. Bolaligi Mirobod mahallifatparvar sifatida tanildi va olkadagi ijgimoiy-madaniy harakatchilikning faol namoyandalaridan biriga aylandi.`,
      worklife:"Yozuvchining ilk asari 1962-yilda „Poʻlat chavandoz“ nomida ocherklar toʻplami tarzida nashrdan chiqdi. Ammo yozuvchiga muvaffaqiyat keltirgan asar 1970-yilda nashr qilingan „Bahor qaytmaydi“ qissasi boʻldi.",
      books:[
        {
          bookname:"Pinak",
          bookpic:"https://saviya.uz/wp-content/uploads/2017/04/abdulla_avloniy-640x400.jpg?x94708"
        }
      ],
    },
    
    {
      id:11,
      fname:"Hoji",
      name:"Hoji Muin",
      img:hoji,
      wasborn:1883,
      died:1942,
      birthAddress:"Toshkent, Uzbekistan",
      desc:`XIX asr oxiri XX asr boshidagi ozbek milliy madaniyatining mashhur vakillaridan biri maʼrifatparvar shoir, dramaturg, jurnalist, olim, davlat va jamoat arbobi Abdulla Avloniydir. U 1878 yilning 12 iyulida Toshkentning Mergancha mahallasida, toquvchi Miravlon aka oilasida dunyoga keldi. Bolaligi Mirobod mahallifatparvar sifatida tanildi va olkadagi ijgimoiy-madaniy harakatchilikning faol namoyandalaridan biriga aylandi.`,
      worklife:"Yozuvchining ilk asari 1962-yilda „Poʻlat chavandoz“ nomida ocherklar toʻplami tarzida nashrdan chiqdi. Ammo yozuvchiga muvaffaqiyat keltirgan asar 1970-yilda nashr qilingan „Bahor qaytmaydi“ qissasi boʻldi.",
      books:[
        {
          bookname:"Pinak",
          bookpic:"https://saviya.uz/wp-content/uploads/2017/04/abdulla_avloniy-640x400.jpg?x94708"
        }
      ],
    },
  ]

  return (
    <div>
       <Header/>
       <Hero/>
       <Routes>
        <Route path='/' element={ <Main arr={arr}/> }></Route>
        <Route path='main/item/:id' element={ <AbdullaAvloniy  arr={arr}/> }></Route>
      </Routes>
    </div>
  );
}

export default App;



















