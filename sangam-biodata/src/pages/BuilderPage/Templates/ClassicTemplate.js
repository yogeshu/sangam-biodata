import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";
import fontPopins from "assets/fonts/Poppins-SemiBold.ttf";
import classBackground from "assets/images/backgrounds/classic.jpg";
import ganesha from "assets/images/pdf/ganesh.png";
Font.register({ family: "Poppins", src: fontPopins });

const styles = StyleSheet.create({
  pageBackground: {
    position: "absolute",
    minWidth: "100%",
    minHeight: "100%",
    display: "block",
    height: "100%",
    width: "100%",
    fontFamily: "Poppins",
  },
  page: {
    flexDirection: "column",
    backgroundImage: `url("${classBackground}")`, // Correct backgroundImage style
    backgroundRepeat: "repeat",
    backgroundPosition: "center",
    height: 1920,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  section: {
    marginBottom: 1,
    paddingLeft: 100,
    paddingRight: 100,
    paddingTop: 1,
    paddingBottom: 1,
    display: "flex",
    flexDirection: "row", // Add this line
    alignItems: "center", // Add this line
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 700,
    marginBottom: 1,
  },
  sectionText: {
    fontSize: 12,
    marginLeft: 10, // Add this line to add some space between the title and the text
  },
  imageBackground: {
    width: "50px",
    height: "50px",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 10,
  },
});

const ClassicTemplate = ({ biodata, background }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.pageBackground}>
        <Image src={classBackground} style={styles.pageBackground} />

        <Image src={ganesha} style={styles.imageBackground} />
        {Object.entries(biodata).map(([sectionName, sectionValue]) => (
          <View key={sectionName} style={styles.section}>
            <Text style={styles.sectionTitle}>
              {sectionName.replace(/^\w/, (c) => c.toUpperCase())}:
            </Text>
            <Text style={styles.sectionText}>{sectionValue}</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

export default ClassicTemplate;
