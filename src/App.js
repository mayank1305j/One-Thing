import "./App.css";
import { useState } from "react";
import CreateGoal from "./components/CreateGoal";
import Goal from "./components/Goal";

function App() {
  const [thing, setThing] = useState("");
  const [isComplete, setIsComplete] = useState(true);

  return (
    <div className="App">
      {isComplete ? (
        <CreateGoal
          thing={thing}
          setThing={setThing}
          setIsComplete={setIsComplete}
        />
      ) : (
        <Goal thing={thing} setThing={setThing} setIsComplete={setIsComplete} />
      )}
      <div className="socials">
        <p>Links - </p>
        <p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/mayank-joshi-9964a51b8/"
          >
            by @mayank joshi
          </a>
        </p>
        <p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/mayank1305j/One-Thing"
          >
            ✅ GitHub
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
