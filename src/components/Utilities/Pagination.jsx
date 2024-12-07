const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };
  const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
    scrollTop();
  };

  const handlePrevPage = () => {
    setPage((prevState) => prevState - 1);
    scrollTop();
  };
  return (
    <div className="flex justify-center items-center py-4 px-2 text-lg text-color-primary gap-4">
      {page <= 1 ? null : (
        <button
          onClick={handlePrevPage}
          className="transition-all hover:text-color-accent border p-2 rounded-md"
        >
          Prev
        </button>
      )}

      <p className="transition-all hover:text-color-accent border px-4 py-2 rounded-md">
        {page} of {lastPage}
      </p>
      {page >= lastPage ? null : (
        <button
          onClick={handleNextPage}
          className="transition-all hover:text-color-accent border p-2 rounded-md"
        >
          Next
        </button>
      )}
    </div>
  );
};
export default Pagination;
