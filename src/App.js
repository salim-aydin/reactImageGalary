import "./App.css";
import { useState } from "react";
import Images from "./Images";
function App() {

  const [selected, setSelected] = useState(Images[0]);

  const handleClick = (e) => {
    setSelected(e.target.src);
  };

  return (
    <div className="App">
      <div id="anaresim">
        <img src={selected} alt="Selected" className="selected"  />
      </div>
      <div id="resimler">
      {Images.map((image,index) => {
         return <img key={index} src={image} alt={`Resim ${index}`} onClick={handleClick} />
      })}
      </div>
    </div>
  );
}

export default App;