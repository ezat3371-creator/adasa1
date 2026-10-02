import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import Blog from "./pages/Blog.jsx";
import BlogDetails from "./pages/BlogDetails.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  // الداتا بنحمّلها هنا مرة واحدة
  // وبنبعتها للصفحات كلها عن طريق props

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/data/posts.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("مش قادرين نحمّل التدوينات دلوقتي");
        }

        return response.json();
      })
      .then((data) => {
        // الملف ممكن يكون Array على طول أو Object جواه posts
        const list = data.posts ? data.posts : data;

        setPosts(list);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <BrowserRouter>
      <Navbar />

      <main className="min-h-[70vh] pt-20">
        <Routes>
          <Route
            path="/"
            element={<Home posts={posts} loading={loading} error={error} />}
          />

          <Route
            path="/blog"
            element={<Blog posts={posts} loading={loading} error={error} />}
          />

          <Route
            path="/blog/:id"
            element={
              <BlogDetails posts={posts} loading={loading} error={error} />
            }
          />

          <Route path="/about" element={<About posts={posts} />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
