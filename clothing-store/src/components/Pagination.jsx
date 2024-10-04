import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../store/paginationSlice";
import {
  FaChevronLeft,
  FaChevronRight,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from "react-icons/fa";

const Pagination = () => {
  const { currentPage, totalPages, pagesAroundCurrent } = useSelector(
    (state) => state.pagination
  );
  const dispatch = useDispatch();

  const handleSetCurrentPage = (currentPage) => {
    dispatch(setCurrentPage(currentPage));
  };

  const handlePrePage = () => {
    if (currentPage === 1) return;
    dispatch(setCurrentPage(currentPage - 1));
  };

  const handleFirstPage = () => {
    if (currentPage === 1) return;
    dispatch(setCurrentPage(1));
  };

  const handleNextPage = () => {
    if (currentPage === totalPages) return;
    dispatch(setCurrentPage(currentPage + 1));
  };

  const handleLastPage = () => {
    if (currentPage === totalPages) return;
    dispatch(setCurrentPage(totalPages));
  };

  const renderPage = (page, isActive) => {
    return (
      <li key={page}>
        <button
          className={`px-4 py-1 text-xl text-white rounded-md duration-100 ${
            isActive ? "bg-red-700" : "hover:bg-sub-4-brand"
          }`}
          onClick={() => handleSetCurrentPage(page)}
        >
          {page}
        </button>
      </li>
    );
  };

  const renderDot = (page) => {
    return (
      <li key={page}>
        <span className="px-2 text-xl text-white hover:cursor-default">
          ...
        </span>
      </li>
    );
  };

  const genaralDisplayListPages = () => {
    const listPage = [];
    const leftCurPage = currentPage - pagesAroundCurrent;
    const rightCurPage = currentPage + pagesAroundCurrent;
    const minPages = 2 * (pagesAroundCurrent + 2);

    for (let page = 1; page <= totalPages; page++) {
      const isActive = currentPage === page;
      if (totalPages > minPages) {
        if (
          page === 1 ||
          page === totalPages ||
          (page >= leftCurPage && page <= rightCurPage)
        ) {
          listPage.push(renderPage(page, isActive));
        } else if (
          (page === leftCurPage - 1 && leftCurPage > 2) ||
          (page === rightCurPage + 1 && rightCurPage < totalPages - 1)
        ) {
          listPage.push(renderDot(page));
        }
      } else {
        listPage.push(renderPage(page, isActive));
      }
    }

    return listPage;
  };

  return (
    <ul className="flex w-[70%] mx-auto my-10 justify-center items-center gap-3">
      <li>
        <button
          className={`px-4 py-2 text-xl text-white rounded-md duration-100 ${
            currentPage !== 1 && "hover:bg-sub-4-brand"
          }`}
          disabled={currentPage === 1}
          onClick={handleFirstPage}
        >
          <FaAngleDoubleLeft />
        </button>
      </li>
      <li>
        <button
          className={`px-4 py-2 text-xl text-white mr-2 rounded-md duration-100 ${
            currentPage === 1 ? "hover:bg-none" : "hover:bg-sub-4-brand"
          }`}
          disabled={currentPage === 1}
          onClick={handlePrePage}
        >
          <FaChevronLeft />
        </button>
      </li>

      {genaralDisplayListPages()}

      <li>
        <button
          className={`px-4 py-2 text-xl text-white ml-2 rounded-md duration-100 ${
            currentPage !== totalPages && "hover:bg-sub-4-brand"
          }`}
          disabled={currentPage === totalPages}
          onClick={handleNextPage}
        >
          <FaChevronRight />
        </button>
      </li>
      <li>
        <button
          className={`px-4 py-2 text-xl text-white ml-2 rounded-md duration-100 ${
            currentPage !== totalPages && "hover:bg-sub-4-brand"
          }`}
          disabled={currentPage === totalPages}
          onClick={handleLastPage}
        >
          <FaAngleDoubleRight />
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
