import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to to-black text-white'>
        <div className='max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                About</p>
        </div>

        <p className='text-xl mt-20'>
        Currently studying Mechatronics, with a passion for AI and Web 3 development. Highly motivated and
        results-driven professional with experience leading teams in fast-paced startup environments. Proven
        ability to effectively manage time and stay calm under pressure. Looking for a new challenge after having
        success in team management and project delivery. Seeking to leverage my skills and experience to drive
        innovation and growth in a dynamic organization. 
        </p>
        <br/>

        {/* <p className='text-xl'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate soluta voluptas earum nemo perferendis
             sit vitae sapiente maiores dolore, impedit laudantium laboriosam exercitationem nobis, 
             cumque aut repudiandae dolorem? Fugiat facilis ipsa quaerat quo a mollitia esse minima, qui illum nam 
             maxime aperiam unde tempora veniam consequatur sint accusantium error sunt!
        </p> */}
        </div>


    </div>
  )
}

export default About