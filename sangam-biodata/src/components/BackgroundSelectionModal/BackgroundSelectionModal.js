// BackgroundSelectionModal.js
import React from 'react';
import styles from './BackgroundSelectionModal.module.css';

const BackgroundSelectionModal = ({ backgrounds, selectedBackground, onSelectBackground, onClose }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2>Select Background</h2>
        <div className={styles.slider}>
          {backgrounds.map((background) => (
            <div
              key={background.id}
              className={`${styles.backgroundOption} ${selectedBackground.id === background.id ? styles.selectedBackground : ''}`}
              style={{ backgroundColor: background.value }}
              onClick={() => onSelectBackground(background)}
            ></div>
          ))}
        </div>
        <button className={styles.closeButton} onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default BackgroundSelectionModal;
