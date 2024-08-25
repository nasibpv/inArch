import React from 'react'

function Dynamic() {
  return (
    <div className='p-5 justify-center text-center'>
        <h1 className='text-green-700 p-5 text-xl font-bold '>Dynammic Duo</h1>
        <p className='p-4'>We are the ones who dare to dream. A stunning blend of <br/> creativity and tech prowess, we are the founding partners.</p>
        <div className='p-3  grid md:grid-cols-2 gap-3  items-center '>
            <div className='bg-yellow-200 rounded-xl p-9 w-full'> 
<div className='flex justify-center'>
                  <img src="https://i.postimg.cc/s2S9PYDg/razi.jpg" alt="photo" className='rounded-full size-16' />
  
</div>                <h3>MARK BOSTON</h3>
                <h5>Fornt-end Maestro</h5>
            </div>
            <div className='bg-yellow-200 rounded-xl p-9 w-full'> 
<div className='flex justify-center'>
                  <img src="https://i.postimg.cc/s2S9PYDg/razi.jpg" alt="photo" className='rounded-full size-16'/>
  
</div>                <h3>EMILY STONE</h3>
                <h5>Artistic Mastermind</h5>
            </div>
            
        </div>
    </div>
  )
}

export default Dynamic