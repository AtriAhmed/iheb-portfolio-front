import React from 'react'
import About from '../about/About'
import Journey from '../experience/Journey'
import Skills from '../skills/Skills'
import Contact from '../contact/Contact'
import Work from '../work/Work'

export default function Home() {
    return (
        <div className=''>
            <About />
            <Journey />
            <Work />
            <Skills />
            <Contact />
        </div>
    )
}
