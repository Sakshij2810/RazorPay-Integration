import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import OrderSuccess from "./OrderSuccess.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paymentsuccess" element={<OrderSuccess />} />
      </Routes>
    </Router>
  );
}

export default App;
