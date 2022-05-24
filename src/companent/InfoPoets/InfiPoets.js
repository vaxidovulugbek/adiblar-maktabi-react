

import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import {Objects} from '../Object/Object'
import './InfoPoets.scss'
function AbdullaAvloniy() {
  let location = useLocation()
  let location1 = location.pathname.split('/').at(-1)

  // console.log(location);
  // console.log(Objects);
  // Objects.map(item => {
  //   return item.books.map(el => {
  //     console.log(el.bookname);
  //   })
  // })

  return (
    <div>
      {
        Objects.map(el => {
          if(+location1 === el.id){
            return <div className='container'>
                <div key={el.id} className='infoPoets'>
                <div className='infoPoets__content'>
                    <img className='infoPoets__img' src={el.img} alt="Poets" />
                    <div className='infoPoets__df'>
                    <div className='infoPoets__df-info'>
                      <p className='infoPoets__df-text'>Tavallud sanasi</p>
                      <p className='infoPoets__df-year'>{el.wasborn}</p>
                      <span className='infoPoets__df-birthAddress'>{el.birthAddress}</span>
                    </div>
                    <div className='infoPoets__died-info'>
                      <p className='infoPoets__df-text'>Tavallud sanasi</p>
                      <p className='infoPoets__df-year'>{el.died}</p>
                      <span className='infoPoets__df-birthAddress'>{el.birthAddress}</span>
                    </div>
                    </div>
                </div>

                <div className='infoPoets__context'>
                  <h2 className='infoPoets__title'>{el.name}</h2>
                  <p className='infoPoets__description'>{el.desc}</p>
                  <div className='infoPoets-workife'>
                    <span className='infoPoets-workife__context'>
                      <i className='bx bxs-bookmark-star'></i> 
                      <p className='infoPoets-workife__text'>Ijodi</p>
                      </span>
                      <p className='infoPoets-workife__desc'>{el.worklife}</p>
                  </div>
                  <div className='infoPoets__book'>
                    <div className='infoPoets__booktitle'>
                    <p className='infoPoets__booktext'>Asarlari</p>
                    <button className='infoPoets__bookbtn'>Barchasini ko'rish</button>
                    </div>

                    <ul className='infoPoets__list'>
                     { el.books.map(item => {
                       return <Link to={`/main/main/${item.id}`}>
                         <li className='infoPoets__items'>
                         <img className='infoPoets__items-img' src={item.bookpic} alt="" />
                         
                        <h3 className='infoPoets__item-title'>{item.bookname}</h3>
                        <div className='infoPoets__item-content'>
                           <i className='bx bxs-star'></i>
                           <p className='infoPoets__item-rank'>{item.ranking}</p>
                           <span className='infoPoets__dot'>.</span>
                           <p className='infoPoets__item-commit'>{item.commitnum}</p> 
                           <span className='infoPoets__item-text'> ta firklar</span>
                        </div>
                         </li>
                       </Link> 

                     })}
                    </ul>
                    

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

export default AbdullaAvloniy
