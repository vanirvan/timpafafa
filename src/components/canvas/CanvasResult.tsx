import html2canvas from "html2canvas";
import { useRef } from "react";

import { formatDate } from "@/lib/format-date";
import { useCanvasStore } from "@/lib/stores/canvas-editor-store";

export default function CanvasResult() {
  const canvasRef = useRef(null);
  const canvasValue = useCanvasStore((state) => state);

  const handleDownload = async () => {
    const canvas = await html2canvas(canvasRef.current!);
    const imgData = canvas.toDataURL("image/jpg");

    const link = document.createElement("a");
    link.href = imgData;
    link.download = canvasValue.fileName;
    link.click();
  };

  return (
    <>
      <div className="rounded-md border border-[#d9d9d9]">
        <div ref={canvasRef} className="flex flex-col px-4 py-2">
          <div className="flex w-full items-center gap-2">
            <img src={canvasValue.image} className="size-7 rounded-full" />
            <div className="flex flex-col gap-0.5 text-xs">
              <h1 className="font-medium text-[#5c5c5c]">{canvasValue.name}</h1>
              <h2 className="text-[#b3b3b3]">
                {formatDate(canvasValue.dateTime)}
              </h2>
            </div>
          </div>
          <pre className="font-roboto w-full py-2 break-words text-[#5c5c5c]">
            {canvasValue.content}
          </pre>
        </div>
      </div>
      <button
        onClick={handleDownload}
        className="bg-primary text-primary-foreground hover:bg-primary/80 cursor-pointer rounded-md px-4 py-2 transition-colors"
      >
        Download
      </button>
    </>
  );
}
