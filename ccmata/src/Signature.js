import React from "react";
import SignatureCanvas from "react-signature-canvas";

const Signature = ({ onEnd }) => {
  return (
    <SignatureCanvas
      penColor="black"
      canvasProps={{ width: 500, height: 200, className: "sigCanvas" }}
      onEnd={onEnd}
    />
  );
};

export default Signature;
