import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { PageList } from "../components";
import { CommentState } from "../states/CommentState";
import { PageState } from "../states/PageState";

function PageListContainer() {
  const commentList = useRecoilValue(CommentState);
  const [page, setPage] = useRecoilState(PageState);

  const handlePageChange = (pageNumber: number) => {
    setPage(pageNumber);
  };

  const PAGE_POST_COUNT = 5;

  return (
    <PageList
      page={page} // 현재 페이지
      totalCount={commentList ? commentList.length : 0} // 총 Comment 개수
      handlePageChange={handlePageChange} // 페이지 변경 핸들러
      pagePostCount={PAGE_POST_COUNT} // 한 페이지에 보여줄 Comment 개수
    />
  );
}

export default PageListContainer;
