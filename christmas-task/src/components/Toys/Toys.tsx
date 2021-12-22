import Footer from "../Footer";
import Header from "../Header/Header";
import Cards from "./Cards/Cards";
import Settings from "./Settings/Settings";
import "./Toys.css";

const Toys = () => {
  return (
    <>
      <Header title="Toys" />
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
