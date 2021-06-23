import React from "react"; 

function Footer() {
    return(
        <div className = "footer">
            <footer className = "py-3 bg-dark fixed-bottom">
            <div className = "contact-container text-white text-center">

                <section className = "email">
                    <p>Email: tjl2125@alum.barnard.edu</p>
                </section>

                <section className = "github-profile">
                    <p>Github: https://github.com/tjl2125</p>
                </section>

                <section className = "linkedin">
                    <p>LinkedIn: https://www.linkedin.com/in/taylor-leong-1bbb13179/</p>
                </section>

            </div>
            </footer>
        </div>
    );
};

export default Footer; 