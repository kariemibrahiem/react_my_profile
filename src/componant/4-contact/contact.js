import React, { Fragment } from "react";
import "./contact.css";
import { Button, Card , Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import con from "../images/picture ,icons/location.gif"
import home from "../images/picture ,icons/home (1).gif"
// import email from "../../animation/email.json"
// import developer from "../../animation/developer.json"
import { ValidationError, useForm } from "@formspree/react";
// import Lottie from "react-lottie";
import email from "../../animation/email.png";
const Contact = () =>{
    const [state, handleSubmit] = useForm("xjvnjkjy");
    if (state.succeeded) {
       
        return(
            <Fragment>
                <hr/>
                <h1>Thanks for joining!</h1>
                <button className="btn btn-outline-danger m-2 w-50" onClick={()=>{window.location.reload()}}> reload </button>
                <hr/>
            </Fragment>
            )
       
    }
    return(
        <section className="contact_sec">
            <div className="container m-3">
               <span className="head">
                <img className="icon_con" src={con}/>
                <h2>contact us</h2>
                </span> 
                <p>you now can connect with our company directly so don't waste this chance , we wait you </p>
            </div>
            <div className="row w-100">
                <div className="col-sm-12 col-md-6 w-50">
                <form onSubmit={handleSubmit} action="https://api.web3forms.com/submit" method="POST">
                    <input type="hidden" name="access_key" value="1b20327a-bdce-4bce-b735-d7507f5fa1a8" />
                        <label htmlFor="email" className="m-2">Email Address:</label><br/>
                        <input type="email" id="email" name="email" className="email form-control m-2" placeholder="your email" />
                        <ValidationError prefix="Email" field="email"errors={state.errors}/>
                        <label htmlFor="text" >your message:</label>
                        <textarea id="message" name="message" className="form-control m-2" rows={5} cols={50}></textarea>
                        <ValidationError prefix="Message" field="message"errors={state.errors}/>
                        <button disabled={state.submitting} type="submit" className="btn btn-outline-danger m-2 w-100">submit</button>
                </form>
                </div>
                <div className="col-sm-12 col-md-6 w-50">
                    {/* <Lottie animationData={email}/> */}
                    <img src={email} className="send" />
                </div>
            </div>
        </section>
    );
}

export default Contact;