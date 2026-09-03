const experienceHighlights = [
  {
    title: "Cloud Infrastructure",
    description:
      "Designed and managed scalable, highly available AWS environments using EC2, S3, RDS, Lambda, IAM and Elastic Beanstalk.",
  },
  {
    title: "Infrastructure as Code",
    description:
      "Designed and deployed multi-tier cloud infrastructure using Terraform and CloudFormation, improving provisioning efficiency and infrastructure consistency.",
  },
  {
    title: "CI/CD & Containers",
    description:
      "Established CI/CD pipelines using GitHub Actions and Azure DevOps, integrating Docker and Kubernetes on Amazon EKS to accelerate software delivery.",
  },
  {
    title: "Automation",
    description:
      "Developed Python, Bash and PowerShell automation to streamline system configuration and reduce manual intervention by 20%.",
  },
  {
    title: "Cloud Security",
    description:
      "Strengthened AWS security through least-privilege IAM, Secrets Manager, network segmentation, AWS Systems Manager, Ansible and vulnerability assessment tooling.",
  },
  {
    title: "Monitoring & Reliability",
    description:
      "Implemented monitoring and operational visibility using AWS CloudWatch, CloudTrail, Datadog, Zabbix and SIEM tooling to support rapid incident response.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-white/[0.02]">
      <div className="mx-auto max-w-7xl px-6 py-28">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
          Experience
        </p>

        <h2 className="mt-4 text-4xl font-bold text-white">
          Cloud engineering & DevOps experience
        </h2>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.35fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              June 2024 — Present
            </p>

            <h3 className="mt-3 text-2xl font-bold text-white">
              Cloud & DevOps Engineer
            </h3>

            <p className="mt-2 text-slate-400">
              ZSoftly Technologies Inc
            </p>

            <p className="mt-6 max-w-sm leading-7 text-slate-500">
              Building secure, automated and scalable cloud infrastructure
              while improving deployment, monitoring and operational
              reliability.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {experienceHighlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-slate-950/60 p-6 transition hover:border-cyan-400/30"
              >
                <h4 className="font-semibold text-white">
                  {item.title}
                </h4>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.03] p-6">
          <p className="text-sm leading-7 text-slate-400">
            <span className="font-semibold text-cyan-400">
              Additional experience:
            </span>{" "}
            AWS cost optimisation, Auto Scaling and load balancing, RDS
            database management and migration, production troubleshooting,
            DevSecOps practices, code reviews and Infrastructure as Code
            standardisation.
          </p>
        </div>
      </div>
    </section>
  );
}
