import React from "react"; 
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer"; 
import "./App.css"; 

function App() {
    return(
        <Router>
            <div className = "App">
                <Header />
                <Body />
                <Footer />
            </div>
        </Router>

    );
};

export default App; 