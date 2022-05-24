

import React from 'react'
import { Link } from 'react-router-dom'
import signup from '../../assets/imgs/signup.png'
import './Signup.scss'

function Signup() {
  return (
    <div className='signup'>
      <div className='signup__img-content'>
        <img className='signup__img' src={signup} alt="signup-img" />
      </div>
      <div className='signup__info'>
        <p className='signup__text'>Sign up</p>
        <p className='signup__nextpage'>Already have an account? <Link className='signup__link' to="/signin">Sign in</Link> </p>
        <form className='signup__form'>
          <input className='signup__input' type="text" placeholder='First name' required/>
          <input className='signup__input' type="text" placeholder='Last name' required/>
          <input className='signup__input' type="number" placeholder='Phone' required/>
          <input className='signup__input' type="email" placeholder='Email' required/>
          <input className='signup__input' type="password" placeholder='Password' required/>
          <Link className='signup__btnlink' to="menu"><button className='signup__btn'>Next step</button></Link>
        </form>
      </div>
    </div>
  )
}

export default Signup

