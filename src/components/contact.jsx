import "./css/contact.css"

import github from "../socialMedia/github-icon.svg"
import linkdin from "../socialMedia/linkedin-icon.svg"
import twitter from "../socialMedia/twitter.svg"
import facebook from "../socialMedia/facebook.svg"
import {useRef}  from "react"
import emailjs from '@emailjs/browser';

function Contact(){
    const formRef = useRef();
    const formSubmit = (e)=> {
        e.preventDefault()
        emailjs.sendForm('service_kif5daw', 'template_d12qkrh', formRef.current, 'user_7jlRL53DtMyy0eIU3G8ln')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <div>
         <div id="contactMainDiv">
          <h1 id="contactHeading">Contact Me</h1>

          <div id="contactIconsDiv">
           <div id="socialMediaIconsDiv">
            <a href="https://github.com/AshokvardhanaReddy" target="_blank">  <img className="socialMediaImg" src={github}></img></a>
            <a href="https://www.linkedin.com/in/yarasi-ashokvardhana-reddy-33b560122/" target="_blank"><img className="socialMediaImg" src={linkdin}></img></a>
            <a href="https://twitter.com/yavreddy1995" target="_blank">  <img className="socialMediaImg" src={twitter}></img></a>
             <a href="https://www.facebook.com/" target="_blank"> <img className="socialMediaImg" src={facebook}></img></a>
           </div>
           <div id="sendMailDiv">
           <h3 id="sendMailHeading">Send Mail : </h3>
           
           <form ref={formRef} onSubmit={formSubmit}>
               <input type="text" placeholder="Enter Your Name" name="user_name"></input>
               <input type="text" placeholder="Enter Your Subject" name="user_subject"></input>
               <input type="text" placeholder="Enter Your Email" name="user_email"></input>
               <input id="messageInput" type="text" placeholder="Write Your Message Here" name="message"></input>
               <br></br>
               <button id="formSubmitButton">Submit</button>
           </form>

           </div>
           <br></br>
         <br></br>
         <br></br>
         <br></br>
          </div>
         </div>
       
        </div>
    )
}

export {Contact}