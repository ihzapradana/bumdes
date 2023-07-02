import React from 'react'

function Hero() {
  return (
    <div className='h-screen overflow-hidden'>
        <img className='' src="../src/assets/img-bg.svg" alt="" />
        <div className='absolute top-0 left-0 z-10  w-full h-screen'>
          <div className='w-full h-20'>
            
          </div>
          <div className='w-full h-[calc(100%-80px)] flex flex-col justify-center items-center gap-1'>
            <p>PORTAL RESMI <br/> KECAMATAN TANGGUL
            </p>
            <p>Selamat Datang Di Portal Resmi Kecamatan Tanggul</p>
          </div>
        </div>
    </div>
  )
}

export default Hero