const certifications = [
  {
    name: "AWS Certified DevOps Engineer – Professional",
    provider: "Amazon Web Services",
  },
  {
    name: "AWS Certified Solutions Architect – Associate",
    provider: "Amazon Web Services",
  },
  {
    name: "Certified Kubernetes Administrator",
    provider: "Cloud Native Computing Foundation",
  },
];

export default function Certifications() {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-6 py-28">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
          Certifications
        </p>

        <h2 className="mt-4 text-4xl font-bold text-white">
          Professional credentials
        </h2>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {certifications.map((certification) => (
            <div
              key={certification.name}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
            >
              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
                ✓
              </div>

              <h3 className="font-semibold leading-6 text-white">
                {certification.name}
              </h3>

              <p className="mt-3 text-sm text-slate-500">
                {certification.provider}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
