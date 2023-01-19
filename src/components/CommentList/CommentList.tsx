import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { getCommentsAPI } from "../../api";
import { CommentState } from "../../states/CommentState";
import { IComment } from "../../types";
import * as S from "./index";

function CommentList() {
  const [commentList, setCommentList] = useRecoilState(CommentState);

  useEffect(() => {
    getCommentsAPI().then((res) => {
      if (res) setCommentList(res);
    });
  }, [setCommentList]);

  return (
    <>
      {commentList.map((comment: IComment) => (
        <S.Comment key={comment.id}>
          <img src={comment.profile_url} alt="" />

          {comment.author}

          <S.CreatedAt>{comment.createdAt}</S.CreatedAt>

          <S.Content>{comment.content}</S.Content>

          <S.Button>
            <span>수정</span>
            <span>삭제</span>
          </S.Button>

          <hr />
        </S.Comment>
      ))}
    </>
  );
}

export default CommentList;
