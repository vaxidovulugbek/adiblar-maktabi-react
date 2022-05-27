
import React from 'react'
import './Edit.scss'
function Edit({setfirstname,setlastname}) {
  let editname = (e) => {
    e.preventDefault()
    setfirstname(e.target.value)
  }
  let editlstname = (e) => {
    e.preventDefault()
    setlastname(e.target.value)
  }
  return (
    <div className='edit-container mt'>
      <div className='edit'>
      <div className='edit__profil'>
        <img className='edit__avatar' src="https://w7.pngwing.com/pngs/754/2/png-transparent-samsung-galaxy-a8-a8-user-login-telephone-avatar-pawn-blue-angle-sphere-thumbnail.png" alt="avatar" />
        <i class='bx bx-camera'></i>
      </div>
      <div className='edit__content'>
        <p className='edit__text'>My profile</p>
        <form className='edit__form'>
          <div className='edit__column'>
            <label>First Name</label>
            <input className='edit__input' type="text" placeholder='First-Name' onChange={editname}/>
          </div>
          <div className='edit__column'>
            <label>Last Name</label>
            <input className='edit__input' type="text" placeholder='Last-Name' onChange={editlstname}/>
          </div>
          <div className='edit__phonenum'>
            <div className='edit__column w50'>
              <label>Phone</label>
              <input className='edit__pe-email' type="number" placeholder='Phone'/>
            </div>
            <div className='edit__column w50'>
              <label>Email</label>
              <input className='edit__pe-email' type="Email" placeholder='Email'/>
            </div>
          </div>
          <span className='edit__hr'></span>
          <button className='edit__btn'>Save Changes</button>
        </form>
      </div>
      </div>
    </div>
  )
}

export default Edit