//React-Router-Dom
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
//Components & Pages
import Navbar from "./components/header/Navbar";
import Create from "./pages/Create";
import Edit from "./pages/Edit";
import Home from "./pages/Home";

//App Function
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
