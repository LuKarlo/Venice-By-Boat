import "@/app/css/home.css";
import NavBar from "./components/navbar";

export default function Home() {
  return (
    <main className="main-wrapper">
      <div className="hero-container">
        <NavBar />
        
        <div className="overlay">
          <div className="hero-content">
            <div className="text-section">
              <h1 className="main-title permanent-marker-regular">
                VENEZIA <br /> 
                <span className="evidence">IN BARCA</span>
              </h1>
              
              <div className="brush-subtitle dark">
                <p>VIVI LA CITTÀ PIÙ BELLA DEL MONDO</p>
              </div>
              
              <div className="brush-subtitle yellow">
                <p>DALL'ACQUA</p>
              </div>
              
              <div className="cta-group">
                <button className="btn-tour">
                  SCOPRI I TOUR <span className="arrow">→</span>
                </button>
                <button className="btn-video" style={{display: "none"}}>
                  <div className="play-circle">▶</div>
                  <span>GUARDA IL VIDEO</span>
                </button>
              </div>
            </div>

            <div className="badge-container">
              <div className="badge-circolare">
                <div className="testo-curvo">
                  <svg viewBox="0 0 100 100">
                    <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                    <text>
                      <textPath href="#circlePath">
                        LOCALI PASSIONE • ESPERIENZE AUTENTICHE •
                      </textPath>
                    </text>
                  </svg>
                </div>
                <div className="icona-barca">
                  <img src="/Venice-By-Boat/boat.svg" alt="Boat" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Effetto strappo carta */}
        <div className="paper-divider"></div>
      </div>

      <section className="features-bar">
        <div className="feature-item">
          <span className="icon">🛥️</span>
          <h3>VISTA UNICA</h3>
          <p>Scopri Venezia da prospettive che solo la barca può offrirti.</p>
        </div>
        <div className="feature-item">
          <span className="icon">📸</span>
          <h3>ESPERIENZE</h3>
          <p>Piccoli gruppi, guide locali e tanta passione.</p>
        </div>
        <div className="feature-item">
          <span className="icon">⚓</span>
          <h3>COMFORT</h3>
          <p>Barche moderne e sicure per un'esperienza al top.</p>
        </div>
        <div className="feature-item">
          <span className="icon">❤️</span>
          <h3>PER TUTTI</h3>
          <p>Tour perfetti per amici, coppie e famiglie.</p>
        </div>
      </section>
    </main>
  );
}