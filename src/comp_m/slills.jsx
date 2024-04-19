import React from 'react'
import Skills from '../componant/3.5-skills/skills'
import Contact from '../componant/4-contact/contact'
import Navs from '../componant/1-nav/nav';
const Slills = () => {
  return (
    <div>
      <Navs/>
         <div className='containe'>
                <div className="right">
                    <h3>some skills</h3>
                    <p className='proj_p'>all my projects you will find in githup link</p>
                </div>
                <div className="left">
                </div>
        </div>
        <Skills/>
        <Contact/>
    </div>
  )
}

export default Slills