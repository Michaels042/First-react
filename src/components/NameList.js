import React from "react";

const NameList = () => {
  const actors = ["Jackie", "Jet", "Bale", "Tom"];
  const actorsList = actors.map((actor) => <h2>{actor}</h2>);
  return <div>{actorsList}</div>;
};

export default NameList;
