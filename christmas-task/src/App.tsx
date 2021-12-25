import "./App.css";
import Toys from "./components/Toys/index";
import Welcome from "./components/Welcome/index";
import { StoreContextConsumer } from "./StoreContext";
import { Route, Routes } from "react-router";
import Modal from "./components/Modal";
import Tree from "./components/Tree";

const App = () => (
  <StoreContextConsumer>
    {(context) => (
      <div className="App">
        <Modal show={context.slotsModal} />
        <Routes>
          <Route path="/toys" element={<Toys />}></Route>
          <Route path="/" element={<Welcome />}></Route>
          <Route path="/tree" element={<Tree />}></Route>
        </Routes>
      </div>
    )}
  </StoreContextConsumer>
);

export default App;
