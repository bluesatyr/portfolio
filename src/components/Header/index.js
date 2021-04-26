import React from 'react';



function Header(props) {
    const {
        setCurrentPage,
        currentPage
    } = props;

    return(
        <header>
            <h1>Shawn Evans</h1>
            <nav>
                <ul>
                    <li><span onClick={() => {setCurrentPage('about');}} className={`${currentPage === "about" && `navActive`}`}>About Me</span></li>
                    <li><span onClick={() => {setCurrentPage('portfolio');}} className={`${currentPage === "portfolio" && `navActive`}`}>Portfolio</span></li>
                    <li><span onClick={() => {setCurrentPage('contact');}} className={`${currentPage === "contact" && `navActive`}`}>Contact</span></li>
                    <li><span onClick={() => {setCurrentPage('resume');}} className={`${currentPage === "resume" && `navActive`}`}>Resume</span></li>
                </ul>
            </nav>
        </header>
    )

}

export default Header;