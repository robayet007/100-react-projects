import { useState } from "react";

const Togglecolor = () => {
  const [backgroundColor, setbackgorundColor] = useState("white");
  const [textColor, setTextcolor] = useState("1b1b1b");
  const [buttonStyle, setbuttonStyle] = useState("white");
  return (
    <div style={{height}}>
      <button style={{ backgroundColor, color: textColor, padding: "1rem" , float : "right"}}>
        Toggle
      </button>
      <h1>WELCOME TO MY WORLD</h1>
    </div>
  );
};

export default Togglecolor;
