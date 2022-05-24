
import React, { useState } from 'react'
import './header.scss'
import logo from '../../assets/imgs/logo.svg'
import person from '../../assets/imgs/person.png'
import { Link } from 'react-router-dom'



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
          <li className='header__item'><Link className='header__item-link' to='/main' onClick={borderHendler1}>Bosh sahifa</Link></li>
          <li className='header__item'><Link className='header__item-link' to='/nasr' onClick={borderHendler2}>Nasr</Link></li>
          <li className='header__item'><Link className='header__item-link' to='/nazm' onClick={borderHendler3}>Nazm</Link></li>
          <li className='header__item'><Link className='header__item-link' to='/maqolalar' onClick={borderHendler4}>Maqolalar</Link></li>
          <li className='header__item'><Link className='header__item-link' to='/forum' onClick={borderHendler5}>Forum</Link></li>
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



