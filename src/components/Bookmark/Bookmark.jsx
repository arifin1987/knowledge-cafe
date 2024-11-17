const Bookmark = ({ bookmark }) => {
  return (
    <div className="bg-slate-200 p-4 m-4">
      <h1>{bookmark.title}</h1>
    </div>
  );
};

export default Bookmark;
