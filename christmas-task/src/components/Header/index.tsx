import { useState } from "react";
import { Link } from "react-router-dom";
import { StoreContextConsumer } from "../../StoreContext";
import "./style.css";

interface IHeder {
  route: string;
}

function createSnowFlake() {
  const bg = (document.querySelector(".snowfall") as HTMLElement) || "";
  if (bg) {
    const rigth = bg.getBoundingClientRect().right - 20;
    const left = bg.getBoundingClientRect().left;

    const snowFlake = document.createElement("div");
    snowFlake.classList.add("snowflake");
    snowFlake.style.left = Math.random() * (rigth - left) + "px";
    snowFlake.style.animationDuration = Math.random() * 3 + 2 + "s"; // between 2 - 5 seconds
    snowFlake.style.opacity = `${Math.random()}`;
    const size = Math.random() * (30 - 10) + 10;
    snowFlake.style.width = `${size}px`;
    snowFlake.style.height = `${size}px`;

    bg.appendChild(snowFlake);

    setTimeout(() => {
      snowFlake.remove();
    }, 3000);
  }
}

function startSnow(state: boolean) {
  var interval: NodeJS.Timer | boolean = false;
  if (!state) {
    const bg = document.querySelector(".tree-bg") as HTMLElement;
    const snowfall = document.createElement("div");
    snowfall.className = "snowfall";
    bg.prepend(snowfall);
    if (!interval) interval = setInterval(createSnowFlake, 50);
  } else {
    const bg = document.querySelector(".tree-bg");
    bg?.removeChild(bg.children[0]);
    if (interval) clearInterval(interval);
    interval = false;
  }
}

const Header = (props: IHeder) => {
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
                const audio = document.querySelector(
                  ".audio"
                ) as HTMLAudioElement;
                e.currentTarget.classList.toggle("select-icon");
                if (!play) {
                  audio.play();
                  setPlay(true);
                } else {
                  audio.pause();
                  audio.currentTime = 0;
                  setPlay(false);
                }
              }}
            ></div>
            <div
              className="header-icon snow-icon"
              onClick={(e) => {
                e.currentTarget.classList.toggle("select-icon");
                startSnow(snowing);

                if (!snowing) {
                  setSnowing(true);
                } else {
                  setSnowing(false);
                }
              }}
            ></div>
            {props.route === "toys" ? (
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
            ) : (
              ""
            )}

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
            {props.route === "toys" ? (
              <div className="favorite-count">{context.savedToys.length}</div>
            ) : (
              ""
            )}
          </div>
        </div>
      )}
    </StoreContextConsumer>
  );
};

export default Header;
