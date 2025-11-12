import React, { useState } from 'react';
import './App.css'; 

// --- Data Structure ---
const navItems = [
  { name: 'Home', view: '#home' }, 
  { name: 'Projects', view: '#projects' }, 
  { name: 'Achievements', view: '#achievements' }, 
  { name: 'Sponsors', view: '#sponsors' }, 
  { name: 'Contact', view: '#contact' }, 
];

const contactDetails = {
    social: [
        { name: 'Instagram', url: 'https://www.instagram.com/srm.auv/?igsh=MTg5d2Zvb2U1ZTFraw%3D%3D', icon: '📷' },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/company/team-srmauv/', icon: '🔗' },
        { name: 'GitHub', url: 'https://github.com/srmauvsoftware', icon: '💻' },
        { name: 'Email', url: 'mailto:contact@srmauv.com', icon: '✉️' },
    ]
};

const achievementsData = [
    { title: "National Champions", detail: "Secured first place at NIOT (National Institute for Ocean Technology) SAVe competition held in Chennai in 2015.", year: "2015", category: "Competition" },
    { title: "International Representation", detail: "Sponsored by the Indian Government to participate in AUVSI’s international Robosub competition at San Diego, USA in 2015 to represent India.", year: "2015", category: "Sponsorship" },
    { title: "NVIDIA GPU Grant", detail: "Received NVIDIA GPU-grant sponsorship for vehicle development.", year: "2018", category: "Sponsorship" },
    { title: "ACMEE Exhibition Invitation", detail: "Team invited to exhibit vehicle at ACMEE 2018, 13th International Machine Tool Exhibition held at Chennai Trade Centre, Tamil Nadu.", year: "2018", category: "Exhibition" },
    { title: "Successful Fundraising", detail: "Raised over 111,000 INR in funds for building vehicle.", year: "2018", category: "Funding" },
    { title: "NIOT SAVe Selection", detail: "Selected among 15 AUV teams out of 22 across India to participate in NIOT SAVe 2019 competition.", year: "2019", category: "Competition" },
    { title: "IEEE Conference Presentation", detail: "Presented novel underwater 3D simulation framework at IEEE OES - Underwater Technology ‘19 conference in Kaohsiung, Taiwan.", year: "2019", category: "Research" },
];

// --- ZARNA TECHNICAL DATA ---
const vehicleSpecs = {
    name: 'ZARNA',
    components: [
        { key: "Processor", value: "NVIDIA Jetson TX1" },
        { key: "IMU Sensor", value: "Sparton AHRS-8 IMU Sensor" },
        { key: "Cameras", value: "BlackFly S USB-3 Cameras" },
        { key: "Thrusters", value: "Blue Robotics T-200 Thrusters" },
        { key: "OS/Software", value: "ROS Melodic / Ubuntu 18.04" },
    ]
};

// --- SPONSOR DATA ---
const sponsorsData = [
    
    { name: 'SRM IST', logoUrl: '/assets/Srmist_logo.png', category: 'Academic Partner' },
    { name: 'Blue Robotics', logoUrl: '/assets/blue_robotics.png', category: 'Component Supplier' },
    { name: 'Anekonnect', logoUrl: 'assets/logo_anekonnect.png', category: 'Funding' },
    { name: 'NVIDIA', logoUrl: '/assets/nvidia_logo.jpg', category: 'Tech Partner' },
    { name: 'SRM Innovation and Incubation Centre', logoUrl: '/assets/srm_iic.png', category: 'Academic Partner' },
    { name: 'NIOT', logoUrl: '/assets/niot_logo.jpg', category: 'Academic Partner' },
];


