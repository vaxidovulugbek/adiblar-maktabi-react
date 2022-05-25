


import React from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom';
// import {Objects} from '../Object/Object'
import {recommendation} from '../Object/Object'
// import './Book.scss' 
// import Infoauthor from './Infoauthor/Infoauthor';

function Recommendation() {
  let location = useLocation()
  let location1 = location.pathname.split('/').at(-1)

  console.log(location1);
  return (
    <div>
      {
        recommendation.map(item => {
          if(+location1 === item.id) {
            return <div className='container'>
            <p>{item.title}</p>
            <div className='book'>
                          <div className='book__content'>
                              <div className='book__content-pic'>
                                <img className='book__content-img' src={item.picture} alt="book-author" />
                              </div>

                              <div className='book__content-info'>
                                <h3 className='book__title'>{item.title}</h3>
                                <div className='book__link'>
                                <Link to="RecommendAthor"><p className='book__author'>{item.author}</p></Link>
                                  <span> |  <i class='bx bxs-star'></i> {item.ranking}</span>
                                </div>
                                <div className='book__infos'>
                                  <p className='book__infos-p'>Sahifalar soni:<span className='book__str'>{item.pages}</span></p>
                                  <p className='book__infos-p'>Chop etilgan:<span className='book__str'>{item.published}</span></p>
                                  <p className='book__infos-p'>Janri:<span className='book__str'>{item.genre}</span></p>
                                  <p className='book__infos-p'>Nashriyot<span className='book__str'>{item.publishing}</span></p>
                                </div>
                                <div className='book__moreinfo'>
                                  <p className='book__moreinfo-text'>To'liq ma'lumot</p>
                                  <i className='bx bx-down-arrow-alt'></i>
                                  <span className='book__moreinfo-hr'></span>
                                </div>
                                <p className='book__text'>{item.moreinfo}</p>
                                <p className='book__format'>Mavjud formatlar</p>
                                <div className='book__formats'>
                                  <div className='book__paper'>
                                    <i className='bx bxs-book-alt'></i>
                                    <p className='book__paper-text'>Qog'oz kitob</p>
                                    <p className='book__paper-content'>{item.paperbook} so'm</p>
                                  </div>
                                  <div className='book__audio'>
                                    <i className='bx bx-headphone'></i>
                                    <p className='book__audio-text'>Audiokitob</p>
                                    <p className='book__audio-content'>{item.audiobook} soat</p>
                                  </div>
                                  <div className='book__electron'>
                                    <i class='bx bxs-folder-minus'></i>
                                    <p className='book__electron-text'>Elektron</p>
                                    <p className='book__electron-content'>{item.elektron}</p>
                                  </div>
                                </div>
                              </div>
                          </div>
                        </div>
          </div>
          }
        })
      }
    </div>
  )
}

export default Recommendation





