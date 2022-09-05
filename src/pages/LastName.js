import React,{useState,useEffect} from 'react'
import './AddNote.css'
import './LaptopSpecs.css'

let geLan = (/^[ა-ჰ]+$/);


const GeoLan = (props) => {
  const [value, setValue] = useState("");
  const [name, setName] = useState('');
  const [err, setErr] = useState('');
// let useGeo = <p style={{color:'black'}}>გამოიყენე ქართული ასოები</p>
  let lessTwo = <p style={{color:'black'}}>{props.lower}</p> 
  let useGeoRed = <p style={{color:'red'}}>გამოიყენე ქართული ასოები</p>
  let lessTwoRed = <p style={{color:'red'}}>{props.lower}</p> 
  const CheckName = ({target}) => {
      setValue(target.value);
      props.lastName.surname = target.value;
      console.log(props.lastName)
      localStorage.setItem(props.inputName, target.value);
  
      if( geLan.test(target.value) === false ){
          setErr('useGeoRed') 
          setName(useGeoRed)
      }else if(target.value.length<2 && geLan.test(target.value)===true){
        setErr("lessTwoRed")
        setName(lessTwoRed)
      }
      else {
          setErr('');
          return true;
      }
}


useEffect(() => {
  setValue(localStorage.getItem(props.inputName));
}, []);

let label;
let geoLanValid;
let changeOn;

 if(props.typeHolder==="text" && geLan ) {
    label = <label style={{color:err?'red':'black'}}>{props.name}</label>
    geoLanValid = err ? name : lessTwo
    changeOn = <input value={value} style={{borderColor:err?'red':''}} type={props.typeHolder} placeholder={props.handleHolder} required onChange={geoLanValid ? CheckName : ''}/>
}

  return (
      <div className={props.classWithName} >
              {label}
              {changeOn}
              {geoLanValid} 
      </div>
  )
}

export default GeoLan