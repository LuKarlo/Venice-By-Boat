import "@/app/css/home.css";
import NavBar from "./components/navbar";

export default function Home() {
  return (
    <div className="hero-container">
      <NavBar />
      <div className="overlay-text" style={{display: "none"}}>
        <h1 className="main-title">
          VENEZIA <br /> <span className="evidence hand-drawn-underline">IN BARCA</span>
        </h1>

        <div className="brush-stroke-container">
          <p>VIVI LA CITTÀ PIÙ BELLA DEL MONDO</p>
          <p className="sub-text">DALL'ACQUA</p>
        </div>

      </div>
    </div>
  );
}
