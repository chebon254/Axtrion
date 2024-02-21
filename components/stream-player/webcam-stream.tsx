import React, { useEffect, useRef } from 'react';

interface WebcamStreamProps {
  onStream: (stream: MediaStream) => void;
}

const WebcamStream: React.FC<WebcamStreamProps> = ({ onStream }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const startStream = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          onStream(stream);
        }
      } catch (error) {
        console.error('Error accessing webcam and microphone:', error);
      }
    };

    startStream();

    return () => {
      // Cleanup: stop the stream when component unmounts
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach((track) => {
          track.stop();
        });
      }
    };
  }, [onStream]);

  return <video ref={videoRef} autoPlay muted />;
};

export default WebcamStream;
