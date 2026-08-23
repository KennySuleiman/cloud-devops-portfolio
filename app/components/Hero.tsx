export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
    >
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/3 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Cloud & DevOps Engineer
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Kehinde
            <span className="block text-slate-400">Suleiman</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            Designing and automating secure, scalable cloud infrastructure
            using AWS, Azure, Kubernetes, Terraform and modern CI/CD
            practices.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Explore My Work
            </a>

            <a
              href="https://github.com/KennySuleiman"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
            >
              View GitHub
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-slate-500">
            <span>AWS</span>
            <span>•</span>
            <span>Azure</span>
            <span>•</span>
            <span>Kubernetes</span>
            <span>•</span>
            <span>Terraform</span>
            <span>•</span>
            <span>CI/CD</span>
          </div>
        </div>

        {/* Technical visual */}
        <div className="relative hidden lg:block">
          <div className="relative mx-auto aspect-square max-w-md rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-2xl shadow-cyan-950/30 backdrop-blur-sm">
            <div className="absolute inset-8 rounded-2xl border border-cyan-400/10" />

            <div className="relative flex h-full flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  Infrastructure
                </span>

                <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />
              </div>

              <div className="space-y-4">
                <div className="rounded-xl border border-white/10 bg-slate-900/80 p-4">
                  <p className="text-xs text-slate-500">CLOUD</p>
                  <p className="mt-1 font-semibold text-white">
                    AWS / Azure
                  </p>
                </div>

                <div className="ml-8 rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-4">
                  <p className="text-xs text-slate-500">ORCHESTRATION</p>
                  <p className="mt-1 font-semibold text-cyan-400">
                    Kubernetes
                  </p>
                </div>

                <div className="ml-16 rounded-xl border border-white/10 bg-slate-900/80 p-4">
                  <p className="text-xs text-slate-500">AUTOMATION</p>
                  <p className="mt-1 font-semibold text-white">
                    Terraform / CI/CD
                  </p>
                </div>
              </div>

              <div className="text-xs text-slate-600">
                BUILD • AUTOMATE • DEPLOY
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
