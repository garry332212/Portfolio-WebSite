import React from 'react'

const AboutMe = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-t from-black to-gray-800 text-white pb-36 '>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-2 md: mt-32 '>
                <p className='text-4xl font-bold inline border-b-4 border-gray-300'>About</p>
            </div>
            <p className='text-xl mt-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque ab quam sit vel commodi impedit, voluptatum vitae laboriosam omnis at blanditiis tenetur voluptates odio optio inventore mai</p>

            <br/>

            <p className='text-xl mt-8 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus totam eum cum iusto quisquam architecto at eaque nam recusandae. Veniam ullam et voluptatum natus iure, aut sed, quam deserunt incidunt iusto ad modi quisquam dolore magnam velit amet laboriosam optio ipsa eveniet, quidem numquam voluptatem labore dicta alias. Ipsum, voluptates.</p>
        </div>
    </div>
  )
}

export default AboutMe