import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";

const Blogs = ({ handleBookMark, handleAddTime }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blog.json")
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div>
      <h1 className="text-2xl text-blue-400 mb-4">
        Number of Blogs: {blogs.length}
      </h1>

      <div>
        {blogs.map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
            handleBookMark={handleBookMark}
            handleAddTime={handleAddTime}
          ></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
