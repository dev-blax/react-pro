import React, { useState } from 'react'
import Title from '../Components/Title';

export default function Esignature() {
    const [ name, setName] = useState("");

    const handleNameChange = (e)=>{
        //console.log(e.target.value)
        setName(e.target.value);
    };

  return (
    <>
        <Title text={name} />
        <div className=' w-full mt-5 flex flex-col items-center '>
            <input type="text" className=' bg-gray-300 rounded-full py-3 px-4  ' value={name} onChange={handleNameChange} />
        </div> 
    </>
  )
}
