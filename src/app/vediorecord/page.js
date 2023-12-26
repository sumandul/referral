"use client";
import React, { useRef, useState } from "react";
import Webcam from "react-webcam";

const VideoRecorder = () => {
  const [recording, setRecording] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [recordedVideoUrl, setRecordedVideoUrl] = useState(null);
  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);

  const startRecording = () => {
    setRecordedChunks([]);
    const stream = webcamRef.current.stream;

    mediaRecorderRef.current = new MediaRecorder(stream);

    mediaRecorderRef.current.ondataavailable = (event) => {
      if (event.data.size > 0) {
        setRecordedChunks((prev) => prev.concat(event.data));
      }
    };

    mediaRecorderRef.current.onstop = () => {
      const recordedBlob = new Blob(recordedChunks, { type: "video/webm" });
      const videoUrl = URL.createObjectURL(recordedBlob);
      setRecordedVideoUrl(videoUrl);
    };

    mediaRecorderRef.current.start();
    setRecording(true);
  };

  const stopRecording = () => {
    if (
      mediaRecorderRef.current &&
      mediaRecorderRef.current.state === "recording"
    ) {
      mediaRecorderRef.current.stop();
      setRecording(false);
    }
  };

  return (
    <div className="camView">
      <Webcam audio={true} ref={webcamRef} />

      {recording ? (
        <button onClick={stopRecording}>Stop Recording</button>
      ) : (
        <button onClick={startRecording}>Start Recording</button>
      )}

      {recordedVideoUrl && (
        <video controls width="640" height="480">
          <source src={recordedVideoUrl} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default VideoRecorder;
