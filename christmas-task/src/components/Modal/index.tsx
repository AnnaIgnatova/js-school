import { StoreContextConsumer } from "../../StoreContext";
import ModalInfo from "./interfaces/IModal";

const Modal = (props: ModalInfo) => (
  <StoreContextConsumer>
    {(context) => {
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

export default Modal;
