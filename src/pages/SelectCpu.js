import React, { useEffect, useState } from "react"
import './AddNote.css'
import './LaptopSpecs.css'

const SelectPosition = (props) => {
  const [teams, setTeams] = useState([])
 
  const fetchData = () => {
    fetch(props.url)
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
    setValue(localStorage.getItem(props.selectInputValue));
  }, []);

  const CheckSelect = (e) => {
      setValue(e.target.value);
      localStorage.setItem(props.selectInputValue, e.target.value);
      props.lapCpu.laptop_cpu = e.target.value
      console.log(props.lapCpu)
  }


  return (
    <form >
        <select value={value} onChange={CheckSelect} className={props.classWithName} required>
        <option  value="" disabled selected hidden>{props.defaultOpt}</option>
        {teams
        .map((team)=> (
            <option key={team.id}>{team.name}</option>
        ))
        }
      
        </select>
    </form>
  )
}

export default SelectPosition
