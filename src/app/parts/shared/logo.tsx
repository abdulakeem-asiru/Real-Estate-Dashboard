import React from 'react'
import Image from 'next/image'


const Logo = () => {
  return (
    <div
      className={"flex flex-row gap-2 items-center leading-none "}
    >
      <Image src="/logo.png"  alt="logo" width={40} height={40}/>
      <p className="text-[20px] text-[var(--text-primary)] font-medium">Netify</p>
    </div>
  )
}

export default Logo
