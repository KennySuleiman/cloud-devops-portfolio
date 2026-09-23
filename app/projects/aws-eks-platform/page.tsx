
const githubUrl = "https://github.com/KennySuleiman/aws-eks-platform";

const technologies = [
  "AWS EKS",
  "Terraform",
  "Kubernetes",
  "Docker",
  "Helm",
  "Argo CD",
  "GitOps",
  "Minikube",
  "Node.js",
  "Express",
  "AWS VPC",
  "VPC Endpoints",
];

const highlights = [
  "Built and containerised a Node.js API using Docker",
  "Deployed three application replicas to Kubernetes on Minikube",
  "Configured readiness and liveness probes",
  "Implemented CPU and memory requests and limits",
  "Packaged Kubernetes resources using a reusable Helm chart",
  "Implemented Argo CD for automated GitOps reconciliation",
  "Demonstrated Git-driven scaling from three to five replicas",
  "Designed AWS EKS infrastructure using Terraform",
  "Successfully validated and planned 58 AWS resources",
];

function InfoCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-3 leading-7 text-slate-400">{children}</p>
    </div>
  );
}

export default function AwsEksPlatformPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
          Platform Engineering Case Study
        </p>

        <h1 className="mt-4 max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl">
          AWS EKS Platform Engineering
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          A containerised Node.js application deployed to Kubernetes
          using Helm and managed through Argo CD GitOps, with AWS EKS
          infrastructure designed and validated using Terraform.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            View GitHub
          </a>

          <a
            href="/#projects"
            className="rounded-lg border border-white/20 px-5 py-3 font-semibold transition hover:border-cyan-400"
          >
            Back to Projects
          </a>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold">Project overview</h2>

          <p className="mt-6 max-w-4xl leading-8 text-slate-400">
            This project explores platform engineering practices
            through containerisation, Kubernetes orchestration,
            Helm packaging, GitOps and Infrastructure as Code.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            The application was developed and tested locally before
            being deployed to Minikube. Helm provides reusable
            deployment configuration, while Argo CD synchronises
            the Kubernetes workload with its desired state in GitHub.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            Terraform defines the target AWS EKS architecture,
            including networking, managed worker nodes and private
            connectivity to AWS services. The infrastructure has
            passed Terraform validation and planning. AWS provisioning
            has been deferred to avoid unnecessary cloud expenditure.
          </p>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className="bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold">Architecture</h2>
        <figure className="mt-10">
  <img
    src="/projects/aws-eks-platform/overview.png"
    alt="AWS EKS Platform Engineering architecture overview"
    className="block h-auto w-full rounded-2xl border border-white/10"
  />
  <figcaption className="mt-3 text-sm text-slate-400">
    Conceptual architecture overview. Kubernetes and GitOps
    validated locally; AWS EKS infrastructure designed with
    Terraform but not provisioned.
  </figcaption>
