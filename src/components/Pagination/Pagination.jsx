import React from "react";

const Pagination = ({ currentPage, setPage, totalPages }) => {
  const handlePrev = () => {
    if (currentPage != 1) {
      setPage((prevPage) => prevPage - 1);
    }
    console.log("Prev");
  };

  const handleNext = () => {
    if (currentPage != totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
    console.log("Next", setPage);
  };

  if (totalPages === 0) return null;
  return (
    <div className=" text-black flex items-center gap-4">
      <button
        className="bg-black py-1 hover:bg-gray-900 font-bold text-white px-5 rounded-2xl"
        onClick={handlePrev}
      >
        Prev
      </button>
      <p className="bg-black py-1 font-bold text-white  px-5 rounded-2xl">
        {currentPage}
      </p>
      <button
        className="bg-black py-1 font-bold  hover:bg-gray-900 text-white px-5 rounded-2xl"
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
