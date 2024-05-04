import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import backgroundImage2 from 'assets/images/backgrounds/second.jpg';

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

const FrameTemplate = ({ biodata, background }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View>
      <Image src={backgroundImage2} style={styles.pageBackground} />
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

export default FrameTemplate;