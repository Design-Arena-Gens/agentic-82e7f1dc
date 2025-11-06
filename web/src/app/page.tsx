import PromoSequence from "@/components/PromoSequence";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black font-sans">
      <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-8 sm:py-14">
        <PromoSequence />
        <section id="demo" className="mx-auto mt-16 max-w-5xl text-center sm:text-left">
          <h2 className="text-2xl font-semibold text-white">Why Agentic ITSM</h2>
          <p className="mt-2 text-zinc-300">
            Cut resolution times, prevent incidents, and keep teams focused on what matters. Our agentic system connects to your ticketing, observability, and infra to deliver closed-loop automation with human-in-the-loop controls.
          </p>
        </section>
      </main>
    </div>
  );
}
