import React, { useEffect, useState } from 'react'
import BackToLanding from './BackToLanding'
import logo from '../img/Frame.png'
import './LaptopInfo.css'
const LaptopInfo = (props) => {
const styles ={
fontFamily: 'Helvetica Neue',
fontStyle: 'normal',
fontWeight: '500',
fontSize: '22px',
lineHeight: '27px',

/* შავი/500 */

color: '#2E2E2E'
}

const Bstyles ={
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '22px',
    lineHeight: '27px',
    
    /* შავი/500 */
    
    color: '#797979'
    }

    return (
    <div className='laptopInfo'>
         <BackToLanding/>
         <h1 className='lapInfo--h1'>ლეპტოპის ინფო</h1>
         <div className='lapInfo--info'>
            <img className='lapInfo--img' src={props.data.data.laptop.image}/>
            <table className='lapInfo--table'>
                <tr>
                    <td style={styles}><b>სახელი:</b></td>
                    <td style={Bstyles}>{props.data.data.user.name} {props.data.data.user.surname}</td>
                </tr>
                <tr>
                    <td style={styles}>თიმი:</td>
                    <td style={Bstyles}>{props.data.data.user.team_id}</td>
                </tr>
                <tr>
                    <td style={styles}>პოზიცია:</td>
                    <td style={Bstyles}>{props.data.data.user.position_id}</td>
                </tr>
                <tr>
                    <td style={styles}>მეილი:</td>
                    <td style={Bstyles}>{props.data.data.user.email}</td>
                </tr>
                <tr>
                    <td style={styles}>ტელ.ნომერი:</td>
                    <td style={Bstyles}>{props.data.data.user.phone_number}</td>
                </tr>
            </table>
         </div>
         <hr style={{position: 'absolute',
height: '0px',
left: '371px',
right: '371px',
top: '607px',

/* შავი/300 */

border: '1px solid #A5A5A5'}}/>
<div className='second-column'>
    <div className='lapInfo--col1'>
    <table className='lapInfo--table'>
                <tr>
                    <td style={styles}><b>ლეპტოპის სახელი:</b></td>
                    <td style={Bstyles}>{props.data.data.laptop.name}</td>
                </tr>
                <tr>
                    <td style={styles}>ლეპტოპის ბრენდი:</td>
                    <td style={Bstyles}>{props.data.data.laptop.brand_id}</td>
                </tr>
                <tr>
                    <td style={styles}>RAM:</td>
                    <td style={Bstyles}>{props.data.data.laptop.ram}</td>
                </tr>
                <tr>
                    <td style={styles}>მეხსიერების ტიპი:</td>
                    <td style={Bstyles}>{props.data.data.laptop.hard_drive_type}</td>
                </tr>
                
            </table>
    </div>
    <div className='lapInfo--col2'>
    <table className='lapInfo--table'>
                <tr>
                    <td style={styles}><b>CPU:</b></td>
                    <td style={Bstyles}>{props.data.data.laptop.cpu.name}</td>
                </tr>
                <tr>
                    <td style={styles}>CPU-ს ბირთვი:</td>
                    <td style={Bstyles}>{props.data.data.laptop.cpu.cores}</td>
                </tr>
                <tr>
                    <td style={styles}>CPU-ს ნაკადი:</td>
                    <td style={Bstyles}>{props.data.data.laptop.cpu.threads}</td>
                </tr>
            </table>
    </div>
</div>
<hr style={{position: 'absolute',
height: '0px',
left: '371px',
right: '371px',
top: '927px',

/* შავი/300 */

border: '1px solid #A5A5A5'}}/>
<div className='third-column'>
        <div className='lapInfo--col3'>
        <table className='lapInfo--table'>
                <tr>
                    <td style={styles}><b>ლეპტოპის მდგომარეობა:</b></td>
                    <td style={Bstyles}>{props.data.data.laptop.state}</td>
                </tr>
                <tr>
                    <td style={styles}>ლეპტოპის ფასი:</td>
                    <td style={Bstyles}>{props.data.data.laptop.price}</td>
                </tr>
            
            </table>
        </div>
        <div className='lapInfo--col4'>
        <table className='lapInfo--table'>
                <tr>
                    <td style={styles}><b>შევსების რიცხვი:</b></td>
                    <td style={Bstyles}>{props.data.data.laptop.purchase_date}</td>
                </tr>

            </table>
        </div>
</div>
    </div>
  )
}

export default LaptopInfo