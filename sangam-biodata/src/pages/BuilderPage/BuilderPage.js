import React, { useState } from 'react';
import styles from './BuilderPage.module.css';

const BuilderPage = () => {
  const [template, setTemplate] = useState('Classic');
  const [biodata, setBiodata] = useState({
    personal: '',
    family: '',
    education: '',
    career: '',
    astrology: '',
  });
  const [showPreview, setShowPreview] = useState(false);

  const handleChange = (section, value) => {
    setBiodata((prev) => ({ ...prev, [section]: value }));
  };

  const handlePreview = () => {
    setShowPreview(true);
  };

  const handleClosePreview = () => {
    setShowPreview(false);
  };

  return (
    <div className={styles.builderPage}>
      <div className={styles.leftPanel}>
        <h2 className={styles.heading}>Settings</h2>
        <div className={styles.templateSelector}>
          <label>Template:</label>
          <select value={template} onChange={(e) => setTemplate(e.target.value)}>
            <option value="Classic">Classic</option>
            <option value="Modern">Modern</option>
            {/* Add more options */}
          </select>
        </div>
        <div className={styles.options}>
          <label>
            <input
              type="checkbox"
              onChange={() => {
                /* Toggle astrology or other settings */
              }}
            />
            Include Astrology
          </label>
          {/* More options as needed */}
        </div>
        <button className={styles.saveButton}>Save Progress</button>
        <button className={styles.loadButton}>Load Existing</button>
      </div>
      <div className={styles.rightPanel}>
        <h2 className={styles.heading}>Builder Form</h2>
        {/* Add form sections */}
        <div className={styles.formSection}>
          <label>Personal Details:</label>
          <input
            type="text"
            value={biodata.personal}
            onChange={(e) => handleChange('personal', e.target.value)}
          />
        </div>
        <div className={styles.formSection}>
          <label>Family Background:</label>
          <input
            type="text"
            value={biodata.family}
            onChange={(e) => handleChange('family', e.target.value)}
          />
        </div>
        {/* More form sections as needed */}
        <button className={styles.previewButton} onClick={handlePreview}>
          Preview
        </button>
      </div>
      {showPreview && (
        <div className={styles.previewModal}>
          <div className={styles.previewContent}>
            <h2>Preview</h2>
            <div>
              {/* Render preview content based on biodata and template */}
              {/* You can create separate components for rendering the preview */}
              <p>Personal Details: {biodata.personal}</p>
              <p>Family Background: {biodata.family}</p>
              {/* Render other sections */}
            </div>
            <button className={styles.closePreviewButton} onClick={handleClosePreview}>
              Close Preview
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BuilderPage;