import React from "react"; 
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume"; 
import Footer from "./components/Footer/Footer"; 
import "./App.css"; 

function App() {
    return(
        <Router>
            <div className = "App">
                <Header />
                <p>Thank you for coming!</p>
                <Switch>
                    <Route path="/portfolio-react/" exact component={() => <Home />} />
                    <Route path="/portfolio-react/projects" exact component={() => <Projects />} />
                    <Route path="/portfolio-react/Resume" exact component={() => <Resume />} />
                </Switch>
                <Footer />
            </div>
        </Router>

    );
};

export default App; 