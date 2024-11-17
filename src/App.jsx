import { useState } from "react";
import Blogs from "./components/Blogs/Blogs";

import Header from "./components/Header/Header";
import Bookmarks from "./components/Bookmark/Bookmarks";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setreadingTime] = useState(0);
  console.log("clicked time", readingTime);

  const handleBookMark = (blog) => {
    const newBookmark = [...bookmarks, blog];
    setBookmarks(newBookmark);
  };

  const handleAddTime = (time, id) => {
    const newTime = readingTime + time;
    setreadingTime(newTime);
    const remaining = bookmarks.filter((bookmark) => bookmark.id !== id);
    setBookmarks(remaining);
  };
  return (
    <div className="max-w-7xl mx-auto">
      <Header></Header>
      <div className="flex">
        <Blogs
          handleBookMark={handleBookMark}
          handleAddTime={handleAddTime}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </div>
  );
}

export default App;
