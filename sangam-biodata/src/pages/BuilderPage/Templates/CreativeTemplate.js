import React from 'react';
import ReactPDF, { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import backgroundImage1 from 'assets/images/backgrounds/first.jpg';

const styles = StyleSheet.create({
    pageBackground: {
        position: 'absolute',
        minWidth: '100%',
        minHeight: '100%',
        display: 'block',
        height: '100%',
        width: '100%',
      },
  page: {
    flexDirection: 'column',
    backgroundImage: `url("${backgroundImage1}")`, // Correct backgroundImage style
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  header: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#fff',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  },
  section: {
    marginBottom: 20,
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 8,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  sectionText: {
    fontSize: 16,
    color: '#555',
  },
});

function Icon() {
    return (
      <Image src={backgroundImage1} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, objectFit: 'cover' }} />
    );
  }

const CreativeTemplate = ({ biodata }) => (
  <Document>
    <Page size="A4" style={styles.page}>
       
      <View >
      <Image src={backgroundImage1} style={styles.pageBackground} />
        <Text style={styles.header}>Creative Resume</Text>
        {Object.entries(biodata).map(([sectionName, sectionValue]) => (
          <View key={sectionName} style={styles.section}>
            <Text style={styles.sectionTitle}>{sectionName.replace(/^\w/, (c) => c.toUpperCase())}</Text>
            <Text style={styles.sectionText}>{sectionValue}</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

export default CreativeTemplate;