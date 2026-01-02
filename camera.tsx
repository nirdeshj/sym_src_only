import { useEffect, useState } from "react";

const CameraPage = () => {
    const [stream, setStream] = useState<MediaStream | null>(null);

    useEffect(() => {
        const getCamera = async () => {
            try {
                const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
                setStream(mediaStream);
            } catch (err) {
                console.error("Camera access denied:", err);
            }
        };
        getCamera();

        return () => {
            stream?.getTracks().forEach(track => track.stop());
        };
    }, []);

    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100 text-center">
            <h2>Camera Page</h2>
            {stream ? (
                <video
                    autoPlay
                    playsInline
                    ref={video => {
                        if (video && stream) video.srcObject = stream;
                    }}
                    style={{ borderRadius: "12px", width: "80%", maxWidth: "400px" }}
                />
            ) : (
                <p>Requesting camera access...</p>
            )}
        </div>
    );
};

export default CameraPage;
