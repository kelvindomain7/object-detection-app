// ObjectDetection.js

import React, { useEffect, useRef } from 'react';
import * as cocoSsd from '@tensorflow-models/coco-ssd';

const ObjectDetection = ({ imageSrc, onDetection }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const runObjectDetection = async () => {
            const imageElement = document.createElement('img');
            imageElement.src = imageSrc;
            const net = await cocoSsd.load();
            const detections = await net.detect(imageElement);
            onDetection(detections);
        };

        if (imageSrc) {
            runObjectDetection();
        }
    }, [imageSrc, onDetection]);

    return <canvas ref={canvasRef} />;
};

export default ObjectDetection;
