import './Footer.scss';


function Footer() {
    return (
        <footer className="contacts">
            <div className="container grid-container">
                <div className="heading lil-heading" id="about">
                    <h1 className="title">
                        <span>About us</span>
                    </h1>
                    <div className='block'></div> 
                </div>
                <p id="about-content">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    Lorem Ipsum has been the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    Lorem Ipsum has been the            
                </p>
                <div className="heading lil-heading" id="address">
                    <h1 className="title">
                        <span>Address</span>
                    </h1>
                    <div className='block'></div>                 
                </div>
                <p id="address-content">
                    20 Main Street, Melbourne<br />
                    Phone: (200) 333 8890<br />
                    Email: contact@example.com<br />
                    Web: http://example.com<br />
                </p>
                <div className="flex-container" id="social-links">
                    <div className="i-container"><a href=""><i className="fab fa-facebook-f"></i></a></div>
                    <div className="i-container"><a href=""><i className="fab fa-twitter"></i></a></div>
                    <div className="i-container"><a href=""><i className="fab fa-linkedin-in"></i></a></div>
                    <div className="i-container"><a href=""><i className="fab fa-google"></i></a></div>
                    <div className="i-container"><a href=""><i className="fab fa-telegram-plane"></i></a></div>
                </div>
            </div>
        </footer>
    )
}

export default Footer