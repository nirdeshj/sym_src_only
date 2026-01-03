import { Button } from "react-bootstrap";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import CameraPage from "./camera";



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