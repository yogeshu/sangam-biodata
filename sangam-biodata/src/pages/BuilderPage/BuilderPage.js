import React, { useState, useCallback } from 'react';
import styles from './BuilderPage.module.css';
import MyDocument from './MyDocument';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
const BuilderPage = () => {
  const [biodata, setBiodata] = useState({
    personal: '', family: '', education: '', career: '', astrology: '', skills: '', hobbies: '', interests: ''
  });
  const [showPreview, setShowPreview] = useState(false);  // State to toggle preview modal

  const handleChange = useCallback((section, value) => {
    setBiodata(prev => ({ ...prev, [section]: value }));
  }, []);

  const handlePreview = useCallback(() => {
    setShowPreview(true);  // Toggle to show the preview modal
  }, []);

  const handleClosePreview = useCallback(() => {
    setShowPreview(false);  // Toggle to close the preview modal
  }, []);

  return (
    <div className={styles.builderPage}>
      <div className={styles.formSection}>
        <h2 className={styles.heading}>Builder Form</h2>
        {Object.entries(biodata).map(([key, value]) => (
          <div key={key} className={styles.inputGroup}>
            <label>{key.replace(/^\w/, c => c.toUpperCase())}:</label>
            <input
              type="text"
              value={value}
              onChange={(e) => handleChange(key, e.target.value)}
              placeholder={`Enter ${key}`}
              className={styles.input}
            />
          </div>
        ))}
        <button className={styles.previewButton} onClick={handlePreview}>Preview</button>
        <PDFViewer style={{ width: '100%', height: '500px' }}>
          <MyDocument biodata={biodata} />
        </PDFViewer>
        <PDFDownloadLink document={<MyDocument biodata={biodata} />} fileName="biodata.pdf">
          {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
        </PDFDownloadLink>
      </div>
      {showPreview && (
        <div className={styles.previewModal}>
          <div className={styles.previewContent}>
            <h2>Preview</h2>
            {Object.entries(biodata).map(([key, value]) => (
              <p key={key}><strong>{key.replace(/^\w/, c => c.toUpperCase())}:</strong> {value}</p>
            ))}
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