</figure>
          <p className="mt-6 max-w-4xl leading-8 text-slate-400">
            The project separates the locally implemented application
            delivery workflow from the planned AWS infrastructure.
          </p>

          <h3 className="mt-10 text-xl font-semibold">
            Validated GitOps workflow
          </h3>

          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {[
              "Developer",
              "GitHub Repository",
              "Argo CD",
              "Helm Chart",
              "Kubernetes Deployment",
              "Application Pods",
              "ClusterIP Service",
              "Node.js API",
            ].map((item, index) => (
              <div
                key={item}
                className="rounded-xl border border-white/10 bg-slate-900 p-5 text-center"
              >
                <span className="text-xs font-semibold text-cyan-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 text-sm font-semibold">{item}</p>
              </div>
            ))}
          </div>

          <h3 className="mt-12 text-xl font-semibold">
            AWS infrastructure design
          </h3>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              "Terraform",
              "AWS VPC",
              "Public Subnets",
              "Private Subnets",
              "VPC Endpoints",
              "Amazon EKS",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-dashed border-cyan-400/30 bg-slate-900 p-5 text-center text-sm font-semibold"
              >
                {item}
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-4xl text-sm leading-7 text-amber-300">
            Infrastructure status: Terraform validated and planned.
            The AWS resources have not been provisioned.
          </p>
        </div>
      </section>

      {/* APPLICATION */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold">Application</h2>

          <p className="mt-6 max-w-4xl leading-8 text-slate-400">
            The platform includes a lightweight Node.js and Express
            API with endpoints for application status, health,
            readiness and platform information.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {[
              "GET / — application status",
              "GET /health — liveness endpoint",
              "GET /ready — readiness endpoint",
              "GET /platform — platform information",
            ].map((endpoint) => (
              <div
                key={endpoint}
                className="rounded-xl border border-white/10 bg-slate-950 p-5 text-sm text-slate-300"
              >
                {endpoint}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTAINERISATION */}
      <section className="bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold">Containerisation</h2>

          <p className="mt-6 max-w-4xl leading-8 text-slate-400">
            The API uses a Docker image based on Node.js 20 Alpine.
            The Dockerfile installs production dependencies, copies
            the application into the image, runs as a non-root user
            and exposes port 3000.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            The image was built and tested locally before being
            loaded into Minikube for Kubernetes deployment.
          </p>
        </div>
      </section>

      {/* KUBERNETES */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold">
            Kubernetes deployment
          </h2>

          <p className="mt-6 max-w-4xl leading-8 text-slate-400">
            The application was deployed to a local Kubernetes
            cluster with three replicas behind a ClusterIP service.
            Readiness and liveness probes allow Kubernetes to check
            whether containers can receive traffic and remain healthy.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <InfoCard title="Replicated workload">
              Three application replicas were initially deployed
              and successfully validated on Minikube.
            </InfoCard>

            <InfoCard title="Health probes">
              Separate HTTP readiness and liveness probes use
              /ready and /health on port 3000.
            </InfoCard>

            <InfoCard title="Resource management">
              CPU and memory requests and limits are defined
              for the application containers.
            </InfoCard>

            <InfoCard title="Rolling updates">
              The Deployment uses a rolling update strategy
              with controlled pod availability during updates.
            </InfoCard>
          </div>
        </div>
      </section>

      {/* HELM */}
      <section className="bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold">
            Helm packaging and release management
          </h2>

          <p className="mt-6 max-w-4xl leading-8 text-slate-400">
            The Kubernetes Deployment and Service were converted
            into a reusable Helm chart. Application settings such
            as replica count, container image, service ports,
            health probes and resource limits are configured
            through values.yaml.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <InfoCard title="Reusable templates">
              Helm templates generate the Kubernetes Deployment
              and Service from shared configuration values.
            </InfoCard>

            <InfoCard title="Release management">
              The application was installed as a Helm release,
              providing a structured approach to deployment
              configuration and upgrades.
            </InfoCard>

            <InfoCard title="Configuration-driven scaling">
              Replica count is controlled through Helm values
              rather than hard-coded Deployment changes.
            </InfoCard>
          </div>
        </div>
      </section>

      {/* GITOPS */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold">
            GitOps with Argo CD
          </h2>

          <p className="mt-6 max-w-4xl leading-8 text-slate-400">
            Argo CD was configured to use the project's GitHub
            repository and Helm chart as the desired source
            of application configuration.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            The Argo CD application reached Synced and Healthy
            status. A subsequent Git commit changed the desired
            replica count from three to five, demonstrating
            configuration changes managed through version control.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {[
              "Update values.yaml",
              "Commit and push",
              "Argo CD reconciliation",
              "Kubernetes desired state",
            ].map((step, index) => (
              <div
                key={step}
                className="rounded-xl border border-white/10 bg-slate-900 p-5 text-center"
              >
                <p className="text-sm font-semibold text-cyan-400">
                  Step {index + 1}
                </p>
                <p className="mt-3 text-sm font-semibold">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TERRAFORM */}
      <section className="bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold">
            AWS infrastructure with Terraform
          </h2>

          <p className="mt-6 max-w-4xl leading-8 text-slate-400">
            Terraform defines the target AWS EKS environment
            using reusable VPC and EKS modules. The design
            separates public and private subnets across two
            Availability Zones, with managed worker nodes
            configured for the private subnets.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <InfoCard title="VPC and networking">
              A VPC with two public and two private subnets
              provides the planned network foundation.
            </InfoCard>

            <InfoCard title="Amazon EKS">
              The configuration defines an EKS control plane
              and managed node group with public and private
              Kubernetes API endpoint access.
            </InfoCard>

            <InfoCard title="Private AWS connectivity">
              ECR API, ECR Docker, STS and EC2 interface
              endpoints, together with an S3 gateway endpoint,
              are defined to support private AWS connectivity.
            </InfoCard>

            <InfoCard title="Cost-conscious design">
              NAT Gateway provisioning is disabled.
              AWS deployment is deferred to avoid ongoing
              EKS, compute and interface endpoint charges.
            </InfoCard>
          </div>

          <div className="mt-10 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Terraform validation
            </p>
            <p className="mt-3 text-3xl font-bold">
              58 resources planned
            </p>
            <p className="mt-3 text-slate-400">
              Terraform init, validate and plan completed
              successfully. No AWS resources have been
              created for this project.
            </p>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold">
            Implementation highlights
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {highlights.map((highlight) => (
              <div
                key={highlight}
                className="rounded-xl border border-white/10 bg-slate-900 p-5 text-sm text-slate-300"
              >
                {highlight}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold">
            Technology stack
          </h2>

          <div className="mt-8 flex flex-wrap gap-3">
            {technologies.map((tech) => (
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

      {/* NEXT STEPS */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold">
            Next steps
          </h2>

          <p className="mt-6 max-w-4xl leading-8 text-slate-400">
            The next phase is to provision the planned EKS
            environment when the deployment budget allows,
            publish the application image to Amazon ECR,
            migrate the GitOps workflow to AWS and introduce
            monitoring with Prometheus and Grafana.
          </p>
        </div>
      </section>

      {/* SOURCE */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="text-3xl font-bold">
            Explore the project
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Review the application source, Dockerfile,
            Kubernetes manifests, Helm chart, Argo CD
            configuration and Terraform infrastructure
            in the GitHub repository.
          </p>

          <a
            href={githubUrl}
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
