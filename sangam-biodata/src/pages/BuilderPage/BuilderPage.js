import React, { useState, useCallback } from 'react';
import { PDFDownloadLink,PDFViewer } from '@react-pdf/renderer';
import styles from './BuilderPage.module.css';
import ClassicTemplate from './Templates/ClassicTemplate';
import ModernTemplate from './Templates/ModernTemplate';
import CreativeTemplate from './Templates/CreativeTemplate';

// Background options
const backgrounds = [
  { id: 1, name: 'Classic', value: '#ffffff' },
  { id: 2, name: 'Modern', value: '#f2f2f2' },
  { id: 3, name: 'Creative', value: 'https://example.com/creative-bg.jpg' },
  // Add more backgrounds as needed
];

// BuilderPage Component
const BuilderPage = () => {
  const [biodata, setBiodata] = useState({
    personal: '',
    family: '',
    education: '',
    career: '',
    astrology: '',
    skills: '',
    hobbies: '',
    interests: '',
  });
  const [selectedTemplate, setSelectedTemplate] = useState('Classic');
  const [selectedBackground, setSelectedBackground] = useState(backgrounds[0]);
  const [showPreview, setShowPreview] = useState(false);
  const [showPDFPreview, setShowPDFPreview] = useState(false);

  const handleChange = useCallback((section, value) => {
    setBiodata((prev) => ({ ...prev, [section]: value }));
  }, []);

  const handlePreview = () => setShowPreview(true);

  const handleClosePreview = () => setShowPreview(false);

  const handleShowPDFPreview = () => setShowPDFPreview(true);

  const handleClosePDFPreview = () => setShowPDFPreview(false);

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case 'Classic':
        return <ClassicTemplate biodata={biodata} />;
      case 'Modern':
        return <ModernTemplate biodata={biodata} />;
      case 'Creative':
        return <CreativeTemplate biodata={biodata} />;
      default:
        return null;
    }
  };
  return (
    <div className={styles.builderPage}>
      <div className={styles.formSection}>
        <h2 className={styles.heading}>Builder Form</h2>
        {/* Template selector */}
        <div className={styles.templateSelector}>
          <label>Template:</label>
          <select
            value={selectedTemplate}
            onChange={(e) => setSelectedTemplate(e.target.value)}
          >
            <option value="Classic">Classic</option>
            <option value="Modern">Modern</option>
            <option value="Creative">Creative</option>
          </select>
        </div>
        {/* Background selector */}
        <div className={styles.backgroundSelector}>
          <label>Background:</label>
          <div className={styles.backgroundOptions}>
            {backgrounds.map((bg) => (
              <div
                key={bg.id}
                className={`${styles.backgroundOption} ${
                  selectedBackground.id === bg.id ? styles.selectedBackground : ''
                }`}
                onClick={() => setSelectedBackground(bg)}
                style={{
                  backgroundColor: bg.value.startsWith('http')
                    ? 'transparent'
                    : bg.value,
                  backgroundImage: bg.value.startsWith('http')
                    ? `url(${bg.value})`
                    : 'none',
                }}
              ></div>
            ))}
          </div>
        </div>
        {/* Form fields */}
        {Object.entries(biodata).map(([key, value]) => (
          <div key={key} className={styles.inputGroup}>
            <label>{key.replace(/^\w/, (c) => c.toUpperCase())}:</label>
            <input
              type="text"
              value={value}
              onChange={(e) => handleChange(key, e.target.value)}
              placeholder={`Enter ${key}`}
            />
          </div>
        ))}
        <button className={styles.previewButton} onClick={handlePreview}>
          Preview
        </button>
      </div>
      {showPreview && (
        <div className={styles.previewModal}>
          <div className={styles.previewContent}>
            <h2>Preview</h2>
            {Object.entries(biodata).map(([key, value]) => (
              <p key={key}>
                <strong>{key.replace(/^\w/, (c) => c.toUpperCase())}:</strong> {value}
              </p>
            ))}
            <div className={styles.buttonGroup}>
              <button onClick={handleShowPDFPreview}>Show in PDF</button>
              <button onClick={handleClosePreview} className={styles.closePreviewButton}>
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
      {showPDFPreview && (
        <div className={styles.pdfPreviewModal}>
          <div className={styles.pdfPreviewContent}>
            <PDFViewer width="100%" height="100%">
              {renderTemplate()}
            </PDFViewer>
            <div className={styles.buttonGroup}>
              <PDFDownloadLink
                document={renderTemplate()}
                fileName={`${selectedTemplate.toLowerCase()}-resume.pdf`}
              >
                {({ blob, url, loading, error }) =>
                  loading ? 'Loading...' : 'Download PDF'
                }
              </PDFDownloadLink>
              <button onClick={handleClosePDFPreview} className={styles.closePreviewButton}>
                Close PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BuilderPage;