import Footer from "../Footer";
import Header from "../Header/index";
import Cards from "./Cards/index";
import Settings from "./Settings/index";
import "./style.css";

const Toys = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="toys">
          <Settings />
          <Cards />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Toys;
