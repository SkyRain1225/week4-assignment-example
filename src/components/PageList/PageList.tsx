import React from "react";
import * as S from "./index";

function PageList() {
  const pageArray = [];

  pageArray.push(
    // 임시로 페이지 하나만 설정했습니다.
    <S.Page key="1" active>
      1
    </S.Page>,
  );

  return <S.PageListStyle>{pageArray}</S.PageListStyle>;
}

export default PageList;
