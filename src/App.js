import "./App.scss";
import { SocialMediaIcons } from "./components/SocialMediaIcons";
import { ReactComponent as HeroFlowerSVG } from "./assets/hero-flower.svg";
function App() {
  return (
    <div className="App">
      {/* Hero */}
      <div className="hero">
        <div className="header">
          <div className="signature-logo">Saasha Pina</div>
          <div className="social-icons">
            <SocialMediaIcons />
          </div>
        </div>
        <div className="hero-content">
          <div className="hero-text">
            Hi, I’m SaaSha. <br />
            Front-End Developer & Designer.
          </div>
          <div className="hero-flower-svg">
            <HeroFlowerSVG />
          </div>

          <div className="hero-flower-mask" />
          <div />
        </div>
      </div>

      {/* About Me */}
      <div className="about-me">
        <div className="about-me-text">
          <div className="about-me-title">about me</div>
          <div className="about-me-description">
            I'm a Boston / remote based front-end developer who specializes in
            building (and occasionally designing) exceptional web and mobile
            experiences. <br /> <br />
            When I’m not coding you can find me in the Taekwondo dojang
            flipping. teaching a yoga class, or packing my life up to RV the
            country with my husband.
          </div>
        </div>
        <img className="about-me-photo" src="photo" alt="profile-pic" />
      </div>
    </div>
  );
}

export default App;
