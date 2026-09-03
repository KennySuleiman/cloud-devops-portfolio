export default function AwsDevOpsCapstonePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
          AWS DevOps Case Study
        </p>

        <h1 className="mt-4 max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl">
          AWS DevOps Capstone Platform
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          A production-style containerised web application deployed on AWS
          using Terraform, Docker, Amazon ECS Fargate and GitHub Actions.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="https://github.com/KennySuleiman/zsoftly-capstone"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            View GitHub
          </a>

          <a
            href="http://zsoftly-alb-749566002.us-east-1.elb.amazonaws.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-white/15 px-5 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
          >
            Live Demo
          </a>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold">Project overview</h2>

          <p className="mt-6 max-w-4xl leading-8 text-slate-400">
            This project demonstrates the design and deployment of a secure,
            automated and scalable AWS container platform. Infrastructure is
            provisioned using Terraform, application images are stored in
            Amazon ECR, and workloads run on ECS Fargate behind an Application
            Load Balancer.
          </p>
        </div>
      </section>

      <section className="bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold">Architecture</h2>

          <div className="mt-10 grid gap-4 md:grid-cols-5 md:items-center">
            {[
              "Internet",
              "Application Load Balancer",
              "ECS Fargate",
              "Docker / Nginx",
              "CloudWatch Logs",
            ].map((item, index) => (
              <div key={item} className="flex items-center gap-4 md:block">
                <div className="rounded-xl border border-white/10 bg-slate-900 p-5 text-center text-sm font-semibold">
                  {item}
                </div>

                {index < 4 && (
                  <div className="text-cyan-400 md:mt-4 md:text-center">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold">Infrastructure as Code</h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <h3 className="text-xl font-semibold">Terraform</h3>
              <p className="mt-3 leading-7 text-slate-400">
                Terraform provisions the VPC, public and private subnets,
                security groups, ECS cluster, ECS service, ECR repository,
                Application Load Balancer, target groups and VPC endpoints.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <h3 className="text-xl font-semibold">Private networking</h3>
              <p className="mt-3 leading-7 text-slate-400">
                ECS tasks run in private subnets without public IP addresses.
                VPC endpoints provide private access to Amazon ECR, S3 and
                CloudWatch Logs without relying on a NAT Gateway.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold">CI/CD pipeline</h2>

          <div className="mt-8 grid gap-4 md:grid-cols-6">
            {[
              "GitHub",
              "GitHub Actions",
              "AWS OIDC / STS",
              "Docker Build",
              "Amazon ECR",
              "ECS Fargate",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-white/10 bg-slate-950 p-5 text-center text-sm font-semibold"
              >
                {item}
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-4xl leading-8 text-slate-400">
            Each deployment builds a Docker image, tags it with the Git commit
            SHA, pushes it to Amazon ECR and updates the ECS task definition.
            GitHub Actions authenticates to AWS using OIDC and short-lived
            credentials rather than long-lived AWS access keys.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold">Security & reliability</h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Private ECS workloads",
              "Least-privilege IAM",
              "OIDC authentication",
              "Centralised CloudWatch logging",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
              >
                <span className="text-cyan-400">✓</span>
                <p className="mt-3 font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold">Problems solved</h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 p-6">
              <h3 className="font-semibold text-cyan-400">
                ECR image pull failure
              </h3>
              <p className="mt-3 leading-7 text-slate-400">
                Resolved container image deployment failures by introducing
                immutable Git SHA image tags and ensuring ECS task definitions
                referenced valid ECR images.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-6">
              <h3 className="font-semibold text-cyan-400">
                CloudWatch connectivity
              </h3>
              <p className="mt-3 leading-7 text-slate-400">
                Resolved ECS logging failures by configuring the required
                CloudWatch Logs VPC endpoint for workloads running in private
                subnets.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-6">
              <h3 className="font-semibold text-cyan-400">
                ALB health checks
              </h3>
              <p className="mt-3 leading-7 text-slate-400">
                Troubleshot target registration and application routing issues
                to restore healthy ECS targets behind the load balancer.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-6">
              <h3 className="font-semibold text-cyan-400">
                Terraform deployment drift
              </h3>
              <p className="mt-3 leading-7 text-slate-400">
                Separated infrastructure ownership from application deployment
                ownership so Terraform would not overwrite newer ECS task
                revisions deployed by GitHub Actions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold">Technology stack</h2>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "AWS",
              "Terraform",
              "Docker",
              "ECS Fargate",
              "Amazon ECR",
              "Application Load Balancer",
              "GitHub Actions",
              "OIDC",
              "IAM",
              "CloudWatch",
              "VPC",
              "Nginx",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="text-3xl font-bold">Explore the project</h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Review the infrastructure code, CI/CD workflow and application
            source in the GitHub repository.
          </p>

          <a
            href="https://github.com/KennySuleiman/zsoftly-capstone"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            View Source Code →
          </a>
        </div>
      </section>
    </main>
  );
}
