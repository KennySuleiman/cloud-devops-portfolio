const technologies = [
  "AWS",
  "Terraform",
  "Docker",
  "Amazon ECS",
  "Amazon ECR",
  "Application Load Balancer",
  "Route 53",
  "IAM",
];

const infrastructure = [
  {
    title: "Networking",
    description:
      "Designed the AWS networking foundation required to support the application workload and traffic flow.",
  },
  {
    title: "Containerisation",
    description:
      "Built and packaged the application as a Docker container for consistent deployment.",
  },
  {
    title: "Container Registry",
    description:
      "Used Amazon ECR to store and manage the application container image.",
  },
  {
    title: "Application Platform",
    description:
      "Configured Amazon ECS to run the containerised workload.",
  },
  {
    title: "Load Balancing",
    description:
      "Configured an Application Load Balancer and target group to route traffic to the application.",
  },
  {
    title: "Infrastructure as Code",
    description:
      "Used Terraform to define and provision the AWS infrastructure.",
  },
];

const challenges = [
  {
    problem: "Application Load Balancer returned HTTP 503 responses.",
    solution:
      "Investigated target group health, ECS task configuration, networking and application availability to identify the cause of unhealthy targets.",
  },
  {
    problem: "Container workloads were not consistently becoming healthy.",
    solution:
      "Reviewed ECS task configuration, container ports, security groups and load-balancer health-check behaviour.",
  },
  {
    problem: "Terraform configuration required changes during deployment.",
    solution:
      "Used Terraform validation and deployment feedback to identify configuration, resource and dependency issues and iteratively improve the infrastructure.",
  },
];

export default function AwsCloudPlatformPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-36">
          <a
            href="/#projects"
            className="text-sm font-medium text-slate-500 transition hover:text-cyan-400"
          >
            ← Back to projects
          </a>

          <div className="mt-10 max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Cloud Infrastructure
            </p>

            <h1 className="mt-5 text-5xl font-bold tracking-tight text-white sm:text-6xl">
              AWS Cloud Infrastructure Platform
            </h1>

            <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-400">
              A containerised AWS application platform provisioned with
              Terraform and designed around repeatable infrastructure,
              container deployment and load-balanced application delivery.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300"
                >
                  {technology}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://github.com/KennySuleiman"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                View GitHub Repository
              </a>

              <a
                href="/"
                className="rounded-lg border border-white/10 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
              >
                Portfolio Home
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Project overview */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                01 / Overview
              </p>

              <h2 className="mt-4 text-3xl font-bold text-white">
                Project objective
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-400">
              <p>
                The objective was to build a practical AWS application
                platform using modern cloud and DevOps practices.
              </p>

              <p>
                The platform uses containerisation to package the application,
                Amazon ECR to store the image, Amazon ECS to run the workload
                and an Application Load Balancer to provide application
                traffic distribution.
              </p>

              <p>
                Terraform was used to define the infrastructure as code,
                making the environment repeatable and reducing the reliance
                on manually configured cloud resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            02 / Architecture
          </p>

          <h2 className="mt-4 text-3xl font-bold text-white">
            Application architecture
          </h2>

          <div className="mt-12 overflow-x-auto rounded-2xl border border-white/10 bg-slate-950 p-8">
            <div className="min-w-[700px]">
              <div className="flex justify-center">
                <div className="rounded-xl border border-cyan-400/30 bg-cyan-400/5 px-8 py-4 text-center">
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    DNS
                  </p>
                  <p className="mt-1 font-semibold text-cyan-400">
                    Route 53
                  </p>
                </div>
              </div>

              <div className="mx-auto h-10 w-px bg-white/20" />

              <div className="flex justify-center">
                <div className="rounded-xl border border-white/10 bg-white/[0.03] px-8 py-4 text-center">
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Traffic
                  </p>
                  <p className="mt-1 font-semibold text-white">
                    Application Load Balancer
                  </p>
                </div>
              </div>

              <div className="mx-auto h-10 w-px bg-white/20" />

              <div className="grid grid-cols-2 gap-8">
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6 text-center">
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Container workload
                  </p>

                  <p className="mt-2 font-semibold text-white">
                    ECS Task
                  </p>

                  <p className="mt-2 text-sm text-slate-500">
                    Docker container
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6 text-center">
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Container workload
                  </p>

                  <p className="mt-2 font-semibold text-white">
                    ECS Task
                  </p>

                  <p className="mt-2 text-sm text-slate-500">
                    Docker container
                  </p>
                </div>
              </div>

              <div className="mx-auto mt-8 h-10 w-px bg-white/20" />

              <div className="flex justify-center">
                <div className="rounded-xl border border-orange-400/20 bg-orange-400/5 px-8 py-4 text-center">
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Container Registry
                  </p>

                  <p className="mt-1 font-semibold text-orange-300">
                    Amazon ECR
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-5 text-sm text-slate-600">
            Architecture shown here represents the intended platform flow;
            the final diagram will be updated with the exact deployed
            architecture as the project is documented.
          </p>
        </div>
      </section>

      {/* Infrastructure */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            03 / Implementation
          </p>

          <h2 className="mt-4 text-3xl font-bold text-white">
            What I built
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {infrastructure.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-7"
              >
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            04 / Troubleshooting
          </p>

          <h2 className="mt-4 text-3xl font-bold text-white">
            Challenges & solutions
          </h2>

          <div className="mt-12 space-y-5">
            {challenges.map((challenge, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-slate-950 p-7"
              >
                <p className="text-sm font-semibold text-red-300">
                  Challenge
                </p>

                <p className="mt-2 text-lg text-white">
                  {challenge.problem}
                </p>

                <div className="my-6 h-px bg-white/10" />

                <p className="text-sm font-semibold text-cyan-400">
                  Approach
                </p>

                <p className="mt-2 leading-7 text-slate-400">
                  {challenge.solution}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering principles */}
      <section>
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            05 / Engineering Focus
          </p>

          <h2 className="mt-4 text-3xl font-bold text-white">
            What this project demonstrates
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              "Infrastructure as Code",
              "Containerisation",
              "AWS cloud architecture",
              "Load balancing",
              "Cloud troubleshooting",
              "Repeatable deployment",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-white/10 bg-white/[0.02] p-5 text-slate-300"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-6 py-8 text-sm text-slate-600 sm:flex-row">
          <span>© {new Date().getFullYear()} Kehinde Suleiman</span>

          <a
            href="/#projects"
            className="transition hover:text-cyan-400"
          >
            ← Back to projects
          </a>
        </div>
      </footer>
    </main>
  );
}
