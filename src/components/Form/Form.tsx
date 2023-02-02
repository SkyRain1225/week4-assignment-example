import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRecoilState } from "recoil";
import { CommentState } from "../../states/CommentState";
import { postCommentAPI } from "../../api";
import { IComment } from "../../types";
import * as S from "./Form.styled";

function Form() {
  const [commentList, setCommentList] = useRecoilState(CommentState);

  const { register, handleSubmit, reset } = useForm<IComment>();

  const onSubmit: SubmitHandler<IComment> = (data) => {
    postCommentAPI(data).then((res) => {
      if (res) {
        setCommentList([res, ...commentList]);
        reset();
      }
    });
  };

  return (
    <S.FormStyle>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <button type="submit">등록</button>
      </form>
    </S.FormStyle>
  );
}

export default Form;
