import React from "react";
import { PDFDownloadLink } from "@react-pdf-viewer/react-pdf-to-print";

const PDFButton = ({ content, fileName }) => {
  return (
    <PDFDownloadLink document={content} fileName={fileName}>
      {({ blob, url, loading, error }) =>
        loading ? "Carregando..." : "Download PDF"
      }
    </PDFDownloadLink>
  );
};

export default PDFButton;
