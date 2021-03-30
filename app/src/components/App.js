import './App.scss';
import About from './About/About';
import Auth from './Auth/Auth';
import Blog from './Blog/Blog';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import Map from './Map/Map';
import Nav from './Nav/Nav';
import Routes from './Routes/Routes';
import Sights from './Sights/Sights';
import Sign from './Sign/Sign';
import Video from './Video/Video';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <main>
        <Hero />
        <About />
        <Routes />
        <Sights />
        <Video />
        <Blog />
        <Auth />
      </main>
      <Footer />
      <Sign />
      <script type="module" src="./js/main.js"></script>
    </div>
  );
}

export default App;
