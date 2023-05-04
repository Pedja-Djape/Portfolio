import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdOutlineMail } from 'react-icons/md'
import { BsPersonLinesFill } from 'react-icons/bs'

const SocialLinks = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30} />
                </>),
            href: "https://www.linkedin.com/in/predrag-muratovic-32282a19a/",
            style: "rounded-tr-md"
        },
        {
            id: 2,
            child: (<>
                GitHub <FaGithub size={30} />
            </>),
            href: "https://github.com/Pedja-Djape"
        },
        {
            id: 3,
            child: (<>
                Mail <MdOutlineMail size={30} />
            </>),
            href: "mailto:pmuratov1015@gmail.com",
        },
        {
            id: 4,
            child: (<>
                Resume <BsPersonLinesFill size={30} />
            </>),
            href: "/resume.pdf",
            style: "rounded-br-md",
            download: true
        }
    ]
    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
            <ul>
                {links.map((link) => (
                    <li key={link.id} className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500' + ' ' + link.style}>
                        <a
                            href={link.href}
                            download={link.download}
                            target='_blank'
                            className='flex justify-between items-center w-full text-white'
                            rel="noreferrer"

                        >
                            {link.child}
                        </a>
                    </li>
                ) )}
            </ul>
            {FaLinkedin}
        </div>
    )
}

export default SocialLinks