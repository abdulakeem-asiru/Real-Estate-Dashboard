import React from 'react'
import Image from 'next/image'

interface styleProp{
  style : string,
  width : number,
  height : number

}
const Logo = ({style, width, height} : styleProp) => {
  return (
    <div
      className={style}
    >
      <Image src="/logo.png"  alt="logo" width={width} height={height}/>
      <p className="text-[var(--text-primary)] font-medium">Equinox</p>
    </div>
  )
}

export default Logo
