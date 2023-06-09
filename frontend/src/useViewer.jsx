import React, { useEffect, useRef } from "react";
import { useViewer } from "react-kinesis-webrtc";

export default function Viewer() {
  const config = {
    credentials: {
      accessKeyId: "",
      secretAccessKey: "",
    },
    channelARN: "arn:aws:kinesisvideo:ap-northeast-2:046773677812:channel/channel-name/1682054445883",
    region: "ap-northeast-2",
    media: {
      audio: true,
      video: true,
    },
  };

  const {
    error,
    peer: { media } = {},
  } = useViewer(config);

  const videoRef = useRef();

  // Assign the peer media stream to a video source
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.srcObject = media;
    }
  }, [media, videoRef]);

  // Display an error
  if (error) {
    return <p>An error occurred: {error.message}</p>;
  }

  // Display the peer media stream
  return <video autoPlay ref={videoRef} />;
}