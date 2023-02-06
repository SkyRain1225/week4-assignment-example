import axios from "axios";
import { IComment } from "../../types";

const baseURL = "http://localhost:4000";

export const instance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getCommentsAPI = async (id?: number) => {
  try {
    if (id) {
      const { data } = await instance.get<IComment[]>(`/comments/${id}`);
      return data;
    }
    const { data } = await instance.get<IComment[]>("/comments");
    return data;
  } catch {
    console.log("get failed");
  }
};

export const postCommentAPI = async (comment: IComment) => {
  try {
    const { data } = await instance.post<IComment>("/comments", comment);
    return data;
  } catch {
    console.log("post failed");
  }
};

export const deleteCommentAPI = async (id: number) => {
  try {
    const { data } = await instance.delete<IComment>(`/comments/${id}`);
    return data;
  } catch {
    console.log("delete failed");
  }
};

export const updateCommentAPI = async (id: number, comment: IComment) => {
  const { data } = await instance.put<IComment>(`/comments/${id}`, {
    ...comment,
  });
  return data;
};
