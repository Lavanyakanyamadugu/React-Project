import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/services" component={ServicesPage} />
          <Route path="/contact" component={ContactPage} />  
          <Route path="/about" component={AboutPage} />
          <Route path="/blog" component={BlogPage} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

// HomePage.js

import React from 'react';

function HomePage() {
  return (
    <div className="home-page">
      <HeroSection />
      
      <ServicesSummary />

      <TestimonialsCarousel />

      <CtaSection />
    </div>
  );
}

export default HomePage;

// ServicesPage.js

import React from 'react';

function ServicesPage() {
  return (
    <div className="services-page">
      <h1>Our Services</h1>

      <ServiceCard 
        title="Web Design"
        description="We can design and develop a custom website for your business."
      />

      <ServiceCard
        title="Digital Marketing"
        description="We offer digital marketing services like SEO, PPC, and social media marketing."
      />

      <ServiceCard
        title="Graphic Design" 
        description="From logos to marketing materials, we can design graphics to strengthen your brand."
      />
    </div>
  );
}

export default ServicesPage;

// ContactPage.js

import React from 'react';

function ContactPage() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Submit form data
  }

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>

      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
