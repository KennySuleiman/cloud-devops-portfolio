import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects">
      <div className="mx-auto max-w-7xl px-6 py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Selected Work
            </p>

            <h2 className="mt-4 text-4xl font-bold text-white">
              Featured projects
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-slate-400">
              Practical cloud and DevOps projects demonstrating infrastructure
              automation, containerisation, Kubernetes and continuous delivery.
            </p>
          </div>

          <a
            href="https://github.com/KennySuleiman"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-slate-400 transition hover:text-cyan-400"
          >
            View GitHub →
          </a>
        </div>

        <div className="mt-12 space-y-6">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition hover:border-cyan-400/30"
            >
              <div className="grid gap-8 md:grid-cols-[100px_1fr]">
                <span className="text-4xl font-bold text-slate-700 transition group-hover:text-cyan-400/50">
                  {project.number}
                </span>

                <div>
                  <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                    {project.category}
                  </div>

                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>

                  <p className="mt-3 max-w-3xl leading-7 text-slate-400">
                    {project.shortDescription}
                  </p>

                  {"highlights" in project && project.highlights && (
                    <ul className="mt-5 grid gap-2 text-sm text-slate-400 md:grid-cols-2">
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-2">
                          <span className="text-cyan-400">✓</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full bg-slate-900 px-3 py-1 text-xs text-slate-400"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap gap-5">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
                    >
                      View GitHub →
                    </a>

                    {"live" in project && project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-white transition hover:text-cyan-300"
                      >
                        Live Demo →
                      </a>
                    )}

                    {"caseStudy" in project && project.caseStudy && (
                      <a
                        href={project.caseStudy}
                        className="text-sm font-semibold text-white transition hover:text-cyan-300"
                      >
                        View Case Study →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
