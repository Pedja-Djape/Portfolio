import React from 'react'

const PortfolioCard = (props) => {
  return (
    <>
        <div
            key={props.id}
            className='shadow-md shadow-gray-600 rounded-lg hover:scale-105 duration-300'
        >
            <img
                src={props.visual}
                alt=""
                className="rounded-md"
            />
            <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 ">
                    Check it out!
                </button>
                <button className="w-1/2 px-6 py-3 m-4 ">
                    <a href="https://github.com/Pedja-Djape/MyMedJournal" target="_blank" rel="noreferrer">Code</a>
                </button>
            </div>
        </div>
    </>
  )
}

export default PortfolioCard