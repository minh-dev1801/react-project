import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../store/paginationSlice";

const Pagination = () => {
  const { currentPage, totalPages } = useSelector((state) => state.pagination);
  const dispatch = useDispatch();

  const handleSetCurrentPage = (currentPage) => {
    dispatch(setCurrentPage(currentPage));
  };

  const handlePrePage = () => {
    if (currentPage === 1) return;
    dispatch(setCurrentPage(currentPage - 1));
  };

  const handleNextPage = () => {
    if (currentPage === totalPages) return;
    dispatch(setCurrentPage(currentPage + 1));
  };

  const renderPerPage = () => {
    const perPageList = [];

    for (let index = 1; index <= totalPages; index++) {
      perPageList.push(
        <li key={index}>
          <button
            className={`px-4 py-1  text-xl text-white ${
              currentPage === index ? "bg-red-700" : ""
            }`}
            onClick={() => handleSetCurrentPage(index)}
          >
            {index}
          </button>
        </li>
      );
    }

    return perPageList;
  };

  return (
    <ul className="flex w-[70%] mx-auto my-10 justify-center gap-3">
      <li>
        <button
          className="px-4 py-1 text-xl text-white mr-2"
          disabled={currentPage === 1}
          onClick={handlePrePage}
        >
          Pre
        </button>
      </li>

      {renderPerPage()}

      <li>
        <button
          className="px-4 py-1 text-xl text-white ml-2"
          disabled={currentPage === totalPages}
          onClick={handleNextPage}
        >
          Next
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
