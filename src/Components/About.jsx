import React from 'react'

function About() {
  return (
    <div className='p-5  justify-center content-center text-center'>
        <h1 className='text-xl text-green-600 pb-2 '>Got intrigued?</h1>
        <p className='text-green-400 pb-3'>We draw the awesome out of the mundane! If you are <br/> tickled by our world and are itching to transform your <br/> vision into a digital masterpiece, you needn't wait <br/> anymore. Let's begin now!</p>
        <div className='flex justify-center gap-2'>
            <button className='bg-black text-white p-3 rounded'>Reach out!</button>
            <button className='bg-green-500 text-white p-3 rounded'>View more project</button>
        </div>
    </div>
  )
}

export default About