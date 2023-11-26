import React, { useState } from "react";
import Header from "./Header";
import TextArea from "./TextArea";
import Signature from "./Signature";
import PDFButton from "./PDFButton";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function App() {
  const [numeroSequencial, setNumeroSequencial] = useState("");
  const [data, setData] = useState("");
  const [texto, setTexto] = useState("");
  const [assinatura, setAssinatura] = useState("");

  const handleAssinatura = (data) => {
    setAssinatura(data);
  };

  const gerarPDF = () => {
    // Lógica para gerar o PDF com as informações
    const content = (
      <Document>
        <Page>
          <Header numeroSequencial={numeroSequencial} data={data} />
          <p>Texto: {texto}</p>
          <p>Assinatura: {assinatura}</p>
        </Page>
      </Document>
    );

    return content;
  };

  return (
    <div>
      <Header numeroSequencial={numeroSequencial} data={data} />
      <TextArea value={texto} onChange={(e) => setTexto(e.target.value)} />
      <Signature onEnd={handleAssinatura} />
      <PDFButton content={gerarPDF()} fileName="ata_reuniao.pdf" />
    </div>
  );
}

export default App;
