import React, { useState } from 'react';
import chefff from '../chefff.PNG';
import Piepay from '../Piepay.PNG';
import Healthy from '../Healthy.PNG';

const Portafolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const portfolio = [
    {
      id: 1,
      src: chefff,
      info: "I recently programmed an AI chef that I'm really excited about. It's a powerful tool that can help people make healthier eating choices by suggesting recipes based on their specific needs and available ingredients. The AI chef takes into account factors such as calorie intake, dietary restrictions, and nutritional goals, and provides a detailed breakdown of the recipe's macronutrient content. It's amazing to see how technology can make such a positive impact on people's lives, and I'm proud to have played a part in making that happen.",
      title: "AI CHEF"
    },
    {
      id: 2,
      src: Piepay,
      info: "As a developer, I successfully deployed a cutting-edge web 3 fintech application that enables users to make secure payments using both cryptocurrency and traditional fiat methods, surpassing the security of conventional payment methods. Additionally, my team and I were able to establish connections with a wide range of hotels throughout Northern Mexico.",
      title: "Piepay"
    },
    {
      id: 3,
      src: Healthy,
      info: 'Healthy as a project and as a venture has the purpose of educating and training future medical staff in 3D anatomy without the need of expensive machinery and the fastest way possible. This by implementing our software that transforms medical images from a 2D perspective to a 3D one with the help of artificial intelligence in order to diagnose patients more efficiently and safely, which is another of our goals as a project. By promoting this software in medical schools, these students will be more qualified and trained to apply it in their profession. Likewise, this software will be implemented in hospitals so that medical staff can use this program to avoid misdiagnoses. .',
      title: "Project 3"
    },
  ];

  const handleInfoButtonClick = (info, title) => {
    setSelectedProject({info, title});
  };

  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='py-6'>Check the things I've done</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {portfolio.map(({ id, src, info, title }) => (
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
              <img src={src} alt='' className='rounded-md duration-200 hover:scale-105 object-contain h-64 w-full' />

              <div className='flex items-center justify-center'>
                <button
                  data-modal-target='defaultModal'
                  data-modal-toggle='defaultModal'
                  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'
                  onClick={() => handleInfoButtonClick(info, title)}
                >
                  Info
                </button>
              </div>
            </div>
          ))}
        </div>
        {selectedProject && (
          <div className='fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex items-center justify-center'>
            <div className='bg-gray-800 rounded-lg p-4'>
              <p className='text-xl font-bold py-2 max-w-md'>{selectedProject.title}</p>
              <p className='text-xl py-2 max-w-md'>{selectedProject.info}</p>
              <button
                className='bg-gray-700 hover:bg-gray-400 py-2 px-4 rounded-lg'
                onClick={() => setSelectedProject(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portafolio;
