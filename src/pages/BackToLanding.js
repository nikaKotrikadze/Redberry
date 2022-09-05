import React from 'react'
import Vector from '../img/Vector.png'
import { Link } from 'react-router-dom'
import './AddNote.css'
const BackToLanding = () => {
  return (
    <div className='back-to-landing'>
    <Link to="/"><div className='addnote--go--back--btn'><img src={Vector} alt="" className="addnote--vector"/></div></Link>
    </div>
    )
}

export default BackToLanding