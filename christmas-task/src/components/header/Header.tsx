import "./Header.css";

const Header: React.FunctionComponent<{ title: string }> = (props) => {
  return (
    <div className="header">
      <div className="container">
        <div className="header-icon sound-icon"></div>
        <div className="header-icon snow-icon"></div>
        <input type="search" className="header-search" placeholder="Search" />
        <div className="header-title">{props.title}</div>
      </div>
    </div>
  );
};

export default Header;
