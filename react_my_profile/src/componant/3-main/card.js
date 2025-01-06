import { Button, Card, CardImg } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./card.css"
import ic1 from "../images/picture ,icons/git_light.png";
import ic2 from "../images/picture ,icons/linked_light.png";
import ic3 from "../images/picture ,icons/phone.gif";
import p1 from "./projs/chair.png";
import Lottie from "react-lottie";

const Cards = (props) =>{
   
    return(
        <div>
            <Card className="card_sec"> 
            <CardImg src={props.link}/>
                <Card.Body className="crd">
                    <h2 className="card_title">{props.title}</h2>
                    <p className="cat">by {props.cat}</p>
                    <Card.Text>
                        {props.text}
                    </Card.Text>
                    <small>to see the full deploy of project click at take a look</small>
                    <div className="card_btn">
                        <div>
                        <a href="https://github.com/kariemibrahiem"> <img className="icon" src={ic1}/></a>
                        <a href="https://www.linkedin.com/in/kariem-ibrahiem-903a0b2a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><img className="icon" src={ic2}/></a>
                        </div>
                        <div>
                            <button className="btn"><a  href={props.more}>take a look</a></button>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Cards;