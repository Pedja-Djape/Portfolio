import React, { useState } from "react";

import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

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
        src: arrayDestruct,
        },
        {
        id: 2,
        src: reactParallax,
        },
        {
        id: 3,
        src: navbar,
        },
        {
        id: 4,
        src: reactSmooth,
        },
        {
        id: 5,
        src: installNode,
        },
        {
        id: 6,
        src: reactWeather,
        },
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
                    {portfolios.map(({ id, src }) => (
                        <div
                        key={id}
                        className={`shadow-md shadow-gray-600 rounded-lg duration-800 hover:scale-105  ${
                            hoveredElement !== id ? "filter blur-[3px]" : ""
                        }`}
                        onMouseEnter={() => setHoveredElement(id)}
                        onMouseLeave={() => setHoveredElement(null)}
                        onClick={() => setModalOpen(true)}
                        >
                        <img
                            src={src}
                            alt=""
                            className="rounded-md"
                        />
                        <div className="flex items-center justify-center">
                            <button className="w-1/2 px-6 py-3 m-4 ">
                            Demo
                            </button>
                            <button className="w-1/2 px-6 py-3 m-4 ">
                            Code
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