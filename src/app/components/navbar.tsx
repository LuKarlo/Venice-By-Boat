import "@/app/css/navBar.css";
import { MdAnchor } from "react-icons/md";

export default function NavBar(){
    return (
        <nav>
            <div className="side-navBar">
                <img src="/Venice-By-Boat/Venice by boat logo.png" alt="" />
            </div>
            <div className="center-navBar">
                <ul>
                    <li>
                        <a href="#">tour</a>
                    </li>
                    <li>
                        <a href="#">esperienze</a>
                    </li>
                    <li>
                        <a href="#">info</a>
                    </li>
                    <li>
                        <a href="#">chi siamo</a>
                    </li>
                    <li>
                        <a href="#">contatti</a>
                    </li>
                </ul>
            </div>
            <div className="side-navBar">
                <div className="cta">
                    prenota ora <MdAnchor />
                </div>
            </div>
        </nav>
    );
}