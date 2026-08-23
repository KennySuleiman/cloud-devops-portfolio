const skillGroups = [
  {
    title: "Cloud",
    skills: ["AWS", "Azure", "ECS", "EKS", "AKS", "S3", "RDS", "CloudFront"],
  },
  {
    title: "Infrastructure",
    skills: ["Terraform", "CloudFormation", "Networking", "IAM", "VPC"],
  },
  {
    title: "Containers",
    skills: ["Docker", "Kubernetes", "ECS", "EKS", "AKS", "Helm"],
  },
  {
    title: "CI/CD",
    skills: ["GitHub Actions", "Jenkins", "CloudBees", "Docker", "Git"],
  },
  {
    title: "Observability",
    skills: ["CloudWatch", "Prometheus", "Grafana", "Datadog"],
  },
  {
    title: "Automation",
    skills: ["Python", "Bash", "PowerShell", "Linux"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-white/[0.02]">
      <div className="mx-auto max-w-7xl px-6 py-28">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
          Technical Expertise
        </p>

        <h2 className="mt-4 text-4xl font-bold text-white">
          Tools I use to build and automate
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-white/10 bg-slate-950/60 p-6 transition hover:border-cyan-400/30"
            >
              <h3 className="text-lg font-semibold text-white">
                {group.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-slate-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
