import React from "react";


function AboutCard() {
    return (
        <div className="about-container">
            <h5>About Me</h5>

            <div>

                <div className="mt-3">

                    <p>I am a Fullstack Developer and customer service professional</p>
                    <p>In this section i will post my selling points for why I am a valuable asset to any team and my skills that ive aquired throughout my working time.</p>

                    <p>
                        I am interested in learning about new opportunities and can
                        be reached
                        through this portfolio, by
                        email:
                                                <a href="mailto:steamjgrube@gmail.com"
                            target="_blank"> steamjgrube@gmail.com, </a> through<a
                                href="https://github.com/steamjgrube"> GitHub</a>, or through <a
                                    href="#">
                            LinkedIn.</a>

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