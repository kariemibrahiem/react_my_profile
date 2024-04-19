import React from 'react'
import Main from '../componant/3-main/main'
import Contact from '../componant/4-contact/contact'
import "./style.css";
import Navs from "../componant/1-nav/nav";
const Projects = () => {
  return (
    <div>
                <Navs/>
        <div className='containe'>
                <div className="right">
                    <h3>some projects</h3>
                    <p className='proj_p'>all my projects you will find in githup link</p>
                </div>
                <div className="left">
                </div>
        </div>
        <hr/>
        <Main/>
        <Contact/>
    </div>
  )
}

export default Projects