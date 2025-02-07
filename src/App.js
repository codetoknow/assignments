import { useState } from 'react'; // import useState react hook

const App = () => {
  const [text, setText] = useState(""); // Initializing a state with empty string

  const onShowText = () => {
    setText("Hello, world!"); // Setting the state
  }

  return (
    <div>
      {/* Displaying the state that was set in state handler (above) */}
      <p>Click the button to view text here: <strong>{text}</strong></p> 

      {/* Clicking on button will call the handle function onShowText */}
      <button onClick={onShowText}>Click Me!</button>
    </div>
  );
}

export default App;
