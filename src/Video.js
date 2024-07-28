import { forwardRef, useImperativeHandle, useRef } from "react";
import SaiGonSimpleLove from "./videos/SaiGonSimpleLove.mp4";

function Video(props, ref) {
    const videoRef = useRef();
    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play();
        },
        pause() {
            videoRef.current.pause();
        },
    }));
    console.log(ref);

    return <video ref={videoRef} src={SaiGonSimpleLove} width="600px" />;
}

export default forwardRef(Video);
