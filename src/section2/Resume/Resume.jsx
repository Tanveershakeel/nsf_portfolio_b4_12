import React from 'react'
import { SiEducative } from 'react-icons/si'
import './resume.css'

const Resume = () => {

    const ResumeData = {
        icon: <SiEducative />,
        Education: [

            {
                degree: "Matric pass",
                institution: "Govt Boys High School Balgatar, Balochistan",
                year: "2012 - 2023"
            },
            {
                degree: "2nd Year pre-medical",
                institution: "Dgree College Hoshab, Balochistan",
                year: "2024 still learning"
            },
            
              

        ],

        Experience: [
            {
                company: "i'm not in any company",
                position: " Junior React Developer,  Independent Learning",
                duration: "Nov 2024 - Present",
                description: "Developed multiple personal projects including a todo app, weather app, and portfolio website to practice React and improve problem-solving skills."
            },
            {
                company: "i'm not in any company",
                position: "Web Designer (Freelancer / Personal Projects)",
                duration: "dec-2024 - present",
                description: "Created modern, mobile-friendly websites with CSS Grid and Flexbox to ensure consistency and flexibility across all screen sizes."
            },
           
        ]
    }


    const skillsData = [
        {
            title: "Web Design",
            value: 26,
        },
        {
            title: "Web Applications",
            value: 90
        },
        {
            title: "JS",
            value: 95
        },
        {
            title: "React",
            value: 90
        }
    ]

    // console.log(Object.values(ResumeData).map((item) => (item.Education)), "asdasdasd")


    const ResumeDataAll = ResumeData.Education.map((item) => (item.degree));

    console.log(ResumeDataAll);




    return (
        <div className='resume'>
            <h1>Resume</h1>



            <div className='icon-title'>
                <span className='title-education'>{Object.values(ResumeData)[0]}</span>
                <h1>  {Object.keys(ResumeData)[1]}</h1>

                <span className='line-bar' />

                <span className='line-dot-1' />
                <span className='line-dot-2' />
                <span className='line-dot-3' />
            </div>


            {ResumeData.Education.map((item, index) => {
                return (
                    <div key={index} className='data'>
                        <h2>{item.institution}</h2>

                        <div className='data-year-degree'>
                            <h3 >{item.year}</h3>
                            <h4>{item.degree}</h4>
                        </div>

                    </div>
                )
            })}



            <div className='icon-title'>

                <span>{Object.values(ResumeData)[0]}</span>
                <h1>{Object.keys(ResumeData)[2]}</h1>


                <span className='line-barr' />

                <span className='line-dott-1' />
                <span className='line-dott-2' />
                <span className='line-dott-3' />
            </div>


            {ResumeData.Experience.map((exp, index) => {
                return (
                    <div key={index} className='data'>
                        <h2>{exp.position}</h2>
                        <div className='data-year-degree'>
                            <h3>{exp.duration}</h3>
                            <p>{exp.description}</p>
                        </div>

                    </div>
                )
            })}



            <h1>My Skills</h1>

            <div className='resume-skills'>

                {skillsData.map((skill, index) => {
                    return (
                        <div key={index} className='skill'>
                            <h3 className='title-resume '>{skill.title} {skill.value}%</h3>
                            <div className='progress'>
                                <div className='internal-progress' style={{ width: `${skill.value}%` }}></div>
                            </div>
                        </div>
                    )
                })}

            </div>




        </div>
    )
}

export default Resume
