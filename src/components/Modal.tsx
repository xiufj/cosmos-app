import React, { useState, useEffect } from "react";
import "../styles/modal.css"; // 这里的CSS是用来定义动画效果的

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const [isVisible, setIsVisible] = useState(isOpen);

  useEffect(() => {
    setIsVisible(isOpen);
  }, [isOpen]);

  const closeModal = () => {
    setIsVisible(false);
    onClose();
  };

  // 当isVisible为true时，添加modal-open类以显示modal
  // 否则移除modal-open类以隐藏modal
  const modalClass = isVisible ? "modal modal-open" : "modal";

  return (
    <>
      {isOpen && (
        <div className={modalClass}>
          <div className="modal-content">
            <a className="close-btn" onClick={closeModal}>
              &times;
            </a>
            {children}
          </div>
        </div>
      )}
    </>
  );
};
