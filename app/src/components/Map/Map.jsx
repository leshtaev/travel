import './Map.scss';


function Map() {
    return (
        <div id='mapbox' className='mapbox'>
            <div id="map"></div>
            <div id="legend"></div>
            <div>
                <img src="../../images/close_icon.png" alt="" className="close_second" />
            </div>  
        </div>
    )
}

export default Map