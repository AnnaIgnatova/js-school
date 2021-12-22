import { StoreContextConsumer } from "../../StoreContext";
import "./Header.css";

const Header: React.FC<{ title: string }> = ({ title }) => (
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
          <div className="header-title">{title}</div>
          <div className="favorite-count">{context.savedToys.length}</div>
        </div>
      </div>
    )}
  </StoreContextConsumer>
);

export default Header;
