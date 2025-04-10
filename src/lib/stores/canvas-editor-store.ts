import { create } from "zustand";

import { formatDateInput } from "../format-date";

type CanvasValue = {
  image: string;
  name: string;
  dateTime: string;
  content: string;
  voteCount: number;
  fileName: string;
};

type CanvasStore = CanvasValue & {
  setImage: (image: string) => void;
  setName: (name: string) => void;
  setDateTime: (dateTime: string) => void;
  setContent: (content: string) => void;
  setVoteCount: (content: number) => void;
  setFileName: (content: string) => void;
};

const defaultCanvasValue: CanvasValue = {
  image: "/fufufafa_icon.jpg",
  name: "fufufafa",
  dateTime: formatDateInput(new Date()),
  content: `Ding ngoding ding ngoding ding ngoding ngocok standing.

Anomali pengkoding handal ini adalah entitas kontol yang buat status fesnuk ngoding terus, padahal tiap hari kerjaannya scroll fesnuk 8 jam ampe ngantuk.
Anomali ini menghindari ngoding pake otak dan ketergantungan sama AI buat ngoding, keliatan banget tololnya.
Anomali ini join group IMPEHANEN, saking keliatan banget kecanduan fesnuknya, anomali ini update README em de biar keliatan aktif di GItHub.
Bahasa pemrograman favoritnya gak bukan dan gak lain pake PHP, katanya biar bisa beli lambo, tapi buat beli kopi 80 ribu di hotel aja masih mikir-mikir.

Tag temen lu yang suka ngocok standing dan pake PHP.
King JS tetep nomor satu walaupun satu library rilis setiap jamnya.

Ding ngoding ding ngoding ding ngocok standing.`,
  fileName: "fufufafa.jpg",
  voteCount: 0,
};

export const useCanvasStore = create<CanvasStore>()((set) => ({
  image: defaultCanvasValue.image,
  name: defaultCanvasValue.name,
  dateTime: defaultCanvasValue.dateTime,
  content: defaultCanvasValue.content,
  voteCount: defaultCanvasValue.voteCount,
  setImage: (image: string) => set({ image }),
  setName: (name: string) => set({ name }),
  setDateTime: (dateTime: string) =>
    set({ dateTime: formatDateInput(dateTime) }),
  setContent: (content: string) => set({ content }),
  setVoteCount: (voteCount: number) => set({ voteCount }),

  fileName: "fufufafa.jpg",
  setFileName: (fileName: string) => set({ fileName }),
}));

export function useResetValue() {
  console.log("Reset");
  const canvasStore = useCanvasStore.getState();
  canvasStore.setImage(defaultCanvasValue.image);
  canvasStore.setName(defaultCanvasValue.name);
  canvasStore.setDateTime(defaultCanvasValue.dateTime);
  canvasStore.setContent(defaultCanvasValue.content);
  canvasStore.setFileName(defaultCanvasValue.fileName);
}