// --- Sub-Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <header className="nav-bar">
      <div className="nav-content">
        {/* --- BRAND LOGO: Now in Navbar --- */}
        <a href="#home" className="nav-brand-logo-container" onClick={() => setIsOpen(false)}>
            <img src="/assets/logo.png" alt="SRM AUV Logo" className="nav-brand-logo" /> 
        </a>
        <nav className={`nav-links-desktop ${isOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <a 
              key={item.name}
              href={item.view} 
              onClick={() => setIsOpen(false)}
              className={`nav-link`} 
            >
              {item.name}
            </a>
          ))}
        </nav>
        <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✖' : '☰'}
        </button>
      </div>
      {isOpen && (
        <nav className="nav-links-mobile">
          {navItems.map((item) => (
            <a 
              key={item.name}
              href={item.view} 
              onClick={() => setIsOpen(false)}
              className={`nav-link-mobile`} 
            >
              {item.name}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

const HomeView = () => (
  <main className="main-content" id="home"> 
    <div className="hero-section">
      
      <h2 className="hero-title">SRM Autonomous Underwater Vehicle</h2>
      <a href="#projects" className="btn-primary">View ZARNA</a>
    </div>
    
    {/* --- ABOUT SECTION --- */}
    <section className="about-section">
      <p className="about-text">
        SRMAUV is an undergraduate student team of SRM Institute of Science and Technology,
        founded in the year 2013. This team of underwater robotics enthusiasts share our common
        interest in designing Autonomous Underwater Vehicles. It comprises of members of several
        domains including Computer Science, Electrical and Mechatronics. Currently building the fifth
        iteration of the vehicle (ZARNA), the team works around the year doing research in
        underwater robotics, prototyping models, and testing the vehicle. The team participates in
        various national and international competitions such as Robosub, NIOT SAVe and SAUVC.
      </p>
    </section>
    
    <div className="feature-grid">
      <div className="feature-card">
        <span className="feature-icon"></span>
        <h3 className="feature-card-title">Innovation</h3>
        <p>Developing proprietary software and hardware solutions.</p>
      </div>
      <div className="feature-card">
        <span className="feature-icon"></span>
        <h3 className="feature-card-title">Competition</h3>
        <p>Placing in international AUV competitions like SAUVC and Robosub.</p>
      </div>
    </div>
  </main>
);

const ProjectsView = () => (
    <div className="main-content projects-view" id="projects"> 
        <h2 className="section-title">Vehicle: ZARNA</h2>
        <p className="zarna-description">
            ZARNA is the flagship AUV, designed and built entirely by the SRM AUV student team. It represents the pinnacle of our mechanical, electrical, and software engineering capabilities.
        </p>

        {/* --- Image Gallery Section (Static Images Restored) --- */}
        <section className="image-gallery-section">
            <h3 className="gallery-title">Visual Showcase</h3>
             <div className="image-placeholder main-image-placeholder">
                <img src="/assets/ZARNA.jpg" alt="ZARNA AUV Main View" className="main-vehicle-image" />
             </div>
             <div className="image-gallery-grid">
                <img src="/assets/ZARNA1.jpg" alt="ZARNA Electronics Bay" className="gallery-image" />
                <img src="/assets/ZARNA2.jpg" alt="ZARNA Thruster Array" className="gallery-image" />
             </div>
        </section>


        {/* --- Vehicle Specs Section --- */}
        <section className="tech-section">
            <h3 className="tech-subtitle">ZARNA Technical Specifications</h3>
            <div className="specs-grid">
                {vehicleSpecs.components.map((spec, index) => (
                    <div key={index} className="spec-item">
                        <span className="spec-key">{spec.key}</span>
                        <span className="spec-value">{spec.value}</span>
                    </div>
                ))}
            </div>
        </section>
    </div>
);

// --- ACHIEVEMENTS VIEW ---
const AchievementsView = () => (
    <div className="main-content achievements-view" id="achievements"> 
        <h2 className="section-title">Achievements</h2>
        <div className="achievement-list">
            {achievementsData.map((achievement, index) => (
                <div key={index} className="achievement-card">
                    <span className="achievement-year">{achievement.year}</span>
                    <div className="achievement-content">
                        <h3 className="achievement-title">{achievement.title}</h3>
                        <p className="achievement-detail">{achievement.detail}</p>
                        <span className="achievement-category">{achievement.category}</span>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

// --- SPONSORS VIEW ---
const SponsorsView = () => (
    <div className="main-content sponsors-view" id="sponsors">
        <h2 className="section-title">Sponsors & Partners</h2>
        <p className="sponsors-intro">
            We are proud to collaborate with leading academic, technology, and government organizations that make our research and competition possible.
        </p>
        <div className="sponsors-grid">
            {sponsorsData.map((sponsor, index) => (
                <div key={index} className="sponsor-card">
                    {/* The logo URL from sponsorsData is used here */}
                    <img src={sponsor.logoUrl} alt={sponsor.name} className="sponsor-logo" />
                    <p className="sponsor-name">{sponsor.name}</p>
                    <span className="sponsor-category">{sponsor.category}</span>
                </div>
            ))}
        </div>
        <div className="sponsors-callout">
            Interested in powering the next generation of underwater robotics?
            <a href="#contact" className="btn-secondary-inline">Become a Sponsor</a>
        </div>
    </div>
);

// --- CONTACT VIEW ---
const ContactView = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you shortly.');
    };

    return (
        <div className="main-content contact-page-container" id="contact"> 
            <h2 className="section-title">Get in Touch</h2>
            <div className="contact-grid">
                
                {/* --- CONTACT DETAILS SECTION --- */}
                <div className="contact-details">
                    <h3 className="details-title">Direct Contact & Socials</h3>
                    <p className="details-description">
                        For specific inquiries, sponsorship, or following our latest updates, use the channels below.
                    </p>
                    
                    {/* Social Links (Now includes Email) */}
                    <div className="social-links-container">
                        {contactDetails.social.map(link => (
                            <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="social-link">
                                <span className="social-icon">{link.icon}</span> 
                                <span className="social-name">{link.name}</span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* --- CONTACT FORM SECTION --- */}
                <div className="contact-form-wrapper">
                    <form onSubmit={handleSubmit} className="contact-form">
                        <h3 className="form-title">Send a Message</h3>
                        <div className="form-group">
                            <label htmlFor="name">Your Name</label>
                            <input type="text" id="name" className="form-input" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Your Email</label>
                            <input type="email" id="email" className="form-input" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" className="form-textarea" required />
                        </div>
                        <button type="submit" className="btn-secondary">Send Message</button>
                    </form>
                </div>

            </div>
        </div>
    );
};


const App = () => {
  
  return (
    <div className="app-container">
      <Navbar /> 
      
      {/* Render all views sequentially for scrolling */}
      <HomeView />
      <ProjectsView />
      <AchievementsView />
      <SponsorsView /> 
      <ContactView />

      <footer className="main-footer">
        &copy; {new Date().getFullYear()} SRM AUV Team.
      </footer>
    </div>
  );
};

export default App;