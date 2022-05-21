

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './main.scss'

export default function Main(props) {

  const [color,setColor]=useState('#C9AC8C');
  const [color2,setColor2]=useState('#ffffff99');
  const [color3,setColor3]=useState('#ffffff99');
  const [color4,setColor4]=useState('#ffffff99');

  const [oreginalarr,setarre]=useState(props.arr);

  const [arr2, setArr] = useState(oreginalarr);

  
  let maincolorone = (e) => {

    setColor("#C9AC8C")
    setColor2("#ffffff99")
    setColor3("#ffffff99")
    setColor4("#ffffff99")

  }
  
  let maincolortwo = (e) => {
    setColor("#ffffff99")
    setColor2("#C9AC8C")
    setColor3("#ffffff99")
    setColor4("#ffffff99")
  }
  
  let maincolorthree = (e) => {
    setColor("#ffffff99")
    setColor2("#ffffff99")
    setColor3("#C9AC8C")
    setColor4("#ffffff99")
  }
  
  let maincolorfour = (e) => {
    setColor("#ffffff99")
    setColor2("#ffffff99")
    setColor3("#ffffff99")
    setColor4("#C9AC8C")
  }

  let searchel = (e) => {
    e.preventDefault()

    let items = document.querySelectorAll(".main__card")
    let textlarim  = e.target.value.toLowerCase()

      Array.from(items).forEach((item) => {
      let aniqla =  item.firstChild.nextSibling.firstElementChild.textContent
      if (aniqla.toLowerCase().indexOf(textlarim) == -1) {
        item.style.display = "none"
      }
      else {
        item.style.display = "block"
      }
      })
  }

  return (
    <div className='container'>
     <main className='main'>
        <div className='main__form-content'> 
          <p className='main__form-text'>Qidirish</p>
          <form className='main__form form' >
          <input className='main__form-input' type="search" placeholder='Adiblar, kitoblar, audiolar, maqolalar...' onChange={searchel}/>
          <button className='main__btn' type='submit'>
            <i className='bx bx-search-alt' ></i>
            Izlash
            </button>
        </form>
        </div>
        <div className='category'>
          <p className='category__text'>Asosiy kategoriyalar</p>
          <ul className='category__list'>
            <li className='category__item'><button className='category__item-btn' onClick={maincolorone} style={{color:color}}>Temuriylar davri</button></li>
            <li className='category__item'><button className='category__item-btn' onClick={maincolortwo} style={{color:color2}}>Jadid adabiyoti</button></li>
            <li className='category__item'><button className='category__item-btn' onClick={maincolorthree} style={{color:color3}}>Sovet davri</button></li>
            <li className='category__item'><button className='category__item-btn' onClick={maincolorfour} style={{color:color4}}>Mustaqillik davri</button> </li>
          </ul>
        </div>
      <ul className='main__list' style={{display: 'flex'}}>
        {arr2.map((item, i) => {
            return <Link to={`main/item/${item.id}`}>
              <li key={i} className="main__card">
                    <img className='main__card-img' src={item.img} alt="ajdodlar" />
                    <div className='main__card-info'>
                        <p className='main__catd-title'>{item.name}</p>
                        <p className='main__card-year'>{item.wasborn}-{item.died}</p>
                        <div className='main__card-buy'>
                          <div className='main__card-buy card-mr'>
                            <i className="bx bx-book-alt" />
                            <p>34</p>
                          </div>
                          <div className='main__card-buy'>
                            <i className='bx bx-headphone' ></i>
                            <p>13</p>
                          </div>
                        </div>
                    </div>
                  </li>
            </Link>
          })}
      </ul>
          
     </main>
    
    </div>
  )
}



















































