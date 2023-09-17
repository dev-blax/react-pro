import React from 'react'
import Title from '../Components/Title'

export default function RandomColors() {

    const getRandomColor = (e)=>{
        //console.log(e.target);

        let letters = "0123456789ABCDEF";
        let color = '#';
        for(let i=0; i<6 ; i++ ){
            color += letters[Math.floor(Math.random() * 16)];
        }

        // add color to bg 
        let body = document.querySelector('body');
        body.style.background = color;
        // console.log(color);
    }

  return (
    <div>
        <Title text={'Random Colors'} />

        <div className=' flex items-center justify-center mt-4' >
            <button className=' bg-gray-800 text-white px-3 py-2 rounded text-center ' onClick={getRandomColor}  >  Random Color  </button>
        </div>
    </div>
  )
}
