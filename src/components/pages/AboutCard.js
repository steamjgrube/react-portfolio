import React from "react";
// import Profile from "../../assets/Profile.jpeg"


function AboutCard() {
    return (
        <div className="about-container">
            <h5>About Me</h5>

            <img src="#" alt="#" className="#"></img>
            <div>

                <div>

                    <p>I am a Fullstack Developer and administrative professional
                                                with 8+ years
                                                of
                                                experience in various sectors.</p>
                    <p>Recognized for demonstrating independent discipline,
                                                flexibility, and a
                                                customer-oriented attitude, I
                                                have a verifiable history of contributing directly to company growth and
                                                expansion throughout my career.
                                                Professional focal points include sales, scheduling, data entry, web
                                                formatting, proofreading/editing,
                                                social media marketing, content management, cross-functional team
                                                leadership, complex problem-solving,
                                                and client relationship management.</p>

                    <p>
                        I am interested in learning about new opportunities and can
                        be reached
                        through this portfolio, by
                        email:
                                                <a href="mailto:steamjgrube@gmail.com"
                            target="_blank">steamjgrube@gmail.com, </a> through<a
                                href="https://github.com/steamjgrube"> GitHub</a>, or through <a
                                    href="#">
                            LinkedIn.</a>
                        Cheers!

                                                </p>
                </div>

                <div className="card-body contactLinks">
                    <a href="#" className="card-link">LinkedIn</a>
                    <a href="https://github.com/steamjgrube" className="card-link">GitHub</a>
                </div>
            </div>
        </div>
    );
}

export default AboutCard;