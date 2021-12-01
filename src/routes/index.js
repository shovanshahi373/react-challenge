import Home from "./App";
import Profile from "./Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Use something like react-router-dom to manage multiple pages/routes

const index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>404 page not found!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default index;
