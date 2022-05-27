
import React, { useState } from 'react'
import './Profil.scss'
function Profil({setfirstname,Firstname,Lasttname}) {
  
  let menulist = ["O’qilganlar","O’qishni xohlayman","O’qilmoqda","Adiblar"]
  return (
    <div className='container'>
      <div className='profil'>
        <div className='profil__bio'>
          <div className='profil__avatar-part'>
            <img className='profil__avatar' src="https://w7.pngwing.com/pngs/754/2/png-transparent-samsung-galaxy-a8-a8-user-login-telephone-avatar-pawn-blue-angle-sphere-thumbnail.png" alt="avatar" />
            <i className='bx bxs-star'></i>
          </div>
          <h3 className='profil__reward'>Oltin kitobxon</h3>
          <p className='profil__book-num'>186 ta kitob o'qigan</p>
        </div>
        <div className='profil__info'>
          <h2 className='profil__title'>{Firstname} {Lasttname}</h2>
          <div className='profil__info-content'><span className='profil__info-sub'>Tavallud:</span><span className='profil__info-bio'>March 03,1441</span></div>
          <div className='profil__info-content'><span className='profil__info-sub'>Manzil:</span><span className='profil__info-bio'>Las Vegas</span></div>
          <div className='profil__info-content'><span className='profil__info-sub'>Bio:</span><span className='profil__info-bio'>Senior developer</span></div>
        </div>
       
      </div>
       <div className='profil-menu'>
       <div className='profil-menu-rec'></div>
        <div className='profil-menu__info'>
        {
          menulist.map(item=> {
            return <p>{item}</p>
          })
        }
        </div>
       </div>
    </div>
  )
}

export default Profil














