import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./functions/ScrollToTop/ScrollToTop";
import Intro from "./pages/Intro/Intro";
import Profile from "./pages/Profile/Profile";
import Skills from "./pages/Skills/Skills";
import Works from "./pages/Works/Works";

export default function App() {
  useEffect(() => {
    // 브라우저의 스크롤 복원 기능 비활성화
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  return (
    <div className="app">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/works" element={<Works />} />
      </Routes>
    </div>
  );
}
