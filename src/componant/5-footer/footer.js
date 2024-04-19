import React, { Fragment } from "react";
import "./footer.css";
const Footer = () =>{
    return(
        <div className="footer_sec">
            <div className="link">
                <a href="#" className="foot_a">about</a>
                <a href="#" className="foot_a">project</a>
                <a href="#" className="foot_a">speaking</a>
                <a href="#" className="foot_a">Uses</a>
            </div>
            <div className="paragraph">
                <p>© 2023 by kariem ibrahiem. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;