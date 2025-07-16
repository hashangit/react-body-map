import React, { useState } from "react";
import Body, { BodyPart } from "../index";

const bodyParts: BodyPart[] = [
  { slug: "chest-left", intensity: 1, color: '' },
  { slug: "chest-right", intensity: 1, color: '' },
  { slug: "abs-upper", intensity: 2, color: '' },
];

const App = () => {
  const [data, setData] = useState(bodyParts);
  const onBodyPartPress = (bodyPart: BodyPart) => {
    const isSelected = data.find((item) => item.slug === bodyPart.slug);
    if (isSelected) {
      setData(data.filter((item) => item.slug !== bodyPart.slug));
    } else {
      setData([...data, { ...bodyPart, intensity: 1 }]);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Body
        data={data}
        onBodyPartPress={onBodyPartPress}
        side="front"
        gender="male"
        scale={1}
        colors={["#0984e3", "#74b9ff"]}
        frontOnly={false}
        backOnly={false}
      />
    </div>
  );
};

export default App;
