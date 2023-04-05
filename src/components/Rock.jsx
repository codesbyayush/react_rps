import React from 'react'
import Sign from './Sign'
import rock from '../assets/rock.svg'

export default function Rock() {
  return (
    <div className="bg-gradient-to-b from-rockStartColor to-rockEndColor p-6 rounded-full w-fit shadow-[inset_0px_-9px_2px_1px_rgba(0,0,0,0.3)]">
      <Sign imgSrc={rock} />
    </div>
  )
}
