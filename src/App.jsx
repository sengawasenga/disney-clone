import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, Header } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
