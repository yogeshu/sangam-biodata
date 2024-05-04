import React, { useState, useCallback, useEffect } from 'react';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import styles from './BuilderPage.module.css';
import ClassicTemplate from './Templates/ClassicTemplate';
import ModernTemplate from './Templates/ModernTemplate';
import CreativeTemplate from './Templates/CreativeTemplate';
import FrameTemplate from './Templates/FrameTemplate';

// Background options
const backgrounds = [
  { id: 1, name: 'Classic', value: '#ffffff' },
  { id: 2, name: 'Modern', value: '#f2f2f2' },
  { id: 3, name: 'Creative', value: 'https://example.com/creative-bg.jpg' },
  { id: 4, name: 'Frame', value: 'https://example.com/frame-bg.jpg'}
  // Add more backgrounds as needed
];

// BuilderPage Component
const BuilderPage = () => {
  const [biodata, setBiodata] = useState({
    FullName: '',
    BirthName: '',
    BirthDate: '',
    BirthTime: '',
    BirthCity: '',
    Height: '',
    Gotra: '',
    Naadi: '',
    Manglik: '',
    MamKul: '',
    Nakshatra: '',
    Charan: '',
    Rashi: '',
    Cast: '',
    Qualification: '',
    Occupation: '',
    OccupationCity: '',
    Income: '',
    FatherName: '',
    MotherName: '',
    FatherOccupation: '',
    MotherOccupation: '',
    Siblings: '',
    SiblingDetails: '',
    FamilyIncome: '',
    FamilyType: '',
    FamilyStatus: '',
    FamilyValues: '',
    FamilyLocation: '',
    FamilyOrigin: '',
    About: '',
    Hobbies: '',
    Expectation: '',
    Contact: '',
    Address: '',
    Email: '',
    Website: '',
    Instagram: '',
    LinkedIn: '',
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
      case 'Frame':
        return <FrameTemplate biodata={biodata} background={selectedBackground.value} />;
      default:
        return null;
    }
  };

  useEffect(() => {
    if (showPreview || showPDFPreview) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showPreview, showPDFPreview]);

  return (
    <>
      <div className={styles.builderPage}>
        <div className={styles.formSection}>
          <h2 className={styles.heading}>Biodata Form</h2>
          {/* Personal Information and Template/Background Selection */}
          <div className={styles.formSection}>
            <div className={styles.templateSelector}>
              <label>Template:</label>
              <select
                value={selectedTemplate}
                onChange={(e) => setSelectedTemplate(e.target.value)}
              >
                <option value="Classic">Classic</option>
                <option value="Modern">Modern</option>
                <option value="Creative">Creative</option>
                <option value="Frame">Frame</option>
              </select>
            </div>
            <div className={styles.backgroundSelector}>
              <label>Background:</label>
              <div className={styles.backgroundOptions}>
                {backgrounds.map((bg) => (
                  <div
                    key={bg.id}
                    className={`${styles.backgroundOption} ${selectedBackground.id === bg.id ? styles.selectedBackground : ''
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
                {key === 'BirthTime' ? (
                  <input
                    type="time"
                    value={value}
                    onChange={(e) => handleChange(key, e.target.value)}
                    placeholder={`Enter ${key}`}
                  />
                ) : key === 'BirthDate' ? (
                  <input
                    type="date"
                    value={value}
                    onChange={(e) => handleChange(key, e.target.value)}
                    placeholder={`Enter ${key}`}
                  />
                ) : (
                  <input
                    type="text"
                    value={value}
                    onChange={(e) => handleChange(key, e.target.value)}
                    placeholder={`Enter ${key}`}
                  />
                )}
              </div>
            ))}
          </div>
          <button className={styles.previewButton} onClick={handlePreview}>
            Preview
          </button>
        </div>
        {/* Preview and PDF Download */}

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
            <PDFViewer width="100%" height="100%">
              {renderTemplate()}
            </PDFViewer>
            
          </div>
        </div>
      )}
    </>
  );
};

export default BuilderPage;
