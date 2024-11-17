import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleBookMark, handleAddTime }) => {
  const {
    id,
    title,
    cover,
    author,
    author_img,
    reading_time,
    posted_date,
    hashtags,
  } = blog;

  return (
    <div className="w-2/3">
      <img src={cover} alt="" />
      <div className="flex justify-between">
        <div className="flex justify-between gap-6">
          <img className="w-7" src={author_img} alt="" />
          <div>
            <h4>{author}</h4>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span className="mx-10">{reading_time} min read</span>
          <button
            onClick={() => handleBookMark(blog)}
            className="text-4xl my-2 text-red-500"
          >
            <FaBookmark />
          </button>
        </div>
      </div>
      <p className="text-2xl">{title}</p>
      <div>
        {hashtags.map((hash, idx) => (
          <span key={idx}>{hash}</span>
        ))}
      </div>
      <button
        onClick={() => handleAddTime(reading_time, id)}
        className="text-green-500 px-2 bg-slate-500 m-2"
      >
        Mark as read
      </button>
    </div>
  );
};

export default Blog;
