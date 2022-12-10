import React from "react";
import Image from "./images/cvchukwu.jpg"

function Main() {
    return(
        <div className="container">
            <section className="image--container">
                <img src={Image} alt="Profile Pics" className="profile--pics"/>
            </section>
            <section className="portfolio--info">
                <div className="portfolio--biodata">
                    <h3>Chukwu Victor</h3>
                    <h4>Senior Developer</h4>
                    <h5>Blackgrey Technologies</h5>
                </div>
                <div className="contact--details">
                    <button className="contact--email">
                    <i class="fa-solid fa-envelope"></i>
                    <p>Email</p>
                    </button>
                    <button className="contact--linkedin">
                    <i class="fa-brands fa-linkedin"></i>
                    <p>LinkedIn</p>
                    </button>
                </div>
                <div className="portfolio--articles">
                    <h3>About</h3>
                    <p>Chuwu Victor is a senior front end developer at the Blackgrey Tech. Inc., a leading Nigerian multinational technology conglomerate based in Asaba, Delta State. Victor (or 'Coderholic' as he is fondly called) has over 50 years of developing experience and has works which are globally recognized and appreciated.</p>
                    <h3>Interests</h3>
                    <p>Chukwu Victor has shown interest in all things Technology such as AI, Machine Learning, Robotics, and Market Researching.</p>
                </div>
            </section>
            <footer>
                <div className="footer--icons--container">
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-github"></i>
                </div>    
            </footer>
                
        </div>
    )
}

export default Main