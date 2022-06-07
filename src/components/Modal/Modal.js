import React from "react";

import classes from "./styles.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const Modal = ({ setIsOpen }) => {
  return (
    <>
      <div className={classes.darkBG} onClick={() => setIsOpen(false)} />
      <div className={classes.centered}>
        <div className={classes.modal}>
          <div className={classes.modalHeader}>
            <h5 className={classes.heading}>Dialog</h5>
          </div>
          <button className={classes.closeBtn} onClick={() => setIsOpen(false)}>
            <FontAwesomeIcon icon={faX} style={{ margin: "-3px" }} />
          </button>
          <div className={classes.modalContent}>
            Are you sure you want to delete the item?
          </div>
          <div className={classes.modalActions}>
            <div className={classes.actionsContainer}>
              <button
                className={classes.deleteBtn}
                onClick={() => setIsOpen(false)}
              >
                Delete
              </button>
              <button
                className={classes.cancelBtn}
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
