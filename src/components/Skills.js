import React from "react";

import html from "../assets/html.png"
import css from "../assets/css.png"
import javascript from "../assets/javascript.png"
import reactImage from "../assets/react.png"
import github from "../assets/github.png"
import tailwind from "../assets/tailwind.png"
import python from "../assets/python.png"
import flask from '../assets/Flask_logo.png'
import gitlab from '../assets/gitlab.png'
import gcp from '../assets/google_cloud-icon.svg'
import terraform from '../assets/terraform.svg'
import pytorch from '../assets/pytorch-logo.png'
import git from "../assets/Git-Icon-White.png"
import java from '../assets/Java-Logo.png'
import k8s from '../assets/k8s.png'

const Skills = () => {
    const techs = [
        {
            id: 1,
            src: python,
            title: "Python",
            style: "shadow-blue-400"
        },
        {
            id: 2,
            src: flask,
            title: "Flask",
            style: "shadow-white",
        },
        {
            id: 3,
            src: javascript,
            title: "JavaScript",
            style: "shadow-yellow-500",
        },
        {
            id: 4,
            src: reactImage,
            title: "React",
            style: "shadow-blue-600",
        },
        {
        id: 9,
        src: html,
        title: "HTML",
        style: "shadow-orange-500",
        },
        {
            id: 8,
            src: gitlab,
            title: "GitLab CI/CD",
            style: "shadow-orange-400",
        },
        {
            id: 11,
            src: gcp,
            title: "Google Cloud Platform (GCP)",
            style: "shadow-[#2cd158]"
        },
        {
            id: 12,
            src: terraform,
            title: "Terraform",
            style: "shadow-[#844FBA]"
        },
        {
            id: 13,
            src: pytorch,
            title: "PyTorch",
            style: "shadow-orange-500"
        },
        {
        id: 10,
        src: css,
        title: "CSS",
        style: "shadow-blue-500",
        },
        {
        id: 5,
        src: tailwind,
        title: "Tailwind",
        style: "shadow-sky-400",
        },
        {
            id: 14,
            src: git,
            title: "Git",
            style: "shadow-white"
        }
    ];

    const skills = {
        "Programming Languages": [
            {
                id: 1,
                src: python,
                title: "Python",
                style: "shadow-blue-400"
            },
            {
                id: 2,
                src: javascript,
                title: "JavaScript",
                style: "shadow-yellow-500",
            },
            {
                id: 3,
                src: java,
                title: "Java",
                style: "shadow-sky-400"
            },
            {
                id: 4,
                src: html,
                title: "HTML",
                style: "shadow-orange-500",
            },
            {
                id: 5,
                src: css,
                title: "CSS",
                style: "shadow-blue-500",
            },
            
        ],
        "Backend and Frontend Frameworks": [
            {
                id: 6,
                src: flask,
                title: "Flask",
                style: "shadow-white",
            },
            {
                id: 7,
                src: reactImage,
                title: "React",
                style: "shadow-blue-600",
            }
        ],
        "Deployment & Version Control": [
            {
                id: 8,
                src: gitlab,
                title: "GitLab CI/CD",
                style: "shadow-orange-400",
            },
            {
                id: 10,
                src: gcp,
                title: "Google Cloud Platform (GCP)",
                style: "shadow-[#2cd158]"
            },
            {
                id: 11,
                src: k8s,
                title: "Kubernetes",
                style: "shadow-blue-500"
            },
            {
                id: 12,
                src: terraform,
                title: "Terraform",
                style: "shadow-[#844FBA]"
            },
        ]
    }

        return (
            <div
                name="experience"
                className="bg-gradient-to-b from-gray-800 to-black w-full "
            >
                <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                    <div>
                    <p className="text-4xl font-bold border-b-4 border-gray-500 pt-30 inline">
                        Experience
                    </p>
                    <p className="py-6">
                        These are the technologies I've worked with during full-time roles, internships/co-op, personal projects, and university coursework. </p>
                    </div>
                    
                    {Object.keys(skills).map((skillType) => (
                        <div>
                        <p className="text-2xl font-bold pt-5">{skillType}</p>
                        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                            {skills[skillType].map(({ id, src, title, style }) => (
                                <div
                                    key={id}
                                    className={`z-10 shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                                >
                                    <img src={src} alt="" className="w-20 mx-auto" />
                                    <p className="mt-4">{title}</p>
                                </div>
                            ))}
                        </div>
                        </div>
                        
                    ))}
                   

                    
                </div>
            </div>
        );
};

export default Skills;