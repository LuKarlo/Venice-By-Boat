import "@/app/css/navBar.css";
import { MdAnchor } from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi"; // Icona Hamburger

export default function NavBar() {
  return (
    <nav className="main-nav">
      <div className="side-navBar logo-area">
        <img src="/Venice-By-Boat/Venice by boat logo.png" alt="Logo Venezia in Barca" />
      </div>

      <div className="center-navBar">
        <ul>
          <li><a href="#">tour</a></li>
          <li><a href="#">esperienze</a></li>
          <li><a href="#">info</a></li>
          <li><a href="#">chi siamo</a></li>
          <li><a href="#">contatti</a></li>
        </ul>
      </div>

      <div className="side-navBar cta-area">
        <div className="cta-button">
          prenota ora <MdAnchor />
        </div>
        <div className="mobile-menu-icon">
          <HiMenuAlt3 />
        </div>
      </div>
    </nav>
  );
}