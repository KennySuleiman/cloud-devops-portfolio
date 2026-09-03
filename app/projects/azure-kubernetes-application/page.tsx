export default function AzureKubernetesApplicationPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
          Azure Kubernetes Case Study
        </p>

        <h1 className="mt-4 max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl">
          Azure Kubernetes CRUD Application
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          A containerised Node.js REST API supported by Azure Kubernetes
          infrastructure defined with Terraform, automated Docker image
          publishing through GitHub Actions, and a Kubernetes workload
          validated locally with Minikube.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="https://github.com/KennySuleiman/Todo-app-source"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            View GitHub
          </a>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold">Project overview</h2>

          <p className="mt-6 max-w-4xl leading-8 text-slate-400">
            This project demonstrates a cloud-native DevOps workflow combining
            application containerisation, Infrastructure as Code, Kubernetes,
            and continuous integration.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            Terraform defines the Azure networking and AKS infrastructure,
            while the application is packaged with Docker and published to
            Docker Hub through GitHub Actions. The Kubernetes workload was
            validated locally with Minikube to avoid maintaining billable AKS
            resources when the environment was not actively required.
          </p>
        </div>
      </section>

      <section className="bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold">Architecture</h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
  <img
    src="/projects/azure-kubernetes/architecture.png"
    alt="Azure Kubernetes Todo API architecture showing GitHub Actions, Docker Hub, Kubernetes, Terraform and Azure AKS"
    className="w-full"
  />
</div>

          <div className="mt-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Application delivery
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-4">
              {[
                "Developer",
                "GitHub",
                "GitHub Actions",
                "Docker Hub",
                "Kubernetes Deployment",
                "2 × Todo API Pods",
                "ClusterIP Service",
                "REST API",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-slate-900 p-5 text-center text-sm font-semibold"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Infrastructure as Code
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-4">
              {[
                "Terraform",
                "Azure Resource Group",
                "Azure Virtual Network",
                "Azure Subnet",
                "Azure Kubernetes Service",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-slate-900 p-5 text-center text-sm font-semibold"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <p className="mt-10 max-w-4xl leading-8 text-slate-400">
            The Kubernetes workload was validated locally using Minikube.
            Terraform defines the equivalent Azure infrastructure required for
            AKS deployment, including the virtual network, subnet and managed
            Kubernetes cluster.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold">Infrastructure as Code</h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <h3 className="text-xl font-semibold">Azure VNet</h3>
              <p className="mt-3 leading-7 text-slate-400">
                Terraform creates the crud-vnet virtual network with the
                10.0.0.0/16 address space.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <h3 className="text-xl font-semibold">Subnet</h3>
              <p className="mt-3 leading-7 text-slate-400">
                A dedicated crud-subnet is provisioned using the
                10.0.1.0/24 address range.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <h3 className="text-xl font-semibold">AKS Cluster</h3>
              <p className="mt-3 leading-7 text-slate-400">
                Terraform defines the crud-aks cluster in East US with a
                system-assigned managed identity and a single-node default
                node pool.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold">Application</h2>

          <p className="mt-6 max-w-4xl leading-8 text-slate-400">
            The application is a Node.js and Express REST API exposing health
            and CRUD endpoints for managing todo items.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {[
              "GET / — application health check",
              "GET /todos — retrieve all todos",
              "POST /todos — create a todo",
              "PUT /todos/:id — update a todo",
              "DELETE /todos/:id — delete a todo",
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

      <section>
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold">Containerisation</h2>

          <p className="mt-6 max-w-4xl leading-8 text-slate-400">
            The API is packaged using a lightweight Node.js 20 Alpine image.
            The container installs production dependencies, exposes port 3000
            and launches the Express application using Node.js.
          </p>
        </div>
      </section>

      <section className="bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold">CI pipeline</h2>

          <div className="mt-8 grid gap-4 md:grid-cols-6">
            {[
              "Code Push",
              "Checkout",
              "Node Setup",
              "npm ci",
              "Docker Build",
              "Docker Hub",
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
            GitHub Actions runs on pushes to the main branch, installs
            application dependencies, generates a version tag using the date
            and Git commit SHA, authenticates to Docker Hub, and publishes both
            versioned and latest container images.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold">
            Kubernetes deployment validation
          </h2>

          <p className="mt-6 max-w-4xl leading-8 text-slate-400">
            The containerised application was deployed to a local Kubernetes
            cluster using Minikube. The deployment runs two application
            replicas behind a ClusterIP service.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <h3 className="text-xl font-semibold">Replicated workload</h3>
              <p className="mt-3 leading-7 text-slate-400">
                The Kubernetes Deployment defines two replicas of the Todo API
                container, providing experience with replicated container
                workloads.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <h3 className="text-xl font-semibold">Health probes</h3>
              <p className="mt-3 leading-7 text-slate-400">
                HTTP readiness and liveness probes use the application health
                endpoint on port 3000 to allow Kubernetes to monitor container
                health.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <h3 className="text-xl font-semibold">Service discovery</h3>
              <p className="mt-3 leading-7 text-slate-400">
                A ClusterIP service exposes the application internally on port
                80 and forwards traffic to the application containers on port
                3000.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <h3 className="text-xl font-semibold">CRUD validation</h3>
              <p className="mt-3 leading-7 text-slate-400">
                The deployed API was validated through port forwarding with
                successful health checks, todo creation and todo retrieval.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold">Implementation highlights</h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              "Defined Azure networking and AKS infrastructure with Terraform",
              "Containerised a Node.js REST API with Docker",
              "Automated Docker image builds and publishing with GitHub Actions",
              "Implemented date and Git SHA-based container image versioning",
              "Created Kubernetes Deployment and ClusterIP Service manifests",
              "Configured readiness and liveness probes",
              "Validated two replicated application pods using Minikube",
              "Successfully tested REST API CRUD operations through Kubernetes",
            ].map((highlight) => (
              <div
                key={highlight}
                className="rounded-xl border border-white/10 bg-slate-950 p-5 text-sm text-slate-300"
              >
                {highlight}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold">Technology stack</h2>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Microsoft Azure",
              "AKS",
              "Terraform",
              "Docker",
              "Kubernetes",
              "Minikube",
              "Node.js",
              "Express",
              "GitHub Actions",
              "Docker Hub",
              "Linux",
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
            Review the Terraform infrastructure, Docker configuration,
            Kubernetes manifests, application source and GitHub Actions
            workflow in the repository.
          </p>

          <a
            href="https://github.com/KennySuleiman/Todo-app-source"
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
