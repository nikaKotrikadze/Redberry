import React, { useEffect, useState } from "react"
import './AddNote.css'
import './LaptopSpecs.css'

const SelectPosition = (props) => {
  const [positions, setPosiitons] = useState([])


  const fetchData = () => {
    fetch(props.url)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setPosiitons(data.data)
      })
  }


  useEffect(() => {
    fetchData()
  }, [])
    
  const [value, setValue] = useState("");

  const CheckSelect = (e) => {
      setValue(e.target.value);
      localStorage.setItem(props.selectInputValue, e.target.value);
      props.position.position_id = e.target.selectedIndex
      console.log(props.position)
  }

  useEffect(() => {
    setValue(localStorage.getItem(props.selectInputValue));
  }, []);

  return (
    <form >
        <select value={value} onChange={CheckSelect} className={props.classWithName} required>
        <option  value="" disabled selected hidden>{props.defaultOpt}</option>
        {positions
        .filter((pos)=>{
          return props.indexT==pos.team_id?pos.name:''
        })
        .map((pos)=> (
            <option key={pos.id}>{pos.name}</option>
        ))
        }
      
        </select>
    </form>
  )
}

export default SelectPosition
