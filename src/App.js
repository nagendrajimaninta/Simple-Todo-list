import { useState } from "react";
import "./styles.css";
function Hooks() {
  const [mailBox, setMailBox] = useState(["1", "N"]);
  const [inpt, setInput] = useState("");
  console.log(inpt);
  let sedMail = () => {
    setMailBox([...mailBox, inpt]);
    setInput(" ");
  };
  return (
    <>
      <input value={inpt} onChange={(e) => setInput(e.target.value)} />
      <button onClick={(e) => sedMail()}>Add Text</button>
      <ul>{inpt}</ul>
      {
        <ol>
          {mailBox.map((mail, i) => (
            <li>{mail}</li>
          ))}
        </ol>
      }
    </>
  );
}
export default function App() {
  return (
    <div className="App">
      <p style={{ color: "green" }}>React Hooks</p>
      <p style={{ color: "red" }}>
        In functional component :Hooks place the important
      </p>
      <p style={{ color: "purple" }}>
        Role as same as class component Life Cycle Methods
      </p>
      <p style={{ color: "green" }}>Simple Todo List</p>
      <Hooks />
    </div>
  );
}
