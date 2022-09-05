import React,{ useState, useEffect } from "react";


const OnlyNumReg =  /\d+/
const CpuThreads = (props) => {
    const [value, setValue] = useState("");
    const [onlynum, setOnlyNum] = useState('');
    const [error, setError] = useState('');
    const checkCharNum = ({target}) => {
        setValue(target.value);
        localStorage.setItem(props.inputName, target.value);
        props.lapRam.laptop_ram = target.value
        console.log(props.lapRam)
        
        setOnlyNum(target.value);
        if( OnlyNumReg.test(target.value) === false ){
            setError('invalidi xar')
        
        }else {
            setError('');
            return true;
        }
    }
    useEffect(() => {
        setValue(localStorage.getItem(props.inputName));
      }, []);
    let onlyNumsValid;
    let changeOn;
    let label;

    label = <label style={{color:error?'red':'black'}}>{props.name}</label>
    onlyNumsValid = <p style={{color:error?'red':'black'}}>{props.lower}</p>
    changeOn = <input value={value} style={{borderColor:error?'red':''}} type="Number" placeholder={props.handleHolder} required onChange={onlyNumsValid ? checkCharNum : ''}/>

    return (    
            
        <div className={props.classWithName} >
            {label}
            {changeOn}
            {onlyNumsValid} 
        </div>

     );
}
 
export default CpuThreads;