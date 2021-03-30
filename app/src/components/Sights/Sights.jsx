import './Sights.scss';


function Sights() {
    return (
        <section className="sights">
            <div className="container flex-container">
                <div className="heading flex-container">
                    <h1 className="title">
                        <span>Sights</span>
                    </h1>
                    <div className='block'></div> 
                </div>
                <div className="filter-buttons flex-container">
                    <label className="radio-filter">
                        <input type="radio" name="sights-filter"/>
                        <span>Trips</span>
                    </label>
                    <label className="radio-filter">
                        <input type="radio" name="sights-filter"/>
                        <span>Sights</span>
                    </label>
                    <label className="radio-filter">
                        <input type="radio" name="sights-filter"/>
                        <span>Places</span>
                    </label>
                    <label className="radio-filter">
                        <input type="radio" name="sights-filter"/>
                        <span>Hotels</span>
                    </label>
                    <label className="radio-filter">
                        <input type="radio" name="sights-filter"/>
                        <span>Rest</span>
                    </label>
                </div>
                <div className="sights-container grid-container">
                    <div className='case-item'>
                        <img src= "../../images/Berlin.jpeg" alt=""/>
                        <div className="case-inner ">
                            <div className= "case-inner-content">
                            Berlin day tour
                            </div>
                        </div>
                    </div>
                    <div className='case-item'>
                        <img src= "../../images/Kiev.jpg" alt=""/>
                        <div className="case-inner ">
                            <div className= "case-inner-content">
                                Kiev day tour
                            </div>
                        </div>
                    </div>
                    <div className='case-item'>
                        <img src= "../../images/moscow.jpg" alt=""/>
                        <div className="case-inner ">
                            <div className= "case-inner-content">
                                Moscow day tour
                            </div>
                        </div>
                    </div>
                    <div className='case-item'>
                        <img src= "../../images/Istanbul.jpg" alt=""/>
                        <div className="case-inner ">
                            <div className= "case-inner-content">
                                Istanbul day tour
                            </div>
                        </div>
                    </div>
                    <div className='case-item'>
                        <img src= "../../images/Prague.jpg" alt=""/>
                        <div className="case-inner ">
                            <div className= "case-inner-content">
                                Prague day tour
                            </div>
                        </div>
                    </div>
                    <div className='case-item'>
                        <img src= "../../images/Tokyo.jpeg" alt=""/>
                        <div className="case-inner ">
                            <div className= "case-inner-content">
                                Tokyo day tour
                            </div>
                        </div>
                    </div>
                    <div className='case-item'>
                        <img src= "../../images/Paris.jpeg" alt=""/>
                        <div className="case-inner ">
                            <div className= "case-inner-content">
                                Paris day tour
                            </div>
                        </div>
                    </div>
                    <div className='case-item'>
                        <img src= "../../images/new_york.jpg" alt=""/>
                        <div className="case-inner ">
                            <div className= "case-inner-content">
                                New York day tour
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sights