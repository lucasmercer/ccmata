import React from "react";
import TextareaAutosize from "react-bootstrap-textarea-autosize";

const TextArea = ({ value, onChange }) => {
  return (
    <TextareaAutosize
      value={value}
      onChange={onChange}
      style={{ width: "100%", minHeight: "200px" }}
    />
  );
};

export default TextArea;
