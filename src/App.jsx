import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router";

import AboutPage from "./pages/AboutPage.jsx";
import MainLayout from "./components/MainLayout.jsx";
import { FeedbackProvider } from "./context/FeedbackContext.jsx";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<MainLayout />} />
        </Routes>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
