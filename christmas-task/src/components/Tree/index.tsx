import Footer from "../Footer";
import Header from "../Header";
import "./style.css";
import TreeSettings from "./TreeSettings";
import XmasTree from "./TreeSettings/XmasTree";
import TreeToys from "./TreeToys";

const Tree = () => (
  <>
    <Header />
    <div className="container tree-container">
      <TreeSettings />
      <XmasTree />
      <TreeToys />
    </div>
    <Footer />
  </>
);

export default Tree;
