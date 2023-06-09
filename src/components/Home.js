import React from 'react'
import profileImage from "../assets/profile.JPG";
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Link } from "react-scroll"

const Home = () => {
  return (
    <div
        name="home"
        className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >

        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className='flex flex-col justify-center h-full'>
                <h2 className="text-4xl sm:text-6xl font-bold text-white">
                    Hi, I'm Pedja | Software Engineer
                </h2>
                <p className='text-gray-500 py-4 max-w-md'>
                    I love building solutions that solve complex problems 🏗 Embrace growth 🌱 
                    And I'm your go-to guy for random facts ⚛️
                </p>

                <div>
                    <Link 
                        to='portfolio'
                        smooth
                        duration={750}
                        className='group text-white w-fit px-6 py-3 my-2
                        flex items-center rounded-md bg-gradient-to-r
                        from-[#fbc2eb] via-[#a6c1ee] to-[#fbc2eb]
                        cursor-pointer' 
                        >
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                            <MdOutlineKeyboardArrowRight size={25}
                            className='ml-1 '
                            />
                        </span>
                    </Link>
                        
                        
                </div>
            </div>

            <div>
                <img 
                    src={profileImage} 
                    alt='Me!'
                    className="rounded-2xl mx-auto w-2/3 "
                    />
            </div>

        </div>
    </div>
  )
}

export default Home