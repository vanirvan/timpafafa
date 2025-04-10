export default function HeroSection() {
  return (
    <section id="hero" className="relative w-full py-12">
      <div className="relative mx-auto flex w-full max-w-lg flex-col items-center justify-center gap-6 px-4">
        <img
          src={"/fufufafa_icon.jpg"}
          alt="fufufafa image"
          className="size-32"
        />
        <h1 className="text-6xl font-bold">Timpafafa</h1>
        <h2 className="text-center text-2xl">Timpa Text featuring Fufufafa</h2>
      </div>
    </section>
  );
}
