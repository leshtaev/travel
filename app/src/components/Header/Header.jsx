import './Header.scss';

function Header() {
    return (
        <header>
            <div className="container flex-container">
                <div className="contacts">
                    <span>
                        <i className="fas fa-phone-alt"></i>
                        123-123456789
                    </span>
                    <span>
                        <i className="far fa-envelope"></i>
                        info@travel.com
                    </span>
                </div>
                <div className="nav-extra">
                    <a href="" className="nav-link">FAQ</a>
                    <a href="" className="nav-link">Sitemap</a>
                    <a href="" className="nav-link">Terms of Use</a>
                    <a href="" className="nav-link">Language</a>
                    <a href="" className="nav-link"><i className="fas fa-lock"></i> Login/Register</a>
                </div>
            </div>
        </header>
    )
}

export default Header;