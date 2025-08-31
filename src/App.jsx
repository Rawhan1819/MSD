import React, { useEffect, useState } from 'react';

const App = () => {
  const [navbarBg, setNavbarBg] = useState('linear-gradient(135deg, #667eea 0%, #764ba2 100%)');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setNavbarBg('linear-gradient(135deg, rgba(102,126,234,0.95) 0%, rgba(118,75,162,0.95) 100%)');
      } else {
        setNavbarBg('linear-gradient(135deg, #667eea 0%, #764ba2 100%)');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Animate elements on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    // Floating animation for hero content
    const heroContent = document.querySelector('.hero-content');
    let position = 0;
    const floatInterval = setInterval(() => {
      position += 0.01;
      if (heroContent) {
        heroContent.style.transform = `translateY(${Math.sin(position) * 5}px)`;
      }
    }, 50);

    return () => {
      observer.disconnect();
      clearInterval(floatInterval);
    };
  }, []);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleCategoryClick = (category) => {
    alert(`Starting ${category} quizzes! This would redirect to the quiz selection page.`);
  };

  return (
    <div style={{
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      lineHeight: 1.6,
      color: '#333',
      overflowX: 'hidden'
    }}>
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333;
          overflow-x: hidden;
        }

        .navbar {
          position: sticky;
          top: 0;
          backdrop-filter: blur(10px);
          z-index: 1000;
          padding: 1rem 0;
          box-shadow: 0 2px 20px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 2rem;
        }

        .logo {
          font-size: 2rem;
          font-weight: bold;
          color: white;
          text-decoration: none;
          background: linear-gradient(45deg, #fff, #f0f8ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .nav-links {
          display: flex;
          list-style: none;
          gap: 2rem;
        }

        .nav-links a {
          color: white;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          padding: 0.5rem 1rem;
          border-radius: 25px;
          position: relative;
          overflow: hidden;
        }

        .nav-links a:hover {
          background: rgba(255,255,255,0.2);
          transform: translateY(-2px);
        }

        .auth-buttons {
          display: flex;
          gap: 1rem;
        }

        .btn-primary {
          background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
          color: white;
          padding: 0.7rem 1.5rem;
          border: none;
          border-radius: 25px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(255,107,107,0.3);
          cursor: pointer;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255,107,107,0.4);
        }

        .btn-secondary {
          background: transparent;
          color: white;
          padding: 0.7rem 1.5rem;
          border: 2px solid white;
          border-radius: 25px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .btn-secondary:hover {
          background: white;
          color: #667eea;
          transform: translateY(-2px);
        }

        .hero {
          background: linear-gradient(135deg, #eef0f5 0%, #e2dfe6 100%);
          min-height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: rgb(19, 1, 1);
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }

        .hero-content {
          max-width: 800px;
          padding: 2rem;
          position: relative;
          z-index: 2;
        }

        .hero h1 {
          font-size: 4rem;
          margin-bottom: 1rem;
          font-weight: 800;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
          animation: fadeInUp 1s ease;
        }

        .hero p {
          font-size: 1.3rem;
          margin-bottom: 2rem;
          opacity: 0.9;
          animation: fadeInUp 1s ease 0.2s both;
        }

        .hero-cta {
          animation: fadeInUp 1s ease 0.4s both;
        }

        .quotes-section {
          padding: 5rem 0;
          background: linear-gradient(45deg, #f8f9fa, #e9ecef);
          position: relative;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .quotes-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .quote-card {
          background: white;
          padding: 2rem;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .quote-card::before {
          content: '"';
          position: absolute;
          top: -10px;
          left: 20px;
          font-size: 8rem;
          color: #667eea;
          opacity: 0.1;
          font-family: Georgia, serif;
        }

        .quote-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }

        .quote-text {
          font-size: 1.1rem;
          font-style: italic;
          color: #555;
          margin-bottom: 1rem;
          position: relative;
          z-index: 1;
        }

        .quote-author {
          font-weight: 600;
          color: #667eea;
          text-align: right;
        }

        .categories-section {
          padding: 5rem 0;
          background: white;
        }

        .section-title {
          text-align: center;
          font-size: 3rem;
          margin-bottom: 1rem;
          color: #333;
          position: relative;
        }

        .section-subtitle {
          text-align: center;
          font-size: 1.2rem;
          color: #666;
          margin-bottom: 3rem;
        }

        .categories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .category-card {
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
          padding: 2rem;
          border-radius: 20px;
          text-align: center;
          transition: all 0.4s ease;
          border: 2px solid transparent;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .category-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          transition: left 0.5s;
        }

        .category-card:hover::before {
          left: 100%;
        }

        .category-card:hover {
          transform: translateY(-10px) scale(1.02);
          border-color: #667eea;
          box-shadow: 0 20px 40px rgba(102,126,234,0.2);
        }

        .category-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          display: block;
        }

        .category-title {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: #333;
          font-weight: 700;
        }

        .category-description {
          color: #666;
          margin-bottom: 1.5rem;
        }

        .quiz-count {
          background: linear-gradient(45deg, #667eea, #764ba2);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 600;
        }

        .quiz-section {
          padding: 5rem 0;
          background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
          color: white;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .feature-card {
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
          padding: 2rem;
          border-radius: 20px;
          text-align: center;
          transition: all 0.3s ease;
          border: 1px solid rgba(255,255,255,0.2);
        }

        .feature-card:hover {
          transform: translateY(-5px);
          background: rgba(255,255,255,0.2);
        }

        .feature-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          display: block;
        }

        .footer {
          background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
          color: white;
          padding: 3rem 0 1rem;
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .footer-section h3 {
          margin-bottom: 1rem;
          color: #ecf0f1;
        }

        .footer-section p, .footer-section a {
          color: #bdc3c7;
          text-decoration: none;
          margin-bottom: 0.5rem;
          display: block;
          cursor: pointer;
        }

        .footer-section a:hover {
          color: #3498db;
        }

        .footer-bottom {
          border-top: 1px solid #34495e;
          padding-top: 1rem;
          text-align: center;
          color: #95a5a6;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }

        .animate-on-scroll.visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          
          .hero h1 {
            font-size: 2.5rem;
          }
          
          .categories-grid {
            grid-template-columns: 1fr;
          }
          
          .nav-container {
            padding: 0 1rem;
          }
        }
      `}</style>

      {/* Sticky Navigation */}
      <nav className="navbar" style={{ background: navbarBg }}>
        <div className="nav-container">
          <a href="#" className="logo">SkillForge</a>
          <ul className="nav-links">
            <li><a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')}>Home</a></li>
            <li><a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')}>About</a></li>
            <li><a href="#categories" onClick={(e) => handleSmoothScroll(e, '#categories')}>Categories</a></li>
            <li><a href="#quiz" onClick={(e) => handleSmoothScroll(e, '#quiz')}>Quiz</a></li>
            <li><a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')}>Contact</a></li>
          </ul>
          <div className="auth-buttons">
            <a href="#" className="btn-secondary">Login</a>
            <a href="#" className="btn-primary">Sign Up</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h1>Master Your Skills with SkillForge</h1>
          <p>Challenge yourself, compete with others, and climb the leaderboard in our comprehensive quiz platform</p>
          <div className="hero-cta">
            <a href="#categories" className="btn-primary" style={{ marginRight: '1rem', fontSize: '1.1rem', padding: '1rem 2rem' }}
               onClick={(e) => handleSmoothScroll(e, '#categories')}>Start Learning</a>
            <a href="#about" className="btn-secondary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}
               onClick={(e) => handleSmoothScroll(e, '#about')}>Learn More</a>
          </div>
        </div>
      </section>

      {/* Quotes Section */}
      <section className="quotes-section" id="about">
        <div className="container">
          <h2 className="section-title animate-on-scroll">Inspire Your Learning Journey</h2>
          <p className="section-subtitle animate-on-scroll">Discover what drives excellence in learning and skill development</p>
          
          <div className="quotes-grid">
            <div className="quote-card animate-on-scroll">
              <p className="quote-text">The expert in anything was once a beginner who refused to give up.</p>
              <p className="quote-author">- Helen Hayes</p>
            </div>
            
            <div className="quote-card animate-on-scroll">
              <p className="quote-text">Success is not final, failure is not fatal: it is the courage to continue that counts.</p>
              <p className="quote-author">- Winston Churchill</p>
            </div>
            
            <div className="quote-card animate-on-scroll">
              <p className="quote-text">The beautiful thing about learning is that no one can take it away from you.</p>
              <p className="quote-author">- B.B. King</p>
            </div>
            
            <div className="quote-card animate-on-scroll">
              <p className="quote-text">Knowledge is power, but knowledge applied is wisdom.</p>
              <p className="quote-author">- SkillForge Philosophy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section" id="categories">
        <div className="container">
          <h2 className="section-title animate-on-scroll">Explore Quiz Categories</h2>
          <p className="section-subtitle animate-on-scroll">Choose your domain and test your expertise across various subjects</p>
          
          <div className="categories-grid">
            <div className="category-card animate-on-scroll" onClick={() => handleCategoryClick('Mathematics')}>
              <span className="category-icon">🧮</span>
              <h3 className="category-title">Mathematics</h3>
              <p className="category-description">From basic arithmetic to advanced calculus and statistics</p>
              <span className="quiz-count">45+ Quizzes</span>
            </div>
            
            <div className="category-card animate-on-scroll" onClick={() => handleCategoryClick('Science')}>
              <span className="category-icon">🔬</span>
              <h3 className="category-title">Science</h3>
              <p className="category-description">Physics, Chemistry, Biology, and Environmental Science</p>
              <span className="quiz-count">60+ Quizzes</span>
            </div>
            
            <div className="category-card animate-on-scroll" onClick={() => handleCategoryClick('Technology')}>
              <span className="category-icon">💻</span>
              <h3 className="category-title">Technology</h3>
              <p className="category-description">Programming, Web Development, AI, and Computer Science</p>
              <span className="quiz-count">80+ Quizzes</span>
            </div>
            
            <div className="category-card animate-on-scroll" onClick={() => handleCategoryClick('History')}>
              <span className="category-icon">🏛️</span>
              <h3 className="category-title">History</h3>
              <p className="category-description">World History, Ancient Civilizations, and Modern Events</p>
              <span className="quiz-count">35+ Quizzes</span>
            </div>
            
            <div className="category-card animate-on-scroll" onClick={() => handleCategoryClick('Languages')}>
              <span className="category-icon">🗣️</span>
              <h3 className="category-title">Languages</h3>
              <p className="category-description">Grammar, Literature, and Communication Skills</p>
              <span className="quiz-count">50+ Quizzes</span>
            </div>
            
            <div className="category-card animate-on-scroll" onClick={() => handleCategoryClick('Arts & Culture')}>
              <span className="category-icon">🎨</span>
              <h3 className="category-title">Arts & Culture</h3>
              <p className="category-description">Fine Arts, Music, Literature, and Cultural Studies</p>
              <span className="quiz-count">30+ Quizzes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz Features Section */}
      <section className="quiz-section" id="quiz">
        <div className="container">
          <h2 className="section-title animate-on-scroll">Why Choose SkillForge?</h2>
          <p className="section-subtitle animate-on-scroll">Experience the future of skill assessment and learning</p>
          
          <div className="features-grid">
            <div className="feature-card animate-on-scroll">
              <span className="feature-icon">🏆</span>
              <h3>Global Leaderboard</h3>
              <p>Compete with learners worldwide and track your progress against the best</p>
            </div>
            
            <div className="feature-card animate-on-scroll">
              <span className="feature-icon">⚡</span>
              <h3>Instant Evaluation</h3>
              <p>Get immediate feedback and detailed explanations for every answer</p>
            </div>
            
            <div className="feature-card animate-on-scroll">
              <span className="feature-icon">📊</span>
              <h3>Performance Analytics</h3>
              <p>Deep insights into your strengths and areas for improvement</p>
            </div>
            
            <div className="feature-card animate-on-scroll">
              <span className="feature-icon">🎯</span>
              <h3>Adaptive Learning</h3>
              <p>AI-powered questions that adapt to your skill level and learning pace</p>
            </div>
            
            <div className="feature-card animate-on-scroll">
              <span className="feature-icon">🏅</span>
              <h3>Skill Badges</h3>
              <p>Earn recognition for your achievements and unlock new challenges</p>
            </div>
            
            <div className="feature-card animate-on-scroll">
              <span className="feature-icon">👥</span>
              <h3>Study Groups</h3>
              <p>Join collaborative learning communities and challenge your friends</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" id="contact">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>SkillForge</h3>
              <p>Empowering learners worldwide through innovative quiz-based education and skill assessment.</p>
              <p>Join thousands of users who are already mastering their skills with SkillForge.</p>
            </div>
            
            <div className="footer-section">
              <h3>Quick Links</h3>
              <a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')}>Home</a>
              <a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')}>About Us</a>
              <a href="#categories" onClick={(e) => handleSmoothScroll(e, '#categories')}>Categories</a>
              <a href="#quiz" onClick={(e) => handleSmoothScroll(e, '#quiz')}>Take Quiz</a>
              <a href="#">Leaderboard</a>
              <a href="#">Blog</a>
            </div>
            
            <div className="footer-section">
              <h3>Support</h3>
              <a href="#">FAQ</a>
              <a href="#">Help Center</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Feedback</a>
            </div>
            
            <div className="footer-section">
              <h3>Contact Us</h3>
              <p>📧 contact@skillforge.com</p>
              <p>📞 +1 (555) 123-4567</p>
              <p>💬 Live Chat: Available 24/7</p>
              <p>🏢 123 Learning Street, Education City, EC 12345</p>
              <p>🌐 Follow us on social media for updates</p>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2025 SkillForge. All rights reserved. | Built with passion for learning</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;