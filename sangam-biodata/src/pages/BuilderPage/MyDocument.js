import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  header: {
    textAlign: 'center',
    margin: 20,
    fontSize: 24,
    fontFamily: 'Times-Roman'
  },
  content: {
    fontSize: 14,
    margin: 10,
    fontFamily: 'Times-Roman'
  }
});

// Create Document Component
const MyDocument = ({ biodata }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.header}>Jai Shree Ganesha</Text>
        {Object.entries(biodata).map(([key, value]) => (
          <Text key={key} style={styles.content}>{`${key.replace(/^\w/, c => c.toUpperCase())}: ${value}`}</Text>
        ))}
      </View>
    </Page>
  </Document>
);

export default MyDocument;
