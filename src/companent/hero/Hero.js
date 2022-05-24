

import React, { useState } from 'react'
import './hero.scss'
import backgraund  from '../../assets/imgs/bgslider.png'
export default function Hero() {

  const [color,setColor]=useState('white');
  const [color2,setColor2]=useState('SlateGray');
  const [color3,setColor3]=useState('SlateGray');
  const [color4,setColor4]=useState('SlateGray');

  const [slider1,setslider1]=useState('0');

  let herocaruselone = () => {
    setslider1(-0 * 1300)
    setColor("white")
    setColor2("SlateGray")
    setColor3("SlateGray")
    setColor4("SlateGray")
  }
  let herocaruseltwo = () => {
    setslider1(-1* 1300)

    setColor("SlateGray")
    setColor2("White")
    setColor3("SlateGray")
    setColor4("SlateGray")
  }
  let herocaruselthree = () => {
    setslider1(-2* 1300)

    setColor("SlateGray")
    setColor2("SlateGray")
    setColor3("White")
    setColor4("SlateGray")

  }
  let herocaruselfour = () => {
    setslider1(-3* 1300)


    setColor("SlateGray")
    setColor2("SlateGray")
    setColor3("SlateGray")
    setColor4("White")
  }

  return (
    <div className='container'>
      <div className='hero'>
        <ul id='hero__list' className='hero__list' style={{transform: `translateX(${slider1}px)`}}>
          <li className='hero__item' >
            <div className='hero__text'><p className='hero__subtext'>Temuriylar davri adabiyoti</p></div>
          </li>
          <li className='hero__item'>
            <div className='hero__text'><p className='hero__subtext'>Jadidlar davri adabiyoti</p></div>
          </li>
          <li className='hero__item'>
            <div className='hero__text'><p className='hero__subtext'>Sovet davri adabiyoti</p></div>
          </li>
          <li className='hero__item'>
            <div className='hero__text'><p className='hero__subtext'>Mustaqillik davri adabiyoti</p></div>
          </li>
        </ul>
        <div className='hero__btngroup'>
          <button id='hero__btn1' className='hero__btn' style={{background:color}}  onClick={herocaruselone}></button>
          <button id='hero__btn2' className='hero__btn' style={{background:color2}}  onClick={herocaruseltwo}></button>
          <button id='hero__btn3' className='hero__btn' style={{background:color3}}  onClick={herocaruselthree}></button>
          <button id='hero__btn4' className='hero__btn' style={{background:color4}}  onClick={herocaruselfour}></button>
        </div>
      </div>
    </div>
  )
}


















