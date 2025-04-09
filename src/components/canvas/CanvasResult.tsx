import { useCanvasStore } from "@/lib/stores/canvas-editor-store";
import html2canvas from "html2canvas";
import { useRef } from "react";

export default function CanvasResult() {
  const canvasRef = useRef(null);
  const canvasValue = useCanvasStore((state) => state);

  const handleDownload = async () => {
    const canvas = await html2canvas(canvasRef.current!);
    const imgData = canvas.toDataURL("image/jpg");

    const link = document.createElement("a");
    link.href = imgData;
    link.download = "section.jpg";
    link.click();
  };

  return (
    <>
      <div ref={canvasRef} className="flex flex-col border-2 p-8">
        <div className="flex items-center gap-2 w-full">
          <img src={canvasValue.image} className="size-7 rounded-full" />
          <div className="flex flex-col gap-0.5 text-xs">
            <h1 className="text-[#5c5c5c] font-medium">{canvasValue.name}</h1>
            <h2 className="text-[#b3b3b3]">{canvasValue.dateTime}</h2>
          </div>
        </div>
        <pre className="w-full break-words py-2 text-[#5c5c5c] font-roboto">
          {canvasValue.content}
        </pre>
      </div>
      <button onClick={handleDownload} className="border-2 mt-12 w-full">
        Download
      </button>
    </>
  );
}
