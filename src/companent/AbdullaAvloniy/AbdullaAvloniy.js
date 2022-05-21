

import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

function AbdullaAvloniy({arr}) {

  let location = useLocation()
  let location1 = location.pathname.split('/').at(-1)
  console.log(location1);
 
  arr.map(item => {
    return <div>
      {item.books.map(el => {
        <p>{el.bookname}</p>
        console.log(el.bookname);
      })}
    </div>
  });


  return (
    <div>
      {
        arr.map(el => {
          if(+location1 === el.id){
            return <div className='fff'>
               <div>
                  <img src={el.img} alt="ajdodlarimiz" />
                  <div>
                  <div>
                    <p>Tavallud sanasi</p>
                    <p>{el.wasborn}</p>
                    <span>{el.birthAddress}</span>
                  </div>
                  <div>
                    <p>Tavallud sanasi</p>
                    <p>{el.died}</p>
                    <span>{el.birthAddress}</span>
                  </div>

                  </div>
               </div>

               <div>
                 <h2>{el.name}</h2>
                 <p>{el.desc}</p>
                 <div>
                   <span>
                     <i class='bx bxs-bookmark-star'></i> 
                     <p>Ijodi</p>
                    </span>
                    <p>{el.worklife}</p>
                 </div>
                 <div>
                   <div>
                   <p>Asarlari</p>
                   <button>Barchasini ko'rish</button>
                   </div>
                   <ul>
                     <li>
                        {el.books.map(item => {
                         <div>
                            <img src={item.bookpic} alt="" />
                            <p className='bigger'>{item.bookname}</p>
                         </div>
                        })}
                     </li>
                   </ul>
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







//<h1>{el.fname}</h1>