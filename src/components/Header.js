import React from 'react'
import Sun from './Images/icon-sun.svg'
import Createe from './Newne'
import './all.css'

function Header() {
  return (
    <header>
    <section className='head'>
        <div className='up'>
          <div>
        <p> <span>TO DO</span> <img src={Sun} alt="" /> </p>
        <Createe />
        </div>
        </div>

        </section>
    </header>
  )
}

export default Header