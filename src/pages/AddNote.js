import React,{useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import './AddNote.css'
import BackToLanding from './BackToLanding'
import Navbar from './Navbar/Navbar'
import EmailInput from './EmailInput'

import NextSubmitBtn from './NextSubmitBtn'
import redlogo2 from '../img/redlogo2.png'
import FirstName from './FirstName'
import PhoneInput from './PhoneInput'
import LastName from './LastName'
import SelectPosition from './SelectPosition'

const AddNote = (props) => {  
  const handleClick = ()=>{
    console.log("next page click")
  }

  const [teams, setTeams] = useState([])
  const [indexT, setIndexT] = useState(0)
  const fetchData = () => {
    fetch('https://pcfy.redberryinternship.ge/api/teams')
      .then(response => {
        return response.json()
      })
      .then(data => {
        setTeams(data.data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])
    
  const [value, setValue] = useState("");
  useEffect(() => {
    setValue(localStorage.getItem('team-Selection'));
  }, []);
 
  const CheckSelect = (e) => {
      setValue(e.target.value);
      localStorage.setItem('team-Selection', e.target.value);
      props.object.team_id = e.target.selectedIndex
      setIndexT(e.target.selectedIndex)
      console.log(props.object)
  }

  return (
    <>
    <div className='addnote'>
      <BackToLanding/>
      <Navbar/>
   
      <form className='addnote--box' >
        <div className='addnote--inputs'>
  
          <FirstName firstName={props.object} inputName="firstName" typeHolder='text' name="სახელი" handleHolder="გრიშა" lower="მინიმუმ 2 სიმბოლო, ქართული ასოები" classWithName="input--form--names"/>
          <LastName lastName={props.object} inputName="lastName" typeHolder='text' name="გვარი" handleHolder="ბაგრატიონი" lower="მინიმუმ 2 სიმბოლო, ქართული ასოები" classWithName="input--form--names"/>

        </div>

        <div className='addnote--selects'>
          <form >
          <select value={value} onChange={CheckSelect} className='addnote--select' required>
          <option value="" disabled selected hidden>თიმი</option>
            {teams
            .map((team)=> (
                <option key={team.id}>{team.name}</option>     
            ))
            }
      
        </select>
    </form>
          <SelectPosition indexT={indexT} position={props.object} selectInputValue="position-Selection" url='https://pcfy.redberryinternship.ge/api/positions' defaultOpt='პოზიცია' classWithName="addnote--select"/>
        </div>

        <div className='addnote--inputs--grid'>
          <EmailInput email={props.object} typeHolder='email' name="მეილი" handleHolder="grish666@redberry.ge" lower="უნდა მთავრდებოდეს @redberry.ge-თი" classWithName="input--form--names"/>
          <PhoneInput phone={props.object} name="ტელეფონის ნომერი" handleHolder="+995 598 00 07 01" lower="უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს" classWithName="input--form--names"/>
        </div>
        {/* <Link to="/laptopspecs"><NextSubmitBtn name="შემდეგი" classWithName="Next--Submit--Button" handleClick={handleClick}/></Link> */}
        {/* {formErrors?<button className='Next--Submit--Button'>შემდეგი</button>:<Link to="/laptopspecs"><button className='Next--Submit--Button'>შემდეგი</button></Link>} */}
        <Link  to="/laptopspecs"><button onClick={handleClick} className='Next--Submit--Button'>შემდეგი</button></Link>
      </form>
      <img src={redlogo2} alt="" className='redlogo--2'/>
    </div>

    </>
  )
}

export default AddNote