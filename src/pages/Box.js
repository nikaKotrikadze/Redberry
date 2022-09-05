import React from 'react'
import { Link } from 'react-router-dom'
import './Box.css'

export default function Box(props){
    return (
        <div className='box-box'>
        <div className='box--div'>
            <img src={props.img}  alt="" className="box--img"/>
            <div className='box--names'>
                <h4>{props.firstName} {props.lastName}</h4>
                <br/>
                <h4>{props.cpu}</h4>
                <br/>
                <br/>
                <Link to="/laptopInfo">მეტის ნახვა</Link>
            </div>
        </div>
        </div>
    )
}

