
import React from 'react'
import { Link } from 'react-router-dom'
import './Cards.scss'

function Cards({currentPosts,postsPerPage,total,paginate,arr2,setpost}) {

 let category = ["All","O'zbek","Jahon","Diniy"]
 const filterbycategory = (e) => {
   if (e.target.textContent == "All") {
    setpost(
      arr2
    )
   }
   if (e.target.textContent == "Jahon") {
    setpost(
      arr2.filter(item => {
         return item.FilterGenre === "jahon"
       })
    )
   }
   if (e.target.textContent == "O'zbek") {
    setpost(
      arr2.filter(item => {
         return item.FilterGenre === "ozbek"
       })
    )
   }
   if (e.target.textContent == "Diniy") {
    setpost(
      arr2.filter(item => {
         return item.FilterGenre === "diniy"
       })
    )
   }
  }
  return (
    <div>
      <ul className='category__list'>
        {category.map(item => {
          return <li className='category__item' ><button className='category__item-btn' onClick={filterbycategory}>{item}</button></li>
        })}
      </ul>

      <ul className='main__list' style={{display: 'flex'}}>
       {currentPosts.map((item, i) => {
            return <Link to={`/main/item/${item.id}`}>
              <li key={item.id} className="main__card">
                    <img className='main__card-img' src={item.img} alt="ajdodlar" />
           
                    <div className='main__card-info'>
                        <p className='main__catd-title'>{item.name}</p>
                        <p className='main__card-year'>{item.wasborn}-{item.died}</p>
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
                  </li>
            </Link>
          })}
      </ul>
    </div>
  )
}

export default Cards