import React, { useEffect, useState } from 'react'
import BackToLanding from './BackToLanding'
import logo from '../img/Frame.png'
import './LaptopInfo.css'
const LaptopInfo = (props) => {

    return (
    <div className='laptopInfo'>
         <BackToLanding/>
         <h1 className='lapInfo--h1'>ლეპტოპის ინფო</h1>
         <div className='lapInfo--info'>
            <img className='lapInfo--img' src={props.data.data.laptop.image}/>
            <table className='lapInfo--table'>
                <tr>
                    <td><b>სახელი:</b></td>
                    <td>{props.data.data.user.name} {props.data.data.user.surname}</td>
                </tr>
                <tr>
                    <td>თიმი:</td>
                    <td>{props.data.data.user.team_id}</td>
                </tr>
                <tr>
                    <td>პოზიცია:</td>
                    <td>{props.data.data.user.position_id}</td>
                </tr>
                <tr>
                    <td>მეილი:</td>
                    <td>{props.data.data.user.email}</td>
                </tr>
                <tr>
                    <td>ტელ.ნომერი:</td>
                    <td>{props.data.data.user.phone_number}</td>
                </tr>
            </table>
         </div>
    </div>
  )
}

export default LaptopInfo