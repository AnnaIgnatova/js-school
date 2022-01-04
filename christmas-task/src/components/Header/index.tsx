import { useState } from "react";
import { Link } from "react-router-dom";
import { StoreContextConsumer } from "../../StoreContext";
import toggleSnowing from "./functions/toggleSnowing";
import toggleAudio from "./functions/toggleAudio";
import "./style.css";
import { routes } from "./constants/routes";

const Header = () => {
  const [snowing, setSnowing] = useState(false);
  const [play, setPlay] = useState(false);
  return (
    <StoreContextConsumer>
      {(context) => (
        <div className="header">
          <div className="container">
            <audio className="audio">
              <source src="./audio/audio.mp3" type="audio/mpeg" />
            </audio>
            <div
              className="header-icon sound-icon"
              onClick={(e) => {
                toggleAudio(e, setPlay, play);
              }}
            ></div>
            <div
              className="header-icon snow-icon"
              onClick={(e) => {
                toggleSnowing(e, setSnowing, snowing);
              }}
            ></div>

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
                {routes.map(({ to, title }) => (
                  <li>
                    <Link to={to} className="nav-link">
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="favorite-count">{context.savedToys.length}</div>
          </div>
        </div>
      )}
    </StoreContextConsumer>
  );
};

export default Header;
