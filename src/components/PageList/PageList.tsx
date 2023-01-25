import React from "react";
import Pagination from "react-js-pagination";
import * as S from "./index";

function PageList({
  page,
  totalCount,
  pagePostCount,
  handlePageChange,
}: {
  page: number;
  totalCount: number;
  pagePostCount: number;
  handlePageChange: (pageNumber: number) => void;
}) {
  return (
    <S.PageListStyle>
      <S.Page active>
        <Pagination
          activePage={page}
          itemsCountPerPage={pagePostCount}
          totalItemsCount={totalCount}
          pageRangeDisplayed={5}
          prevPageText="<"
          nextPageText=">"
          onChange={handlePageChange}
        />
      </S.Page>
    </S.PageListStyle>
  );
}

export default PageList;
