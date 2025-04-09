import CanvasEditor from "@/components/canvas/CanvasEditor";
import CanvasResult from "@/components/canvas/CanvasResult";

export default function Canvas() {
  return (
    <section className="relative my-12 w-full">
      <div className="relative mx-auto flex w-full max-w-xl flex-col gap-6 px-4">
        <CanvasEditor />
        <CanvasResult />
      </div>
    </section>
  );
}
