import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import Home from "./pages/HomePage/Home";
import Quiz from "./pages/QuizPage/Quiz";
import Success from "./pages/SuccessPage/Success.JS";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route element={<Home />} path="/" exact />
        <Route element={<Quiz />} path="/quiz" />
        <Route element={<Success />} path="/success" />
      </Routes>
    </Router>
  );
}

export default App;
