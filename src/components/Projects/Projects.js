import React from "react"; 
import Antipode from "../../images/antipode-demo.gif";
import Weather from "../../images/Weather Dashboard demo.png"; 
import Scheduler from "../../images/Work Day Scheduler demo.png";
import Blaxjax from "../../images/blaxjax3.png";
import "./style.css";

function Projects() {
    return (
        <div className = "projects">
            <div className = "container">
                <div className = "row">
                    <div className = "col-lg-5 firstWork">
                        <h3> <a href= "https://tjl2125.github.io/Antipode-Locator/" target= "_blank">Antipode Locator</a></h3>
                        <h3><a href= "https://github.com/tjl2125/Antipode-Locator" target= "_blank">Github Repo</a></h3>
                        <div className = "mainWorkImg">
                            <button><img src={Antipode} alt="firstImg" onClick={this} />
                            </button>
                        </div>
                    </div>
                    
                    <div className = "other">
                    <div className = "col-lg-5 projects">
                        <h3><a href= "https://tjl2125.github.io/Weather-Dashboard/" target= "_blank">Weather Dashboard Project</a></h3>
                        <h3><a href= "https://github.com/tjl2125/Weather-Dashboard" target= "_blank">Github Repo</a></h3>
                        <div className = "secondWorkImg">
                            <button><img src={Weather} alt="secondImg" onClick={this} />
                            </button>
                        </div>
                    </div>

                    <div className = "col-lg-5 projects">
                        <h3><a href= "https://tjl2125.github.io/Work-Day-Scheduler-/" target= "_blank">Work Day Scheduler</a></h3>
                        <h3><a href= "https://github.com/tjl2125/Work-Day-Scheduler-" target= "_blank">Github Repo</a></h3>
                        <div className = "thirdWorkImg">
                            <button><img src={Scheduler} alt="thirdImg" onClick={this} />
                            </button>
                        </div>
                    </div>

                    <div className = "col-lg-5 projects">
                        <h3><a href= "https://blaxjax.herokuapp.com/" target= "_blank">BlaxJax</a></h3>
                        <h3><a href= "https://github.com/tjl2125/blaxjax" target= "_blank">Github Repo</a></h3>
                        <div className = "fourthWorkImg">
                            <button><img src={Blaxjax} alt="fourthImg" onClick={this} />
                            </button>
                        </div>
                    </div>
                    </div>                    
                </div>
            </div>
        </div>
        
    )
}

export default Projects; 