import { atom } from "recoil";

export const PageState = atom<number>({
  key: "PageState",
  default: 1,
});
