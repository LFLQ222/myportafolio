import React from 'react'
import css from '../css.png'
import github from '../github.png'
import html from '../html.png'
import javascript from '../javascript.png'
import python from '../python.png'
import react from '../react.png'
import Tensorflow from '../Tensorflow.png'
import tailwind from '../tailwind.png'
import matlab from '../matlab.png'
import arduino from '../arduino.png'
import cplus from '../cplus.png'

const Experience = () => {

    const techs =[
        {
            id:1,
            src:python,
            title: 'Python',
            style: 'shadow-yellow-400'

        },
        {
            id:2,
            src:html,
            title: 'HTML',
            style: 'shadow-orange-500'

        },
        {
            id:3,
            src:css,
            title: 'CSS',
            style: 'shadow-blue-500'

        },
        {
            id:4,
            src:javascript,
            title: 'Javascript',
            style: 'shadow-yellow-500'

        },
        {
            id:5,
            src:react,
            title: 'React',
            style: 'shadow-blue-600'

        },
        {
            id:6,
            src:Tensorflow,
            title: 'Tensowflow',
            style: 'shadow-orange-400'

        },
        {
            id:7,
            src:matlab,
            title: 'Matlab',
            style: 'shadow-orange-700'

        },
        {
            id:8,
            src:arduino,
            title: 'Arduino',
            style: 'shadow-sky-800'

        },
        {
            id:9,
            src:tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-400'

        },
        {
            id:9,
            src:github,
            title: 'Github',
            style: 'shadow-gray-500'

        },
        {
            id:9,
            src:cplus,
            title: 'C++',
            style: 'shadow-blue-300'

        },

    ]



  return (
    <div name= 'experience' className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen overflow-hidden">

        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                <p className='py-6'>These are the technologies I've worked with</p>
            </div>


            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

                {techs.map(({id, src, title, style})=>(

                    <div key={id}className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src} alt='' className='w-20 mx-auto'/>
                    <p className='mt-4'>{title}</p>
                </div>


                ))
                
                }
                
            </div>
        </div>
    </div>
  )
}

export default Experience