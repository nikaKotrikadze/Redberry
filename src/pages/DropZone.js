import React,{useState,useEffect} from 'react';
import {useDropzone} from 'react-dropzone';

  function DropZone(props) {
    const [value, setValue] = useState("");

    const handleChange = (e) => {
      setValue(e.target.result);
      localStorage.setItem(props.dropInputValue, e.target.result);
      console.log(e.target.result)
    };
    
    useEffect(() => {
      setValue(localStorage.getItem(props.dropInputValue));
    }, []);
    const {getRootProps, getInputProps, open, acceptedFiles} = useDropzone({
      noClick: true,
      noKeyboard: true
    });
  
    const files = acceptedFiles.map(file => (
      <span key={file.path}>
        {file.path} 
      </span>
    ));
  
    return (
      <div className="laptop--specs--input--file">
        <div {...getRootProps({className: 'dropzone'})} className="laptop--specs--drag-n-drop">
          <input {...getInputProps()} onChange={handleChange} />
          <p className='laptop--specs--p--dnd'>ჩააგდე ან ატვირთე ლეპტოპის ფოტო</p>
          <button type="button" onClick={open}>
          ატვირთე
          </button>
          <p className="laptop--specs--p--files">{files}</p>
        </div>
      </div>
    );
  }

  export default DropZone;    