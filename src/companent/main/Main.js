

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './main.scss'
import {Objects} from '../Object/Object'
import Pagination from '../Pagination/Pagination';
import Cards from '../Cards/Cards';
import Hero from '../hero/Hero';

export default function Main(props) {

  const [post, setpost] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setpostPerPage] = useState(6)

  useEffect(() => {
    setpost(Objects) 
  },[])

  let indexOfLastPage = currentPage * postsPerPage;
  let indexOfFirstPage = indexOfLastPage - postsPerPage;
  let currentPosts = post.slice(indexOfFirstPage, indexOfLastPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  }


  const [color,setColor]=useState('#C9AC8C');
  const [color2,setColor2]=useState('#ffffff99');
  const [color3,setColor3]=useState('#ffffff99');
  const [color4,setColor4]=useState('#ffffff99');

  const [oreginalarr,setarre]=useState(Objects);
  const [arr2, setArr] = useState(oreginalarr);

  
  let maincolorone = (e) => {
    setColor("#C9AC8C")
    setColor2("#ffffff99")
    setColor3("#ffffff99")
    setColor4("#ffffff99")
  }
  let maincolortwo = (e) => {
    setColor("#ffffff99")
    setColor2("#C9AC8C")
    setColor3("#ffffff99")
    setColor4("#ffffff99")
  }
  let maincolorthree = (e) => {
    setColor("#ffffff99")
    setColor2("#ffffff99")
    setColor3("#C9AC8C")
    setColor4("#ffffff99")
  }
  let maincolorfour = (e) => {
    setColor("#ffffff99")
    setColor2("#ffffff99")
    setColor3("#ffffff99")
    setColor4("#C9AC8C")
  }
  let searchel = (e) => {
    e.preventDefault()

    let items = document.querySelectorAll(".main__card")
    let textlarim  = e.target.value.toLowerCase()

      Array.from(items).forEach((item) => {
      let aniqla =  item.firstChild.nextSibling.firstElementChild.textContent
      if (aniqla.toLowerCase().indexOf(textlarim) == -1) {
        item.style.display = "none"
      }
      else {
        item.style.display = "block"
      }
      })
  }

  return (
    <div className='container'>
     <main className='main'>
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
      
       <Cards  postsPerPage={postsPerPage}
        total={post.length}
        currentPosts={currentPosts}
        setpost={setpost}
        arr2 = {Objects}
        paginate={paginate}/>
      <Pagination 
        postsPerPage={postsPerPage}
        total={post.length}
        paginate={paginate}
      />
          
     </main>
    
    </div>
  )
}




















