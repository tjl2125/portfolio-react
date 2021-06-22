import React from "react"; 

function Home() {
    return (
        <div className = "home">
            <div className = "container">
                <div className = "row justify-content-md-center">
                    <div className = "col-4">
                        <im class = "img-fluid-round" 
                        src = "../../../public/Placeholder200x200.png" 
                        alt = "placeholder image" />
                    </div>
                    <div className = "col-4">
                        <h1>Home</h1>
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