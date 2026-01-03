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
        <div
            style={{
                width: "100vw",
                height: "100vh",
                position: "relative", // for absolute buttons
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#000",
                padding: "10px",
                boxSizing: "border-box",
            }}
        >
            {/* Camera Video */}
            {stream ? (
                <video
                    autoPlay
                    playsInline
                    ref={video => {
                        if (video) video.srcObject = stream;
                    }}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "12px",
                    }}
                />
            ) : (
                <p style={{ color: "#fff", textAlign: "center" }}>
                    Requesting camera access...
                </p>
            )}

            {/* Bottom Buttons */}
            <div
                style={{
                    position: "absolute",
                    bottom: "20px",
                    left: 0,
                    right: 0,
                    display: "flex",
                    justifyContent: "center",
                    gap: "20px",
                }}
            >
                {/* Capture Button */}
                <button
                    style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        border: "2px solid rgba(255,255,255,0.7)",
                        backgroundColor: "transparent",
                        color: "#fff",
                        fontWeight: "bold",
                        cursor: "pointer",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    📸
                </button>

                {/* Switch Camera Button */}
                <button
                    style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        border: "2px solid rgba(255,255,255,0.7)",
                        backgroundColor: "transparent",
                        color: "#fff",
                        fontWeight: "bold",
                        cursor: "pointer",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    🔄
                </button>

                {/* Another Function Button (e.g., flash or settings) */}
                <button
                    style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        border: "2px solid rgba(255,255,255,0.7)",
                        backgroundColor: "transparent",
                        color: "#fff",
                        fontWeight: "bold",
                        cursor: "pointer",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    ⚡
                </button>
            </div>
        </div>
    );
};

export default CameraPage;

