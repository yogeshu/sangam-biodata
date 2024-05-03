import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    padding: 30,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  sectionText: {
    fontSize: 12,
  },
});

const ClassicTemplate = ({ biodata, background }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View>
        <Text style={styles.header}>Resume</Text>
        {Object.entries(biodata).map(([sectionName, sectionValue]) => (
          <View key={sectionName} style={styles.section}>
            <Text style={styles.sectionTitle}>{sectionName.replace(/^\w/, (c) => c.toUpperCase())}:</Text>
            <Text style={styles.sectionText}>{sectionValue}</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

export default ClassicTemplate;