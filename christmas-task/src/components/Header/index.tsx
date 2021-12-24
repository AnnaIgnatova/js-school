import { Link } from "react-router-dom";
import { StoreContextConsumer } from "../../StoreContext";
import "./style.css";

const Header = () => (
  <StoreContextConsumer>
    {(context) => (
      <div className="header">
        <div className="container">
          <div className="header-icon sound-icon"></div>
          <div className="header-icon snow-icon"></div>
          <input
            type="search"
            className="header-search"
            placeholder="Search"
            autoComplete="off"
            autoFocus
            onChange={(e) => {
              context.searchToy(e.target.value);
            }}
          />
          <div className="header-nav">
            <ul>
              <li>
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/toys" className="nav-link">
                  Toys
                </Link>
              </li>
              <li>
                <Link to="/tree" className="nav-link">
                  X-mas Tree
                </Link>
              </li>
            </ul>
          </div>
          <div className="favorite-count">{context.savedToys.length}</div>
        </div>
      </div>
    )}
  </StoreContextConsumer>
);

export default Header;
