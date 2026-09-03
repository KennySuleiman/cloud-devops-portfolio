export const projects = [
  {
    number: "01",
    title: "AWS DevOps Capstone Platform",
    shortDescription:
      "A production-style containerised web application deployed on AWS using Terraform, Docker, ECS Fargate and an automated GitHub Actions CI/CD pipeline.",
    highlights: [
      "Provisioned AWS infrastructure using Terraform",
      "Deployed Docker workloads to ECS Fargate",
      "Implemented GitHub Actions CI/CD with AWS OIDC authentication",
      "Used Git SHA-based image versioning in Amazon ECR",
      "Configured private subnets, VPC endpoints and CloudWatch logging",
      "Resolved ECS, ALB, ECR and Terraform deployment issues",
    ],
    technologies: [
      "AWS",
      "Terraform",
      "Docker",
      "ECS Fargate",
      "ECR",
      "GitHub Actions",
      "CloudWatch",
      "Application Load Balancer",
      "VPC",
      "IAM",
      "Nginx",
    ],
    category: "AWS DevOps",
    github: "https://github.com/KennySuleiman/zsoftly-capstone",
    live: "http://zsoftly-alb-749566002.us-east-1.elb.amazonaws.com/",
    caseStudy: "/projects/aws-devops-capstone",
  },
  {
    number: "02",
    title: "Azure Kubernetes Application",
    shortDescription:
      "A containerised Node.js REST API with Azure Kubernetes Service infrastructure provisioned using Terraform and an automated GitHub Actions pipeline for Docker image builds and publishing.",
    technologies: [
      "Azure",
      "AKS",
      "Terraform",
      "Docker",
      "GitHub Actions",
    ],
    category: "Cloud & Kubernetes",
    github: "https://github.com/KennySuleiman/Todo-app-source",
    caseStudy: "/projects/azure-kubernetes-application",
  },
  {
    number: "03",
    title: "DevOps CI/CD Platform",
    shortDescription:
      "Automated container build and deployment workflows using GitHub Actions, Docker and cloud container registries.",
    technologies: [
      "GitHub Actions",
      "Docker",
      "AWS",
      "Azure",
      "CI/CD",
    ],
    category: "DevOps Automation",
    github: "https://github.com/KennySuleiman",
  },
];
