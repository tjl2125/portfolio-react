import React from "react"; 
import Placeholder from "../../images/Placeholder200x200.png"
import TJL from "../../images/TJL2.jpg"; 
import "./style.css"; 

function Home() {
    return (
        <div className = "home">
            <div className = "container">
                <div className = "row justify-content-md-center">
                    <div className = "col-4">
                    <img className= "about-me" src={TJL} alt="placeholder image" />
                    </div>
                    <div className = "col-4">
                        <h2>Home</h2>
                        <p>My name is Taylor Leong. I was originally born in California, but later moved to New York
                        in order to go to Barnard College. I graduated with a Bachelor's degree in Biology, but
                        later decided to pursue further education related to coding. Or more specifically, learning
                        more about full-stack development. I can pick up new topics fairly quickly and always make 
                        time to study materials and finish work before their deadline. 
                        </p> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home; 