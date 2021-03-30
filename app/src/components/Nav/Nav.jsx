import './Nav.scss';

function Nav() {
    return (
        <div className="logo-and-nav">
            <div className="container flex-container">
                <div className="logo flex-container" >
                    <span className="span_l">T</span>
                    <span className="span_l color ">N</span>
                    <span className="span_l">T</span>
                </div>
                <nav className="flex-container">
                    <a href="" className="nav-link">Home</a>
                    <a href="" className="nav-link">About us</a>
                    <a href="" className="nav-link">Routes</a>
                    <a href="" className="nav-link">Sights</a>
                    <a href="" className="nav-link">Blog</a>
                    <a href="" className="nav-link">Sigh in</a>
                </nav>
            </div>
        </div>
    )
}

export default Nav;