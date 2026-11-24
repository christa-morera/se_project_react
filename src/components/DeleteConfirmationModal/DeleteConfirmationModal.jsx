import "./DeleteConfirmationModal.css";
import closeIcon from "../../assets/close-btn.png";

function DeleteConfirmationModal({ isOpen, onClose, onDelete }) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content modal__content_type_delete_confirmation">
        <button type="button" className="modal__close" onClick={onClose}>
          <img src={closeIcon} alt="Close" className="modal__close-icon"></img>
        </button>
        <p className="modal__warning-text">
          Are you sure you want to delete this item?
          <br /> This action is irreversible.
        </p>
        <div className="modal__buttons">
          <button
            className="modal__delete-item-btn"
            type="button"
            onClick={onDelete}
          >
            Yes, delete item
          </button>
          <button
            className="modal__cancel-delete-btn"
            type="button"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteConfirmationModal;
