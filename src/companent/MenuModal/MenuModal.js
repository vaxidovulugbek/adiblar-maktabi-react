
import React from 'react'
import { Link } from 'react-router-dom'
import './MenuModal.scss'
function MenuModal(props) {
  // console.log(props.count);
  // console.log(props.setcount);
  // console.log(setcount(count));
  return (
    <div className='menumodal'>
      <div className='menumodal__info'>
        <Link className='link' to="Profil">
          <i className='bx bxs-user'></i>
          Profil
        </Link>
      </div>
      <div className='menumodal__info'>
       <Link className='link' to="Saved">
          <i className='bx bxs-bookmark-star'></i>
          Saqlanganlar
       </Link>
      </div>
      <div className='menumodal__info'>
        <i className='bx bxs-edit-alt' ></i>
        Taxrirlash
      </div>
    </div>
  )
}

export default MenuModal