// import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Card } from "./components/Card";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="tweets" element={<Card />} />
        </Route>
      </Routes>
      {/* <Card /> */}
    </>
  );
}

export default App;
