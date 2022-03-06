import { useState, useRef } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <AppDemo1 />
    </div>
  );
}

function AppDemo1() {
  const [darkMode, setDarkMode] = useState(false);
  const enabledRef = useRef(true);

  return (
    <div className={`App ${darkMode && "dark-mode"}`}>
      <h1>The useState use effect hook</h1>
      <h2>Click the button to toggle the state</h2>
      <button
        onClick={() => {
          if (enabledRef.current) {
            setDarkMode(!darkMode);
            console.log(darkMode);
            enabledRef.current = false;
            setTimeout(() => (enabledRef.current = true), 2000);
          }
        }}
      >
        toggle dark mode
      </button>
    </div>
  );
}
