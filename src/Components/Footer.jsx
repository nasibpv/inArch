import React from 'react'

function Footer() {
  return (
    <div className='p-5 grid  gap-y-8'>
        <div className=' grid grid-cols-3 md:text-lg text-[11px]'>
            <div className='grid md:grid-rows-3 gap-2'>
                
                <h5>Links</h5>
                <div><a href="">Projects</a></div>
                <div><a href="">Team</a></div>
                <div><a href="">Contact</a></div>
            </div>
                <div className=''>
                <h5>Social</h5>
                <div><a href="">Facebook</a></div>
                <div><a href="">twitter</a></div>
                <div ><a href=''>Instagram</a></div>
                </div>
            <div className=''>
                
                <h5>Legal</h5>
                <div><a href="">Policy</a></div>
                <div><a href="">terms</a></div>
                <div><a href="">info</a></div>
            </div>
            
            </div>
        <div className='flex justify-between'>
            <p className='text-xs'>@2024 All right reserved</p>
            <p >IN TW</p>
        </div>
    </div>
  )
}

export default Footer