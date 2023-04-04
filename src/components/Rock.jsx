import React from 'react'
import Sign from './Sign'

export default function Rock() {
  return (
    <div className="bg-gradient-to-b from-rockStartColor to-rockEndColor p-6 rounded-full w-fit shadow-[inset_0px_-9px_2px_1px_rgba(0,0,0,0.3)]">
      <Sign imgSrc="src\assets\rock.svg" />
    </div>
  )
}
