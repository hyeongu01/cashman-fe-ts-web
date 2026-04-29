import { createPortal } from "react-dom";
import styles from "./Modal.module.css";

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
};

function Modal({ isOpen, onClose, children, title }: ModalProps) {
  if (!isOpen) return null;

  const parentDom = document.getElementById("portal-root");
  if (!parentDom) return null;

  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <p>{title ?? ""}</p>
          <button onClick={onClose}>✕</button>
        </div>
        {children}
      </div>
    </div>,
    parentDom,
  );
}
export default Modal;
