
import { Button } from "react-bootstrap";

const App = () => {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center vh-100 text-center bg-light"
      style={{ gap: "20px" }} // space between title, message, and button
    >

      <h1 className="display-4">Welcome to My App</h1>





      <Button variant="dark" size="lg">
        Click Me
      </Button>
    </div>
  );
};

export default App;


// app.tsx is where we define our main application component and app is called in main.tsx to be rendered to the DOM
// app is called by main which is in turn is called by index.html where the app is injected into the root div