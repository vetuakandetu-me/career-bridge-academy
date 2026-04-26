import "./App.css";

function App() {
  return (
    <div className="app">
      
      {/* NAVBAR */}
      <nav className="navbar">
        <img src="/cba-logo.png" className="logo" />
        <div className="nav-links">
          <a href="#">Program</a>
          <a href="#">Benefits</a>
          <a href="#">Process</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-text">
          <h1>Start Your Caregiver Career in Germany</h1>
          <p>
            Learn practical German, gain confidence, and prepare for real
            caregiving opportunities abroad.
          </p>

          <div className="buttons">
            <button className="primary">Apply Now →</button>
            <button className="whatsapp">Chat on WhatsApp</button>
          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1584515933487-779824d29309"
          className="hero-img"
        />
      </section>

      {/* HOW YOU LEARN */}
      <section className="dark-section">
        <h2>How You'll Learn</h2>

        <div className="cards">
          <div className="card">
            <h3>AI Agent Training</h3>
            <p>Personalised learning anytime, anywhere.</p>
          </div>

          <div className="card">
            <h3>Live Sessions</h3>
            <p>Interactive group sessions with experts.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Take the First Step Toward Your Future</h2>
        <p>Apply now or chat with us to get started.</p>

        <div className="buttons">
          <button className="primary">Apply Now →</button>
          <button className="whatsapp">Chat on WhatsApp</button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 Career Bridge Academy</p>
      </footer>
    </div>
  );
}

export default App;
