import React from 'react'
import {techstacks} from '../../Data/enums'


export default function Container2() {


  return (
    <>
      <h3 className='text-3xl font-bold text-center mb-5'>Experience</h3>
      <div className='w-9/12 text-center grid grid-cols-2 md:grid-cols-4 gap-4 mx-auto'>

        {techstacks.map((item,index) => (
          <div key={index} className="bg-white p-4  ">
           <img src={item.image} alt={item.name}  className='mx-auto'/>
           <br />
          <p className=''>{item.name}</p>
          </div>
        ))}
      </div>
    </>
  )
}
