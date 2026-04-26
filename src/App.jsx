import "./index.css";

export default function App() {
  return (
    <main>
      <section className="hero">
        <nav>
          <h2>Career Bridge Academy</h2>
          <a href="#apply">Apply Now</a>
        </nav>

        <div className="heroContent">
          <div>
            <p className="tag">German Caregiver Preparation</p>
            <h1>Prepare for caregiver opportunities in Germany.</h1>
            <p className="sub">
              We help compassionate, patient and empathetic candidates build the
              German language confidence needed for caregiver recruitment.
            </p>

            <div className="buttons">
              <a href="#apply" className="primary">Start Application</a>
              <a href="#programme" className="secondary">View Programme</a>
            </div>
          </div>

          <div className="card">
            <h3>Programme Fee</h3>
            <p className="price">N$2,975</p>
            <p>Guided preparation + speaking support.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
