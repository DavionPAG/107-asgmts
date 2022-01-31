import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <div className="hero-img" >
        <img src='/media/hero-img.jpg' alt='hero' />
        <Link className="nav-link" to="/catalog">
          <button className='cat-btn'>View Catalog</button>
        </Link>
      </div>
    </>
  )
}
