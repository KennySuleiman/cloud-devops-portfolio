export default function Contact() {
  return (
    <section id="contact" className="border-t border-white/10">
      <div className="mx-auto max-w-4xl px-6 py-32 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
          Get In Touch
        </p>

        <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
          Let's build something reliable.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          Interested in Cloud Engineering, DevOps, Platform Engineering or
          infrastructure automation? I'd be happy to connect.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="https://github.com/KennySuleiman"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            GitHub
          </a>

          <a
            href="#"
            className="rounded-lg border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
