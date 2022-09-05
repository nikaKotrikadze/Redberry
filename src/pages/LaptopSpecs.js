import './LaptopSpecs.css'
import React,{useState,useEffect} from 'react'
import BackToLanding from './BackToLanding';
import { Link } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import SelectCpu from './SelectCpu';
import RadioInput from './RadioInput';
import redlogo2 from '../img/redlogo2.png'
import CharnumInput from './CharnumInput'
import Modal  from './Modal/Modal';
import axios from 'axios';
import SelectBrand from './SelectBrand';
import CpuCores from './CpuCores'
import CpuThreads from './CpuThreads';
import LaptopRam from './LaptopRam'
import LaptopPrice from './LaptopPrice'
import DateInput from './DateInput';
import RadioLaptopCondition from './RadioLaptopCondition'
import DropZone from './DropZone'

export default function LaptopSpecs(props){
{/* */}


  // function Dropzone(props) {
  //   const [value, setValue] = useState("");

  //   const handleChange = (e) => {
  //     setValue(e.target.value);
  //     localStorage.setItem(props.dropInputValue, e.target.value);
  //     console.log(e.target.value)
  //   };
  //   useEffect(() => {
  //     setValue(localStorage.getItem(props.dropInputValue));
  //   }, []);
  //   const {getRootProps, getInputProps, open, acceptedFiles} = useDropzone({
  //     noClick: true,
  //     noKeyboard: true
  //   });
  
  //   const files = acceptedFiles.map(file => (
  //     <span key={file.path}>
  //       {file.path} 
  //     </span>
  //   ));
  
  //   return (
  //     <div className="laptop--specs--input--file">
  //       <div {...getRootProps({className: 'dropzone'})} className="laptop--specs--drag-n-drop">
  //         <input value={value} {...getInputProps()} onChange={handleChange} />
  //         <p className='laptop--specs--p--dnd'>ჩააგდე ან ატვირთე ლეპტოპის ფოტო</p>
  //         <button type="button" onClick={open}>
  //         ატვირთე
  //         </button>
  //         <p className="laptop--specs--p--files">{files}</p>
  //       </div>
  //     </div>
  //   );
  // }

{/* */}
const [modal, setModal] = useState(false)
const [postData, setPostData] = useState([]);
const HandleClick = ()=>{
      axios 
      .post('https://pcfy.redberryinternship.ge/api/laptop/create',props.object)
      .then(res => console.log('posting' + res));
  setModal(prev=>!prev)
console.log(modal)

}

{/* */}
    return(
        <div className='laptopspecs'>
          <BackToLanding/>
          <Navbar/>
          <form>
            <div className='laptop--specs--box'>
              <DropZone dropInputValue="laptop_img" objVal={props.object} />
             
            </div>
            <div className='laptopspecs--name--brand'>
            <CharnumInput lapName={props.object} charNumInputValue="laptop_name" typeHolder="text" name="ლეპტოპის სახელი" handleHolder="HP" lower="ლათინური ასოები, ციფრები, !@#$%^&*()_+= " classWithName="lap--NB--input" />
            <SelectBrand lapBrand={props.object} selectInputValue="brand_Selection" url="https://pcfy.redberryinternship.ge/api/brands" defaultOpt="ლეპტოპის ბრენდი" classWithName="lap--NB--select"/>
            </div>
            <hr className='hr-in-ls'/>
            <div className='lap--three'>
              <SelectCpu lapCpu={props.object} selectInputValue="cpu_name" url="https://pcfy.redberryinternship.ge/api/cpus" defaultOpt="CPU" classWithName="lap--three--select"/>
              <CpuCores cpuCores={props.object} inputName="cpu_cores" name="CPU-ს ბირთვი"  handleHolder="14" lower="მხოლოდ ციფრები" classWithName="lap--three--input"/>
              <CpuThreads cpuThreads={props.object} inputName="cpu_thread" name="CPU-ს ნაკადი"  handleHolder="365" lower="მხოლოდ ციფრები" classWithName="lap--three--input--two"/>
            </div>
            <div className='lap--radio'>
              <LaptopRam lapRam={props.object} inputName="laptop_ram" name="ლეპტოპის RAM (GB)"  handleHolder="16" lower="მხოლოდ ციფრები" classWithName="lap--radio--input"/>
            <RadioInput memoryType={props.object} radioInput="choose_type" name="მეხსიერების ტიპი" optOne="SSD" optTwo="HDD" classWithName="lap--radio--form"/>
            </div>
            <hr className='hr-in-lr'/>
            <div className='lap--date--price'>
              <DateInput lapDate={props.object} charNumInputValue="bought_date" typeHolder="date" name="შეძენის რიცხვი (არჩევითი)" handleHolder="დდ / თთ / წწწწ" classWithName="lap--dtpr--input"/>
              <LaptopPrice lapPrice={props.object} inputName="laptop_price" name="ლეპტოპის ფასი" handleHolder="0000" lower="მხოლოდ ციფრები" classWithName="lap--dtpr--input--two"/>
            </div>
            <div className='radio--condition--div'>
              <RadioLaptopCondition lapCondition={props.object} radioInput="laptop_condition" name="ლეპტოპის მდგომარეობა" optOne="new" optTwo="used" classWithName="lap--radio--condition"/>
            </div>
              <Link to='/addnote'><button className="backto--addnote--Btn">უკან</button></Link>
            <img src={redlogo2} alt="" className='lapspecs--redlogo'/>
      
            {modal&&<Modal/>}
            <button style={{display:modal?'none':'block'}} onClick={HandleClick} type="button" className="save--form--btn">დამახსოვრება</button>
            </form>
            
           
        </div>
    )
}