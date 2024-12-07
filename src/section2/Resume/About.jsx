import React from 'react'
import './About.css'
import { FaFaceAngry, FaWebflow } from 'react-icons/fa6'

const About = () => {

    const cardSection = [
        {
            icon: <FaWebflow />,
            title: 'Web Design',
            description: 'I craft clean, modern, and responsive designs that ensure an engaging user experience across all devices.'
        },
        {
            icon: <FaWebflow />,
            title: 'Development',
            description: ' I develop fast, interactive websites using React and modern web technologies.'
        },
        {
            icon: <FaWebflow />,
            title: 'Graphic Design',
            description: ' I create custom graphics and visual elements to enhance your brand and website aesthetics.'
        },
        {
            icon: <FaWebflow />,
            title: 'SEO',
            description: ' I implement SEO best practices to improve your website’s visibility and drive organic traffic.'
        },

    ]
    return (
        <div className='about-section'>
            <h1 className='about-heading'>About Me</h1>

            <span className='aboutme-underline' />


            <div className='about-section-paragraph'>
            <p>
          Hi, I'm Tanveer, a Frontend Developer with a focus on building dynamic
          and responsive web applications using React. I’m passionate about
          crafting clean, user-friendly interfaces and staying up-to-date with
          the latest frontend technologies
        </p>
        <p>
          I’m a passionate and detail-oriented Frontend React Developer with 1
          years of experience in building modern, scalable, and user-friendly
          web applications. I thrive on creating seamless user experiences by
          leveraging the latest web technologies and tools. With a solid
          foundation in JavaScript, React, and frontend best practices, I’m
          driven to solve complex problems while maintaining clean and
          maintainable code.
        </p>
            </div>



            <div className='what-Iam-doing'>
                <h1>What I'm Doing</h1>

                <div className='card-parent'>

                    {cardSection.map((cards, index) => {
                        return (
                            <div className='card-container' key={index}>
                                <span>{cards.icon}</span>


                                <div>
                                    <h2>{cards.title}</h2>
                                    <p>{cards.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>


            </div>







        </div>
    )
}

export default About
