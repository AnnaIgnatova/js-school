import "./App.css";
import Toys from "./components/Toys/Toys";
import { StoreContextConsumer } from "./StoreContext";

interface ModalInfo {
  show: boolean;
}

const Modal = (props: ModalInfo) => (
  <StoreContextConsumer>
    {(context) => {
      const clientY = document.documentElement.scrollTop;
      return (
        <div className={`modal-wrapper ${props.show ? "" : "hidden"}`}>
          <div className="modal">
            No more free slots &#129402;
            <div className="ok-btn" onClick={context.toggleSlotsModal}>
              OK
            </div>
          </div>
        </div>
      );
    }}
  </StoreContextConsumer>
);

const App = () => (
  <StoreContextConsumer>
    {(context) => (
      <div className="App">
        <Modal show={context.slotsModal} />
        <Toys />
      </div>
    )}
  </StoreContextConsumer>
);

export default App;
