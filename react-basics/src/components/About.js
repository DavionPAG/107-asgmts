import React, { Component } from 'react'
import './about.css'

export default class About extends Component {
  render() {
    return (
      <div className='about' >
      <img src={'/media/profile-pic.jpg'} alt='profile-pic' />
      <div className="card-details">
        <h2 className="title">Davion </h2>
        <label htmlFor="occu">Fullstack JavaScript Developer</label>
      </div>
    </div>
    )
  }
}
