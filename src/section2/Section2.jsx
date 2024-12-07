import React from 'react'
import Header from '../components/Header/Header'
import About from './About/About'
import './Section2.css'
import { Route, Routes } from 'react-router-dom'
import Contact from './Contact/Contact'
import Resume from './Resume/Resume'

const Section2 = () => {
    return (
        <div className='section-2'>

            <Header />

            <Routes>
                <Route path='/' element={<About />} />
                <Route path='/resume' element={<Resume />} />
                <Route path='/contact' element={<Contact />} />

            </Routes>



        </div>
    )
}

export default Section2
