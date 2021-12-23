import { Link } from "react-router-dom";
import Footer from "../Footer";
import "./style.css";

const Welcome = () => (
  <>
    <div className="welcome">
      <div className="ball"></div>
      <div className="ball-small"></div>
      <div className="welcome-text">
        help grandma decorate the x&nbsp;-&nbsp;mas tree
      </div>
      <Link to="/toys" className="welcome-btn">
        Start
      </Link>
    </div>
    <Footer />
  </>
);

export default Welcome;
