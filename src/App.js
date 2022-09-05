import Landing from "./Landing";
import { useState, useEffect } from "react";
import axios from "axios";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import AddNote from './pages/AddNote'
import ListNote from './pages/ListNote'
import LaptopSpecs from "./pages/LaptopSpecs";
import {redlogo} from './img/manlogo.png'
import title from './img/title.png'
import LaptopInfo from "./pages/LaptopInfo";
function App() {

const obj ={
  name:"",
  surname:"",
  team_id:0,
  position_id:0,
  phone_number:"",
  email:"",
  token:"81cffb46cb13bfb7f9be4a680f21681a",
  laptop_name:"",
  laptop_image:'',
  laptop_brand_id:"",
  laptop_cpu:"",
  laptop_cpu_cores:"",
  laptop_cpu_threads:"",
  laptop_ram:"",
  laptop_hard_drive_type:"",
  laptop_state:"",
  laptop_purchase_date:"",
  laptop_price:""
}

const [data, setData] = useState([])
useEffect(() => {
  axios 
  .get("https://pcfy.redberryinternship.ge/api/laptop/1173?token=81cffb46cb13bfb7f9be4a680f21681a")
  .then(res => setData(res.data));
}, []);

const [box, setBox] = useState(obj)
  
  return (
   
    <BrowserRouter>
      <div className="App">
        <Link to="/"></Link>
        <Link to="/addnote"></Link>
        <Link to="/listnote"></Link>
        <Routes>
          <Route exact path="/" element={<Landing />}/>
          <Route exact path="/laptopInfo" element={<LaptopInfo data={data} />}/>
          <Route exact path="/addnote" element={<AddNote object={obj}/>}/>
          <Route exact path="/laptopspecs" element={<LaptopSpecs object={obj} />}/>
          <Route exact path="/listnote" element={<ListNote />}/>
        </Routes>
      </div>
    </BrowserRouter>
  
  );
}

export default App;