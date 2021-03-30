import './Hero.scss';
import './Form.scss';

function Hero() {
    return (
        <section className="hero">
            <div className="container flex-container">
                <label>
                    <input type="button" value=""/>
                    <div className="hero-switcher flex-container">
                        <i className="fas fa-angle-left"></i>
                    </div>
                </label>
                <div className="hero-slogan flex-container">
                    <h1>
                        <span className="accent">travel</span>
                        <span>maker</span>
                    </h1>
                    <h2>city tours</h2>
                    <div className="action flex-container">
                        <a href="#" id='action'>start travel</a>
                        <a href="#">read more</a>                
                    </div>
                    
                </div>
                <label>
                    <input type="button" value=""/>
                    <div className="hero-switcher flex-container">
                        <i className="fas fa-angle-right"></i>
                    </div>
                </label>
            </div>
            <div className='popup'>
                <form id='profile'>
                    <div className="popup-content">
                        <img src="../../images/close_icon.png" alt="" className="close" />
                        <p3>
                        Get personal city tour now!
                        </p3>
                        <div className='direction'>
                            <label for="fname">First name</label>
                            <input type="text" id="fname" name="fname" />
                        </div>
                        <div className="direction">
                            <label for="city">City</label>
                            <select name="city" id="city">
                                <option value="saintP">Saint-Petersburg</option>
                            </select>
                        </div>
                        <div className="direction">
                            <label for="age">Age</label>
                            <select name="age" id="age">
                                <option value="18-25">18-25</option>
                                <option value="25-35">25-35</option>
                                <option value="35-45">35-45</option>
                                <option value="45-60">45-60</option>
                                <option value="60-100">60+</option>
                            </select>
                        </div>
                        <div className="direction">
                            <label for="places">Places of interests</label>
                            <select name="places" id="places" multiple>
                                <option value="Sightseeings">Sights</option>
                                <option value="Museums">Museums</option>
                                <option value="Theatres">Theatres</option>
                                <option value="Parks">Parks</option>
                                <option value="Restaurants">Restaurants</option>
                                <option value="Bars">Bars</option>
                                <option value="Night clubs">Night clubs</option>
                            </select>
                        </div>
                        <div className="direction">
                            <label for="budget">budget</label>
                            <input type="number" id="number" name="number" />
                        </div>
                        <div>
                            <button id='btn'>Get Trip</button>
                        </div>
                        <div id="msg">
                            <pre></pre>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Hero