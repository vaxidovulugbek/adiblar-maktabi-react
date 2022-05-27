
import React from 'react'
import './Saved.scss'
function Saved({newarr,removeSaveItem}) {
  return (
    <div className='container df'>
      {
        newarr.map(item => {
          return <div className='saved'>
            <div className='saved__item'>
                <img className='saved__img' src={item.bookpic} alt={item.bookname} />
                <h3 className='saved__bookname'>{item.bookname}</h3>
                <button onClick={()=>removeSaveItem(item.id)}>O'chirish</button>
            </div>
          </div>
        })
      }
    </div>
  )
}

export default Saved