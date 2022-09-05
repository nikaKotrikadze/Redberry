import React,{useState, useEffect} from "react";


const DateInput = (props) => {
    const [value, setValue] = useState("");
   
    const CheckCharNum = ({target}) => {
        setValue(target.value);
        localStorage.setItem(props.charNumInputValue, target.value);
        props.lapDate.laptop_purchase_date = target.value;
        console.log(props.lapDate)
    }
    useEffect(() => {
        setValue(localStorage.getItem(props.charNumInputValue));
      }, []);

let charNumValid;
let changeOn;
let label;

    label = <label>{props.name}</label>
    changeOn = <input type={props.typeHolder} placeholder={props.handleHolder} onChange={ CheckCharNum }/>

    return (    
            
        <div className={props.classWithName} >
        {label}
        {changeOn}
</div>

     );
}
 
export default DateInput;