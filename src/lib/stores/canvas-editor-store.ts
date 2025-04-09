import { create } from "zustand";
import { formatDate } from "../format-date";

type CanvasStore = {
  image: string;
  name: string;
  dateTime: string;
  content: string;
  voteCount: number;
  vote: "up" | "down" | "neutral";

  setImage: (image: string) => void;
  setName: (name: string) => void;
  setDateTime: (dateTime: string) => void;
  setContent: (content: string) => void;
  setVoteCount: (voteCount: number) => void;
  setVote: (vote: "up" | "down" | "neutral") => void;
};

export const useCanvasStore = create<CanvasStore>()((set) => ({
  image: "/fufufafa_icon.jpg",
  name: "fufufafa",
  dateTime: formatDate(new Date()),
  content: "Buat fitnah sekarang",
  voteCount: 0,
  vote: "neutral",

  setImage: (image: string) => set({ image }),
  setName: (name: string) => set({ name }),
  setDateTime: (dateTime: string) => set({ dateTime: formatDate(dateTime) }),
  setContent: (content: string) => set({ content }),
  setVoteCount: (voteCount: number) => set({ voteCount }),
  setVote: (vote: "up" | "down" | "neutral") => set({ vote }),
}));
