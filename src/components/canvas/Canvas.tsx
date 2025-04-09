import CanvasEditor from "@/components/canvas/CanvasEditor";
import CanvasResult from "@/components/canvas/CanvasResult";

export default function Canvas() {
  return (
    <section className="relative w-full my-12">
      <div className="relative w-full px-4 flex flex-col gap-6 max-w-xl mx-auto">
        <CanvasEditor />
        <CanvasResult />
      </div>
    </section>
  );
}
