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
                <Switch>
                    <Route path="/" exact component={() => <Home />} />
                    <Route path="/projects" exact component={() => <Projects />} />
                    <Route path="/Resume" exact component={() => <Resume />} />
                </Switch>
                <Footer />
            </div>
        </Router>

    );
};

export default App; 