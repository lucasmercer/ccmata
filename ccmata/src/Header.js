import React from "react";

const Header = ({ numeroSequencial, data }) => {
  return (
    <div>
      <p>Número Sequencial: {numeroSequencial}</p>
      <p>Data: {data}</p>
    </div>
  );
};

export default Header;
