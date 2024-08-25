import React from 'react'
import Topsection from './Topsection'
import Choose from './Choose'
import Dynamic from './Dynamic'
import Images from './Images'
import Projects from './Projects'
import About from './About'
import Footer from './Footer'

function Index() {
  return (
    <>
        <Topsection/>
        <div className='container mx-auto px-4 sm:p-14'>
          <Choose/>
          <Dynamic/>
          <Images/>
          <Projects/>
          <About/>
          <Footer/>
        </div>


    </>
  )
}

export default Index