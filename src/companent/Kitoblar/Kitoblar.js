
import React, { useEffect, useState } from 'react'
import KitoblarSort from './KitoblarSort/KitoblarSort'
import {Objects} from '../Object/Object'
import Hero from '../hero/Hero'
function Kitoblar() {
  const [post, setpost] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setpostPerPage] = useState(6999)

  let indexOfLastPage = currentPage * postsPerPage;
  let indexOfFirstPage = indexOfLastPage - postsPerPage;
  let currentPosts = post.slice(indexOfFirstPage, indexOfLastPage);

  useEffect(() => {
    setpost(Objects) 
  },[])

  let searchel = (e) => {
    e.preventDefault()

    let items = document.querySelectorAll(".KitobSort__card")
    let textlarim  = e.target.value.toLowerCase()
    
      Array.from(items).forEach((item) => {
      let aniqla =  item.firstElementChild.textContent
      // console.log(aniqla);
      console.log(item);

      // let aniqla = item.firstElementChild.firstElementChild.firstElementChild.firstChild.nextSibling.firstElementChild.textContent

      if (aniqla.toLowerCase().indexOf(textlarim) == -1) {
        item.style.display = "none"
      }
      else {
        item.style.display = "block"
      }
      })
  }

  return (
    <div>
      <Hero/>
      <div className='main__form-content'> 
          <p className='main__form-text'>Qidirish</p>
          <form className='main__form form' >
          <input className='main__form-input' type="search" placeholder='Adiblar, kitoblar, audiolar, maqolalar...' onChange={searchel}/>
          <button className='main__btn' type='submit'>
            <i className='bx bx-search-alt' ></i>
            Izlash
            </button>
        </form>
        </div>
        <div className='category'>
          <p className='category__text'>Asosiy kategoriyalar</p>
        </div>
      <KitoblarSort Objects={Objects}
         setpost={setpost}
         currentPosts={currentPosts}
      />
    </div>
  )
}

export default Kitoblar