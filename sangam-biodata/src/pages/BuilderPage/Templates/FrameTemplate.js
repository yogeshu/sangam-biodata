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
import backgroundImage2 from "assets/images/backgrounds/frame.png";
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
    backgroundImage: `url("${backgroundImage2}")`, // Correct backgroundImage style
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
  sectionWrapper: {
    marginTop: 50,
  },
  section: {
    marginBottom: 1,
    paddingLeft: 100,
    paddingRight: 100,
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

const FrameTemplate = ({ biodata, background }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.pageBackground}>
        <Image src={backgroundImage2} style={styles.pageBackground} />

        <Image src={ganesha} style={styles.imageBackground} />
        <View style={styles.sectionWrapper}>
          {Object.entries(biodata).map(([sectionName, sectionValue]) => (
            <View key={sectionName} style={styles.section}>
              <Text style={styles.sectionTitle}>
                {sectionName.replace(/^\w/, (c) => c.toUpperCase())}:
              </Text>
              <Text style={styles.sectionText}>{sectionValue}</Text>
            </View>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);

export default FrameTemplate;
