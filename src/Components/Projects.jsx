import React from 'react'

function Projects() {
  return (
    <div className='p-8 grid  gap-y-5'>
        <div className='grid  md:grid-cols-2 gap-3'> 
            <div className='inline justify-center text-center content-center size-auto'>
                <h1 className='text-xl text-green-800'>Turning Codes into Stunning Spirited Architectures</h1>
                <p className='text-green-600'>We’re all about transforming the DNA of the Web. With a mezmerizing touch of our magic coding wand, boilerplate code evolves into remarkable, energized, whimsically elegant web creations.</p>
            </div>
            <div className="bg-[url('https://i.postimg.cc/sxgJ8r2P/IMG-20240409-WA0037.jpg')]  w-full h-[250px] bg-center-bottom bg-no-repeat bg-cover mb-8 md:bg-cover  md:h-[350px] md:w-auto border rounded-3xl" >
            </div>
        </div >
        <div className='grid md:grid-cols-2 gap-3'> 
            
            <div className="bg-[url('https://i.postimg.cc/sxgJ8r2P/IMG-20240409-WA0037.jpg')] w-full h-[250px] bg-center-bottom  bg-cover mb-2 md:bg-cover md:h-[350px] md:bg-no-repeat border rounded-3xl  ">
            </div>
            <div className='inline justify-center text-center content-center size-auto'>
                <h1 className='text-xl text-green-800'>Injecting Life into Pixels</h1>
                <p className='text-green-600'>Our design mantra is simple; If it doesn’t dazzle, it doesn’t belong. We architect mesmerising UI/UX that isn’t just visually intoxicating but intuitive, creating an immersive digital experience.</p>
            </div>
        </div >
       
    </div>
  )
}

export default Projects