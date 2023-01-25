import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { getCommentsAPI, deleteCommentAPI } from "../../api";
import { CommentState } from "../../states/CommentState";
import { IComment } from "../../types";
import * as S from "./index";

function CommentList() {
  const [commentList, setCommentList] = useRecoilState(CommentState);

  useEffect(() => {
    getCommentsAPI().then((res) => {
      if (res) setCommentList(res.reverse());
    });
  }, [setCommentList]);

  const handleEdit = (id: number) => () => {
    console.log("수정", id);
  };

  const handleDelete = (id: number) => () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      deleteCommentAPI(id).then((res) => {
        if (res) {
          setCommentList(
            commentList.filter((comment: IComment) => comment.id !== id),
          );
        }
      });
    }
  };

  return (
    <>
      {commentList.map((comment: IComment) => (
        <S.Comment key={comment.id}>
          <img src={comment.profile_url} alt="" />

          {comment.author}

          <S.CreatedAt>{comment.createdAt}</S.CreatedAt>

          <S.Content>{comment.content}</S.Content>

          <S.Button>
            <button type="button" onClick={handleEdit(comment.id)}>
              수정
            </button>
            <button type="button" onClick={handleDelete(comment.id)}>
              삭제
            </button>
          </S.Button>

          <hr />
        </S.Comment>
      ))}
    </>
  );
}

export default CommentList;
