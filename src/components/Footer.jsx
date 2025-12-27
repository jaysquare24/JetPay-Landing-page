export const Footer = () => {
    return (
        <footer className="footer" aria-label="footer">
            <div className="footer-container">
                <div className="footer-item1">
                    <h2 className="mission">Make secure payment & grow your online business</h2>
                    <div className="contacts">
                        <div className="contact-address">
                          <img className="contact-icon" src="/resources/location-marker.svg" alt="Location Icon"/>
                          <p >8502 Preston Rd. Inglewood, Maine 98380, USA</p>
                        </div>
                        <div className="contact-address">
                          <img className="contact-icon" src="/resources/mail.svg" alt="Email Icon"/>
                          <p className="contact-email">contact@jetpay.com</p>
                        </div> 
                    </div>
                </div>
                <div className="footer-item2">
                    <nav className="footer-navs">
                        <a>About</a>
                        <a>Solution</a>
                        <a>Pricing</a>
                        <a>Resources</a>
                    </nav>
                    <p className="copyright">© 2024 JetPay. All rights reserved.</p>
                </div>
                <p className="sark">Designed By: Sark(Figma).</p>
            </div>
        </footer>
    )
}