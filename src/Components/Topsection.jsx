import React from 'react'

function Topsection() {
  return (
    <div>
        <div className="bg-[url('https://i.postimg.cc/Jng4Bsc7/Untitled-design.png')] bg-contain bg-no-repeat bg-center	 p-8 text-center text-black-800 w-full h-96 flex flex-col justify-center gap-8">
            <h3 className='text-2xl'>S O CA E</h3>
            <p className='text-[2.2rem] font-serif '>inArch</p>
            <div className='justify-center flex'>
              <p className='md:w-44 grid grid-cols-3 italic text-green-200'>
                <a href="">Project</a>
                <a href="">Team</a>
                <a href="">Contact</a> 
              </p>
            </div>
        </div>
    </div>
  )
}

export default Topsection