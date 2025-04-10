import html2canvas from "html2canvas";
import { useRef } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
          <p className="mt-4 ml-auto flex flex-col text-end text-xs text-[#b3b3b3]">
            Content above is fake and generated by{" "}
            <span className="text-[#c74661]">
              https://timpafafa.vanirvan.my.id
            </span>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col gap-0.5">
          <Label>Save File Name</Label>
          <Input
            type="text"
            value={canvasValue.fileName}
            placeholder="Enter custom name"
            onChange={(e) => canvasValue.setFileName(e.target.value)}
            className="w-full"
          />
        </div>
        <button
          onClick={handleDownload}
          className="bg-primary text-primary-foreground hover:bg-primary/80 mt-auto w-full cursor-pointer rounded-md px-4 py-2 transition-colors"
        >
          Download
        </button>
      </div>
    </>
  );
}
