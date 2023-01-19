import { atom } from "recoil";
import { IComment } from "../types";

export const CommentState = atom<IComment[]>({
  key: "CommentState",
  default: [],
});
