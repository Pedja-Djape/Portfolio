import React, { useState } from "react";

import medapp from "../assets/portfolio/medapp.png";

function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;
  
    return (
    <>
        <div className="fixed inset-0 bg-black opacity-75 z-50"></div>
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-8">{children}</div>
            <button
            className="absolute top-0 right-0 m-4 text-gray-500 hover:text-white"
            onClick={onClose}
            >
            Close
            </button>
        </div>
    </>
    );
  }

const Portfolio = () => {

    const [hoveredElement, setHoveredElement] = useState(null)
    const [modalOpen, setModalOpen] = useState(false)

    const portfolios = [
        {
            id: 1,
            visual: medapp,
        }
    ];

    return (
        <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
         
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                    Portfolio
                </p>
                <p className="py-6">Check out some of my work right here</p>
                </div>
            
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {portfolios.map(({ id, visual }) => (
                        <div
                            key={id}
                            className='shadow-md shadow-gray-600 rounded-lg hover:scale-105 duration-300'
                            onMouseEnter={() => setHoveredElement(id)}
                            onMouseLeave={() => setHoveredElement(null)}
                        >
                            <img
                                src={visual}
                                alt=""
                                className="rounded-md"
                                onClick={() => setModalOpen(true)}
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
                    ))}
                </div>
                <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
                    <p className="text-black">Brotherrrr</p>
                </Modal>
            </div>

        </div>
      );
};

export default Portfolio;