import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import {
  useCanvasStore,
  useResetValue,
} from "@/lib/stores/canvas-editor-store";

export default function CanvasEditor() {
  const canvasValue = useCanvasStore((state) => state);

  const changeImageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    canvasValue.setImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="flex flex-col gap-0.5">
        <Label>Custom Image</Label>
        <Input
          type="file"
          accept="image/jpg, image/jpeg, image/png"
          onChange={(e) => changeImageHandler(e)}
        />
      </div>
      <div className="flex flex-col gap-0.5">
        <Label>Custom Name</Label>
        <Input
          type="text"
          value={canvasValue.name}
          placeholder="Enter custom name"
          onChange={(e) => canvasValue.setName(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-0.5">
        <Label>Comment's Date</Label>
        <Input
          type="datetime-local"
          value={canvasValue.dateTime}
          placeholder="Enter custom name"
          onChange={(e) => canvasValue.setDateTime(e.target.value)}
          className="w-full"
        />
      </div>
      <div className="flex flex-col gap-0.5">
        <Label>Custom Comment</Label>
        <Textarea
          placeholder="Your comment"
          value={canvasValue.content}
          onChange={(e) => canvasValue.setContent(e.target.value)}
        />
      </div>
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
      <div className="flex flex-col gap-0.5">
        <button
          onClick={useResetValue}
          className="bg-primary text-primary-foreground hover:bg-primary/80 mt-auto w-full cursor-pointer rounded-md px-4 py-2 transition-colors"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

// export default function CanvasEditor() {
//   const canvasEditor = useCanvasStore((state) => state);

//   return (
//     <div className="grid grid-cols-2 gap-6">
//       <input
//         type="file"
//         accept="image/jpg, image/jpeg, image/png"
//         onChange={(e) => changeImageHandler(e)}
//         className="border-2"
//       />
//       <input
//         type="text"
//         value={canvasEditor.name}
//         onChange={(e) => canvasEditor.setName(e.target.value)}
//         placeholder="Name"
//         className="border-2"
//       />
//       <input
//         type="datetime-local"
//         value={canvasEditor.dateTime}
//         onChange={(e) => canvasEditor.setDateTime(e.target.value)}
//         placeholder="Date Time"
//         className="border-2"
//       />
//       <textarea
//         value={canvasEditor.content}
//         onChange={(e) => canvasEditor.setContent(e.target.value)}
//         placeholder="Content"
//         className="border-2"
//       />
//     </div>
//   );
// }
