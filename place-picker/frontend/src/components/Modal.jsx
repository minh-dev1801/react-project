import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ place, open, onClose, onDeletePlace }) => {
  const dialogRef = useRef();
  useEffect(() => {
    if (open) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [open]);

  return createPortal(
    <dialog
      ref={dialogRef}
      className="backdrop:bg-black backdrop:opacity-60 min-w-[30rem] rounded-md p-8 bg-[#d5c7bc] shadow-xl"
    >
      <h1 className="text-xl font-bold text-red-900">
        Bạn có chắc xóa địa điểm du lịch này ?
      </h1>
      {place && <p className="text-[1.15rem] text-red-800 mt-4">{place.title}</p>}

      <div className="flex justify-end gap-4 mt-8">
        
        <button className="text-lg text-red-800" onClick={onClose}>
          Hủy
        </button>
        <button
          className="text-lg px-[1rem] py-[0.1rem] bg-red-600 hover:bg-red-800 rounded text-white transition-colors shadow-lg"
          onClick={onDeletePlace}
        >
          Xóa
        </button>
      </div>
    </dialog>,
    document.getElementById("modal")
  );
};

Modal.propTypes = {
  place: PropTypes.object,
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onDeletePlace: PropTypes.func,
};

export default Modal;
