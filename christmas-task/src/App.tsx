import "./App.css";
import Toys from "./components/Toys/index";
import Welcome from "./components/Welcome/index";
import { StoreContextConsumer } from "./StoreContext";
import { Route, Routes } from "react-router";
import Modal from "./components/Modal";
import Tree from "./components/Tree";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const App = () => (
  <DndProvider backend={HTML5Backend}>
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
  </DndProvider>
);

export default App;
