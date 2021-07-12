import React from "react";
// import ContactPNG from "../assets/contact.png"


function ContactCard(props) {
    return (

        <div className="contact-card">

            <div className="card">
                <h1 className="text-center">Contact Me</h1>
                <div className="card-content">
                    <a href="tel:+18562948010" className="ml-4 mt-4 font-weight-bold">Phone</a>
                    <br></br>
                    <a href="mailto:webmaster@steamjgrube@gmail.com" className="ml-4 mt-4 font-weight-bold">Email</a>
                    <br></br>
                    <a href="#" className="ml-4 mt-4 font-weight-bold">LinkedIn</a>
                    <br></br>
                    <a href="https://github.com/steamjgrube" className="ml-4 mt-4 font-weight-bold">GitHub</a>

                </div>
            </div>
        </div >


    );
}

export default ContactCard;