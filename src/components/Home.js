import React from 'react'
import profileImage from "../assets/profile.JPG";
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
const Home = () => {
  return (
    <div
        name="Home"
        className='h-screen w-full bg-gradient-to-to-b from-black to-gray-800'
    >

        <div>
            <div>
                <h2>
                    I am 
                </h2>
                <p>
                    Short Summary.
                </p>

                <div>
                    <button>
                        Portfolio
                    </button>
                    <span>
                        <MdOutlineKeyboardArrowRight />
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home