


import React, { useState } from 'react'
import './header.scss'
import logo from '../../assets/ims/logo.svg'
import person from '../../assets/ims/person.png'
export default function Header() {
  let [border1, setborder1] = useState(590)

  let borderHendler1 = () => {
    setborder1(590)
  }

  let borderHendler2 = () => {
    setborder1(684)
  }
  let borderHendler3 = () => {
    setborder1(764)
  }
  let borderHendler4 = () => {
    setborder1(860)
  }
  let borderHendler5 = () => {
    setborder1(960)
  }


  return (
    <div className='container'>
      <div className='header'>
      <img className='header__logo' src={logo} alt="logo" />
      <nav className='header__nav'>
        <ul className='header__list'>
          <li className='header__item'><a className='header__item-link' href="#" onClick={borderHendler1}>Bosh sahifa</a></li>
          <li className='header__item'><a className='header__item-link' href="#" onClick={borderHendler2}>Nasr</a></li>
          <li className='header__item'><a className='header__item-link' href="#" onClick={borderHendler3}>Nazm</a></li>
          <li className='header__item'><a className='header__item-link' href="#" onClick={borderHendler4}>Maqolalar</a></li>
          <li className='header__item'><a className='header__item-link' href="#" onClick={borderHendler5}>Forum</a></li>
        </ul>
        <span className='header__line' style={{position: 'absolute', top: 80, left: border1}}></span>
      </nav>
      <div className='header__person'>
        <img className='header__person-img' src={person} alt="" />
        <i className='bx bx-chevron-down'></i>
      </div>
    </div>
    </div>
  )
}



