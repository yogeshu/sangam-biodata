import React, { useState, useCallback, useEffect } from "react";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { useSearchParams } from "react-router-dom";
import ReactGA4 from "react-ga4";

import styles from "./BuilderPage.module.css";
import ClassicTemplate from "./Templates/ClassicTemplate";
import CreativeTemplate from "./Templates/CreativeTemplate";
import FrameTemplate from "./Templates/FrameTemplate";
import AttractiveTemplate from "./Templates/AttractiveTemplate";
import GoldenTemplate from "./Templates/GoldenTemplate";
import FlowerTemplate from "./Templates/FlowerTemplate";
import ExpensiveTemplate from "./Templates/ExpensiveTemplate";
import ElegantTemplate from "./Templates/ElegantTemplate";

// Background options
const backgrounds = [
  { id: 1, name: "Classic", value: "#ffffff" },
  { id: 2, name: "Modern", value: "#f2f2f2" },

  // Add more backgrounds as needed
];
const SelectBox = ({ selectedTemplate, setSelectedTemplate }) => (
  <div className={styles.selectContainer}>
    <label htmlFor="template" className={styles.label}>
      Template
    </label>
    <div className={styles.selectWrapper}>
      <select
        id="template"
        name="template"
        value={selectedTemplate}
        onChange={(e) => setSelectedTemplate(e.target.value)}
        className={styles.select}
      >
        <option value="Classic">Classic</option>
        <option value="Modern">Modern</option>
        <option value="Creative">Creative</option>
        <option value="Frame">Frame</option>
        <option value="Attractive">Attractive</option>
        <option value="Golden">Golden</option>
        <option value="Flower">Flower</option>
        <option value="Expensive">Expensive</option>
        <option value="Elegant">Elegant</option>
      </select>
      <div className={styles.arrowIcon}>
        <svg
          className={styles.arrowSvg}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  </div>
);
// BuilderPage Component
const BuilderPage = () => {
  const [biodata, setBiodata] = useState({
    FullName: "",
    BirthName: "",
    BirthDate: "",
    BirthTime: "",
    BirthCity: "",
    Height: "",
    Gotra: "",
    Naadi: "",
    Manglik: "",
    MamKul: "",
    Nakshatra: "",
    Charan: "",
    Rashi: "",
    Cast: "",
    Qualification: "",
    Occupation: "",
    OccupationCity: "",
    Income: "",
    FatherName: "",
    MotherName: "",
    FatherOccupation: "",
    MotherOccupation: "",
    Siblings: "",
    SiblingDetails: "",
    FamilyIncome: "",
    FamilyType: "",
    FamilyStatus: "",
    FamilyValues: "",
    FamilyLocation: "",
    FamilyOrigin: "",
    About: "",
    Hobbies: "",
    Expectation: "",
    Contact: "",
    Address: "",
    Email: "",
    Website: "",
    Instagram: "",
    LinkedIn: "",
  });
  const [searchParams, setSearchParams] = useSearchParams();
  const initialTemplate = searchParams.get("template") || "Classic";
  const [selectedTemplate, setSelectedTemplate] = useState(initialTemplate);
  const [selectedBackground, setSelectedBackground] = useState(backgrounds[0]);
  const [showPreview, setShowPreview] = useState(false);
  const [showPDFPreview, setShowPDFPreview] = useState(false);

  const handleChange = useCallback((section, value) => {
    setBiodata((prev) => ({ ...prev, [section]: value.trim() }));
  }, []);
  const handlePreview = () => {
    setShowPreview(true);
    ReactGA4.event({
      category: "Biodata",
      action: "Preview",
    });
  };
  const handleClosePreview = () => setShowPreview(false);

  const handleShowPDFPreview = () => {
    setShowPDFPreview(true);
    ReactGA4.event({
      category: "Biodata",
      action: "Show PDF Preview",
    });
  };
  const handleClosePDFPreview = () => setShowPDFPreview(false);
  const filterEmptyFields = (data) => {
    return Object.entries(data).reduce((acc, [key, value]) => {
      if (value) {
        // Only add non-empty values
        acc[key] = value;
      }
      return acc;
    }, {});
  };
  const renderTemplate = () => {
    const filteredData = filterEmptyFields(biodata); // Filter out empty fields

    switch (selectedTemplate) {
      case "Classic":
        return <ClassicTemplate biodata={filteredData} />;

      case "Creative":
        return <CreativeTemplate biodata={filteredData} />;
      case "Frame":
        return (
          <FrameTemplate
            biodata={filteredData}
            background={selectedBackground.value}
          />
        );
      case "Attractive":
        return <AttractiveTemplate biodata={filteredData} />;
      case "Golden":
        return <GoldenTemplate biodata={filteredData} />;
      case "Flower":
        return <FlowerTemplate biodata={filteredData} />;
      case "Expensive":
        return <ExpensiveTemplate biodata={filteredData} />;
      case "Elegant":
        return <ElegantTemplate biodata={filteredData} />;

      default:
        return null;
    }
  };

  useEffect(() => {
    if (showPreview || showPDFPreview) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showPreview, showPDFPreview]);
  const SelectBox = ({ selectedTemplate, setSelectedTemplate }) => (
    <div className={styles.selectContainer}>
      <label htmlFor="template" className={styles.label}>
        Template
      </label>
      <div className={styles.selectWrapper}>
        <select
          id="template"
          name="template"
          value={selectedTemplate}
          onChange={(e) => setSelectedTemplate(e.target.value)}
          className={styles.select}
        >
          <option value="Classic">Classic</option>

          <option value="Creative">Creative</option>
          <option value="Frame">Frame</option>
          <option value="Attractive">Attractive</option>
          <option value="Golden">Golden</option>
          <option value="Flower">Flower</option>
          <option value="Expensive">Expensive</option>
          <option value="Elegant">Elegant</option>
        </select>
        <div className={styles.arrowIcon}>
          <svg
            className={styles.arrowSvg}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
  return (
    <>
      <div className={styles.builderPage}>
        <div className={styles.formSection}>
          <h2 className={styles.heading}>Biodata Form</h2>
          {/* Personal Information and Template/Background Selection */}
          <div className={styles.formSection}>
            <div className={styles.templateSelector}>
              <SelectBox
                selectedTemplate={selectedTemplate}
                setSelectedTemplate={setSelectedTemplate}
              />
            </div>
            <div className={styles.backgroundSelector}>
              <label>Background:</label>
              <div className={styles.backgroundOptions}>
                {backgrounds.map((bg) => (
                  <div
                    key={bg.id}
                    className={`${styles.backgroundOption} ${
                      selectedBackground.id === bg.id
                        ? styles.selectedBackground
                        : ""
                    }`}
                    onClick={() => setSelectedBackground(bg)}
                    style={{
                      backgroundColor: bg.value.startsWith("http")
                        ? "transparent"
                        : bg.value,
                      backgroundImage: bg.value.startsWith("http")
                        ? `url(${bg.value})`
                        : "none",
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
                  type={
                    key === "BirthDate"
                      ? "date"
                      : key === "BirthTime"
                      ? "time"
                      : "text"
                  }
                  value={value}
                  onChange={(e) => handleChange(key, e.target.value)}
                  placeholder={`Enter ${key}`}
                />
              </div>
            ))}
          </div>
          <button
            className={styles.previewButton}
            onClick={handlePreview}
            disabled={Object.values(biodata).every((val) => !val)}
          >
            Preview
          </button>
        </div>
        {/* Preview and PDF Download */}
      </div>

      {showPreview && (
        <div className={styles.previewModal}>
          <div className={styles.previewContent}>
            <h2>Preview</h2>
            {Object.entries(filterEmptyFields(biodata)).map(([key, value]) => (
              <p key={key}>
                <strong>{key.replace(/^\w/, (c) => c.toUpperCase())}:</strong>{" "}
                {value}
              </p>
            ))}
            <div className={styles.buttonGroup}>
              <button onClick={handleShowPDFPreview}>Show in PDF</button>
              <button
                onClick={handleClosePreview}
                className={styles.closePreviewButton}
              >
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
                onClick={() =>
                  ReactGA4.event({
                    category: "Biodata",
                    action: "Download PDF1",
                    label: selectedTemplate,
                  })
                }
              >
                {({ loading }) => (loading ? "Loading..." : "Download PDF")}
              </PDFDownloadLink>
              <button
                onClick={handleClosePDFPreview}
                className={styles.closePreviewButton}
              >
                Close PDF
              </button>
            </div>
            <PDFViewer width="100%" height="100%">
              {renderTemplate()}
            </PDFViewer>
            <div className={styles.buttonGroup}>
              <PDFDownloadLink
                document={renderTemplate()}
                fileName={`${selectedTemplate.toLowerCase()}-resume.pdf`}
                onClick={() =>
                  ReactGA4.event({
                    category: "Biodata",
                    action: "Download PDF2",
                    label: selectedTemplate,
                  })
                }
              >
                {({ loading }) => (loading ? "Loading..." : "Download PDF")}
              </PDFDownloadLink>
              <button
                onClick={handleClosePDFPreview}
                className={styles.closePreviewButton}
              >
                Close PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BuilderPage;
