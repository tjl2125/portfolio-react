import React from "react"; 

function Footer() {
    return(
        <div className = "footer">
            <footer className = "py-2 bg-dark fixed-bottom">
            <div className = "contact-container text-white text-center">
                <div className = "row align-items-center">
                <p>Feel Free to Contact to Me</p>
                <div className = "col-3 email">
                    <p>Email: tjl2125@alum.barnard.edu</p>
                </div>

                <div className = "col-3 github-profile">
                    <p>Github: https://github.com/tjl2125</p>
                </div>

                <div className = "col-3 linkedin">
                    <p>LinkedIn: https://www.linkedin.com/in/taylor-leong-1bbb13179/</p>
                </div>
            </div>
            </div>
            </footer>
        </div>
    );
};

export default Footer; 