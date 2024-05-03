import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFViewer, Image } from '@react-pdf/renderer';
import backgroundSvg from 'assets/images/backgrounds/first.svg'; 

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    // backgroundColor: 'blue',
    backgroundImage: `url(${backgroundSvg})`, // Set the background SVG
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  header: {
    textAlign: 'center',
    margin: 20,
    fontSize: 24,
    fontFamily: 'Times-Roman',
    color: '#333', // Change the header color
  },
  content: {
    fontSize: 14,
    margin: 10,
    fontFamily: 'Times-Roman',
    color: '#555', // Change the content color
    fontWeight: 'bold', // Make the content bold
  },
});

// Create Document Component
const MyDocument = ({ biodata }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.header}>Jai Shree Ganesha</Text>
        {Object.entries(biodata).map(([key, value]) => (
          <Text key={key} style={styles.content}>{`${key.replace(/^\w/, c => c.toUpperCase())}: `}<Text>{value}</Text></Text>
        ))}
      </View>
      {/* Add the background SVG */}
      <Image src={backgroundSvg} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.2 }} />
    </Page>
  </Document>
);

export default MyDocument;
