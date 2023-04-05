import React from 'react'
import Sign from './Sign'
import scissor from '../assets/icon-scissors.svg'

export default function Scissor() {
  return (
      <div className="bg-gradient-to-b from-scissorStartColor to-scissorEndColor p-6 rounded-full w-fit shadow-[inset_0px_-9px_2px_1px_rgba(0,0,0,0.3)]">
      <Sign imgSrc={scissor} />
    </div>
  )
}
