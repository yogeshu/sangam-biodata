import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SelectTemplate.module.css';
import creativeTemplate from 'assets/images/backgrounds/first.jpg';
import frameTemplate from 'assets/images/backgrounds/second.jpg';

const SelectTemplate = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [selectedTemplateIndex, setSelectedTemplateIndex] = useState(0);

  const templates = [
    { name: 'Classic', thumbnail: 'path/to/classic-thumbnail.png' },
    { name: 'Modern', thumbnail: 'path/to/modern-thumbnail.png' },
    { name: 'Creative', thumbnail: creativeTemplate },
    { name: 'Frame', thumbnail: frameTemplate },
  ];

  const handleSelectTemplate = (index) => {
    setSelectedTemplateIndex(index);
    setShowModal(true);
  };

  const handleConfirmTemplate = () => {
    navigate(`/builder?template=${templates[selectedTemplateIndex].name}`);
    setShowModal(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedTemplateIndex(0);
  };

  const handlePrevTemplate = () => {
    setSelectedTemplateIndex(
      (selectedTemplateIndex - 1 + templates.length) % templates.length
    );
  };

  const handleNextTemplate = () => {
    setSelectedTemplateIndex((selectedTemplateIndex + 1) % templates.length);
  };

  return (
    <div className={styles.container}>
      <h1>Select a Template</h1>
      <div className={styles.templates}>
        {templates.map((template, index) => (
          <div
            key={template.name}
            className={styles.template}
            onClick={() => handleSelectTemplate(index)}
          >
            <img
              src={template.thumbnail}
              alt={`${template.name} Template`}
              className={styles.thumbnailSmall}
            />
            <p>{template.name}</p>
          </div>
        ))}
      </div>

      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span className={styles.close} onClick={handleCloseModal}>
              &times;
            </span>
            <div className={styles.carousel}>
              <button
                className={styles.prevButton}
                onClick={handlePrevTemplate}
              >
                &laquo; Previous
              </button>
              <img
                src={templates[selectedTemplateIndex].thumbnail}
                alt={`${templates[selectedTemplateIndex].name} Template Preview`}
                className={styles.carouselImage}
              />
              <button
                className={styles.nextButton}
                onClick={handleNextTemplate}
              >
                Next &raquo;
              </button>
            </div>
            <h2>{templates[selectedTemplateIndex].name} Template</h2>
            <button onClick={handleConfirmTemplate}>Select</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectTemplate;