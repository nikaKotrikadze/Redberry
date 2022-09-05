import React,{useState,useEffect} from 'react'
import './AddNote.css'
import './LaptopSpecs.css'

let mailReg = /\w+@redberry\.ge$/
const EmailInput = (props) => {
  const [value, setValue] = useState("");
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const CheckEmail = (e) => {
    setValue(e.target.value);
    localStorage.setItem("email", e.target.value);
    props.email.email =  e.target.value
    console.log(props.email)
    setEmail(e.target.value);
    if( mailReg.test(e.target.value) === false){
         setError('invalid')
    }else {
         setError('');
         return true;
    }
 }
 useEffect(() => {
  setValue(localStorage.getItem("email"));
}, []);

let label;
let mailValid;
let changeOn;
if(props.typeHolder==="email" && mailReg){
  label = <label style={{color:error?'red':'black'}}>{props.name}</label>
  mailValid = <p style={{color:error?'red':'black'}}>{props.lower}</p>
  changeOn = <input value={value} style={{borderColor:error?'red':''}} type={props.typeHolder} placeholder={props.handleHolder} required onChange={mailValid ? CheckEmail : ''}/>
  
}

  return (
      <div className={props.classWithName} >
              {label}
              {changeOn}
              {mailValid} 
      </div>
  )
}

export default EmailInput