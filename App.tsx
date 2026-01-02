import { Button } from "react-bootstrap";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

// Home Page
const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center vh-100 text-center bg-light"
      style={{ gap: "20px" }}
    >
      <h1 className="display-4">Welcome to My App</h1>
      <Button
        variant="dark"
        size="lg"
        onClick={() => navigate("/camera")}
      >
        Click Me
      </Button>
    </div>
  );
};

// Camera Page
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

// App with Routes
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/camera" element={<CameraPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;







// app.tsx is where we define our main application component and app is called in main.tsx to be rendered to the DOM
// app is called by main which is in turn is called by index.html where the app is injected into the root div