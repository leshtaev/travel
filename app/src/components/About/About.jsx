import './About.scss';
import 'font-awesome/css/font-awesome.min.css'; 

function About() {
    return (
        <section className="about">
            <div className="container flex-container">
                <div className="heading flex-container">
                    <h1 className="title">
                        <span>about</span>
                        <span className="color">us</span>
                    </h1>
                    <div className='block'></div>    
                </div>
                <div className="features flex-container">
                    <div className="feature flex-container">
                        <div className="icon-container">
                            <i className="far fa-user"></i>
                        </div>
                        <h3>+10000 customers</h3>
                        <p>Print this page to PDF for the complete set of vectors.</p>
                    </div>
                    <div className="feature flex-container">
                        <div className="icon-container">
                            <i className="fas fa-car"></i>
                        </div>
                        <h3>Best Tours</h3>
                        <p>Print this page to PDF for the complete set of vectors.</p>
                    </div>
                    <div className="feature flex-container">
                        <div className="icon-container">
                            <i className="fas fa-phone"></i>
                        </div>
                        <h3>H24 Support</h3>
                        <p>Print this page to PDF for the complete set of vectors.</p>
                    </div>
                    <div className="feature flex-container">
                        <div className="icon-container">
                            <i className="fas fa-language"></i>
                        </div>
                        <h3>Every city</h3>
                        <p>Print this page to PDF for the complete set of vectors.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About