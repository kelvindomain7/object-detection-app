// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



// App.js

import React, { useState } from 'react';
import WebcamCapture from './WebcamCapture';
import ObjectDetection from './ObjectDetection';
// import './styles.css'; // Import your custom CSS file
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const [detections, setDetections] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  const handleCapture = (imageSrc) => {
    setImageSrc(imageSrc);
    setDetections([]); // Reset detections when capturing a new image
  };

  const handleDetection = (detections) => {
    setDetections(detections);
    if (detections.length > 0) {
      setShowAlert(true); // Show alert when detections are available
    }
  };

  return (
    <div className="container">
      <h1>Real-Time Object Detection with Event Annotation</h1>
      <div className="webcam-container">
        <WebcamCapture onCapture={handleCapture} />
      </div>
      {imageSrc && (
        <ObjectDetection imageSrc={imageSrc} onDetection={handleDetection} />
      )}
      {showAlert && (
        <div className="alert alert-success" role="alert">
          Detections Found! {detections.length} objects detected.
          <button
            type="button"
            className="close"
            aria-label="Close"
            onClick={() => setShowAlert(false)}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      )}
      <div className="mt-4">
        <h2>Detections:</h2>
        <ul className="detections-list">
          {detections.map((detection, index) => (
            <li key={index}>{`${detection.class} - ${Math.round(
              detection.score * 100
            )}%`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;


