import React from 'react';

interface LiveVideoProps {
  stream: MediaStream;
}

const LiveVideo: React.FC<LiveVideoProps> = ({ stream }) => {
  return <video className='w-full' ref={(video) => { if (video) video.srcObject = stream; }} autoPlay />;
};

export default LiveVideo;
