import "./App.css";
import React from "react";
// import { PDFDownloadLink } from "@react-pdf/renderer";
import { PDFViewer } from "@react-pdf/renderer";
// import ImagePicker from "./components/ImagePicker";
import BasicDocument from "./pdf";
const App = () => {
  return (
    <div className="App">
      <PDFViewer width="1000" height="1000">
        <BasicDocument />
      </PDFViewer>
      {/* <PDFFile /> */}{" "}
    </div>
  );
};

export default App;
