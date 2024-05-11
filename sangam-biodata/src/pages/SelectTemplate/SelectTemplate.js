import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SelectTemplate.module.css";
import creativeTemplate from "assets/images/backgrounds/first.jpg";
import frameTemplate from "assets/images/backgrounds/second.jpg";
import classic from "assets/images/backgrounds/classic.jpg";
import attractive from "assets/images/backgrounds/attractive.jpg";
import golden from "assets/images/backgrounds/golden.jpg";
import flower from "assets/images/backgrounds/flower.jpg";
import expensive from "assets/images/backgrounds/expensive.jpg";
import elegant from "assets/images/backgrounds/elegant.jpg";

const SelectTemplate = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [selectedTemplateIndex, setSelectedTemplateIndex] = useState(0);

  const templates = [
    { name: "Classic", thumbnail: classic },
    { name: "Creative", thumbnail: creativeTemplate },
    { name: "Frame", thumbnail: frameTemplate },
    { name: "Attractive", thumbnail: attractive },
    { name: "Golden", thumbnail: golden },
    { name: "Flower", thumbnail: flower },
    { name: "Expensive", thumbnail: expensive },
    { name: "Elegant", thumbnail: elegant },
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
