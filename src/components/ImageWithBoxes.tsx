import React, { useRef, useEffect } from 'react';
import {baseURL} from "@/lib/axios";

interface Props {
  imageUrl: string;
  boxes: number[][];
  labels: number[];
}

const BOXES = [
  [
    365.49945068359375,
    102.0856704711914,
    444.2333984375,
    401.4889831542969
  ],
  [
    158.7144012451172,
    72.0582275390625,
    254.40037536621094,
    396.2348937988281
  ],
  [
    279.4055480957031,
    96.48919677734375,
    354.4631042480469,
    395.5539245605469
  ]
]

const LABELS = [
  0.992234,
  0.990558,
  0.989345
]
const ImageWithBoxes: React.FC<Props> = ({ imageUrl = "static/1712191729491.jpg", boxes = BOXES, labels = LABELS }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    if (!ctx) return;

    const image = new Image();
    image.onload = () => {
      let newWidth, newHeight;

      // Calculate new dimensions while maintaining aspect ratio
      newWidth = 640;
      newHeight = 480;

      canvas.width = newWidth;
      canvas.height = newHeight;
      ctx.drawImage(image, 0, 0, newWidth, newHeight);

      // Draw bounding boxes and labels
      for (let i = 0; i < boxes.length; i++) {
        const bbox = boxes[i];
        const label = labels[i].toFixed(4);

        // Convert pixel sizes to canvas sizes
        const canvasX = bbox[0];
        const canvasY = bbox[1]
        const canvasWidth = bbox[2] - bbox[0]
        const canvasHeight = bbox[3] - bbox[1]

        ctx.fillStyle = 'rgba(255, 255, 0, 0.5)';
        ctx.fillRect(canvasX-2, canvasY, ctx.measureText(label).width + 10, -20);

        ctx.strokeStyle = 'yellow';
        ctx.lineWidth = 2;
        ctx.strokeRect(canvasX, canvasY, canvasWidth, canvasHeight);

        ctx.font = '16px Arial';
        ctx.fillStyle = 'blue';
        ctx.fillText(label, canvasX, canvasY - 5);
      }
    };

    image.src = `${baseURL}${imageUrl}`;
  }, [imageUrl, boxes, labels]);

  return (
    <div className="flex justify-center border-8 rounded-md border-amber-300/20">
      <canvas ref={canvasRef} className="mx-auto"/>
    </div>
  );
};

export default ImageWithBoxes;
