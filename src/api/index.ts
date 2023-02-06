import axios from "axios";
import { IComment } from "../types";

const baseURL = "http://localhost:4000";

export const instance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getCommentsAPI = async <ID extends number | undefined = undefined>(
  id?: ID,
): Promise<
  ID extends number ? IComment | undefined : IComment[] | undefined
> => {
  try {
    if (id) {
      const { data } = await instance.get<IComment>(`/comments/${id}`);
      return data as any;
    }
    const { data } = await instance.get<IComment[]>("/comments");
    return data as any;
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

// export const updateCommentAPI = async (comment: IComment) => {
//   const { data } = await instance.put<IComment>(
//     `/comments/${comment.id}`,
//     comment,
//   );
//   return data;
// };
