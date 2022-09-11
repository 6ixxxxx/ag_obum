import React from 'react'
import Image from 'next/image'
import bioPic from '../public/assets/BioPic.jpg'

const About = () => {
  return (
    <div className='about' id='about'>
      <div className='about--text'>
          <div className='about--card'>
            
            <h1>The Team</h1>

            <Image src={bioPic} alt="Ag-obum" className="about--img"
                    height={400} width={300}
                    />

                <h4>Augustine Obumneme Eziekwu</h4> 
                  <h6>Lead Photographer</h6> 
          </div>

          <h4>Bio</h4> 

        <p>
              Hi, My name is Augustine, </p>
                    <p> A Nigerian based photographer that takes great delight in capturing the genuine character and soul of the subjects and people I capture.
                    </p>
                    <p>
              Born and raised in Enugu state. 
              Photography started out as a hobby with phones and then I decided to go pro. 

              I pay close attention to the details and this helps me to create exceptional images. 
              </p>
                    <p>
              Thanks for stopping by and I’m hoping we work together.
        </p>
      </div>
    </div>
  )
}

export default About