import React from "react";
import classes from './DetailModal.module.scss';
 
const DetailModal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;
 
    return (
      <div onClick={onClose} className={classes.modal}>
        <div className={classes.modalContent}>
            <h2>{title}</h2>
            <hr />
            {children}
        </div>
      </div>
    );
};
 
export default DetailModal;
