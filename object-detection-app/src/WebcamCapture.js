// WebcamCapture.js

import ReactWebCam from 'react-webcam';
import React, { useEffect, useRef, useCallback } from 'react';
import Button from 'react-bootstrap/Button';

const WebcamCapture = ({ onCapture }) => {
    const webcamRef = useRef(null);

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        onCapture(imageSrc);
    }, [webcamRef, onCapture]);

    return (
        <div>
            {/* <ReactWebCam ref={webcamRef} />
            <button onClick={capture}>Capture</button> */}

            <ReactWebCam ref={webcamRef} />
            <Button onClick={capture} variant="primary" className="mt-2">
                Capture
            </Button>
        </div>


    );
};

export default WebcamCapture;
