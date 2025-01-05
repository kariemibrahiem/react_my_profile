import React, { Fragment, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "react-bootstrap";
import "./main.css";
import Cards from "./card";
import p1 from "./projs/chair.png";
import p2 from "./projs/guess.png";
import p3 from "./projs/clienc.png";
import p4 from "./projs/company.png";
import p5 from "./projs/crud.png";
import p6 from "./projs/demonetor.png";
import p7 from "./projs/moon.png";
import p8 from "./projs/xo.png";
import l1 from "./projs/laravel_1.png";

const mycard= [
   {title :" bank invoices " ,text : "invoices full system to a banks" ,  cat:"back" , link:l1 , more:"https://github.com/kariemibrahiem/laravel_invoices/"},
   {title :"furni" ,text : "small project for a furniture company with some adits from me " ,  cat:"react" , link: p1 , more:""},
   {title :"clinic" ,text : "design for a clinic  and my first project with many mistakes" ,  cat:"react" , link: p3 , more:"https://kariemibrahiem.github.io/clinec/"},
   {title :"company" ,text : "design for a company with a color changable buttons js functional" ,  cat:"front" , link: p4 , more:"https://kariemibrahiem.github.io/company/"},
   {title :"cruds" ,text : "project based on the functions of javascript" ,  cat:"front" , link: p5 , more:"https://kariemibrahiem.github.io/cr/"},
   {title :"de'monetor" ,text : "small project used for the lectures of the faculty " ,  cat:"react" , link: p6 , more:"https://kariemibrahiem.github.io/monetor_react/"},
   {title :"moon" ,text : "login website with js functional to display a writer text" ,  cat:"front" , link: p7 , more:"https://kariemibrahiem.github.io/moon/"},
   {title :"moon" ,text : "simple xo game with js functional in very simple design" ,  cat:"front" , link: p8 , more:"https://kariemibrahiem.github.io/xo_game/"}
   

];
// const arr = [{title : "main"}]
const Main = () =>{
    const handel = (par) => {
        const newArr = mycard.filter((elements) => {
            return elements.cat == par;
        });
        setarr(newArr);
    }
    
    var [active , setactive] = useState(0); {/*the activate buttons */}

    const [arr , setarr] = useState(mycard);
    return(
        <div className="container main_sec">
            <h1 className="main_pj">some projects </h1>
            <p className="main_pj">there are more projects in githup  </p>
            <div className="main_con">
                <div className=" btn_div ">
                    <button onClick={() => {setactive(0); setarr(mycard)}} className= {active == 0 ? "btn btn-outline-success m-1 active" : "btn btn-outline-success m-1 "} >all projects</button>
                    <button onClick={() => {setactive(1); handel("front") ;}} className= {active == 1 ? "btn btn-outline-success m-1 active" : "btn btn-outline-success m-1 "} >front-end</button>
                    <button onClick={() => {setactive(2); handel("back") ;}} className= {active == 2 ? "btn btn-outline-success m-1 active" : "btn btn-outline-success m-1 "} >back-ens</button>
                </div>
                <div className=" cards_div ">
                    {/* {active == 0 ? <div className=""><Cards title="page design 1" picture={p1} /></div> : null}
                    {active == 1 ? <div className=""><Cards title="page design 2" picture={p2} /></div> : null}
                    {active == 2 ? <div className=""><Cards title="page design 3" picture={p3} /></div> : null}
                    {active == 3 ? <div className=""><Cards title="page design 4" picture={p4} /></div> : null}
                    {active == 4 ? <div className=""><Cards title="page design 5" picture={p5} /></div> : null}  */}
                    {arr.map((item)=>{
                        return(
                            <div>
                                <Cards title={item.title} cat={item.cat} link={item.link} text={item.text} more={item.more}/>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
export default Main;
