

import React from 'react'
import { Link } from 'react-router-dom'
import signup from '../../assets/imgs/signin.png'
import './Signin.scss'

function Signin() {
  return (
    <div className='signin'>
      <div className='signin__img-content'>
        <img className='signin__img' src={signup} alt="signup-img" />
      </div>
      <div className='signin__info'>
        <p className='signin__text'>Sign up</p>
        <p className='signin__nextpage'>Already have an account? <Link className='signup__link' to="/">Sign up</Link> </p>
        <form className='signin__form'>
          <input className='signin__input' type="email" placeholder='Email' required/>
          <input className='signin__input' type="password" placeholder='Password' required/>
          <button className='signin__btn'>Next step</button>
        </form>
      </div>
    </div>
  )
}

export default Signin

