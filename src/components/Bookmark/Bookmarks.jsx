import Bookmark from "./Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="w-1/3 ">
      <h1 className="text-2xl text-green-600">Reading time: {readingTime}</h1>
      <h1 className="text-2xl text-blue-500">Bookmarks: {bookmarks.length}</h1>
      <div>
        {bookmarks.map((bookmark, idx) => (
          <Bookmark key={idx} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
