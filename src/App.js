import { ReactMediaRecorder } from "react-media-recorder";
import Webcam from "react-webcam";

const videoConstraints = {
  width: 400,
  height: 300,
  facingMode: "user"
};

const Cam = ()=>{
  return(
    <Webcam
    audio={false}
    height={300}
    screenshotFormat="image/jpeg"
    width={400}
    videoConstraints={videoConstraints}
  >
    {/* {({ getScreenshot }) => (
      <button
        onClick={() => {
          const imageSrc = getScreenshot()
        }}
      >
        Capture photo
      </button>
    )} */}
  </Webcam>
  )
}

const ScreenRecordingInterface = () => {
  return (
    <ReactMediaRecorder
      screen
      render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
        <>
        <div>
          <p>Screen Recording Status: {status}</p>
          {status === "idle" && <button onClick={startRecording}>Start Screen Recording</button>}
          {status === "recording" && <button onClick={stopRecording}>Stop Screen Recording</button>}
          {status === "stopped" && <video src={mediaBlobUrl} controls autoPlay loop />}
        </div>
        <Cam/>
        </>
      )}
    />
  );
};
export default ScreenRecordingInterface;
