import { atom } from "recoil";
import { IComment } from "../types";

export const EditState = atom<IComment>({
  key: "EditState",
  default: undefined,
});

export const EditModeState = atom<boolean>({
  key: "EditModeState",
  default: false,
});

export const EditNumber = atom<number | undefined>({
  key: "EditNumber",
  default: undefined,
});
