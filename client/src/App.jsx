import { Button, HStack, Theme } from "@chakra-ui/react";
import "./App.css";
import Home from "./components/pages/Home";
import Job from "./components/pages/Job";
import { Route, Routes } from "react-router-dom";
import Blog from "./components/pages/Blog.jsx";
import BlogDetail from "./components/pages/BlogDetail";

function App() {
  return (
    <>
      <Theme appearance="light">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/job" element={<Job />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} /> 
        </Routes>
      </Theme>
    </>
  );
}

export default App;
