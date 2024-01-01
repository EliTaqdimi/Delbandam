import * as React from "react";
import { AudioRecorder } from "react-audio-voice-recorder";
import axios from 'axios';


export default function FileRecord() {
  const [audioLink, setAudioLink] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleFileRecord = (file) => {
    setLoading(true);
    const formData = new FormData();
    const fileName = "audio" + Date.now() + ".webm";
    formData.append("record", new File([file], fileName));
    axios
      .post(
        "http://api.babyyodas.io:1234/api/mobile/v1/auth/customers/voice",
        formData,
        {
          headers: {
            contentType: "multipart/form-data",
            "x-app-version": "0.07",
            "x-phone-model": "{{phoneModel}}",
            "x-os-version": "android 11",
            "x-language": "{{language}}",
          },
        }
      )
      .then((response) => {
        setAudioLink(response.data.link);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
      
  };

  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
    document.body.appendChild(audio);
    handleFileRecord(blob);
  };

  return (
    <>
      <div>
        {loading ? (
          <div>loading...</div>
         
        ) : (
          <AudioRecorder
            onRecordingComplete={addAudioElement}
            audioTrackConstraints={{
              noiseSuppression: true,
              echoCancellation: true,
              autoGainControl: true,
              
              // channelCount  : true,
              // deviceId  : true,
              // groupId  : true,
              // sampleRate  : true,
              // sampleSize: false,
            }}
            onNotAllowedOrFound={(err) => console.table(err)}
            downloadOnSavePress={true}
            downloadFileExtension="webm"
            mediaRecorderOptions={{
              audioBitsPerSecond: 128000,
            }}
            showVisualizer={true}
          />
        )}

        {audioLink !== "" && (
          <audio
            style={{ display: "none" }}
            autoPlay={true}
            controls={true}
            src={audioLink}
          />
        )}
      </div>
    </>
  );
}