import { useEffect, useState } from "react";
import Navs from "./1-nav/nav";
import Hero from "./2-hero/hero";
import Main from "./3-main/main";
import Contact from "./4-contact/contact";
import Footer from "./5-footer/footer";
import Skills from "./3.5-skills/skills";
import "../App.css";
// import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
function Home() {
  const [scrollbtn, setbtn] = useState(0); 
  useEffect(() =>{
    window.addEventListener("scroll" , () => {
        if(window.scrollY >250){
          setbtn(1);
        }else{
          setbtn(0)
        }
    })
} ,[]);

    
    
return (
  
  <div>
  <div  className="container  cont w-100">
          <Navs/>
          <Hero />
          <Main />
          <Skills/>
          <Contact />
          <Footer />
          <a onClick={()=>{window.scrollTo(0 ,0)}} style={{opacity: scrollbtn , transition: "1s"}}>
          {/* <button   className='slide btn btn-primary' ><KeyboardDoubleArrowUpIcon/></button> */}
          </a>
          </div>
  </div>
);
}

  
  export default Home;
