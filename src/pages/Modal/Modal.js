import React, { useState } from 'react'
import './Modal.css'
import modalpng from '../../img/Frame.png'

import {Link} from 'react-router-dom'
const Modal = (props) => {
    
  return (
    <div className='modal--background'>
      <div className='modal'>
        <div className='modal--imgh1'>
          <img className='modal--img' src={modalpng}>
          </img>
          <h1 className='modal--h1'>ჩანაწერი დამატებულია!</h1>
        </div>
        <div className='modal--linkBtn'>
          <Link to="/listnote"><button className='modal--to--list'>სიაში გადაყვანა</button></Link>
          <Link to="/"><button className='modal--to--landing'>მთავარი</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Modal