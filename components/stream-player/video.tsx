// components/stream-player/video.tsx

import React, { useState } from 'react';
import { ConnectionState } from 'livekit-client';
import { createIngress } from '@/actions/ingress';
import { IngressInput } from "livekit-server-sdk";

import WebcamStream from './webcam-stream';
import LiveVideo from './live-video';

interface VideoProps {
  hostName: string;
  hostIdentity: string;
}

const Video: React.FC<VideoProps> = ({ hostName, hostIdentity }) => {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [connectionState, setConnectionState] = useState<ConnectionState>(ConnectionState.Disconnected);
  const [isStreaming, setIsStreaming] = useState<boolean>(false);

  const handleStream = (stream: MediaStream) => {
    setStream(stream);
  };

  const handleStartStream = async () => {
    try {
      setIsStreaming(true);
      await createIngress(IngressInput.RTMP_INPUT); // Set ingress type to RTMP
    } catch (error) {
      console.error('Failed to start stream:', error);
    }
  };

  const handleEndStream = () => {
    // Add logic to end the stream
    setIsStreaming(false);
  };

  return (
    <div className="aspect-video border-b group relative">
      {stream ? (
        <>
          <LiveVideo stream={stream} />
          {isStreaming ? (
            <button 
              onClick={handleEndStream} 
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded m-4 inline-block"
            >
              End Stream
            </button>
          ) : (
            <button 
              onClick={handleStartStream} 
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded m-4 inline-block"
            >
              Start Stream
            </button>
          )}
        </>
      ) : (
        <WebcamStream onStream={handleStream} />
      )}
    </div>
  );
};

export default Video;
