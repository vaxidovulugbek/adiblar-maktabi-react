

import React from 'react'
import './Pagination.scss'
function Pagination({postsPerPage,total,paginate}) {

  const pageNumber = [];

  for(let i = 1; i <= Math.ceil(total / postsPerPage); i++){
    pageNumber.push(i);
  }

  return (
    <div className='pagination-content'>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
              {pageNumber.map(number => {
                return <li className='page-item' key={number}>
                <button onClick={() => paginate(number)} className='page-link'>
                  {number}
                </button>
            </li>
         })}
          </ul>
        </nav>
      </div>
  )
}

export default Pagination


{/* <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">«</span>
              </a>
            </li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">»</span>
              </a>
            </li> */}