import "@/app/css/home.css";
import NavBar from "./components/navbar";

export default function Home() {
  return (
    <div className="hero-container">
      <NavBar />
      <div className="overlay">
        <div className="text">
          <h1 className="main-title permanent-marker-regular">
            VENEZIA <br /> <span className="evidence">IN BARCA</span>
          </h1>
        </div>

        <div className="badge">
          <div className="badge-circolare">
            <div className="testo-curvo">
              <svg viewBox="0 0 100 100">
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="transparent"
                />
                <text>
                  <textPath href="#circlePath">
                   LOCALI PASSIONE • ESPERIENZE AUTENTICHE •
                  </textPath>
                </text>
              </svg>
            </div>
            <div className="icona-barca">
              <img src="/Venice-By-Boat/boat.svg" alt="Icona Barca" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
