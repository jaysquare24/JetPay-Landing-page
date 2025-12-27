import { useState } from "react"

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleBtnClick = () => {
        alert("Functionality not implemented yet!");
    }

    return(
        <header>
            <h2 className="logo"><img className="logo-icon" src="/resources/Logo.png" alt="logo"/>JetPay</h2>
            <div className={`navigation ${isMenuOpen ? 'active' : ''}`}>
                <nav className="headerNavs">
                    <a>Home</a>
                    <a>About</a>
                    <a>Blog</a>
                    <a>Pages</a>
                    <a>Contact</a>
                </nav>
                <div className="headerButtonsContainer">
                    <button className="headerButtons" onClick={handleBtnClick} id="signInButton" type="button">Sign in</button>
                    <button className="headerButtons" onClick={handleBtnClick} id="signUpButton" type="button">Get Your Card</button>
                </div>
            </div>
            <button 
                type="button"  
                className="menu-button" 
                aria-label="Toggle navigation menu"
                onClick={handleMenuToggle}
            >
                <img 
                id="menu-icon" 
                src={isMenuOpen? "/resources/icons8-close.svg" : "/resources/icons8-menu.svg"}
                alt="Menu icon"
                />
            </button>
        </header>
    )
}