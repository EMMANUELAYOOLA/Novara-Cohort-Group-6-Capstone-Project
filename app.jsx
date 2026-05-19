import React, { useState, useEffect, useRef } from 'react';


const Header = () => (
  <header className="site-header">
    <div className="logo-area">
      <svg className="logo-icon" viewBox="0 0 24 24" width="30" height="30">
        <circle cx="12" cy="12" r="6" fill="none" stroke="currentColor" strokeWidth="2"/>
        <ellipse cx="12" cy="12" rx="9" ry="3" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(-30 12 12)"/>
      </svg>
      <span className="logo-text">planet data</span>
    </div>
  </header>
);

// 2. Hero Component
const Hero = ({ onExploreClick, onContactClick }) => (
  <section className="hero-section">
    <div className="hero-container">
      <div className="hero-text-content">
        <h1>Explore Our Solar System Through Data</h1>
        <p>
          Understand the planets not just by name, but by measurable facts. 
          From size and mass to gravity and density, this page breaks down the solar 
          system in a clear, data-driven way.
        </p>
        <div className="cta-buttons">
          <button onClick={onExploreClick} className="btn-primary">Explore the Data</button>
          <button onClick={onContactClick} className="btn-secondary">Contact Us</button>
        </div>
      </div>
      <div className="hero-graphic">
        <div className="earth-sphere"></div>
      </div>
    </div>
  </section>
);

// 3. Video Showcase Component (Uses Native HTML5 video tag as required)
const VideoShowcase = () => (
  <section className="video-section">
    <div className="video-container">
      <div className="video-wrapper">
        <video 
          src="https://assets.mixkit.co/videos/preview/mixkit-stars-in-space-background-1611-large.mp4" 
          autoPlay 
          muted 
          loop 
          playsInline
          className="showcase-video"
        />
        <div className="play-overlay-icon">▶</div>
      </div>
      <div className="video-text-wrapper">
        <h2>How Planetary Data Helps Us Understand Space</h2>
        <p>
          Planetary science goes beyond images. Comparing <span className="highlight-blue">mass, diameter, gravity</span>, 
          and <span className="highlight-blue">density</span>, we gain insight into how planets form, behave, and interact within the solar system.
        </p>
      </div>
    </div>
  </section>
);

