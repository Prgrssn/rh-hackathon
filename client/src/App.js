import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import Home from "./pages/HomePage/Home";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route element={<Home />} path="/" exact />
      </Routes>
    </Router>
  );
}

export default App;
