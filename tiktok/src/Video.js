import { useRef, forwardRef, useImperativeHandle } from "react";
import video from "./video/video.mp4";

// thằng ref này là props được truyền từ app xuống
function Video(props, ref) {
  // thằng videoRef này là biến cục bộ dùng để truy cập thằng video trong component
  const videoRef = useRef();

  useImperativeHandle(ref, () => ({
    play() {
      videoRef.current.play();
    },
    pause() {
      videoRef.current.pause();
    },
  }));

  return <video ref={videoRef} src={video} width={300} />;
}

export default forwardRef(Video);
