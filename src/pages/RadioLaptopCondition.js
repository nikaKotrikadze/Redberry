import React,{useState,useEffect} from 'react'
import './LaptopSpecs.css'

const RadioInput = (props) => {
  const [value, setValue] = useState(false);
  const RadioChange = ({target}) => {
    setValue(target.value);
    localStorage.setItem(props.radioInput, target.value);
    props.lapCondition.laptop_state = target.value
    console.log(props.lapCondition)
    // console.log(target.radioValue)
  };
  useEffect(() => {
    setValue(localStorage.getItem(props.radioInput));
  }, []);

  return (
    (
        <>
         <form className={props.classWithName}  >
              <h3>{props.name}</h3>
              <div className='lap--radio--div'>
                <input 
                value={props.optOne}
                 onChange={RadioChange}
                  type="radio"
                    name="fav_language"
                    checked={value === props.optOne}  />
                <label> ახალი </label><br/>
                <input 
                value={props.optTwo}
                 onChange={RadioChange}
                  type="radio"
                    name="fav_language"
                    checked={value === props.optTwo}  />
                <label> მეორადი </label><br/>
              </div>
            </form>
        </>
    )
  )
}

export default RadioInput