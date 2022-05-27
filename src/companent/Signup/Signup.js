

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import signup from '../../assets/imgs/signup.png'
import './Signup.scss'

function Signup({setfirstname,setlastname}) {

  let [validation, setvalidation] = useState(false)
  let [validation1, setvalidation1] = useState(false)
  let [validation2, setvalidation2] = useState(false)
  let [validation3, setvalidation3] = useState(false)
  let [validation4, setvalidation4] = useState(false)

  let firstname = (e) => {
    e.preventDefault()
    setfirstname(e.target.value)
    if(e.target.value.length > 5) {
      setvalidation(true)
    } 
    else if(e.target.value.length < 5) {
      setvalidation(false)
    } 
  }
  let lastname = (e) => {
    e.preventDefault()
    setlastname(e.target.value)
    if(e.target.value.length > 5) {
      setvalidation1(true)
    } 
    else if(e.target.value.length < 5) {
      setvalidation1(false)
    } 
  }
  let number = (e) => {
    e.preventDefault()
    if(e.target.value.length > 5) {
      setvalidation2(true)
    } 
    else if(e.target.value.length < 5) {
      setvalidation2(false)
    } 
  }
  let email = (e) => {
    e.preventDefault()
    if(e.target.value.length > 5) {
      setvalidation3(true)
    } 
    else if(e.target.value.length < 5) {
      setvalidation3(false)
    } 
  }
  let password = (e) => {
    e.preventDefault()
    if(e.target.value.length > 5) {
      setvalidation4(true)
    } 
    else if(e.target.value.length < 5) {
      setvalidation4(false)
    } 
  }

  return (
    <div className='signup'>
      <div className='signup__img-content'>
        <img className='signup__img' src={signup} alt="signup-img" />
      </div>
      <div className='signup__info'>
        <p className='signup__text'>Sign up</p>
        <p className='signup__nextpage'>Already have an account? <Link className='signup__link' to="/signin">Sign in</Link> </p>
        <form className='signup__form'>
          <span className='input-validation' style={{color: validation ? "black" : "red"}}>more 5 symbol</span>
          <input className='signup__input' type="text" placeholder='First name' onChange={firstname} required style={{border: validation ? '1px solid black' : '1px solid red'}}/>
          <span className='input-validation' style={{color: validation1 ? "black" : "red"}}>more 5 symbol</span>
          <input className='signup__input' type="text" placeholder='Last name' onChange={lastname} required style={{border: validation1 ? '1px solid black' : '1px solid red'}}/>
          <span className='input-validation' style={{color: validation2 ? "black" : "red"}}>more 5 symbol</span>
          <input className='signup__input' type="number" placeholder='Phone' onChange={number} required style={{border: validation2 ? '1px solid black' : '1px solid red'}}/>
          <span className='input-validation' style={{color: validation3 ? "black" : "red"}}>more 5 symbol and @</span>
          <input className='signup__input' type="email" placeholder='Email' onChange={email} required style={{border: validation3 ? '1px solid black' : '1px solid red'}}/>
          <span className='input-validation' style={{color: validation4 ? "black" : "red"}}>more 5 symbol</span>
          <input className='signup__input' type="password" placeholder='Password' onChange={password} required style={{border: validation4 ? '1px solid black' : '1px solid red'}}/>
          <button className='signup__btn'>Next step</button>
        </form>
      </div>
    </div>
  )
}

export default Signup

