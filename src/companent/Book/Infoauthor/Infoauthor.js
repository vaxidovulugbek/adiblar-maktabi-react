
import React from 'react'
import qoshtirnoq from '../../../assets/imgs/qoshtirnoq.png'
import './Infoauthor.scss'

function Infoauthor() {
  return (
    <div className='Infoauthor-content'>
      <div className='Infoauthor'>
        <img className='Infoauthor__img' src={qoshtirnoq} alt="qoshtirnoq" />
        <p className='Infoauthor__text'>Inson bolasi ne kunlarni ko'rmaydi?! Har bir odam o'z g'ami bilan bo'lsa, hayotdan ko'z yumib ketganlarga umr bo'yi motam tutib o'tsa, bu moddiy olam shu kunlarga yetolarmidi? Hayot to'lqini ojizlarni qirg'oqqa irg'itib tashlaydi. Oqimga qarshi suza olganlar, to'lqinni egarlaganlargina ertangi kunga yetib keladi.</p>
        <div>
          <i class='bx bxs-heart' ></i>
          <i class='bx bx-share-alt' ></i>
        </div>
      </div>
      <div className='Infoauthor'>
        <img className='Infoauthor__img' src={qoshtirnoq} alt="qoshtirnoq" />
        <p className='Infoauthor__text'>Yer kurrasida chumolidek mehnat qilayotganlardan ko'ra, tuproq tagida yotganlar ko'p. Yer qatlami odam suyaklariga to'lib ketgan.</p>
      </div>
    </div>
  )
}

export default Infoauthor
