import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { deleteCommentAPI, getCommentsAPI } from "../../api";
import { CommentState } from "../../states/CommentState";
import { PageState } from "../../states/PageState";
import { IComment } from "../../types";
import * as S from "./CommentList.styled";

function CommentList() {
  const [commentList, setCommentList] = useRecoilState(CommentState);
  const page = useRecoilValue(PageState);
  const [sliceCommentList, setSliceCommentList] = useState<
    IComment[] | undefined
  >(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getCommentsAPI();
      if (res) setCommentList(res.reverse());
    };
    fetchData();
  }, [setCommentList]);

  useEffect(() => {
    if (commentList) {
      const start = (page - 1) * 5;
      const end = page * 5;
      setSliceCommentList(commentList.slice(start, end));
    }
  }, [commentList, page]);

  const handleEdit = (id: number) => () => {
    console.log("수정", id);
    getCommentsAPI(id).then((res) => {
      console.log(res);
    });
  };

  const handleDelete = (id: number) => () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      const deleteFetch = async () => {
        const res = await deleteCommentAPI(id);
        if (res) {
          setCommentList(
            commentList.filter((comment: IComment) => comment.id !== id),
          );
        }
      };
      deleteFetch();
    }
  };

  if (!sliceCommentList) return <div>Loading...</div>;
  return (
    <>
      {sliceCommentList.map((comment: IComment) => (
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
