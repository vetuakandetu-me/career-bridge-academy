import "./App.css";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <img src="/cba-logo.png" alt="Career Bridge Academy" className="logo" />
        <div className="navLinks">
          <a href="#program">Program</a>
          <a href="#benefits">Benefits</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="heroText">
          <h1>Start Your Caregiver Career in Germany</h1>
          <p>
            Learn practical German, gain confidence, and prepare for real
            caregiving opportunities abroad. Career Bridge Academy equips you
            with everything you need to succeed.
          </p>

          <div className="heroButtons">
            <a href="#apply" className="btn primary">Apply Now →</a>
            <a href="https://wa.me/" className="btn whatsapp">Chat on WhatsApp</a>
          </div>

          <div className="heroBadges">
            <span>✓ Structured Program</span>
            <span>✓ Expert Guidance</span>
          </div>
        </div>

        <div className="heroImage">
          <img
            src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=80"
            alt="Caregiver assisting elderly patient"
          />
        </div>
      </section>

      <section id="program" className="darkSection">
        <h2>How You'll Learn</h2>
        <div className="learnCards">
          <div className="darkCard">
            <div className="iconBox">⚙</div>
            <h3>AI Agent Training</h3>
            <p>
              Access personalised lessons and practice sessions anytime. Learn at
              your own pace with guided support.
            </p>
            <ul>
              <li>Available 24/7</li>
              <li>Personalised learning path</li>
              <li>Instant feedback</li>
            </ul>
          </div>

          <div className="darkCard outline">
            <div className="iconBox">📅</div>
            <h3>Live Sessions</h3>
            <p>
              Join interactive group sessions, practise real conversations, ask
              questions, and connect with other candidates.
            </p>
            <ul>
              <li>2 sessions per week</li>
              <li>Expert instructors</li>
              <li>Group practice and support</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="benefits" className="section">
        <h2>Many Want to Work Abroad — Few Are Truly Prepared</h2>
        <p className="sectionIntro">
          The gap between aspiration and readiness is real. We bridge that gap.
        </p>

        <div className="threeCards">
          <div className="lightCard">
            <span>🌍</span>
            <h3>Language Barrier</h3>
            <p>
              Speaking German with confidence is challenging. You need practical,
              real-world communication skills.
            </p>
          </div>

          <div className="lightCard">
            <span>♡</span>
            <h3>Lack of Confidence</h3>
            <p>
              Without preparation, candidates may feel uncertain about patient
              interactions and workplace expectations.
            </p>
          </div>

          <div className="lightCard">
            <span>⚡</span>
            <h3>Unprepared for Reality</h3>
            <p>
              Caregiving abroad requires cultural awareness, role understanding,
              and practical preparation.
            </p>
          </div>
        </div>

        <div className="blueBanner">
          <h3>Career Bridge Academy Prepares You Step-by-Step</h3>
          <p>
            Our programme combines language practice, cultural preparation, and
            practical caregiver readiness for candidates pursuing opportunities
            in Germany.
          </p>
        </div>
      </section>

      <section className="section softBg">
        <h2>What You Will Learn</h2>
        <p className="sectionIntro">
          A comprehensive curriculum designed for real-world success.
        </p>

        <div className="curriculumGrid">
          <div>📖 <strong>Everyday German Communication</strong><br />Practical conversations for daily life and work.</div>
          <div>♡ <strong>Caregiving-Specific Vocabulary</strong><br />Care and medical-related German terms.</div>
          <div>👥 <strong>Patient Interaction Scenarios</strong><br />Practise respectful conversations with patients.</div>
          <div>🌍 <strong>Cultural & Workplace Expectations</strong><br />Understand German workplace norms.</div>
          <div>⚡ <strong>Confidence in Speaking</strong><br />Build fluency through regular speaking practice.</div>
          <div>✓ <strong>Practical Caregiving Skills</strong><br />Prepare for real caregiver responsibilities.</div>
        </div>
      </section>

      <section id="process" className="section">
        <h2>How the Program Works</h2>
        <p className="sectionIntro">Three strategic phases to prepare you for success.</p>

        <div className="processGrid">
          <div className="processCard">
            <span>1</span>
            <h3>Learn German</h3>
            <p>Structured lessons covering everyday communication and care vocabulary.</p>
          </div>
          <div className="processCard">
            <span>2</span>
            <h3>Practice Speaking</h3>
            <p>Daily speaking practice with real-life scenarios and patient simulations.</p>
          </div>
          <div className="processCard">
            <span>3</span>
            <h3>Prepare for Roles</h3>
            <p>Guidance for caregiving roles abroad, workplace culture, and readiness.</p>
          </div>
        </div>
      </section>

      <section className="imageSection">
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80"
          alt="Online learning"
        />
        <div>
          <h2>This Is More Than a Language Course</h2>
          <p>
            Career Bridge Academy is a career preparation programme built
            specifically for caregivers pursuing opportunities in Germany.
          </p>
          <ul>
            <li>Built specifically for caregivers</li>
            <li>Focus on speaking, not just grammar</li>
            <li>Real-life caregiving conversations</li>
            <li>Practical preparation for working in Germany</li>
          </ul>
        </div>
      </section>

      <section className="section softBg">
        <h2>Who This Is For</h2>
        <p className="sectionIntro">
          Designed for serious candidates ready to invest in their future.
        </p>

        <div className="whoGrid">
          <div>✓ Individuals serious about working abroad</div>
          <div>✓ People willing to commit to learning German</div>
          <div>✓ Those interested in caregiving roles in Germany</div>
          <div>✓ Beginners welcome — no prior experience needed</div>
          <div>✓ Motivated people seeking career growth</div>
          <div>✓ Candidates ready for structured training</div>
        </div>
      </section>

      <section id="apply" className="section">
        <h2>Simple Application Process</h2>
        <p className="sectionIntro">
          No complicated systems. Just straightforward steps and personal guidance.
        </p>

        <div className="timeline">
          <div><span>1</span><h3>Apply Online</h3><p>Fill out a simple application form.</p></div>
          <div><span>2</span><h3>Get Reviewed</h3><p>We review your application and readiness.</p></div>
          <div><span>3</span><h3>Receive Next Steps</h3><p>Get guidance on your training pathway.</p></div>
          <div><span>4</span><h3>Start Your Training</h3><p>Begin your AI-guided lessons and live sessions.</p></div>
        </div>
      </section>

      <section id="contact" className="finalCta">
        <h2>Take the First Step Toward Your Future</h2>
        <p>
          Your caregiving career in Germany starts here. Apply now or chat with
          us on WhatsApp to learn more.
        </p>
        <div className="heroButtons center">
          <a href="#apply" className="btn gold">Apply Now →</a>
          <a href="https://wa.me/" className="btn whatsapp">Chat on WhatsApp</a>
        </div>
      </section>

      <footer className="footer">
        <div>
          <img src="/cba-logo.png" alt="Career Bridge Academy" />
          <p>
            Preparing individuals for global caregiving opportunities through
            AI-powered language training and practical preparation.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <a href="#program">Program</a>
          <a href="#benefits">Benefits</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </div>

        <div>
          <h3>Get in Touch</h3>
          <p>WhatsApp<br /><strong>Chat with us</strong></p>
          <p>Email<br /><strong>info@careerbridgeacademy.com</strong></p>
        </div>
      </footer>
    </div>
  );
}

export default App;
