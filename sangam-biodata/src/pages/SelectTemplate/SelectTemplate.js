// SelectTemplate.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Change from useHistory to useNavigate
import styles from './SelectTemplate.module.css';
// background options

import creativeTemplate from 'assets/images/backgrounds/first.jpg'
import frameTemplate from 'assets/images/backgrounds/second.jpg'

const SelectTemplate = () => {
    const navigate = useNavigate(); // This replaces useHistory

  const templates = [
    { name: 'Classic', thumbnail: 'path/to/classic-thumbnail.png' },
    { name: 'Modern', thumbnail: 'path/to/modern-thumbnail.png' },
    { name: 'Creative', thumbnail: creativeTemplate },
    { name: 'Frame', thumbnail: frameTemplate },
  ];

  const handleSelectTemplate = (template) => {
    navigate(`/builder?template=${template}`); // Use navigate instead of push
  };

  return (
    <div className={styles.container}>
      <h1>Select a Template</h1>
      <div className={styles.templates}>
        {templates.map((template) => (
          <div key={template.name} className={styles.template} onClick={() => handleSelectTemplate(template.name)}>
            <img src={template.thumbnail} alt={`${template.name} Template`} />
            <p>{template.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectTemplate;
