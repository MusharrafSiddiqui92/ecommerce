import React, { useState } from "react";

const Modal = ({style}) => {
  const [showModal, setShowModal] = useState(false);

  const handleMouseEnter = () => setShowModal(true);
  const handleMouseLeave = () => setShowModal(false);

  return (
    <div className="d-inline-block position-relative" style={{style}}onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {/* <button className="btn btn-primary position-absolute"></button>  */}
      {showModal && (
        <div
          className="position-absolute bg-dark border rounded shadow p-3"
          style={{top: "120%", left: "0", zIndex: 1000, width: "300px",color:'white' }}>
          <h4 className="mb-2">Womens</h4>
          <p className="mb-0">Bundle of latest fashon variety for Women.</p>
          <div className="btn btn-light rounded-0">Explore</div>
  </div>
      )}
    </div>
  );
};

export default Modal;
