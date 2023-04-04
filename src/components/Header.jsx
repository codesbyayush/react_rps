import React from 'react'
import logo from '../assets/logo.svg'

export default function Header({score}) {
  return (
    <div className='w-[700px] flex justify-between border-4 rounded-xl p-4 m-4 border-headerOutlineColor'>
      <img src={logo} alt="" className='w-36'/>
      <div className='bg-white w-36 rounded-lg text-center py-3'>
        <h1 className='font-semibold text-base text-scoreTextColor'>SCORE</h1>
        <h2 className='font-bold text-4xl text-darkTextColor'>{score}</h2>
      </div>
    </div>
  )
}
