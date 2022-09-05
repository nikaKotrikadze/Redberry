import React,{useState, useEffect} from 'react'
import './ListNote.css'
import Box from './Box'
import BackToLanding from './BackToLanding'
import axios from 'axios'
const ListNote = () => {
  const [postData, setPostData] = useState([]);

      useEffect(() => {
          axios 
          .get('https://pcfy.redberryinternship.ge/api/laptops?token=81cffb46cb13bfb7f9be4a680f21681a')
          .then(res => setPostData(res.data.data));
      }, []);

const items = postData.map((item)=>{
  return (
    <div className='each--box' key={item.laptop.id}>
      <Box img={item.laptop.image} cpu={item.laptop.name} firstName={item.user.name} lastName={item.user.surname}/>
    </div>
  )
})

  return (
    <div className='listnote'>
      <div className='link--and--h1--div'>
      <BackToLanding/>
      <h1 className='listnote--h1'>ჩანაწერების სია</h1>
      </div>
    <div className='the--box'>
{items}
    </div>
    </div>
  )
}

export default ListNote


  // const [box, setBox] = useState([])


// https://pcfy.redberryinternship.ge/api/laptops?token=afbd540c3e5631e914a539f539f56439
//id -> 1173



// const obj ={
  // name:"გელა",
  // surname:"გელაშვილი",
  // team_id:1,
  // position_id:1,
  // phone_number:"+995555555555",
  // email:"gela.gelashvili@redberry.ge",
  // token:"81cffb46cb13bfb7f9be4a680f21681a",
  // laptop_name:"HP",
  // laptop_image:"https://www.howtogeek.com/wp-content/uploads/2020/12/Chip-Section-in-About-This-Mac.png?trim=1,1&bg-color=000&pad=1,1",
  // laptop_brand_id:1,
  // laptop_cpu:"Intel Core i3",
  // laptop_cpu_cores:64,
  // laptop_cpu_threads:128,
  // laptop_ram:34,
  // laptop_hard_drive_type:"HDD",
  // laptop_state:"new",
  // laptop_purchase_date:"10-10-2003",
  // laptop_price:1600
// }
// const [box, setBox] = useState(obj)