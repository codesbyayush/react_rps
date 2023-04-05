import React from 'react'
import Sign from './Sign'
import paper from '../assets/icon-paper.svg'

export default function Paper() {
  return (
    <div className="bg-gradient-to-b from-paperStartColor to-paperEndColor p-6 rounded-full w-fit shadow-[inset_0px_-9px_1.5px_1px_rgba(0,0,0,0.3)]">
      <Sign imgSrc={paper}/>
    </div>
  )
}