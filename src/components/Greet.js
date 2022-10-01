import React from "react";

const Greet = ({ name, profession }) => {
  return (
    <div>
      <h1>
        Hello {name} a.k.a {profession}
      </h1>
    </div>
  );
};

export default Greet;
