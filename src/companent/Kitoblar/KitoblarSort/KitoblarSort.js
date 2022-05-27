


import React from 'react'
import { Link } from 'react-router-dom'
import './KitoblarSort.scss'
function KitoblarSort({Objects,setpost,currentPosts}) {

 let category = ["All","O'zbek","Jahon","Diniy"]
 const filterbycategory = (e) => {
   if (e.target.textContent == "All") {
    setpost(
      Objects
    )
   }
   if (e.target.textContent == "Jahon") {
    setpost(
      Objects.filter(item => {
        console.log(item);
         return item.FilterGenre === "jahon"
       })
    )
   }
   if (e.target.textContent == "O'zbek") {
    setpost(
      Objects.filter(item => {
         return item.FilterGenre === "ozbek"
       })
    )
   }
   if (e.target.textContent == "Diniy") {
    setpost(
      Objects.filter(item => {
         return item.FilterGenre === "diniy"
       })
    )
   }
  }
  return (
    <div className='container'>
      <div className='KitobSort'>
      <ul className='KitobSort__wishlist'>
        {category.map(item => {
          return <li className='KitobSort__item' ><button className='KitobSort__item-btn' onClick={filterbycategory}>{item}</button></li>
        })}
      </ul>

      <ul className='KitobSort__list'>
       {currentPosts.map((item, i) => {
            return <li key={item.id} className="KitobSort__card">
            {item.books.map(el => {
              return <Link to={`/main/main/${el.id}`}>
                  <img className='main__card-img' src={el.bookpic} alt="ajdodlar" />
                  <div className='main__card-info'>
                    <p className='main__catd-title'>{el.bookname}</p>
                    <div className='main__card-buy'>
                      <div className='main__card-buy card-mr'>
                        <i className="bx bx-book-alt" />
                        <p>34</p>
                      </div>
                      <div className='main__card-buy'>
                        <i className='bx bx-headphone' ></i>
                        <p>13</p>
                      </div>
                    </div>
                </div>
              </Link>
            })}
              </li>
              
          })}
      </ul>
      </div>
    </div>
  )
}

export default KitoblarSort