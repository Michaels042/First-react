import React from "react";

const Greet = ({ name, profession }) => {
  return (
    <div>
      <h1>
        Hello i am {name} a.k.a {profession}
      </h1>
    </div>
  );
};

export default Greet;
