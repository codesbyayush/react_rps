import React from 'react'

export default function Sign({imgSrc}) {
  return (
    <div className="bg-white rounded-[50%] w-[18vh] h-[18vh] grid place-content-center mx-auto shadow-[inset_0px_6px_2px_1px_rgba(104,94,94,0.3)]">
      <img src={imgSrc} alt="sign"  className='w-18 '/>
    </div>
  )
}
