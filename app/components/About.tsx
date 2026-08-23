export default function About() {
  return (
    <section id="about" className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-28">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              About Me
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white">
              Engineering with purpose.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-slate-400">
            <p>
              I am a Cloud and DevOps Engineer focused on building reliable,
              automated and scalable technology platforms.
            </p>

            <p>
              My technical experience spans cloud infrastructure,
              Infrastructure as Code, containerisation, Kubernetes, CI/CD,
              monitoring and cloud security.
            </p>

            <p>
              I also bring experience in data governance, product delivery
              and stakeholder management, allowing me to approach technical
              problems from both an engineering and organisational
              perspective.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
