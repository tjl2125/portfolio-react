import React from "react"; 
import { BrowserRouter as Router, Route} from 'react-router-dom';

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