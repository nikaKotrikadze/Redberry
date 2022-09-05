import React,{useState, useEffect} from "react";
const CharNumReg = (/^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+$/)


const CharnumInput = (props) => {
    const [value, setValue] = useState("");
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    const CheckCharNum = ({target}) => {
        setValue(target.value);
        localStorage.setItem(props.charNumInputValue, target.value);
        setPhone(target.value);
        props.lapName.laptop_name = target.value;
        console.log(props.lapName)
        if( CharNumReg.test(target.value) === false){
            setError('invalidi')
        
        }else {
            setError('');
            return true;
        }
    }
    useEffect(() => {
        setValue(localStorage.getItem(props.charNumInputValue));
      }, []);

let charNumValid;
let changeOn;
let label;

    label = <label style={{color:error?'red':'black'}}>{props.name}</label>
    charNumValid = <p style={{color:error?'red':'black'}}>{props.lower}</p>
    changeOn = <input value={value} style={{borderColor:error?'red':''}} type={props.typeHolder} placeholder={props.handleHolder} required onChange={charNumValid ? CheckCharNum : ''}/>

    return (    
            
        <div className={props.classWithName} >
        {label}
        {changeOn}
        {charNumValid} 
</div>

     );
}
 
export default CharnumInput;