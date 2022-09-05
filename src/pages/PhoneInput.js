import React,{ useState, useEffect } from "react";

const geoPhone = (/^(\+995)\d{9}$/gm);


const PhoneInput = (props) => {
    const [value, setValue] = useState("");
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    const CheckPhone = ({target}) => {
        setValue(target.value);
        localStorage.setItem("phone", target.value);
        props.phone.phone_number = target.value;
        console.log(props.phone)
        setPhone(target.value);
        if( geoPhone.test(target.value) === false ){
            setError(true)
        
        } else {
            setError(false);
            return ;
        }
    }
    useEffect(() => {
        setValue(localStorage.getItem("phone"));
      }, []);

let geoLanValid;
let changeOn;
let label;

    label = <label style={{color:error?'red':'black'}}>{props.name}</label>
    geoLanValid = <p style={{color:error?'red':'black'}}>{props.lower}</p>
    changeOn = <input value={value} style={{borderColor:error?'red':''}} type="Phone" max={12} placeholder={props.handleHolder} required onChange={geoLanValid ? CheckPhone : ''}/>
    
    return (
        <div className={props.classWithName} >
        {label}
        {changeOn}
        {geoLanValid} 
</div>

     );
}
 
export default PhoneInput;