const PlanetGrid = ({ forwardRef }) => {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    const sampleData = [
      { "planet": "Mercury", "distanceFromSun": 57.9, "image": "https://anurella.github.io/images/planets/mercury.webp" },
      { "planet": "Venus", "distanceFromSun": 108.2, "image": "https://anurella.github.io/images/venus.webp" },
      { "planet": "Earth", "distanceFromSun": 149.6, "image": "https://anurella.github.io/images/planets/earth.jpg" },
      { "planet": "Mars", "distanceFromSun": 227.9, "image": "https://anurella.github.io/images/planets/mars.webp" },
      { "planet": "Jupiter", "distanceFromSun": 778.6, "image": "https://anurella.github.io/images/planets/jupiter.webp" },
      { "planet": "Saturn", "distanceFromSun": 1433.5, "image": "https://anurella.github.io/images/planets/saturn.webp" },
      { "planet": "Uranus", "distanceFromSun": 2872.5, "image": "https://anurella.github.io/images/planets/uranus.webp" },
      { "planet": "Neptune", "distanceFromSun": 4495.1, "image": "https://anurella.github.io/images/planets/neptune.webp" },
      { "planet": "Pluto", "distanceFromSun": 5906.4, "image": "https://anurella.github.io/images/planets/pluto.webp" }
    ];

    setPlanets(sampleData);
    setLoading(false);
  }, []);

  if (loading) return <div className="status-msg">Loading planetary data...</div>;
  if (error) return <div className="status-msg error">Error loading data: {error}</div>;

  return (
    <section ref={forwardRef} className="grid-section">
      <div className="grid-header">
        <h2>Visualizing the Differences Between Planets</h2>
        <p>Each planet in our solar system has unique physical characteristics. Visual comparisons help highlight how vastly different terrestrial planets are from gas giants and ice giants.</p>
      </div>
      <div className="planets-grid-container">
        {planets.map((p, index) => (
          <figure key={index} className="planet-card">
            <div className="card-image-crop">
              <img src={p.image} alt={p.planet} onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=500'; }} />
            </div>
            <figcaption className="card-info">
              <h3>{p.planet}</h3>
              <p>Distance from Sun: <strong>{p.distanceFromSun} million km</strong></p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

const DataTable = () => (
  <section className="table-section">
    <h2>Planetary Facts at a Glance</h2>
    <p className="table-subtitle">Below is a comparative table of major planets in our solar system. The data highlights key physical properties used by astronomers and researchers worldwide.</p>
    <p className="table-source">Data about the planets of our solar system (Planetary facts taken from NASA)</p>
    
    <div className="table-responsive-container">
      <table className="nasa-data-table">
        <thead>
          <tr>
            <th colSpan="2">Classification</th>
            <th>Name</th>
            <th>Mass (10^24kg)</th>
            <th>Diameter (km)</th>
            <th>Density (kg/m³)</th>
            <th>Gravity (m/s²)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="2" className="row-group standard-bg">Terrestrial Planets</td>
            <td>Mercury</td>
            <td>0.330</td>
            <td>4,879</td>
            <td>5427</td>
            <td>3.7</td>
          </tr>
          <tr>
            <td colSpan="2" className="row-group hidden-cell"></td>
            <td>Venus</td>
            <td>4.87</td>
            <td>12,104</td>
            <td>5243</td>
            <td>8.9</td>
          </tr>
          <tr>
            <td colSpan="2" className="row-group hidden-cell"></td>
            <td>Earth</td>
            <td>5.97</td>
            <td>12,756</td>
            <td>5514</td>
            <td>9.8</td>
          </tr>
          <tr>
            <td colSpan="2" className="row-group hidden-cell"></td>
            <td>Mars</td>
            <td>0.642</td>
            <td>6,792</td>
            <td>3933</td>
            <td>3.7</td>
          </tr>
          
          <tr>
            <td rowspan="3" className="row-group group-parent nested-bg">Jovian Planets</td>
            <td className="row-group nested-bg">Gas Giants</td>
            <td>Jupiter</td>
            <td>1898</td>
            <td>142,984</td>
            <td>1326</td>
            <td>23.1</td>
          </tr>
          <tr>
            <td className="row-group hidden-cell"></td>
            <td>Saturn</td>
            <td>568</td>
            <td>120,536</td>
            <td>687</td>
            <td>9.0</td>
          </tr>
          
          <tr>
            <td className="row-group nested-bg">Ice Giants</td>
            <td>Uranus</td>
            <td>86.8</td>
            <td>51,118</td>
            <td>1271</td>
            <td>8.7</td>
          </tr>
          <tr>
            <td colSpan="2" className="row-group hidden-cell"></td>
            <td>Neptune</td>
            <td>102</td>
            <td>49,528</td>
            <td>1638</td>
            <td>11.0</td>
          </tr>
          
          <tr>
            <td colSpan="2" className="row-group standard-bg">Dwarf Planets</td>
            <td>Pluto</td>
            <td>0.0130</td>
            <td>2,376</td>
            <td>2095</td>
            <td>0.7</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
);


const ContactForm = ({ forwardRef }) => {
  const [formData, setFormData] = useState({ fullName: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate endpoint post request
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000); 
    setFormData({ fullName: '', email: '', phone: '', message: '' });
  };

  return (
    <section ref={forwardRef} className="form-section">
      <h2>Have Questions About Planetary Science?</h2>
      <p>Interested in learning more about space, astronomy, or how planetary data is collected and analyzed? Reach out and we'll get back to you.</p>
      
      {submitted && <div className="success-banner">Thank you! Your inquiry has been submitted successfully.</div>}
      
      <form onSubmit={handleSubmit} className="contact-form-element">
        <div className="form-grid">
          <div className="field-block">
            <label>Full Name <span className="req">*</span></label>
            <input 
              type="text" 
              required 
              placeholder="Full name" 
              value={formData.fullName} 
              onChange={(e) => setFormData({...formData, fullName: e.target.value})}
            />
          </div>
          <div className="field-block">
            <label>Email <span className="req">*</span></label>
            <input 
              type="email" 
              required 
              placeholder="example@example.com" 
              value={formData.email} 
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
          <div className="field-block">
            <label>Phone Number <span className="req">*</span></label>
            <input 
              type="tel" 
              required 
              placeholder="Please enter a valid phone number" 
              value={formData.phone} 
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>
          <div className="field-block">
            <label>Message <span className="req">*</span></label>
            <textarea 
              required 
              rows="4" 
              placeholder="Enter your message" 
              maxLength="100"
              value={formData.message} 
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            />
            <span className="char-count">100 characters max</span>
          </div>
        </div>
        <button type="submit" className="btn-submit">Submit <span>›</span></button>
      </form>
    </section>
  );
};


const Footer = () => (
  <footer className="site-footer">
    <div className="footer-top">
      <h3>About</h3>
      <p>We are a dedicated group of developers exploring the architectural frameworks of front-end development, data fetching parameters, and structured design execution.</p>
    </div>
    <hr className="footer-divider"/>
    <div className="footer-bottom">
      <p>©2026 Design by Amaka & Ifeoma A. Built by OurGroup. All rights reserved.</p>
      <div className="footer-links">
        <a href="https://tsacademyonline.com/" target="_blank" rel="noreferrer">TSAcademy</a>
        <a href="https://github.com" target="_blank" rel="noreferrer" className="group-repo-link">Group Repository</a>
      </div>
    </div>
  </footer>
);


export default function App() {
  const planetSectionRef = useRef(null);
  const contactSectionRef = useRef(null);

  const scrollToSection = (elementRef) => {
    elementRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app-canvas">
      <Header />
      <main>
        <Hero 
          onExploreClick={() => scrollToSection(planetSectionRef)} 
          onContactClick={() => scrollToSection(contactSectionRef)} 
        />
        <VideoShowcase />
        <PlanetGrid forwardRef={planetSectionRef} />
        <DataTable />
        <ContactForm forwardRef={contactSectionRef} />
      </main>
      <Footer />
    </div>
  );
}