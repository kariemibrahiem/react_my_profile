import React from 'react'
import html from "../images/html.png"
import css from "../images/css.png"
import boots from "../images/boots.png"
import js from "../images/js.png"
import reac from "../images/react.png"
import ph from "../images/php.png"
import sql from "../images/sql.png"
import "./skill.css";
// the image of additional skills
import alg from "../images/alg.png"
import sol from "../images/slov.png"
import data from "../images/data.png"
import hup from "../images/githup.png"
import team from "../../animation/team_work.png";
// import Lottie from "lottie-react";
// import team from "../../animation/team.json"

const Skills = () => {
  return (
    <div className='sk_con'>
        <h2 >skills</h2>
        <small>some of my skills</small>
        <div className='skill'>
            <div className='html'>
                <div className="af">
                </div>
            <img src={html} alt="" />
            <small>html</small>
            </div>
            <div className='css'>
            <div className="af_css"></div>
            <img src={css} alt="" />
            <small>css</small>
            </div>
            <div className='boot'>
            <div className="af_boot"></div>
            <img src={boots} alt="" />
            <small>bootstrap</small>
            </div>
            <div className='boot'>
            <div className="af_boot"></div>
            <img src={boots} alt="" />
            <small>jquery</small>
            </div>
            <div className='js'>
            <div className="af_js"></div>
            <img src={js} alt="" />
            <small>javascript</small>
            </div>
            <div className='reac'>
            <div className="af_reac"></div>
            <img src={reac} alt="" />
            <small>react</small>
            </div>

            <div className='php'>
            <div className="af_php"></div>
            <img src={ph} alt="" />
            <small>php</small>
            </div>

            <div className='sql'>
            <div className="af_sql"></div>
            <img src={sql} alt="" />
            <small>sql</small>
            </div>
    
        </div>
        <hr />
        <div className='add_skill' id='addetional'>
            <h3>additional skills</h3>
            <div>
               <div>
                    <img src={hup} alt="" />
                    <p>githup</p>
               </div>
               <div>
                    <img src={sol} alt="" />
                    <p>problem solving with icpc</p>
               </div>
               <div>
                    <img src={data} alt="" />
                    <p>data structure</p>
               </div>
                <div>
                    <img src={alg} alt="" />
                    <p>algorithms</p>
                </div>
                <div>
                    {/* <Lottie className='ico_n' animationData={team}/> */}
                    <img src={team} alt="" />
                    <p>team work</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills