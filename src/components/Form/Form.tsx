import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue } from "recoil";
import { postCommentAPI, updateCommentAPI } from "../CommentList";
import { CommentState } from "../../states/CommentState";
import { EditState, EditModeState, EditNumber } from "../../states/EditState";
import { IComment } from "../../types";
import * as S from "./Form.styled";

function Form() {
  const [commentList, setCommentList] = useRecoilState(CommentState);
  const editCommentInfo = useRecoilValue(EditState);
  const [editMode, setEditMode] = useRecoilState(EditModeState);
  const [editNumber, setEditNumber] = useRecoilState(EditNumber);

  const { register, handleSubmit, reset } = useForm<IComment>();

  const onSubmit: SubmitHandler<IComment> = (data) => {
    const submitFetch = async () => {
      const res = await postCommentAPI(data);
      if (res) {
        setCommentList([res, ...commentList]);
        reset();
      }
    };
    submitFetch();
  };

  const handleReset = () => {
    reset({
      profile_url: "",
      author: "",
      content: "",
      createdAt: "",
    });
    setEditMode(false);
  };

  const onEditSubmit: SubmitHandler<IComment> = (data) => {
    const editFetch = async () => {
      const res = await updateCommentAPI(editNumber!, data);
      if (res) {
        setCommentList(
          commentList.map((comment: IComment) =>
            comment.id === editNumber ? { ...comment, ...data } : comment,
          ),
        );
        handleReset();
      }
    };
    editFetch();
  };

  useEffect(() => {
    if (editMode) {
      reset(editCommentInfo);
    }
  }, [editMode, editCommentInfo, reset]);

  return (
    <S.FormStyle>
      <form
        onSubmit={
          editMode ? handleSubmit(onEditSubmit) : handleSubmit(onSubmit)
        }
      >
        <input
          type="text"
          id="profile_url"
          placeholder="https://picsum.photos/id/1/50/50"
          autoComplete="off"
          required
          {...register("profile_url")}
        />
        <br />
        <input
          type="text"
          id="author"
          placeholder="작성자"
          autoComplete="off"
          {...register("author")}
        />
        <br />
        <textarea
          id="content"
          placeholder="내용"
          autoComplete="off"
          required
          {...register("content")}
        />
        <br />
        <input
          type="text"
          id="createdAt"
          placeholder="2020-05-30"
          autoComplete="off"
          required
          {...register("createdAt")}
        />
        <br />
        {editMode ? (
          <>
            <button type="submit">수정</button>
            <button type="button" onClick={handleReset}>
              취소
            </button>
          </>
        ) : (
          <button type="submit">등록</button>
        )}
      </form>
    </S.FormStyle>
  );
}

export default Form;
