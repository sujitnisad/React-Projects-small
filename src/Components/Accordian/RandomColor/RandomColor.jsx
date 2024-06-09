import { useEffect, useState } from "react";

const RandomColor = () => {
  const [typeOfColor, settypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomcolor(length) {
    return Math.floor(Math.random() * length);
  }
  function handleHexColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexcolor = "#";
    for (let i = 0; i < 6; i++) {
      hexcolor += hex[randomcolor(hex.length)];
      setColor(hexcolor);
    }
  }
  function handleRgbColor() {
    let r = randomcolor(256);
    let g = randomcolor(256);
    let b = randomcolor(256);
    const rgb = `rgb(${r},${g},${b})`;
    setColor(rgb);
  }
  useEffect(() => {
    if (typeOfColor === "rgb") handleRgbColor();
    else handleHexColor();
  }, [typeOfColor]);
  return (
    <div style={{ width: "100vw", height: "100vh", background: color }}>
      <button onClick={() => settypeOfColor("hex")}>Hex color</button>
      <button onClick={() => settypeOfColor("rgb")}>rgb color</button>
      <button onClick={typeOfColor === "hex" ? handleHexColor : handleRgbColor}>
        generate
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "20px",
          marginTop: "50px",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
};

export default RandomColor;
