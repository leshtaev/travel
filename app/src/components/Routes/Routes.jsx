import './Routes.scss';

function Routes() {
    return (
        <section className="routes">
            <div className="container flex-container">
                <div className="heading flex-container" id="dark-heading">
                    <h1 className="title">
                        <span>top rou</span><span className="color">ts</span>
                    </h1>
                    <div className='block'></div>
                </div>
                <div className="routes-container flex-container">
                    <div className="route flex-container">
                        <img src="../../images/routes_spb.JPG" alt=""/>
                        <div className="route-info flex-container">
                            <div className="route-name">petrogradsky island</div>
                            <div className="route-desc flex-container">
                                <div className="action flex-container">
                                    <div className="route-rate">
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </div>
                                    <a href="">read more</a>                
                                </div>            
                            </div>
                        </div>
                    </div>
                    <div className="route">
                        <img src="../../images/routes_genova.JPG" alt=""/>
                        <div className="route-info flex-container">
                            <div className="route-name">via garibaldi</div>
                            <div className="route-desc flex-container">
                                <div className="action flex-container">
                                    <div className="route-rate">
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </div>
                                    <a href="">read more</a>                
                                </div>            
                            </div>
                        </div>
                    </div>
                    <div className="route">
                        <img src="../../images/routes_msc.JPG" alt=""/>
                        <div className="route-info flex-container">
                            <div className="route-name">patriarch ponds</div>
                            <div className="route-desc flex-container">
                                <div className="action flex-container">
                                    <div className="route-rate">
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </div>
                                    <a href="">read more</a>                
                                </div>            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Routes