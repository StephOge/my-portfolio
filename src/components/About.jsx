import React from 'react'

const About = () => {
  return (
    <div>
      <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                      About
                    </p>
                </div>
                <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
              <div className='sm:text-right text-4xl font-bold'>
                <p>Hi, I'm Stephenie, nice to meet you. Please take a look around</p>
              </div>
              <div>
                <p>
                   I am  a passionate frontend developer dedicated to creating exceptional user 
                   experiences. With a keen eye for design and up-to-date with the latest technologies, 
                   I bridge the gap between vision and functionality. Collaboration is key, and I thrive 
                   in team environments. Nature and books inspire me, fueling my creativity for every 
                   project. Let's work together to bring your web visions to life!
                </p>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
