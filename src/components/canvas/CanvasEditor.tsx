import { useCanvasStore } from "@/lib/stores/canvas-editor-store";

export default function CanvasEditor() {
  const canvasEditor = useCanvasStore((state) => state);

  const changeImageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    canvasEditor.setImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="grid grid-cols-2 gap-6">
      <input
        type="file"
        accept="image/jpg, image/jpeg, image/png"
        onChange={(e) => changeImageHandler(e)}
        className="border-2"
      />
      <input
        type="text"
        value={canvasEditor.name}
        onChange={(e) => canvasEditor.setName(e.target.value)}
        placeholder="Name"
        className="border-2"
      />
      <input
        type="datetime-local"
        value={canvasEditor.dateTime}
        onChange={(e) => canvasEditor.setDateTime(e.target.value)}
        placeholder="Date Time"
        className="border-2"
      />
      <textarea
        value={canvasEditor.content}
        onChange={(e) => canvasEditor.setContent(e.target.value)}
        placeholder="Content"
        className="border-2"
      />
    </div>
  );
}
