/**
 * Narayana Kanaka — Cloud DevOps Architect & Freelance Consultant
 * Interactive 3D & Web Application Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    lucide.createIcons();
  }

  // Header Scroll Effect & Active Link Spy
  initNavigation();

  // Dynamic Typing Subtitle Effect
  initDynamicTyping();

  // Cloud & Open-Source Services Directory
  initCloudDirectory();

  // Interactive 3D Technology Sphere (Canvas 3D Engine)
  initTechSphere();

  // Skills Category Filter
  initSkillsFilter();

  // Linux Mastery Matrix & Command Reference Engine
  initLinuxMatrix();

  // Flagship Feature: Interactive Architecture Explorer
  initMermaidEngine();
  initArchitectureExplorer();

  // emp-portal Code-to-Cloud Lab
  initEmpPortalCloudLab();

  // Interactive Project Slider & Grid Showcase Engine
  initProjectSlider();

  // Freelance Scope & Cost Estimator
  initFreelanceEstimator();

  // Interactive Web CLI Terminal
  initDevOpsTerminal();

  // Resume ATS Modal Handlers
  initResumeModal();

  // Contact Form Submission Handler
  initContactForm();

  // Back to Top Button
  initBackToTop();

  // DevSecOps Security, Notification & Observability Hub Tabs & Copy
  initDevSecOpsHub();

  // Glassmorphism 2.0 Dynamic Spotlight & 3D Tilt Engine
  initGlassmorphismEngine();
});

/* ==========================================================================
   Navigation & Header HUD
   ========================================================================== */
function initNavigation() {
  const header = document.getElementById('site-header');
  const mobileToggle = document.getElementById('mobile-toggle-btn');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Sticky header on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Active link on scroll spy
    const scrollPos = window.scrollY + 100;
    document.querySelectorAll('section[id]').forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  // Mobile menu toggle
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });

    // Close on link click
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }
}

/* ==========================================================================
   Dynamic Typing Subtitle Effect
   ========================================================================== */
function initDynamicTyping() {
  const typingElement = document.getElementById('dynamic-typing-text');
  if (!typingElement) return;

  const phrases = [
    'Systems Engineer → Cloud Engineer → Cloud, DevOps & DevSecOps Engineer',
    'Senior Cloud DevOps Engineer | AWS, Azure, GCP & Kubernetes',
    'Multi-Cloud Architect: AWS • Azure • GCP',
    'DevSecOps & Automated Security Quality Gates',
    'Infrastructure as Code with Terraform, CloudFormation & Ansible',
    'End-to-End CI/CD: GitHub Actions, Jenkins & AWS CodePipeline',
    'Containers & Orchestration: Docker • Kubernetes (Amazon EKS) • ECS Fargate',
    'Identity & Access: Microsoft Entra ID (Azure AD) & AWS IAM',
    'DNS & Domains: AWS Route 53, Cloudflare & GoDaddy'
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 60;

  function type() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 30;
    } else {
      typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 70;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      isDeleting = true;
      typingSpeed = 2200; // Pause at end of phrase
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typingSpeed = 500; // Pause before typing new phrase
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

/* ==========================================================================
   Complete Multi-Cloud & Open-Source Services Directory
   ========================================================================== */
const cloudDirectoryData = [
  // --- AWS Services (30+) ---
  { name: 'Amazon EC2', cat: 'aws', badge: 'Compute', desc: 'Resilient Elastic Compute Cloud virtual server instances with auto-scaling fleets.', icon: 'server' },
  { name: 'Amazon ECS & Fargate', cat: 'aws', badge: 'Containers', desc: 'Highly scalable container orchestration with serverless Fargate execution.', icon: 'box' },
  { name: 'Amazon EKS', cat: 'aws', badge: 'Kubernetes', desc: 'Managed Kubernetes control planes with high-availability node groups.', icon: 'box' },
  { name: 'AWS Lambda', cat: 'aws', badge: 'Serverless', desc: 'Event-driven serverless compute executing microservices on-demand with zero idle cost.', icon: 'zap' },
  { name: 'Amazon S3', cat: 'aws', badge: 'Storage', desc: 'Scalable cloud object storage with lifecycle management, KMS encryption, and replication.', icon: 'database' },
  { name: 'Amazon CloudFront', cat: 'aws', badge: 'CDN & Edge', desc: 'Global low-latency content delivery network with edge security and SSL termination.', icon: 'globe' },
  { name: 'Amazon Route 53', cat: 'aws', badge: 'DNS Routing', desc: 'Highly available Anycast DNS with latency-based, weighted, and failover routing.', icon: 'network' },
  { name: 'Amazon VPC', cat: 'aws', badge: 'Networking', desc: 'Isolated virtual private cloud with private subnets, NAT gateways, and peering.', icon: 'network' },
  { name: 'AWS ALB & NLB', cat: 'aws', badge: 'Load Balancing', desc: 'Layer 7 Application and Layer 4 Network Load Balancers with target health checks.', icon: 'activity' },
  { name: 'Amazon RDS (PostgreSQL/MySQL)', cat: 'aws', badge: 'Databases', desc: 'Managed relational databases with automated snapshots and Multi-AZ replication.', icon: 'database' },
  { name: 'Amazon Aurora Multi-AZ', cat: 'aws', badge: 'Clustered DB', desc: 'High-performance cloud-native relational database with sub-minute failover.', icon: 'database' },
  { name: 'Amazon DynamoDB', cat: 'aws', badge: 'NoSQL', desc: 'Single-digit millisecond serverless NoSQL database with on-demand auto-scaling.', icon: 'database' },
  { name: 'Amazon ElastiCache (Redis)', cat: 'aws', badge: 'Caching', desc: 'Sub-millisecond in-memory cache and session store with cluster mode enabled.', icon: 'zap' },
  { name: 'AWS IAM', cat: 'aws', badge: 'Security', desc: 'Fine-grained Identity & Access Management with least-privilege RBAC policies.', icon: 'shield-check' },
  { name: 'AWS KMS', cat: 'aws', badge: 'Encryption', desc: 'Centralized Key Management Service for automated envelope data encryption.', icon: 'lock' },
  { name: 'AWS Secrets Manager', cat: 'aws', badge: 'Secrets', desc: 'Secure storage and automated rotation of API tokens, database keys, and credentials.', icon: 'key' },
  { name: 'AWS WAF & Shield', cat: 'aws', badge: 'Threat Defense', desc: 'Web application firewall with DDoS mitigation, SQLi, and XSS managed rule sets.', icon: 'shield-alert' },
  { name: 'Amazon CloudWatch', cat: 'aws', badge: 'Observability', desc: 'Full-stack infrastructure telemetry, custom metrics, log aggregation, and alarms.', icon: 'line-chart' },
  { name: 'AWS CloudTrail', cat: 'aws', badge: 'Auditing', desc: 'Comprehensive governance, compliance auditing, and API activity logging.', icon: 'file-text' },
  { name: 'AWS CodePipeline', cat: 'aws', badge: 'CI/CD', desc: 'Fully automated continuous integration and delivery service for rapid releases.', icon: 'git-branch' },
  { name: 'AWS CodeBuild & CodeDeploy', cat: 'aws', badge: 'Deployments', desc: 'Build testing runners and automated blue/green rolling application deployments.', icon: 'play' },
  { name: 'Amazon ECR', cat: 'aws', badge: 'Container Registry', desc: 'Secure, highly available Docker & OCI container image repository.', icon: 'archive' },
  { name: 'Amazon EventBridge & SQS', cat: 'aws', badge: 'Messaging', desc: 'Serverless event bus and decoupled message queues with dead-letter DLQ monitoring.', icon: 'git-merge' },
  { name: 'Amazon SNS', cat: 'aws', badge: 'Notifications', desc: 'Pub/Sub messaging service for fan-out architectures and SMS/Email alerts.', icon: 'bell' },
  { name: 'AWS Systems Manager (SSM)', cat: 'aws', badge: 'Operations', desc: 'Secure agent-based session management, automated patching, and parameter store.', icon: 'sliders' },
  { name: 'AWS Auto Scaling', cat: 'aws', badge: 'Scaling', desc: 'Dynamic target tracking and predictive scaling for EC2, ECS, and DynamoDB.', icon: 'trending-up' },
  { name: 'Amazon EBS & EFS', cat: 'aws', badge: 'Storage', desc: 'Block storage volumes and multi-attach elastic network file systems.', icon: 'hard-drive' },
  { name: 'AWS Transit Gateway', cat: 'aws', badge: 'Network Hub', desc: 'Centralized interconnection hub connecting multiple VPCs and on-premises networks.', icon: 'git-pull-request' },

  // --- Microsoft Azure (13) ---
  { name: 'Azure Virtual Machines', cat: 'azure', badge: 'Compute', desc: 'Scalable Linux and Windows virtual machines in Azure cloud infrastructure.', icon: 'server' },
  { name: 'Azure Kubernetes Service (AKS)', cat: 'azure', badge: 'Kubernetes', desc: 'Managed enterprise Kubernetes clusters with automated patching and Entra ID RBAC.', icon: 'box' },
  { name: 'Azure App Service', cat: 'azure', badge: 'PaaS Compute', desc: 'Fully managed platform for building, deploying, and scaling web apps.', icon: 'cpu' },
  { name: 'Azure Virtual Network (VNet)', cat: 'azure', badge: 'Networking', desc: 'Private network infrastructure with network security groups (NSGs) and subnets.', icon: 'network' },
  { name: 'Azure SQL Database', cat: 'azure', badge: 'Managed DB', desc: 'Intelligent, scalable relational cloud database with built-in high availability.', icon: 'database' },
  { name: 'Azure Blob Storage', cat: 'azure', badge: 'Object Storage', desc: 'Massively scalable and secure object storage for cloud data and backups.', icon: 'archive' },
  { name: 'Azure DevOps Pipelines', cat: 'azure', badge: 'CI/CD', desc: 'Enterprise CI/CD automation pipelines, Git repos, and release management.', icon: 'git-branch' },
  { name: 'Microsoft Entra ID (Azure AD)', cat: 'azure', badge: 'Identity & IAM', desc: 'Universal cloud identity, Single Sign-On (SSO), and conditional access policies.', icon: 'user-check' },
  { name: 'Azure Load Balancer', cat: 'azure', badge: 'Load Balancing', desc: 'Ultra-low latency Layer 4 load balancing and Layer 7 Application Gateways with WAF.', icon: 'activity' },
  { name: 'Azure Monitor & Log Analytics', cat: 'azure', badge: 'Observability', desc: 'Comprehensive telemetry collection, diagnostic analytics, and alerts.', icon: 'line-chart' },
  { name: 'Azure Key Vault', cat: 'azure', badge: 'Security', desc: 'Safeguard cryptographic keys, certificates, and secrets with HSM validation.', icon: 'key' },
  { name: 'Azure Container Registry (ACR)', cat: 'azure', badge: 'Registry', desc: 'Private OCI container registry with geo-replication and vulnerability scanning.', icon: 'box' },
  { name: 'Azure Cosmos DB', cat: 'azure', badge: 'NoSQL', desc: 'Globally distributed, multi-model NoSQL database with single-digit ms latencies.', icon: 'database' },

  // --- Google Cloud Platform (12) ---
  { name: 'Google Kubernetes Engine (GKE)', cat: 'gcp', badge: 'Kubernetes', desc: 'Industry-leading managed Kubernetes platform with Autopilot and multi-cluster mesh.', icon: 'box' },
  { name: 'Google Cloud Run', cat: 'gcp', badge: 'Serverless', desc: 'Fully managed serverless container execution platform scaling instantly from zero.', icon: 'zap' },
  { name: 'Compute Engine (GCE)', cat: 'gcp', badge: 'IaaS Compute', desc: 'Customizable virtual machines running on Google’s secure global infrastructure.', icon: 'server' },
  { name: 'Google Cloud Storage (GCS)', cat: 'gcp', badge: 'Object Storage', desc: 'Unified object storage with high availability and global edge caching.', icon: 'archive' },
  { name: 'Google Cloud SQL', cat: 'gcp', badge: 'Managed DB', desc: 'Fully managed relational database service for PostgreSQL, MySQL, and SQL Server.', icon: 'database' },
  { name: 'Google BigQuery', cat: 'gcp', badge: 'Data Analytics', desc: 'Serverless, cost-effective multi-cloud enterprise data warehouse.', icon: 'pie-chart' },
  { name: 'GCP VPC & Cloud Interconnect', cat: 'gcp', badge: 'Networking', desc: 'Global VPC networks with private Google access and high-speed interconnects.', icon: 'network' },
  { name: 'Cloud Load Balancing', cat: 'gcp', badge: 'Traffic Routing', desc: 'High-performance, single Anycast IPv4/IPv6 global load balancer.', icon: 'activity' },
  { name: 'Google Cloud IAM', cat: 'gcp', badge: 'Security', desc: 'Fine-grained access control and workload identity federation.', icon: 'shield' },
  { name: 'Google Artifact Registry', cat: 'gcp', badge: 'Containers', desc: 'Centralized repository for container images and language packages.', icon: 'box' },
  { name: 'Cloud Operations (Stackdriver)', cat: 'gcp', badge: 'Monitoring', desc: 'Integrated monitoring, logging, error reporting, and distributed tracing.', icon: 'line-chart' },
  { name: 'Google Cloud Pub/Sub', cat: 'gcp', badge: 'Event Ingestion', desc: 'Globally distributed message bus for high-throughput streaming analytics.', icon: 'git-merge' },

  // --- DevOps & GitOps (12) ---
  { name: 'HashiCorp Terraform', cat: 'devops', badge: 'IaC Core', desc: 'Declarative infrastructure as code for multi-cloud provisioning and state locking.', icon: 'layers' },
  { name: 'HashiCorp Terragrunt', cat: 'devops', badge: 'IaC DRY', desc: 'Thin wrapper for Terraform providing DRY configurations and multi-module orchestration.', icon: 'layers' },
  { name: 'Ansible Playbooks', cat: 'devops', badge: 'Configuration', desc: 'Agentless configuration management, software provisioning, and server hardening.', icon: 'terminal' },
  { name: 'Docker & Compose', cat: 'devops', badge: 'Containers', desc: 'Multi-stage container builds, rootless execution, and multi-service definitions.', icon: 'box' },
  { name: 'Kubernetes (K8s)', cat: 'devops', badge: 'Orchestration', desc: 'Production container scheduling, automated rollouts, service mesh, and self-healing.', icon: 'box' },
  { name: 'Helm Package Manager', cat: 'devops', badge: 'K8s Packaging', desc: 'Modular Kubernetes templating, release management, and chart versioning.', icon: 'package' },
  { name: 'ArgoCD GitOps', cat: 'devops', badge: 'Continuous Sync', desc: 'Declarative continuous delivery and automated drift reconciliation for Kubernetes.', icon: 'git-merge' },
  { name: 'GitHub Actions', cat: 'devops', badge: 'CI/CD Pipelines', desc: 'Automated CI/CD matrix builds, automated test gates, and container deployments.', icon: 'git-pull-request' },
  { name: 'Jenkins CI/CD', cat: 'devops', badge: 'Automation Server', desc: 'Declarative Groovy pipelines, distributed agent nodes, and webhook automation.', icon: 'play' },
  { name: 'GitLab CI/CD', cat: 'devops', badge: 'Pipelines', desc: 'Integrated DevOps lifecycle platform with container scanning and auto-deploy.', icon: 'git-branch' },
  { name: 'HashiCorp Packer', cat: 'devops', badge: 'Image Bakery', desc: 'Automated golden machine image creation for AWS AMIs and VM templates.', icon: 'hard-drive' },
  { name: 'Git Version Control', cat: 'devops', badge: 'VCS', desc: 'Branching strategies, Gitflow, semantic versioning, and signed commits.', icon: 'git-commit' },

  // --- Observability & Linux (12) ---
  { name: 'Prometheus', cat: 'observability', badge: 'Metrics Engine', desc: 'High-performance time-series metric collection with PromQL query engine.', icon: 'activity' },
  { name: 'Grafana', cat: 'observability', badge: 'Dashboards', desc: 'Interactive operational dashboards, log visualization, and alert triggers.', icon: 'line-chart' },
  { name: 'Prometheus Alertmanager', cat: 'observability', badge: 'Alert Routing', desc: 'Deduplication, grouping, and notification routing to Slack, PagerDuty, and Email.', icon: 'bell' },
  { name: 'Datadog APM', cat: 'observability', badge: 'APM Tracing', desc: 'End-to-end distributed tracing, infrastructure metrics, and synthetic monitoring.', icon: 'trending-up' },
  { name: 'ELK Stack / OpenSearch', cat: 'observability', badge: 'Central Logging', desc: 'Logstash ingestion, Elasticsearch indexing, and Kibana log analytics.', icon: 'search' },
  { name: 'OpenTelemetry (OTel)', cat: 'observability', badge: 'Telemetry Spec', desc: 'Vendor-agnostic instrumentation for distributed traces, metrics, and logs.', icon: 'sliders' },
  { name: 'Nginx Web Server', cat: 'observability', badge: 'Reverse Proxy', desc: 'High-concurrency web server, reverse proxy, SSL offloader, and rate limiter.', icon: 'globe' },
  { name: 'Envoy Proxy & HAProxy', cat: 'observability', badge: 'Service Proxy', desc: 'Cloud-native high-performance edge and service proxy for microservices.', icon: 'network' },
  { name: 'Istio Service Mesh', cat: 'observability', badge: 'mTLS Mesh', desc: 'Traffic management, fault injection, and zero-trust mutual TLS security.', icon: 'shield-check' },
  { name: 'Linux Administration', cat: 'observability', badge: 'OS Core', desc: 'Ubuntu, Debian, Amazon Linux 2023, RHEL/CentOS tuning, systemd, and cron jobs.', icon: 'terminal' },
  { name: 'Python & Shell Scripting', cat: 'observability', badge: 'Automation', desc: 'Custom CLI tools, boto3 AWS SDK automation, and Linux administration scripts.', icon: 'code' },
  { name: 'Cert-Manager', cat: 'observability', badge: 'TLS Certs', desc: 'Automated x509 certificate provisioning and renewal with Let’s Encrypt in K8s.', icon: 'lock' },
  { name: 'Vanta Compliance', cat: 'observability', badge: 'SOC 2 / ISO 27001', desc: 'Continuous compliance automation, agent monitoring, security posture tracking, and audit readiness.', icon: 'shield-check' },
  { name: 'Bitdefender GravityZone', cat: 'observability', badge: 'Endpoint & EDR', desc: 'Centralized endpoint security, real-time anti-malware, content control, and malicious domain blocking.', icon: 'shield-alert' },
  { name: 'Microsoft Defender for Endpoint', cat: 'observability', badge: 'M365 Security', desc: 'Enterprise threat protection, attack surface reduction, Intune device compliance, and BitLocker encryption.', icon: 'shield' },
  { name: 'Web & Application Filtering', cat: 'observability', badge: 'Access Control', desc: 'Corporate DNS & URL category blocking (social media, torrents, gaming, phishing), and process restrictions.', icon: 'lock' },

  // --- Databases & Caching (8) ---
  { name: 'PostgreSQL', cat: 'databases', badge: 'Relational DB', desc: 'Advanced open-source relational database with indexing and JSONB support.', icon: 'database' },
  { name: 'MySQL / MariaDB', cat: 'databases', badge: 'RDBMS', desc: 'Battle-tested high-concurrency relational database with replication.', icon: 'database' },
  { name: 'Redis In-Memory Store', cat: 'databases', badge: 'Cache & PubSub', desc: 'Sub-millisecond in-memory data structure store, caching, and message broker.', icon: 'zap' },
  { name: 'MongoDB NoSQL', cat: 'databases', badge: 'Document DB', desc: 'Flexible JSON-like document database with replica sets and sharding.', icon: 'database' },
  { name: 'Amazon DynamoDB', cat: 'databases', badge: 'Managed NoSQL', desc: 'Fully managed multi-region NoSQL database with predictable low latencies.', icon: 'database' },
  { name: 'Elasticsearch', cat: 'databases', badge: 'Search Engine', desc: 'Distributed search and analytics engine for structured and unstructured data.', icon: 'search' }
];

function initCloudDirectory() {
  const container = document.getElementById('directory-cards-container');
  const searchInput = document.getElementById('dir-search-input');
  const tabs = document.querySelectorAll('.btn-dir-tab');

  if (!container) return;

  let currentCategory = 'all';
  let currentSearch = '';

  function renderDirectory() {
    container.innerHTML = '';
    const filtered = cloudDirectoryData.filter((item) => {
      const matchCat = currentCategory === 'all' || item.cat === currentCategory;
      const matchSearch =
        currentSearch === '' ||
        item.name.toLowerCase().includes(currentSearch) ||
        item.desc.toLowerCase().includes(currentSearch) ||
        item.badge.toLowerCase().includes(currentSearch);
      return matchCat && matchSearch;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-muted); font-family: var(--font-mono);">
          <i data-lucide="help-circle" style="margin: 0 auto 12px; display:block; color:var(--cyber-cyan); width:32px; height:32px;"></i>
          No technologies matching "${currentSearch}". Try searching for AWS, Kubernetes, Terraform, or Prometheus.
        </div>
      `;
      if (window.lucide) lucide.createIcons();
      return;
    }

    filtered.forEach((item) => {
      const card = document.createElement('div');
      card.className = 'dir-card';
      card.innerHTML = `
        <div>
          <div class="dir-card-header">
            <div class="dir-service-name">
              <i data-lucide="${item.icon}" style="width:16px; color:var(--cyber-cyan);"></i>
              ${item.name}
            </div>
            <span class="dir-category-badge">${item.badge}</span>
          </div>
          <p class="dir-card-desc" style="margin-top: 8px;">${item.desc}</p>
        </div>
      `;
      container.appendChild(card);
    });

    if (window.lucide) lucide.createIcons();
  }

  // Category Tab Click
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
      currentCategory = tab.getAttribute('data-dir-cat');
      renderDirectory();
    });
  });

  // Search Input
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value.toLowerCase().trim();
      renderDirectory();
    });
  }

  // Initial render
  renderDirectory();
}

/* ==========================================================================
   Interactive 3D Technology Sphere (HTML5 Canvas 3D Engine)
   ========================================================================== */
function initTechSphere() {
  const canvas = document.getElementById('sphere-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = canvas.parentElement.offsetWidth || 400);
  let height = (canvas.height = 400);

  const tags = [
    { text: 'AWS Cloud', color: '#ff9900', size: 16 },
    { text: 'Kubernetes', color: '#326ce5', size: 16 },
    { text: 'Terraform', color: '#844fba', size: 15 },
    { text: 'Docker', color: '#5e6ad2', size: 15 },
    { text: 'Azure', color: '#0089d6', size: 15 },
    { text: 'GCP', color: '#ea4335', size: 14 },
    { text: 'CI/CD', color: '#10b981', size: 15 },
    { text: 'GitHub Actions', color: '#f8fafc', size: 14 },
    { text: 'Jenkins', color: '#d33833', size: 14 },
    { text: 'Ansible', color: '#ee0000', size: 13 },
    { text: 'Prometheus', color: '#e6522c', size: 13 },
    { text: 'Grafana', color: '#f46800', size: 14 },
    { text: 'Python', color: '#38bdf8', size: 14 },
    { text: 'Bash / Linux', color: '#4ade80', size: 14 },
    { text: 'Nginx', color: '#009639', size: 13 },
    { text: 'PostgreSQL', color: '#336791', size: 13 },
    { text: 'Redis', color: '#dc2626', size: 13 },
    { text: 'ArgoCD', color: '#ff7c00', size: 13 },
    { text: 'CloudWatch', color: '#ff9900', size: 13 },
    { text: 'DevSecOps', color: '#5e6ad2', size: 14 },
    { text: 'AWS ECS', color: '#ff9900', size: 14 },
    { text: 'AWS Lambda', color: '#ff9900', size: 13 },
    { text: 'Azure AKS', color: '#0089d6', size: 13 },
    { text: 'Google GKE', color: '#ea4335', size: 13 },
    { text: 'Istio Mesh', color: '#466bb0', size: 13 },
    { text: 'Vanta Compliance', color: '#10b981', size: 14 },
    { text: 'Bitdefender', color: '#5e6ad2', size: 14 },
    { text: 'MS Defender', color: '#38bdf8', size: 14 },
    { text: 'Web Filtering', color: '#f59e0b', size: 13 }
  ];

  const radius = Math.min(width, height) * 0.38;
  const items = [];

  // Generate 3D spherical Fibonacci distribution
  const phi = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < tags.length; i++) {
    const y = 1 - (i / (tags.length - 1)) * 2;
    const radiusAtY = Math.sqrt(1 - y * y);
    const theta = phi * i;

    const x = Math.cos(theta) * radiusAtY;
    const z = Math.sin(theta) * radiusAtY;

    items.push({
      text: tags[i].text,
      color: tags[i].color,
      baseSize: tags[i].size,
      x: x * radius,
      y: y * radius,
      z: z * radius
    });
  }

  let angleX = 0.003;
  let angleY = 0.004;
  let isDragging = false;
  let lastMouseX = 0;
  let lastMouseY = 0;

  canvas.addEventListener('mousedown', (e) => {
    isDragging = true;
    lastMouseX = e.clientX;
    lastMouseY = e.clientY;
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  canvas.addEventListener('mousemove', (e) => {
    if (isDragging) {
      const dx = e.clientX - lastMouseX;
      const dy = e.clientY - lastMouseY;
      angleY = dx * 0.0004;
      angleX = -dy * 0.0004;
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
    }
  });

  function rotateX(item, angle) {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    const y = item.y * cos - item.z * sin;
    const z = item.z * cos + item.y * sin;
    item.y = y;
    item.z = z;
  }

  function rotateY(item, angle) {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    const x = item.x * cos - item.z * sin;
    const z = item.z * cos + item.x * sin;
    item.x = x;
    item.z = z;
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    const cx = width / 2;
    const cy = height / 2;

    items.sort((a, b) => b.z - a.z);

    items.forEach((item) => {
      rotateX(item, angleX);
      rotateY(item, angleY);

      const fov = 350;
      const scale = fov / (fov + item.z);
      const x2d = cx + item.x * scale;
      const y2d = cy + item.y * scale;
      const alpha = Math.max(0.2, (item.z + radius) / (2 * radius));

      ctx.save();
      ctx.font = `600 ${item.baseSize * scale}px Outfit, Inter, sans-serif`;
      ctx.fillStyle = item.color;
      ctx.globalAlpha = alpha;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.shadowColor = item.color;
      ctx.shadowBlur = scale > 1 ? 8 : 0;
      ctx.fillText(item.text, x2d, y2d);
      ctx.restore();
    });

    requestAnimationFrame(render);
  }

  render();

  window.addEventListener('resize', () => {
    width = canvas.width = canvas.parentElement.offsetWidth || 400;
    height = canvas.height = 400;
  });
}

/* ==========================================================================
   Skills Category Filter
   ========================================================================== */
function initSkillsFilter() {
  const filterBtns = document.querySelectorAll('.btn-filter');
  const skillCards = document.querySelectorAll('.skill-bar-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.getAttribute('data-category');

      skillCards.forEach((card) => {
        const cardCat = card.getAttribute('data-cat');
        if (category === 'all' || cardCat === category) {
          card.style.display = 'block';
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   Enterprise Linux Mastery & System Administration Matrix Engine
   ========================================================================== */
function initLinuxMatrix() {
  const searchInput = document.getElementById('linux-search-input');
  const tabs = document.querySelectorAll('.btn-linux-tab');
  const cards = document.querySelectorAll('.linux-card');
  const copyBtns = document.querySelectorAll('.linux-cmd-copy-btn');

  if (cards.length === 0) return;

  let currentCategory = 'all';
  let searchTerm = '';

  function filterCards() {
    cards.forEach((card) => {
      const cardCat = card.getAttribute('data-cat');
      const text = card.textContent.toLowerCase();

      const matchCat = currentCategory === 'all' || cardCat === currentCategory;
      const matchSearch = !searchTerm || text.includes(searchTerm);

      if (matchCat && matchSearch) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  }

  // Category Tab Click
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
      currentCategory = tab.getAttribute('data-linux-cat') || 'all';
      filterCards();
    });
  });

  // Search Input Handler
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value.toLowerCase().trim();
      filterCards();
    });
  }

  // Copy Command Code on click
  copyBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const codeEl = btn.parentElement.querySelector('span');
      if (!codeEl) return;
      const codeText = codeEl.textContent.trim();
      navigator.clipboard.writeText(codeText).then(() => {
        btn.innerHTML = `<i data-lucide="check" style="width:14px; color:var(--neon-green);"></i>`;
        if (window.lucide) lucide.createIcons();
        setTimeout(() => {
          btn.innerHTML = `<i data-lucide="copy" style="width:14px;"></i>`;
          if (window.lucide) lucide.createIcons();
        }, 2000);
      });
    });
  });
}

/* ==========================================================================
   Flagship Feature: Interactive Cloud Architecture Playground
   ========================================================================== */
const architectureData = {
  'aws-3tier': {
    group: 'platform',
    shortLabel: 'AWS 3-Tier Enterprise',
    title: 'Enterprise Production Architecture (Amplify + ECS Fargate + ALB + Route 53)',
    budget: '$100 – $250 (Pay on Delivery)',
    nodes: [
      {
        id: 'node-user',
        icon: 'globe',
        title: 'Route 53 & GoDaddy ACM',
        desc: 'DNS Records & SSL/TLS',
        badge: 'TLS 1.3 ACM',
        infoTitle: 'AWS Route 53 & GoDaddy Domain Management',
        infoDesc: 'Configured root and subdomain DNS records in Route 53 hosted zones integrated with GoDaddy registrar domains and AWS Certificate Manager (ACM) SSL/TLS encryption.',
        specs: [
          'DNS: Route 53 Latency & Failover routing records',
          'Certificates: AWS ACM SSL/TLS with DNS CNAME validation',
          'Environments: Dev, Pre-Prod, UAT, and Production'
        ],
        codeFile: 'route53_acm.tf',
        code: `resource "aws_acm_certificate" "domain_cert" {
  domain_name       = "app.example.com"
  validation_method = "DNS"

  subject_alternative_names = [
    "*.example.com",
    "dev.example.com",
    "uat.example.com"
  ]

  lifecycle {
    create_before_destroy = true
  }
}`
      },
      {
        id: 'node-cdn',
        icon: 'layout',
        title: 'AWS Amplify Front-End',
        desc: 'SPA Hosting & CI/CD',
        badge: 'Automated CI/CD',
        infoTitle: 'AWS Amplify Front-End Deployment',
        infoDesc: 'Continuous deployment of modern Single Page Applications (React / Next.js) with global edge hosting, instant cache invalidation, and custom domain mapping.',
        specs: [
          'Hosting: AWS Amplify Managed Edge CDN',
          'Deployments: Automated Git branch build & PR previews',
          'Security: Strict CSP, HSTS, and custom headers'
        ],
        codeFile: 'amplify_app.tf',
        code: `resource "aws_amplify_app" "portal_frontend" {
  name       = "enterprise-portal"
  repository = "https://github.com/org/FinxServe_React"

  build_spec = <<-EOT
    version: 1
    frontend:
      phases:
        preBuild:
          commands: ["npm ci"]
        build:
          commands: ["npm run build"]
      artifacts:
        baseDirectory: dist
        files: ["**/*"]
  EOT
}`
      },
      {
        id: 'node-alb',
        icon: 'network',
        title: 'Application Load Balancer',
        desc: 'Target Groups & Health Checks',
        badge: 'High-Throughput',
        infoTitle: 'Application Load Balancer (ALB) & Target Groups',
        infoDesc: 'High-availability Layer 7 load balancer routing incoming API traffic to dynamic ECS Fargate target groups across multiple Availability Zones with sub-second health checks.',
        specs: [
          'Target Groups: Dynamic port mapping to ECS Fargate tasks',
          'Health Checks: Path-based /health endpoint every 15s',
          'Security: ACM SSL termination & HTTP to HTTPS redirect'
        ],
        codeFile: 'alb_main.tf',
        code: `resource "aws_lb" "main_app_alb" {
  name               = "enterprise-prod-alb"
  internal           = false
  load_balancer_type = "application"
  security_groups    = [aws_security_group.alb_sg.id]
  subnets            = module.vpc.public_subnets

  enable_deletion_protection = true
  drop_invalid_header_fields = true

  tags = {
    Environment = "production"
    ManagedBy   = "Terraform"
  }
}`
      },
      {
        id: 'node-compute',
        icon: 'box',
        title: 'ECS Fargate Microservices',
        desc: 'GitHub Actions CI/CD',
        badge: 'Serverless Compute',
        infoTitle: 'AWS ECS Fargate Backend Services',
        infoDesc: 'Containerized backend microservices (FinXServe, Claim Pioneer, AIRA, Hyper) running on serverless AWS ECS Fargate with zero host management and automated GitHub Actions rollouts.',
        specs: [
          'Compute: Serverless AWS ECS Fargate with ARM64 / Graviton',
          'CI/CD: GitHub Actions multi-stage build & ECR image push',
          'Scaling: Target tracking autoscaling (CPU & Memory)'
        ],
        codeFile: 'ecs_fargate.tf',
        code: `resource "aws_ecs_service" "backend_service" {
  name            = "enterprise-backend-api"
  cluster         = aws_ecs_cluster.main.id
  task_definition = aws_ecs_task_definition.api.arn
  desired_count   = 4
  launch_type     = "FARGATE"

  network_configuration {
    subnets         = module.vpc.private_subnets
    security_groups = [aws_security_group.ecs_sg.id]
  }

  load_balancer {
    target_group_arn = aws_lb_target_group.api_tg.arn
    container_name   = "api-container"
    container_port   = 8080
  }
}`
      },
      {
        id: 'node-database',
        icon: 'database',
        title: 'Aurora RDS & Redis',
        desc: 'Multi-AZ PostgreSQL + Cache',
        badge: 'Encrypted',
        infoTitle: 'Amazon Aurora Multi-AZ & ElastiCache Redis',
        infoDesc: 'High-availability clustered PostgreSQL database with automated cross-AZ failover and sub-millisecond Redis in-memory cache.',
        specs: [
          'Storage: Auto-scaling SSD with AWS KMS encryption',
          'Replication: Synchronous Multi-AZ replica with < 30s failover',
          'Backup: Point-in-time recovery with automated snapshots'
        ],
        codeFile: 'rds_aurora.tf',
        code: `resource "aws_rds_cluster" "aurora_db" {
  cluster_identifier      = "prod-aurora-postgres"
  engine                  = "aurora-postgresql"
  engine_version          = "15.4"
  database_name           = "appdb"
  master_username         = "dbadmin"
  storage_encrypted       = true
  kms_key_id              = aws_kms_key.db_key.arn
  backup_retention_period = 30
}`
      }
    ]
  },
  'gitops-cicd': {
    group: 'platform',
    shortLabel: 'GitOps & CI/CD Pipeline',
    title: 'Automated GitOps & Zero-Downtime CI/CD Pipeline',
    budget: '$100 – $250 (Pay on Delivery)',
    nodes: [
      {
        id: 'node-git',
        icon: 'git-pull-request',
        title: 'GitHub PR / Commit',
        desc: 'Feature Branch Push',
        badge: 'Trigger',
        infoTitle: 'Git Commit & Webhook Trigger',
        infoDesc: 'Developer pushes code or opens Pull Request. Webhook triggers automated pipeline checks instantly.',
        specs: ['Trigger: GitHub Webhook event', 'Branch Protection: Required approvals & status checks', 'Audit: Commit GPG signature verification'],
        codeFile: 'ci_workflow.yml',
        code: `name: Enterprise CI/CD Pipeline
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]`
      },
      {
        id: 'node-test',
        icon: 'shield-check',
        title: 'SonarQube & Trivy',
        desc: 'Security & Vulnerability Gate',
        badge: 'DevSecOps',
        infoTitle: 'Automated Security Gates',
        infoDesc: 'Static Application Security Testing (SAST) and container image vulnerability scans block insecure code before building.',
        specs: ['SAST: SonarQube quality gate (0 blocker bugs)', 'Container Scan: Trivy image vulnerability audit', 'Secrets Scan: TruffleHog / GitGuardian'],
        codeFile: 'security_gate.yml',
        code: `- name: Run Trivy Vulnerability Scanner
  uses: aquasecurity/trivy-action@master
  with:
    image-ref: '\${{ env.ECR_REGISTRY }}/\${{ env.REPO }}:\${{ github.sha }}'
    format: 'table'
    exit-code: '1'
    severity: 'CRITICAL,HIGH'`
      },
      {
        id: 'node-build',
        icon: 'box',
        title: 'Docker Build & ECR',
        desc: 'Multi-Stage Image Publish',
        badge: 'Immutable',
        infoTitle: 'Multi-Stage Docker Image Build',
        infoDesc: 'Builds lightweight distroless Docker image and pushes to Amazon ECR with immutable digest tags.',
        specs: ['Builder: Docker Buildx with cache mount', 'Registry: Amazon Elastic Container Registry (ECR)', 'Image Tagging: Git SHA + Semantic Release'],
        codeFile: 'docker_push.yml',
        code: `- name: Build and Push Docker Image
  run: |
    docker buildx build \\
      --cache-from=type=gha \\
      --cache-to=type=gha,mode=max \\
      -t $ECR_REGISTRY/$REPO:$IMAGE_TAG \\
      --push .`
      },
      {
        id: 'node-argocd',
        icon: 'git-merge',
        title: 'ArgoCD GitOps Sync',
        desc: 'Declarative State Reconciler',
        badge: 'Automated',
        infoTitle: 'ArgoCD Declarative GitOps Controller',
        infoDesc: 'ArgoCD detects new image tags in Git manifest repository and synchronizes state to target Kubernetes clusters with zero drift.',
        specs: ['Sync Policy: Automated with self-healing', 'Rollout: Argo Rollouts Canary Strategy (10% -> 50% -> 100%)', 'Health: Automated metric rollback'],
        codeFile: 'argocd_app.yaml',
        code: `apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: finxserve-production
spec:
  project: default
  source:
    repoURL: 'https://github.com/org/helm-charts'
    targetRevision: HEAD
    path: charts/finxserve
  destination:
    server: 'https://kubernetes.default.svc'
    namespace: production`
      },
      {
        id: 'node-k8s',
        icon: 'server',
        title: 'Kubernetes Cluster',
        desc: 'Zero-Downtime Live Pods',
        badge: 'Live',
        infoTitle: 'Live Production Kubernetes Deployment',
        infoDesc: 'Canary pods verified by synthetic traffic before full traffic switch, guaranteeing 0-second user downtime.',
        specs: ['Cluster: Amazon EKS 1.28 managed node groups', 'Service Mesh: Envoy proxy sidecars', 'Metrics: Prometheus canary error rate < 0.01%'],
        codeFile: 'k8s_deployment.yaml',
        code: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: finxserve-app
spec:
  replicas: 6
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 25%
      maxUnavailable: 0`
      }
    ]
  },
  'k8s-microservices': {
    group: 'platform',
    shortLabel: 'Kubernetes Microservices',
    title: 'Enterprise Kubernetes Microservices Architecture',
    budget: '$100 – $250 (Pay on Delivery)',
    nodes: [
      {
        id: 'node-ingress',
        icon: 'network',
        title: 'NGINX Ingress',
        desc: 'SSL Termination & TLS',
        badge: 'Gateway',
        infoTitle: 'Kubernetes Ingress Controller',
        infoDesc: 'Handles SSL/TLS certificate renewal via cert-manager and routes external HTTP/gRPC traffic into cluster services.',
        specs: ['Certificates: Automated Let’s Encrypt SSL', 'Rate Limiting: 100 req/sec per IP', 'WAF: ModSecurity integration'],
        codeFile: 'ingress.yaml',
        code: `apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: app-ingress
  annotations:
    cert-manager.io/cluster-issuer: "letsencrypt-prod"
spec:
  ingressClassName: nginx
  rules:
  - host: api.narayana.dev
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: gateway-service
            port:
              number: 80`
      },
      {
        id: 'node-mesh',
        icon: 'shield',
        title: 'Istio Service Mesh',
        desc: 'mTLS & Traffic Shifting',
        badge: 'mTLS Strict',
        infoTitle: 'Istio Service Mesh & Envoy Sidecars',
        infoDesc: 'Enforces mutual TLS encryption between all microservices pods and manages dynamic traffic splitting.',
        specs: ['Security: Strict mTLS between pods', 'Tracing: Jaeger distributed trace headers injection', 'Resilience: Circuit breaking & outlier detection'],
        codeFile: 'peer_auth.yaml',
        code: `apiVersion: security.istio.io/v1beta1
kind: PeerAuthentication
metadata:
  name: default
  namespace: production
spec:
  mtls:
    mode: STRICT`
      },
      {
        id: 'node-pods',
        icon: 'box',
        title: 'Microservices Pods',
        desc: 'HPA Autoscaling (10-50 pods)',
        badge: 'HPA Auto',
        infoTitle: 'Stateless Container Pods with HPA',
        infoDesc: 'Horizontal Pod Autoscaler dynamically scales pod replicas between 10 and 50 based on real-time CPU and request metrics.',
        specs: ['HPA: Target CPU 70% & Memory 80%', 'Probes: Liveness & Readiness endpoints', 'Resources: Guaranteed CPU/Memory limits'],
        codeFile: 'hpa.yaml',
        code: `apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: auth-service-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: auth-service
  minReplicas: 3
  maxReplicas: 30
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 65`
      },
      {
        id: 'node-cache',
        icon: 'database',
        title: 'Redis Cluster',
        desc: 'In-Memory Session & Cache',
        badge: '< 1ms Latency',
        infoTitle: 'Clustered In-Memory Redis Cache',
        infoDesc: 'Provides sub-millisecond session state management, caching hot API data, and distributed rate limiting.',
        specs: ['Mode: Cluster with 3 Master + 3 Replica nodes', 'Eviction: volatile-lru policy', 'Persistence: RDB + AOF enabled'],
        codeFile: 'redis_statefulset.yaml',
        code: `apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: redis-cluster
spec:
  serviceName: "redis-cluster"
  replicas: 6`
      }
    ]
  },
  'serverless-event': {
    group: 'platform',
    shortLabel: 'AWS Serverless Event-Driven',
    title: 'AWS Serverless Event-Driven Microservices Architecture',
    budget: '$100 – $250 (Pay on Delivery)',
    nodes: [
      {
        id: 'node-api',
        icon: 'zap',
        title: 'API Gateway',
        desc: 'REST & WebSocket Endpoints',
        badge: 'Serverless',
        infoTitle: 'Amazon API Gateway',
        infoDesc: 'Fully managed API gateway with JWT authorization, request throttling, and direct Lambda integration.',
        specs: ['Auth: Amazon Cognito User Pools', 'Throttling: 5,000 req/sec burst', 'CORS: Configured with strict headers'],
        codeFile: 'api_gateway.tf',
        code: `resource "aws_apigatewayv2_api" "http_api" {
  name          = "serverless-event-api"
  protocol_type = "HTTP"
}`
      },
      {
        id: 'node-lambda',
        icon: 'cpu',
        title: 'AWS Lambda Functions',
        desc: 'On-Demand Serverless Compute',
        badge: 'Scale to Zero',
        infoTitle: 'AWS Lambda Serverless Functions',
        infoDesc: 'Event-driven compute executing business logic in Node.js/Python with sub-100ms cold starts and automatic scaling to zero when idle.',
        specs: ['Runtime: Python 3.11 / Node.js 20', 'Concurrency: Reserved concurrency pools', 'Tracing: AWS X-Ray enabled'],
        codeFile: 'lambda_function.tf',
        code: `resource "aws_lambda_function" "event_processor" {
  function_name = "process-payment-event"
  runtime       = "python3.11"
  handler       = "index.handler"
  memory_size   = 1024
  timeout       = 15
  architectures = ["arm64"]
}`
      },
      {
        id: 'node-bus',
        icon: 'git-merge',
        title: 'Amazon EventBridge & SQS',
        desc: 'Asynchronous Event Bus',
        badge: 'Decoupled',
        infoTitle: 'Amazon EventBridge & SQS Dead-Letter Queues',
        infoDesc: 'Decouples microservices through asynchronous event routing with guaranteed delivery and DLQ dead-letter monitoring.',
        specs: ['Reliability: Dead-Letter Queue (DLQ) with alarms', 'Filtering: Content-based event pattern matching', 'Throughput: Unlimited scalability'],
        codeFile: 'eventbridge.tf',
        code: `resource "aws_cloudwatch_event_bus" "main" {
  name = "application-events"
}`
      },
      {
        id: 'node-dynamo',
        icon: 'database',
        title: 'Amazon DynamoDB',
        desc: 'Single-Digit Millisecond NoSQL',
        badge: 'Pay-per-Request',
        infoTitle: 'Amazon DynamoDB Global Tables',
        infoDesc: 'Serverless NoSQL database providing consistent single-digit millisecond latency at any scale with on-demand capacity.',
        specs: ['Billing: On-Demand pay-per-request', 'Encryption: AWS KMS managed encryption', 'PITR: Point-in-time recovery enabled'],
        codeFile: 'dynamodb.tf',
        code: `resource "aws_dynamodb_table" "events_table" {
  name         = "TelemetryEvents"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "PK"
  range_key    = "SK"

  point_in_time_recovery {
    enabled = true
  }
}`
      }
    ]
  },
  'multi-region-dr': {
    group: 'platform',
    shortLabel: 'Multi-Region Disaster Recovery',
    title: 'Multi-Region High Availability & Disaster Recovery',
    budget: '$100 – $250 (Pay on Delivery)',
    nodes: [
      {
        id: 'node-dns',
        icon: 'globe',
        title: 'Route 53 DNS Failover',
        desc: 'Latency-Based Health Routing',
        badge: '99.999%',
        infoTitle: 'Amazon Route 53 Multi-Region Health Routing',
        infoDesc: 'Continually tests health of primary and secondary regions, automatically rerouting global user traffic in under 60 seconds during outage.',
        specs: ['Health Checks: Evaluates 200 OK every 10s', 'Failover Mode: Active-Passive with warm standby', 'SLA: 99.999% DNS availability'],
        codeFile: 'dns_failover.tf',
        code: `resource "aws_route53_health_check" "primary" {
  fqdn              = "us-east-1.narayana.dev"
  port              = 443
  type              = "HTTPS"
  resource_path     = "/health"
  failure_threshold = "3"
  request_interval  = "10"
}`
      },
      {
        id: 'node-primary',
        icon: 'server',
        title: 'Primary Region (US-East-1)',
        desc: 'Active Production Cluster',
        badge: 'Active Primary',
        infoTitle: 'Active Primary Cloud Region',
        infoDesc: 'Handles 100% of live production traffic under normal operating conditions with auto-scaling compute and real-time database replication.',
        specs: ['Compute: ECS / EKS Multi-AZ Cluster', 'Capacity: Autoscaling 10 - 100 tasks', 'Status: Primary Active'],
        codeFile: 'primary_region.tf',
        code: `provider "aws" {
  alias  = "primary"
  region = "us-east-1"
}`
      },
      {
        id: 'node-replication',
        icon: 'git-merge',
        title: 'Cross-Region S3 & RDS Replication',
        desc: 'Continuous Async Data Sync',
        badge: 'RPO < 1 min',
        infoTitle: 'Continuous Cross-Region Data Replication',
        infoDesc: 'Asynchronous cross-region replication keeps databases, S3 objects, and configuration secrets synchronized with RPO < 1 minute.',
        specs: ['RDS: Aurora Global Database read replica', 'S3: Bidirectional cross-region replication (CRR)', 'KMS: Multi-region encryption keys'],
        codeFile: 'aurora_global.tf',
        code: `resource "aws_rds_global_cluster" "global_db" {
  global_cluster_identifier = "global-prod-db"
  engine                    = "aurora-postgresql"
}`
      },
      {
        id: 'node-standby',
        icon: 'shield-alert',
        title: 'Standby Region (US-West-2)',
        desc: 'Warm Standby Failover Cluster',
        badge: 'RTO < 5 min',
        infoTitle: 'Warm Standby Disaster Recovery Region',
        infoDesc: 'Pre-warmed disaster recovery environment capable of scaling up to full production traffic capacity in under 5 minutes.',
        specs: ['RTO: Recovery Time Objective < 5 minutes', 'RPO: Recovery Point Objective < 1 minute', 'Status: Warm Standby Ready'],
        codeFile: 'standby_region.tf',
        code: `provider "aws" {
  alias  = "standby"
  region = "us-west-2"
}`
      }
    ]
  },
  'emp-portal': {
    group: 'cloud',
    shortLabel: 'emp-portal Workforce Platform',
    title: 'Enterprise Workforce & Delivery Platform (emp-portal)',
    budget: '$100 – $250 (Pay on Delivery)',
    nodes: [
      {
        id: 'node-amplify',
        icon: 'layout',
        title: 'AWS Amplify (CloudFront CDN)',
        desc: 'React 18 SPA & Edge Caching',
        badge: 'Global SSL',
        infoTitle: 'AWS Amplify Hosting with CloudFront CDN',
        infoDesc: 'React 18 single-page application delivered from Amplify with CloudFront edge caching, automatic SSL, and SPA rewrite rules so deep-links resolve without 404s.',
        specs: [
          'Hosting: AWS Amplify + CloudFront global edge cache',
          'Frontend: React 18 SPA with hashed production bundles',
          'Security: Managed SSL, HSTS, and custom response headers'
        ],
        codeFile: 'amplify-stack.ts',
        code: `new amplify.CfnApp(this, 'EmpPortalFrontend', {
  name: 'emp-portal-spa',
  platform: 'WEB',
  environmentVariables: [
    { name: 'NODE_OPTIONS', value: '--max-old-space-size=4096' }
  ],
  customRules: [{
    source: '/<*>',
    target: '/index.html',
    status: '200'
  }]
});`
      },
      {
        id: 'node-edge',
        icon: 'network',
        title: 'Route 53 & ALB',
        desc: 'Custom Domain, ACM, HTTPS Facade',
        badge: 'TLS 1.3',
        infoTitle: 'Route 53, ALB & HTTPS API Facade',
        infoDesc: 'Custom domain routing through Route 53 with ACM certificate termination on the Application Load Balancer, fronting the FastAPI origin as a hardened HTTPS facade.',
        specs: [
          'DNS: Route 53 alias records to the public ALB',
          'Certificates: ACM TLS 1.3 with HTTP to HTTPS redirect',
          'Facade: HTTPS ingress to the Elastic Beanstalk API origin'
        ],
        codeFile: 'network-stack.ts',
        code: `const alb = new elbv2.ApplicationLoadBalancer(this, 'EmpPortalAlb', {
  vpc: this.vpc,
  internetFacing: true,
  loadBalancerName: 'emp-portal-alb',
  vpcSubnets: { subnetType: ec2.SubnetType.PUBLIC }
});

alb.addListener('Https', {
  port: 443,
  certificates: [acm.Certificate.fromCertificateArn(this, 'Cert', certArn)],
  defaultAction: elbv2.ListenerAction.forward([apiTargetGroup])
});`
      },
      {
        id: 'node-beanstalk',
        icon: 'cpu',
        title: 'Elastic Beanstalk (FastAPI)',
        desc: 'Python 3.11 on Amazon Linux 2023',
        badge: '~900 Endpoints',
        infoTitle: 'Elastic Beanstalk FastAPI Origin',
        infoDesc: 'Python 3.11 FastAPI application on Amazon Linux 2023 with Uvicorn listening on port 8000, exposing roughly 900 API endpoints for HR, workforce, and delivery workflows.',
        specs: [
          'Runtime: Python 3.11 on Amazon Linux 2023',
          'Server: Uvicorn ASGI on port 8000 behind ALB health checks',
          'Scale: Elastic Beanstalk rolling deployments, zero downtime'
        ],
        codeFile: 'api-stack.ts',
        code: `new elasticbeanstalk.CfnEnvironment(this, 'EmpPortalApiEnv', {
  applicationName: 'emp-portal-api',
  solutionStackName: '64bit Amazon Linux 2023 v4.3 running Python 3.11',
  optionSettings: [
    {
      namespace: 'aws:elasticbeanstalk:application:environment',
      optionName: 'PORT',
      value: '8000'
    },
    {
      namespace: 'aws:elasticbeanstalk:environment',
      optionName: 'LoadBalancerType',
      value: 'application'
    }
  ]
});`
      },
      {
        id: 'node-rds',
        icon: 'database',
        title: 'Private RDS MySQL 8',
        desc: 'Multi-AZ, Encrypted, Isolated Subnets',
        badge: 'No Public Access',
        infoTitle: 'Private Multi-AZ RDS MySQL 8',
        infoDesc: 'Amazon RDS MySQL 8 running Multi-AZ in isolated private subnets, encrypted at rest, with zero public internet exposure and security-group ingress only from the API tier.',
        specs: [
          'Engine: RDS MySQL 8 Multi-AZ with automatic failover',
          'Encryption: KMS at rest, TLS in transit',
          'Network: PRIVATE_ISOLATED subnets, publiclyAccessible = false'
        ],
        codeFile: 'database-stack.ts',
        code: `new rds.DatabaseInstance(this, 'EmpPortalMysql', {
  engine: rds.DatabaseInstanceEngine.mysql({
    version: rds.MysqlEngineVersion.VER_8_0
  }),
  vpc: this.vpc,
  vpcSubnets: { subnetType: ec2.SubnetType.PRIVATE_ISOLATED },
  multiAz: true,
  storageEncrypted: true,
  publiclyAccessible: false,
  backupRetention: cdk.Duration.days(7)
});`
      },
      {
        id: 'node-secops',
        icon: 'shield-check',
        title: 'Security & Ops',
        desc: 'Secrets, SSM Bastion, SES',
        badge: 'Zero Standing Access',
        infoTitle: 'Secrets Manager, SSM Session Manager & SES',
        infoDesc: 'Operational plane with Secrets Manager for HR and payroll credentials, SSM Session Manager as a bastion tunnel (no inbound SSH), and Amazon SES for transactional workforce emails.',
        specs: [
          'Secrets: AWS Secrets Manager for DB and app credentials',
          'Access: SSM Session Manager bastion tunnel, no public SSH',
          'Mail: Amazon SES from noreply@example.com'
        ],
        codeFile: 'security-ops.ts',
        code: `new secretsmanager.Secret(this, 'EmpPortalSecrets', {
  secretName: 'emp-portal/prod/app',
  description: 'HR, payroll, and session secrets'
});

new ses.EmailIdentity(this, 'PortalFrom', {
  identity: ses.Identity.email('noreply@example.com')
});

new iam.ManagedPolicy(this, 'SsmBastionPolicy', {
  statements: [new iam.PolicyStatement({
    actions: ['ssm:StartSession'],
    resources: ['arn:aws:ec2:*:*:instance/*']
  })]
});`
      }
    ]
  },
  'hyper': {
    group: 'fintech',
    shortLabel: 'Hyper Investment Journeys',
    title: 'Hyper — Personalized Digital Investment Platform',
    budget: '$100 – $250 (Pay on Delivery)',
    nodes: [
      {
        id: 'hyper-edge',
        icon: 'layout',
        title: 'Amplify Web App',
        desc: 'Goal Discovery SPA & Edge CDN',
        badge: 'React SPA',
        infoTitle: 'AWS Amplify Investor Experience',
        infoDesc: 'Front-end investment journey hosted on Amplify with global CloudFront caching, advisor-branded what-if simulators, and branch-based previews for UAT.',
        specs: ['Hosting: Amplify + CloudFront edge', 'UX: Goal discovery to portfolio recommendation', 'CI/CD: Git-connected production branch'],
        codeFile: 'hyper_amplify.tf',
        code: `resource "aws_amplify_app" "hyper" {
  name       = "hyper-investor-spa"
  repository = "https://github.com/org/hyper-web"
  platform   = "WEB"
}`
      },
      {
        id: 'hyper-dns',
        icon: 'globe',
        title: 'Route 53 & ACM',
        desc: 'Custom Domain + TLS 1.3',
        badge: 'GoDaddy ACM',
        infoTitle: 'Route 53 DNS and ACM Certificates',
        infoDesc: 'Latency-based DNS for investor traffic with ACM certificates validated against GoDaddy-hosted zones.',
        specs: ['DNS: Route 53 alias to Amplify and ALB', 'TLS: ACM TLS 1.3 with HTTP redirect', 'Envs: Dev, UAT, Production'],
        codeFile: 'hyper_dns.tf',
        code: `resource "aws_route53_record" "hyper_app" {
  zone_id = aws_route53_zone.primary.zone_id
  name    = "app.example.com"
  type    = "A"
  alias {
    name                   = aws_lb.hyper.dns_name
    zone_id                = aws_lb.hyper.zone_id
    evaluate_target_health = true
  }
}`
      },
      {
        id: 'hyper-waf',
        icon: 'shield',
        title: 'WAF + ALB',
        desc: 'PCI-adjacent API Ingress',
        badge: 'Layer 7',
        infoTitle: 'AWS WAF and Application Load Balancer',
        infoDesc: 'WAF rate limits and OWASP managed rules protect scoring APIs. ALB terminates TLS and health-checks ECS sim engines across AZs.',
        specs: ['WAF: AWS Managed Core + rate-based rules', 'ALB: Multi-AZ target groups /health', 'Security: Drop invalid headers'],
        codeFile: 'hyper_alb.tf',
        code: `resource "aws_wafv2_web_acl" "hyper" {
  name  = "hyper-api-waf"
  scope = "REGIONAL"
  default_action { allow {} }
  visibility_config {
    cloudwatch_metrics_enabled = true
    metric_name                = "hyperWaf"
    sampled_requests_enabled   = true
  }
}`
      },
      {
        id: 'hyper-ecs',
        icon: 'cpu',
        title: 'Scoring & Sim Engine',
        desc: 'ECS Fargate Microservices',
        badge: 'What-If Sims',
        infoTitle: 'ECS Fargate Scoring and Simulation',
        infoDesc: 'Advisor-defined scoring models and real-time what-if simulations run on Fargate with GitHub Actions rollouts and target-tracking autoscaling.',
        specs: ['Compute: ECS Fargate ARM64', 'API: Scoring + portfolio sim workers', 'Deploy: GitHub Actions to ECR'],
        codeFile: 'hyper_ecs.tf',
        code: `resource "aws_ecs_service" "hyper_sim" {
  name            = "hyper-sim-engine"
  cluster         = aws_ecs_cluster.fintech.id
  task_definition = aws_ecs_task_definition.hyper.arn
  desired_count   = 3
  launch_type     = "FARGATE"
}`
      },
      {
        id: 'hyper-data',
        icon: 'database',
        title: 'Aurora + ElastiCache',
        desc: 'Portfolios Encrypted Multi-AZ',
        badge: 'KMS',
        infoTitle: 'Aurora PostgreSQL and Redis Cache',
        infoDesc: 'Advisor portfolios and simulation snapshots stored in Aurora PostgreSQL Multi-AZ with Redis for sub-second what-if state.',
        specs: ['DB: Aurora PostgreSQL Multi-AZ + KMS', 'Cache: ElastiCache Redis', 'Backup: 30-day PITR snapshots'],
        codeFile: 'hyper_data.tf',
        code: `resource "aws_rds_cluster" "hyper" {
  engine                  = "aurora-postgresql"
  storage_encrypted       = true
  kms_key_id              = aws_kms_key.hyper.arn
  backup_retention_period = 30
}`
      }
    ]
  },
  'finxserve': {
    group: 'fintech',
    shortLabel: 'FinXServe Banking Cloud',
    title: 'FinXServe — Omnichannel Digital Banking Infrastructure',
    budget: '$100 – $250 (Pay on Delivery)',
    nodes: [
      {
        id: 'fx-cicd',
        icon: 'git-branch',
        title: 'GitHub Actions CI/CD',
        desc: 'Docker Build, Scan, Deploy',
        badge: 'Zero-Downtime',
        infoTitle: 'GitHub Actions Banking Pipeline',
        infoDesc: 'Builds Docker images, scans with Trivy, pushes to ECR, and rolling-deploys to ECS/EC2 with Slack/SNS release notifications.',
        specs: ['Trigger: Protected main + release tags', 'Scan: Trivy HIGH/CRITICAL gate', 'Notify: SNS deployment webhooks'],
        codeFile: 'finxserve_ci.yml',
        code: `name: FinXServe Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: docker build -t finxserve:\${{ github.sha }} .`
      },
      {
        id: 'fx-compute',
        icon: 'server',
        title: 'EC2 / ECS Docker',
        desc: 'Containerized Banking APIs',
        badge: 'Omnichannel',
        infoTitle: 'EC2 and ECS Docker Runtime',
        infoDesc: 'Salesforce-native digital banking APIs on ECS with EC2-backed Docker hosts for legacy adapters (lending, cards, deposits).',
        specs: ['Runtime: ECS services + EC2 Docker hosts', 'Domains: Lending, cards, deposits', 'HA: Multi-AZ desired count >= 2'],
        codeFile: 'finxserve_ecs.tf',
        code: `resource "aws_ecs_cluster" "finxserve" {
  name = "finxserve-prod"
  setting {
    name  = "containerInsights"
    value = "enabled"
  }
}`
      },
      {
        id: 'fx-proxy',
        icon: 'network',
        title: 'Nginx Reverse Proxy',
        desc: 'TLS, Path Routing, Rate Limit',
        badge: 'Edge',
        infoTitle: 'Nginx Reverse Proxy Tier',
        infoDesc: 'Nginx terminates TLS on EC2, routes path prefixes to ECS services, and applies request rate limits for core banking APIs.',
        specs: ['Proxy: Nginx path-based upstreams', 'TLS: ACM / host certificates', 'Limits: Burst + connection throttling'],
        codeFile: 'nginx.conf',
        code: `server {
  listen 443 ssl;
  location /api/ {
    proxy_pass http://finxserve-ecs:8080/;
    limit_req zone=banking burst=40;
  }
}`
      },
      {
        id: 'fx-db',
        icon: 'database',
        title: 'PostgreSQL + pgAdmin',
        desc: 'Multi-AZ Encrypted RDS',
        badge: 'PCI-DSS',
        infoTitle: 'RDS PostgreSQL and pgAdmin',
        infoDesc: 'Customer and ledger data on RDS PostgreSQL Multi-AZ with KMS encryption. pgAdmin locked to a private bastion subnet.',
        specs: ['Engine: RDS PostgreSQL Multi-AZ', 'Admin: pgAdmin in private subnet', 'Encryption: KMS at rest + TLS'],
        codeFile: 'finxserve_rds.tf',
        code: `resource "aws_db_instance" "finxserve" {
  engine                 = "postgres"
  multi_az               = true
  storage_encrypted      = true
  publicly_accessible    = false
  backup_retention_period = 14
}`
      },
      {
        id: 'fx-s3',
        icon: 'hard-drive',
        title: 'S3 Backups & SNS',
        desc: 'Assets, Snapshots, Alerts',
        badge: 'Audit',
        infoTitle: 'S3 Asset Store and SNS Alerts',
        infoDesc: 'Document and statement assets in versioned S3 with snapshot exports and SNS alerts on deploy or backup failure.',
        specs: ['S3: Versioned + SSE-KMS', 'Backup: Nightly RDS snapshot export', 'Alerts: SNS to ops + Slack'],
        codeFile: 'finxserve_s3.tf',
        code: `resource "aws_s3_bucket" "finxserve_assets" {
  bucket = "finxserve-prod-assets"
}
resource "aws_sns_topic" "finxserve_ops" {
  name = "finxserve-ops-alerts"
}`
      }
    ]
  },
  'claim-pioneer': {
    group: 'ai',
    shortLabel: 'Claim Pioneer AI Dispatch',
    title: 'Claim Pioneer — AI Claims Lifecycle Uberization',
    budget: '$100 – $250 (Pay on Delivery)',
    nodes: [
      {
        id: 'cp-ui',
        icon: 'layout',
        title: 'Amplify Claims UI',
        desc: 'Intake + Live Tracking SPA',
        badge: 'Edge',
        infoTitle: 'Amplify Claims Experience',
        infoDesc: 'Adjuster and customer portals on Amplify with real-time claim status boards and authenticated intake forms.',
        specs: ['Hosting: Amplify CloudFront', 'Apps: Intake, adjuster, live track', 'Auth: Cognito + JWT to API'],
        codeFile: 'claim_pioneer_amplify.tf',
        code: `resource "aws_amplify_app" "claim_pioneer" {
  name     = "claim-pioneer-ui"
  platform = "WEB"
}`
      },
      {
        id: 'cp-edge',
        icon: 'globe',
        title: 'Route 53 + ALB',
        desc: 'DNS and Target Groups',
        badge: 'Health Checks',
        infoTitle: 'Route 53 and ALB Target Groups',
        infoDesc: 'Public DNS to ALB with path-based target groups for intake, dispatcher, and tracking APIs and 15s health checks.',
        specs: ['DNS: Route 53 alias records', 'ALB: Path routing /intake /dispatch', 'Health: /health every 15s'],
        codeFile: 'claim_pioneer_alb.tf',
        code: `resource "aws_lb_target_group" "dispatcher" {
  name     = "cp-dispatcher-tg"
  port     = 8080
  protocol = "HTTP"
  vpc_id   = aws_vpc.main.id
}`
      },
      {
        id: 'cp-ai',
        icon: 'sparkles',
        title: 'Bedrock Assignment',
        desc: 'AI Dispatcher Guardrails',
        badge: 'Uberization',
        infoTitle: 'Amazon Bedrock Claims Assignment',
        infoDesc: 'Bedrock models score adjuster skill, load, and geo to auto-assign claims, removing biased manual routing.',
        specs: ['Model: Bedrock Claude + guardrails', 'Input: Claim type, SLA, adjuster load', 'Output: Ranked assignment + reason'],
        codeFile: 'claim_pioneer_bedrock.tf',
        code: `resource "aws_bedrock_guardrail" "claims" {
  name                      = "claim-pioneer-guardrail"
  blocked_input_messaging   = "PII blocked"
  blocked_outputs_messaging = "Unsafe assignment blocked"
}`
      },
      {
        id: 'cp-ecs',
        icon: 'box',
        title: 'ECS Fargate Dispatcher',
        desc: 'Workflow Microservices',
        badge: 'Intake-to-Close',
        infoTitle: 'ECS Fargate Claims Orchestration',
        infoDesc: 'Containerized dispatcher, SLA timers, and closure workflows on Fargate with SQS between intake and assignment.',
        specs: ['Compute: ECS Fargate workers', 'Queue: SQS intake buffer + DLQ', 'Flow: Intake to assignment to close'],
        codeFile: 'claim_pioneer_ecs.tf',
        code: `resource "aws_ecs_service" "dispatcher" {
  name         = "cp-ai-dispatcher"
  cluster      = aws_ecs_cluster.claims.id
  launch_type  = "FARGATE"
  desired_count = 4
}`
      },
      {
        id: 'cp-search',
        icon: 'activity',
        title: 'OpenSearch Live Claims',
        desc: 'Real-Time Visibility Index',
        badge: 'Observability',
        infoTitle: 'OpenSearch Live Claim Index',
        infoDesc: 'Every claim step is indexed in OpenSearch for live tracking dashboards and CloudWatch anomaly alarms.',
        specs: ['Index: OpenSearch claims-* daily', 'Dashboards: Adjuster load + SLA', 'Alerts: CloudWatch on SLA breach'],
        codeFile: 'claim_pioneer_os.tf',
        code: `resource "aws_opensearch_domain" "claims" {
  domain_name    = "claim-pioneer-live"
  engine_version = "OpenSearch_2.11"
}`
      }
    ]
  },
  'aira': {
    group: 'ai',
    shortLabel: 'AIRA Reasoning Agents',
    title: 'AIRA — Autonomous Intelligent Reasoning Agent',
    budget: '$100 – $250 (Pay on Delivery)',
    nodes: [
      {
        id: 'aira-oneapi',
        icon: 'link-2',
        title: 'OneAPI Ingress',
        desc: 'API Gateway + JWT',
        badge: 'Weeks not Months',
        infoTitle: 'OneAPI Integration Gateway',
        infoDesc: 'API Gateway HTTP APIs with JWT authorizers and partner keys collapse FI/insurance onboarding from months to weeks.',
        specs: ['Ingress: API Gateway HTTP API', 'Auth: JWT + API keys per partner', 'Throttle: Partner usage plans'],
        codeFile: 'aira_apigw.tf',
        code: `resource "aws_apigatewayv2_api" "oneapi" {
  name          = "aira-oneapi"
  protocol_type = "HTTP"
}`
      },
      {
        id: 'aira-edge',
        icon: 'globe',
        title: 'Route 53 / ACM / ALB',
        desc: 'Multi-Env TLS Front Door',
        badge: 'Dev-UAT-Prod',
        infoTitle: 'Multi-Environment TLS Front Door',
        infoDesc: 'Dev, Pre-Prod, UAT, and Prod hostnames with ACM and ALB target groups isolated per environment.',
        specs: ['DNS: Route 53 per environment', 'TLS: ACM + GoDaddy validation', 'ALB: Isolated target groups'],
        codeFile: 'aira_edge.tf',
        code: `resource "aws_lb" "aira" {
  name               = "aira-prod-alb"
  load_balancer_type = "application"
  internal           = false
}`
      },
      {
        id: 'aira-agents',
        icon: 'sparkles',
        title: 'AIRA Agents (Fargate)',
        desc: 'Multi-Step Reasoning Fleet',
        badge: 'Bedrock',
        infoTitle: 'ECS Fargate Agent Fleet + Bedrock',
        infoDesc: 'Autonomous agents on Fargate call Bedrock for multi-step reasoning with tool-use traces stored for audit.',
        specs: ['Compute: ECS Fargate agent pool', 'LLM: Bedrock with tool calling', 'Trace: Step logs to CloudWatch'],
        codeFile: 'aira_agents.tf',
        code: `resource "aws_ecs_task_definition" "aira_agent" {
  family                   = "aira-agent"
  requires_compatibilities = ["FARGATE"]
  cpu                      = "1024"
  memory                   = "2048"
  network_mode             = "awsvpc"
}`
      },
      {
        id: 'aira-guard',
        icon: 'shield-check',
        title: 'Compliance Guardrails',
        desc: 'Policy Engine + Audit Trail',
        badge: 'Regulated',
        infoTitle: 'Compliance Guardrails and Audit',
        infoDesc: 'Policy engine blocks unsafe tool calls, redacts PII, and writes immutable decision audits for regulators.',
        specs: ['Guardrails: Bedrock + custom policy service', 'PII: Redaction before model I/O', 'Audit: Immutable decision log'],
        codeFile: 'aira_guardrails.tf',
        code: `resource "aws_cloudwatch_log_group" "aira_audit" {
  name              = "/aira/prod/audit"
  retention_in_days = 365
  kms_key_id        = aws_kms_key.aira.arn
}`
      },
      {
        id: 'aira-data',
        icon: 'database',
        title: 'Aurora + OpenSearch',
        desc: 'Cases, Memory, Retrieval',
        badge: 'Encrypted',
        infoTitle: 'Aurora Cases and OpenSearch Memory',
        infoDesc: 'Case state in Aurora PostgreSQL; retrieval-augmented memory in OpenSearch for agent context.',
        specs: ['OLTP: Aurora PostgreSQL Multi-AZ', 'RAG: OpenSearch vector k-NN', 'KMS: Encryption at rest'],
        codeFile: 'aira_data.tf',
        code: `resource "aws_rds_cluster" "aira" {
  engine            = "aurora-postgresql"
  storage_encrypted = true
  kms_key_id        = aws_kms_key.aira.arn
}`
      }
    ]
  },
  'drive30': {
    group: 'cloud',
    shortLabel: 'Drive30 Inventory Command',
    title: 'Drive30 — Automotive Inventory & Command Center',
    budget: '$100 – $250 (Pay on Delivery)',
    nodes: [
      {
        id: 'd30-sftp',
        icon: 'upload-cloud',
        title: 'Transfer Family SFTP',
        desc: 'vAuto Inventory Ingest',
        badge: 'SFTP',
        infoTitle: 'AWS Transfer Family SFTP',
        infoDesc: 'Partners drop inventory feeds over SFTP. Custom IdP authenticates against hashed credentials in DynamoDB via API Gateway and Lambda.',
        specs: ['Ingest: Transfer Family SFTP', 'IdP: API Gateway + Lambda', 'Store: DynamoDB hashed credentials'],
        codeFile: 'drive30_transfer.tf',
        code: `resource "aws_transfer_server" "vauto" {
  identity_provider_type = "AWS_LAMBDA"
  protocols              = ["SFTP"]
  endpoint_type          = "PUBLIC"
}`
      },
      {
        id: 'd30-s3',
        icon: 'hard-drive',
        title: 'S3 incoming/vauto/',
        desc: 'Flat Key Inventory Landing',
        badge: 'Landing Zone',
        infoTitle: 'S3 Inventory Landing Zone',
        infoDesc: 'Authenticated uploads land in s3://bucket/incoming/vauto/ with event notifications into SQS for workers.',
        specs: ['Prefix: incoming/vauto/', 'Events: S3 ObjectCreated to SQS', 'SSE: KMS bucket key'],
        codeFile: 'drive30_s3.tf',
        code: `resource "aws_s3_bucket_notification" "vauto" {
  bucket = aws_s3_bucket.inventory.id
  queue {
    queue_arn     = aws_sqs_queue.inventory.arn
    events        = ["s3:ObjectCreated:*"]
    filter_prefix = "incoming/vauto/"
  }
}`
      },
      {
        id: 'd30-sqs',
        icon: 'layers',
        title: 'SQS + ECS Fargate',
        desc: 'Python Workers + Alembic',
        badge: 'Async',
        infoTitle: 'SQS Workers on ECS Fargate',
        infoDesc: 'Python workers consume SQS, parse inventory files, and apply Alembic migrations against the operational database.',
        specs: ['Queue: SQS + DLQ', 'Workers: ECS Fargate Python', 'DB: Alembic migrations'],
        codeFile: 'drive30_workers.tf',
        code: `resource "aws_sqs_queue" "inventory" {
  name                      = "drive30-inventory"
  visibility_timeout_seconds = 300
  redrive_policy = jsonencode({
    deadLetterTargetArn = aws_sqs_queue.inventory_dlq.arn
    maxReceiveCount     = 5
  })
}`
      },
      {
        id: 'd30-eb',
        icon: 'calendar',
        title: 'EventBridge Sync',
        desc: 'X3-to-MIS Scheduled Jobs',
        badge: 'Cron',
        infoTitle: 'EventBridge X3-to-MIS Sync',
        infoDesc: 'Scheduled EventBridge rules trigger ECS tasks that synchronize X3 inventory into MIS on a dealer calendar.',
        specs: ['Scheduler: EventBridge cron', 'Job: X3-to-MIS ECS task', 'Retry: Failed invocations to DLQ'],
        codeFile: 'drive30_eventbridge.tf',
        code: `resource "aws_cloudwatch_event_rule" "x3_mis" {
  name                = "drive30-x3-to-mis"
  schedule_expression = "cron(0 * * * ? *)"
}`
      },
      {
        id: 'd30-cc',
        icon: 'monitor',
        title: 'Amplify Command Center',
        desc: 'Next.js + Cognito',
        badge: 'Ops UI',
        infoTitle: 'Next.js Command Center on Amplify',
        infoDesc: 'Real-time dealer operations UI on Amplify with Amazon Cognito authentication and API calls to Fargate workers.',
        specs: ['UI: Next.js on Amplify', 'Auth: Amazon Cognito user pool', 'API: HTTPS to ALB / workers'],
        codeFile: 'drive30_amplify.tf',
        code: `resource "aws_cognito_user_pool" "command_center" {
  name = "drive30-command-center"
}
resource "aws_amplify_app" "command_center" {
  name     = "drive30-command-center"
  platform = "WEB"
}`
      }
    ]
  },
  'vlf': {
    group: 'fintech',
    shortLabel: 'VLF Vehicle Lending',
    title: 'VLF — Vehicle Loan Origination & Decisioning',
    budget: '$100 – $250 (Pay on Delivery)',
    nodes: [
      {
        id: 'vlf-ui',
        icon: 'layout',
        title: 'Amplify Origination UI',
        desc: 'Dealer + Borrower Portals',
        badge: 'Omnichannel',
        infoTitle: 'Amplify Loan Origination Front-End',
        infoDesc: 'Borrower and dealer portals on Amplify covering onboarding, vehicle valuation, and application status.',
        specs: ['Hosting: Amplify SPA', 'Channels: Borrower + dealer', 'CI/CD: GitHub Actions to Amplify'],
        codeFile: 'vlf_amplify.tf',
        code: `resource "aws_amplify_app" "vlf" {
  name     = "vlf-origination"
  platform = "WEB"
}`
      },
      {
        id: 'vlf-waf',
        icon: 'shield',
        title: 'Route 53 + WAF',
        desc: 'Latency Routing, OWASP',
        badge: 'TLS 1.3',
        infoTitle: 'Route 53 Latency Routing and WAF',
        infoDesc: 'Latency-based DNS plus regional WAF with PCI-sensitive rate limits in front of the loan ALB.',
        specs: ['DNS: Route 53 latency policy', 'WAF: OWASP managed + rate limit', 'TLS: ACM certificates'],
        codeFile: 'vlf_waf.tf',
        code: `resource "aws_wafv2_web_acl_association" "vlf" {
  resource_arn = aws_lb.vlf.arn
  web_acl_arn  = aws_wafv2_web_acl.vlf.arn
}`
      },
      {
        id: 'vlf-alb',
        icon: 'network',
        title: 'ALB Target Groups',
        desc: 'HTTPS to Loan Engine',
        badge: 'Multi-AZ',
        infoTitle: 'Application Load Balancer',
        infoDesc: 'HTTPS listener with strict headers forwarding to ECS loan-engine target groups across two AZs.',
        specs: ['Listener: 443 only, HTTP redirect', 'TG: loan-engine /health', 'AZ: Public subnets x2'],
        codeFile: 'vlf_alb.tf',
        code: `resource "aws_lb_listener" "vlf_https" {
  load_balancer_arn = aws_lb.vlf.arn
  port              = 443
  protocol          = "HTTPS"
  ssl_policy        = "ELBSecurityPolicy-TLS13-1-2-2021-06"
  certificate_arn   = aws_acm_certificate.vlf.arn
  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.vlf_engine.arn
  }
}`
      },
      {
        id: 'vlf-engine',
        icon: 'cpu',
        title: 'Loan Engine (ECS)',
        desc: 'Sub-Second Credit Decisioning',
        badge: 'Underwriting',
        infoTitle: 'ECS Fargate Loan Decision Engine',
        infoDesc: 'Origination, valuation, and automated underwriting services on Fargate with burst autoscaling at application peaks.',
        specs: ['Compute: ECS Fargate', 'SLA: Sub-second decision path', 'Scale: CPU target tracking'],
        codeFile: 'vlf_ecs.tf',
        code: `resource "aws_ecs_service" "vlf_engine" {
  name        = "vlf-loan-engine"
  launch_type = "FARGATE"
  desired_count = 3
}`
      },
      {
        id: 'vlf-rds',
        icon: 'database',
        title: 'RDS Multi-AZ + KMS',
        desc: 'Encrypted Loan Records',
        badge: 'Private VPC',
        infoTitle: 'Encrypted Multi-AZ RDS',
        infoDesc: 'Loan applications and decision records in private-subnet RDS PostgreSQL, encrypted with KMS and no public access.',
        specs: ['Engine: PostgreSQL Multi-AZ', 'Network: PRIVATE_ISOLATED', 'KMS: Storage + snapshot encryption'],
        codeFile: 'vlf_rds.tf',
        code: `resource "aws_db_instance" "vlf" {
  engine              = "postgres"
  multi_az            = true
  storage_encrypted   = true
  publicly_accessible = false
}`
      }
    ]
  },
  'eazy-school': {
    group: 'cloud',
    shortLabel: 'EAzy School EdTech SaaS',
    title: 'EAzy School — Multi-Tenant EdTech ERP',
    budget: '$100 – $250 (Pay on Delivery)',
    nodes: [
      {
        id: 'ez-cdn',
        icon: 'globe',
        title: 'CloudFront / Amplify',
        desc: 'Parent & Staff Portals',
        badge: 'Multi-Tenant',
        infoTitle: 'CloudFront and Amplify Portals',
        infoDesc: 'Staff ERP and parent apps at the edge via CloudFront/Amplify with tenant hostnames.',
        specs: ['CDN: CloudFront + Amplify', 'Tenants: School vanity hosts', 'Cache: Static assets, no PII'],
        codeFile: 'eazy_cdn.tf',
        code: `resource "aws_cloudfront_distribution" "eazy" {
  enabled             = true
  default_root_object = "index.html"
  origin {
    domain_name = aws_amplify_app.eazy.default_domain
    origin_id   = "amplify"
  }
}`
      },
      {
        id: 'ez-alb',
        icon: 'network',
        title: 'ALB + Nginx',
        desc: 'Tenant Path Routing',
        badge: 'Layer 7',
        infoTitle: 'ALB and Nginx Tenant Routing',
        infoDesc: 'ALB plus Nginx reverse proxy route tenant and API prefixes into ECS services.',
        specs: ['ALB: HTTPS listener', 'Nginx: Tenant path / header routing', 'Health: /health on API tasks'],
        codeFile: 'eazy_alb.tf',
        code: `resource "aws_lb" "eazy" {
  name               = "eazy-school-alb"
  load_balancer_type = "application"
}`
      },
      {
        id: 'ez-api',
        icon: 'box',
        title: 'Node / Python on ECS',
        desc: 'Admissions, Fees, Attendance',
        badge: 'ERP APIs',
        infoTitle: 'ECS Fargate ERP APIs',
        infoDesc: 'Node.js and Python services for admissions, attendance, fee billing, and parent messaging on ECS.',
        specs: ['Compute: ECS Fargate mixed runtimes', 'Domains: Admissions, fees, attendance', 'CI/CD: GitHub Actions'],
        codeFile: 'eazy_ecs.tf',
        code: `resource "aws_ecs_service" "eazy_api" {
  name        = "eazy-school-api"
  launch_type = "FARGATE"
  desired_count = 2
}`
      },
      {
        id: 'ez-db',
        icon: 'database',
        title: 'PostgreSQL Multi-Tenant',
        desc: 'Row-Level Tenant Isolation',
        badge: 'RLS',
        infoTitle: 'PostgreSQL with Tenant RLS',
        infoDesc: 'Shared PostgreSQL with row-level security by school_id and nightly snapshot exports to S3.',
        specs: ['DB: RDS PostgreSQL', 'Isolation: RLS on school_id', 'Backup: Nightly snapshot to S3'],
        codeFile: 'eazy_rds.tf',
        code: `resource "aws_db_instance" "eazy" {
  engine              = "postgres"
  multi_az            = true
  storage_encrypted   = true
  publicly_accessible = false
}`
      },
      {
        id: 'ez-s3',
        icon: 'hard-drive',
        title: 'S3 Snapshots & Media',
        desc: 'Daily DB + Learning Assets',
        badge: 'Lifecycle',
        infoTitle: 'S3 Backups and Learning Media',
        infoDesc: 'Daily database snapshots and e-learning media in S3 with lifecycle rules to Glacier.',
        specs: ['Backup: Automated snapshot export', 'Media: Assignments + reports', 'Lifecycle: IA then Glacier'],
        codeFile: 'eazy_s3.tf',
        code: `resource "aws_s3_bucket_lifecycle_configuration" "eazy" {
  bucket = aws_s3_bucket.eazy.id
  rule {
    id     = "glacier-after-90"
    status = "Enabled"
    transition {
      days          = 90
      storage_class = "GLACIER"
    }
  }
}`
      }
    ]
  },
  'people-fund': {
    group: 'fintech',
    shortLabel: 'People Fund P2P Lending',
    title: 'People Fund — PCI-DSS Crowdfunding Platform',
    budget: '$100 – $250 (Pay on Delivery)',
    nodes: [
      {
        id: 'pf-ui',
        icon: 'users',
        title: 'Amplify Campaign UI',
        desc: 'Backer & Creator Portals',
        badge: 'P2P',
        infoTitle: 'Amplify Crowdfunding Experience',
        infoDesc: 'Campaign discovery, pledging, and creator dashboards hosted on Amplify with OAuth 2.0 sign-in.',
        specs: ['Hosting: Amplify SPA', 'Auth: OAuth 2.0 / Cognito', 'CI/CD: GitHub Actions'],
        codeFile: 'peoplefund_amplify.tf',
        code: `resource "aws_amplify_app" "people_fund" {
  name     = "people-fund-ui"
  platform = "WEB"
}`
      },
      {
        id: 'pf-waf',
        icon: 'shield',
        title: 'Route 53 / ACM / WAF',
        desc: 'PCI Edge Controls',
        badge: 'PCI-DSS',
        infoTitle: 'PCI-DSS Edge (DNS, TLS, WAF)',
        infoDesc: 'Public edge with ACM TLS, WAF, and no card data stored in the app tier — tokens only from the processor.',
        specs: ['DNS: Route 53', 'TLS: ACM', 'PCI: No PAN storage, WAF on ALB'],
        codeFile: 'peoplefund_waf.tf',
        code: `resource "aws_wafv2_web_acl" "people_fund" {
  name  = "people-fund-pci-waf"
  scope = "REGIONAL"
  default_action { allow {} }
}`
      },
      {
        id: 'pf-alb',
        icon: 'network',
        title: 'ALB Micro-Lending API',
        desc: 'HTTPS to ECS Engine',
        badge: 'Private Subnets',
        infoTitle: 'ALB to Lending Engine',
        infoDesc: 'ALB in public subnets forwards to ECS tasks in private subnets with security groups limited to ALB.',
        specs: ['ALB: Public HTTPS', 'Tasks: Private subnets', 'SG: ALB to ECS 8080 only'],
        codeFile: 'peoplefund_alb.tf',
        code: `resource "aws_lb" "people_fund" {
  name               = "people-fund-alb"
  load_balancer_type = "application"
  internal           = false
}`
      },
      {
        id: 'pf-engine',
        icon: 'cpu',
        title: 'Micro-Lending Engine',
        desc: 'ECS Campaign & Ledger APIs',
        badge: 'Fargate',
        infoTitle: 'ECS Fargate Lending Engine',
        infoDesc: 'Campaign, pledge, and ledger services on Fargate with idempotent webhook handlers.',
        specs: ['Compute: ECS Fargate', 'APIs: Campaigns, pledges, ledger', 'Idempotency: Webhook keys'],
        codeFile: 'peoplefund_ecs.tf',
        code: `resource "aws_ecs_service" "lending" {
  name        = "people-fund-engine"
  launch_type = "FARGATE"
  desired_count = 3
}`
      },
      {
        id: 'pf-webhooks',
        icon: 'webhook',
        title: 'Payment Webhooks',
        desc: 'EventBridge + SQS + KMS',
        badge: 'Processor',
        infoTitle: 'Payment Processor Webhooks',
        infoDesc: 'Processor callbacks land on API Gateway, fan out on EventBridge, and persist via SQS workers. Secrets stay in KMS/Secrets Manager.',
        specs: ['Ingress: API Gateway webhook route', 'Bus: EventBridge payment events', 'Secrets: Processor keys in Secrets Manager'],
        codeFile: 'peoplefund_webhooks.tf',
        code: `resource "aws_cloudwatch_event_bus" "payments" {
  name = "people-fund-payments"
}
resource "aws_sqs_queue" "settlement" {
  name = "people-fund-settlement"
}`
      }
    ]
  },
  'employee-portal': {
    group: 'cloud',
    shortLabel: 'Employee Portal HRMS (India)',
    title: 'Employee Portal — Entra ID HRMS & Workspace',
    budget: '$100 – $250 (Pay on Delivery)',
    nodes: [
      {
        id: 'ep-sso',
        icon: 'key',
        title: 'Entra ID SSO',
        desc: 'SAML / OAuth 2.0',
        badge: 'Azure AD',
        infoTitle: 'Microsoft Entra ID Single Sign-On',
        infoDesc: 'Workforce sign-in via Entra ID SAML and OAuth 2.0 with group claims mapped to portal RBAC roles.',
        specs: ['IdP: Microsoft Entra ID', 'Protocols: SAML 2.0 + OAuth 2.0', 'Claims: Groups to RBAC roles'],
        codeFile: 'employee_portal_sso.tf',
        code: `resource "aws_iam_saml_provider" "entra" {
  name                   = "entra-id-enterprise"
  saml_metadata_document = file("entra-metadata.xml")
}`
      },
      {
        id: 'ep-alb',
        icon: 'network',
        title: 'ALB + Nginx',
        desc: 'TLS and Reverse Proxy',
        badge: 'Internal',
        infoTitle: 'ALB and Nginx Reverse Proxy',
        infoDesc: 'Internet-facing ALB with Nginx on the app hosts routing /api and static workplace assets.',
        specs: ['ALB: HTTPS + health checks', 'Proxy: Nginx path routing', 'Headers: HSTS + CSRF'],
        codeFile: 'employee_portal_alb.tf',
        code: `resource "aws_lb" "employee_portal" {
  name               = "employee-portal-alb"
  load_balancer_type = "application"
}`
      },
      {
        id: 'ep-app',
        icon: 'box',
        title: 'Portal App (ECS / Docker)',
        desc: 'HRMS + Workspace APIs',
        badge: 'RBAC',
        infoTitle: 'Containerized HRMS Application',
        infoDesc: 'Leave, payroll integration, and document access APIs in Docker on ECS with RBAC middleware.',
        specs: ['Runtime: ECS / Docker', 'Modules: Leave, payroll, documents', 'AuthZ: RBAC from Entra groups'],
        codeFile: 'employee_portal_ecs.tf',
        code: `resource "aws_ecs_service" "employee_portal" {
  name        = "employee-portal-app"
  launch_type = "FARGATE"
  desired_count = 2
}`
      },
      {
        id: 'ep-db',
        icon: 'database',
        title: 'PostgreSQL HR Data',
        desc: 'Private Encrypted RDS',
        badge: 'No Public IP',
        infoTitle: 'Private RDS PostgreSQL',
        infoDesc: 'HR records in private RDS PostgreSQL, encrypted, with automated snapshots.',
        specs: ['Engine: PostgreSQL', 'Network: Private subnets only', 'Backup: Automated snapshots'],
        codeFile: 'employee_portal_rds.tf',
        code: `resource "aws_db_instance" "employee_portal" {
  engine              = "postgres"
  storage_encrypted   = true
  publicly_accessible = false
}`
      },
      {
        id: 'ep-backup',
        icon: 'hard-drive',
        title: 'S3 Backup Vault',
        desc: 'DB Snapshots + Docs',
        badge: 'KMS',
        infoTitle: 'S3 Encrypted Backup Vault',
        infoDesc: 'Nightly database dumps and workplace documents in KMS-encrypted S3 with versioning.',
        specs: ['S3: Versioning + SSE-KMS', 'Jobs: Nightly pg_dump export', 'Retention: 30-day versions'],
        codeFile: 'employee_portal_s3.tf',
        code: `resource "aws_s3_bucket" "hr_backups" {
  bucket = "employee-portal-backups"
}`
      }
    ]
  },
  'document-manager': {
    group: 'cloud',
    shortLabel: 'Document Manager Vault',
    title: 'Document Manager — KMS Encrypted Cloud Archival',
    budget: '$100 – $250 (Pay on Delivery)',
    nodes: [
      {
        id: 'dm-ui',
        icon: 'layout',
        title: 'Upload UI',
        desc: 'Presigned Upload Portal',
        badge: 'SPA',
        infoTitle: 'Document Upload Experience',
        infoDesc: 'Operators request presigned URLs and upload contracts directly to S3 without streaming files through the API.',
        specs: ['UI: Amplify / CloudFront', 'Uploads: S3 presigned PUT', 'Auth: Cognito / session JWT'],
        codeFile: 'docmgr_ui.tf',
        code: `resource "aws_amplify_app" "docmgr" {
  name     = "document-manager-ui"
  platform = "WEB"
}`
      },
      {
        id: 'dm-alb',
        icon: 'network',
        title: 'ALB API',
        desc: 'Metadata + Presign Service',
        badge: 'HTTPS',
        infoTitle: 'ALB Document API',
        infoDesc: 'HTTPS API issues presigned URLs, writes metadata, and kicks off virus-scan workflows.',
        specs: ['ALB: Multi-AZ HTTPS', 'API: Presign + metadata', 'Auth: Signed cookies / JWT'],
        codeFile: 'docmgr_alb.tf',
        code: `resource "aws_lb" "docmgr" {
  name               = "document-manager-alb"
  load_balancer_type = "application"
}`
      },
      {
        id: 'dm-scan',
        icon: 'shield-alert',
        title: 'ClamAV Workers',
        desc: 'ECS Virus Scan Pipeline',
        badge: 'Security',
        infoTitle: 'ClamAV ECS Scan Pipeline',
        infoDesc: 'S3 ObjectCreated events queue ECS Fargate tasks that scan with ClamAV and quarantine infected objects.',
        specs: ['Trigger: S3 to SQS', 'Scan: ClamAV on Fargate', 'Action: Quarantine prefix + alert'],
        codeFile: 'docmgr_scan.tf',
        code: `resource "aws_ecs_task_definition" "clamav" {
  family                   = "docmgr-clamav"
  requires_compatibilities = ["FARGATE"]
  cpu                      = "1024"
  memory                   = "2048"
  network_mode             = "awsvpc"
}`
      },
      {
        id: 'dm-s3',
        icon: 'lock',
        title: 'S3 KMS Vault',
        desc: 'Versioned SSE-KMS Store',
        badge: 'Encrypted',
        infoTitle: 'S3 Vault with KMS and Versioning',
        infoDesc: 'Canonical vault with bucket versioning, SSE-KMS, and block public access. OCR text stored as sidecar objects.',
        specs: ['SSE: AWS KMS CMK', 'Versioning: Enabled', 'Public: Block all public access'],
        codeFile: 'docmgr_s3.tf',
        code: `resource "aws_s3_bucket_server_side_encryption_configuration" "vault" {
  bucket = aws_s3_bucket.vault.id
  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm     = "aws:kms"
      kms_master_key_id = aws_kms_key.vault.arn
    }
  }
}`
      },
      {
        id: 'dm-life',
        icon: 'archive',
        title: 'Lifecycle Archival',
        desc: 'IA to Glacier Policies',
        badge: 'Compliance',
        infoTitle: 'S3 Lifecycle Archival',
        infoDesc: 'Retention policies move cold contracts to Infrequent Access then Glacier while legal holds skip transition.',
        specs: ['IA: 30 days', 'Glacier: 180 days', 'Holds: Object Lock / legal hold'],
        codeFile: 'docmgr_lifecycle.tf',
        code: `resource "aws_s3_bucket_lifecycle_configuration" "vault" {
  bucket = aws_s3_bucket.vault.id
  rule {
    id     = "archive"
    status = "Enabled"
    transition {
      days          = 30
      storage_class = "STANDARD_IA"
    }
  }
}`
      }
    ]
  },
  'buildzbit': {
    group: 'ai',
    shortLabel: 'Buildzbit Site Builder',
    title: 'Buildzbit — Modular Builder & Edge Publish',
    budget: '$100 – $250 (Pay on Delivery)',
    nodes: [
      {
        id: 'bz-studio',
        icon: 'layout-grid',
        title: 'Builder Studio',
        desc: 'Visual Authoring SPA',
        badge: 'Low-Code',
        infoTitle: 'Buildzbit Studio on Amplify',
        infoDesc: 'Visual builder studio on Amplify where users compose pages, preview, and trigger publish pipelines.',
        specs: ['Hosting: Amplify studio SPA', 'Preview: Per-user sandbox hosts', 'Auth: Cognito builders'],
        codeFile: 'buildzbit_studio.tf',
        code: `resource "aws_amplify_app" "studio" {
  name     = "buildzbit-studio"
  platform = "WEB"
}`
      },
      {
        id: 'bz-engine',
        icon: 'cpu',
        title: 'Template Engine',
        desc: 'ECS Render + AI Assist',
        badge: 'Fargate',
        infoTitle: 'ECS Template Engine',
        infoDesc: 'Fargate renderers compile visual trees to static assets. Optional Bedrock calls suggest layouts and copy.',
        specs: ['Compute: ECS Fargate renderers', 'AI: Optional Bedrock assist', 'Queue: SQS build jobs'],
        codeFile: 'buildzbit_engine.tf',
        code: `resource "aws_ecs_service" "template_engine" {
  name        = "buildzbit-engine"
  launch_type = "FARGATE"
  desired_count = 2
}`
      },
      {
        id: 'bz-docker',
        icon: 'box',
        title: 'Docker Builder',
        desc: 'Isolated Site Builds',
        badge: 'Immutable',
        infoTitle: 'Isolated Docker Site Builds',
        infoDesc: 'Each publish runs in an isolated Docker build task, producing hashed artifacts pushed to S3.',
        specs: ['Builder: ECS/CodeBuild Docker', 'Artifacts: Content-hashed bundles', 'Isolation: One task per site'],
        codeFile: 'buildzbit_builder.tf',
        code: `resource "aws_codebuild_project" "site_builder" {
  name         = "buildzbit-site-builder"
  service_role = aws_iam_role.codebuild.arn
  artifacts { type = "S3" }
  environment {
    compute_type = "BUILD_GENERAL1_SMALL"
    image        = "aws/codebuild/standard:7.0"
    type         = "LINUX_CONTAINER"
  }
  source { type = "NO_SOURCE" }
}`
      },
      {
        id: 'bz-cdn',
        icon: 'globe',
        title: 'S3 + CloudFront',
        desc: 'Instant Edge Publish',
        badge: 'CDN',
        infoTitle: 'S3 Origin and CloudFront CDN',
        infoDesc: 'Published sites live in S3 and CloudFront with invalidations on each successful build.',
        specs: ['Origin: S3 static site bucket', 'CDN: CloudFront', 'Cache: Invalidate on publish'],
        codeFile: 'buildzbit_cdn.tf',
        code: `resource "aws_cloudfront_distribution" "sites" {
  enabled = true
  origin {
    domain_name = aws_s3_bucket.sites.bucket_regional_domain_name
    origin_id   = "sites"
  }
}`
      },
      {
        id: 'bz-dns',
        icon: 'link',
        title: 'Route 53 + ACM',
        desc: 'Auto Custom Domains',
        badge: 'DNS',
        infoTitle: 'Automated Custom Domains',
        infoDesc: 'Route 53 records and ACM certificates provisioned per customer domain when they map a hostname.',
        specs: ['DNS: Automated alias records', 'TLS: ACM DNS validation', 'Map: Customer CNAME onboarding'],
        codeFile: 'buildzbit_dns.tf',
        code: `resource "aws_acm_certificate" "site" {
  domain_name       = var.customer_domain
  validation_method = "DNS"
}`
      }
    ]
  },
  'elog': {
    group: 'cloud',
    shortLabel: 'ELog Audit & Observability',
    title: 'ELog — High-Throughput Logging & Audit Trail',
    budget: '$100 – $250 (Pay on Delivery)',
    nodes: [
      {
        id: 'elog-agents',
        icon: 'scroll-text',
        title: 'FluentBit Agents',
        desc: 'Cluster Log Shippers',
        badge: 'DaemonSet',
        infoTitle: 'FluentBit / Logstash Shippers',
        infoDesc: 'FluentBit daemonsets and Logstash collectors ship application, audit, and infra logs with tenant labels.',
        specs: ['Agents: FluentBit DaemonSet', 'Enrich: Cluster / app / tenant labels', 'Buffer: Local disk then forward'],
        codeFile: 'elog_fluentbit.yaml',
        code: `apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: fluent-bit
spec:
  selector:
    matchLabels:
      app: fluent-bit`
      },
      {
        id: 'elog-kafka',
        icon: 'layers',
        title: 'MSK / Kafka Queue',
        desc: 'Durable Ingest Buffer',
        badge: 'High Throughput',
        infoTitle: 'Amazon MSK Log Bus',
        infoDesc: 'MSK (Kafka) absorbs bursty multi-cloud log volume before indexing so origin apps are never blocked.',
        specs: ['Bus: Amazon MSK Kafka', 'Topics: app, audit, infra', 'Retention: 7-day topic retention'],
        codeFile: 'elog_msk.tf',
        code: `resource "aws_msk_cluster" "elog" {
  cluster_name           = "elog-audit"
  kafka_version          = "3.6.0"
  number_of_broker_nodes = 3
}`
      },
      {
        id: 'elog-os',
        icon: 'search',
        title: 'OpenSearch Index',
        desc: 'Immutable Audit Search',
        badge: 'Compliance',
        infoTitle: 'OpenSearch Audit Index',
        infoDesc: 'Indexed logs with ISM policies. Audit indices are append-only for compliance investigators.',
        specs: ['Engine: OpenSearch', 'ISM: Hot-warm-delete', 'Audit: Append-only aliases'],
        codeFile: 'elog_opensearch.tf',
        code: `resource "aws_opensearch_domain" "elog" {
  domain_name    = "elog-audit"
  engine_version = "OpenSearch_2.11"
}`
      },
      {
        id: 'elog-cw',
        icon: 'line-chart',
        title: 'CloudWatch + Grafana',
        desc: 'Metrics and Dashboards',
        badge: 'SLO',
        infoTitle: 'CloudWatch Metrics and Grafana',
        infoDesc: 'CloudWatch metrics plus Grafana dashboards for ingest lag, error rates, and executive audit views.',
        specs: ['Metrics: CloudWatch ingest/lag', 'UX: Grafana dashboards', 'SLO: < 60s search delay'],
        codeFile: 'elog_grafana.tf',
        code: `resource "aws_grafana_workspace" "elog" {
  name                     = "elog-observability"
  account_access_type      = "CURRENT_ACCOUNT"
  authentication_providers = ["AWS_SSO"]
  permission_type          = "SERVICE_MANAGED"
}`
      },
      {
        id: 'elog-alert',
        icon: 'bell',
        title: 'Anomaly Alerts',
        desc: 'SNS / Pager Routing',
        badge: 'Realtime',
        infoTitle: 'Anomaly Detection and Alert Routing',
        infoDesc: 'OpenSearch alerting and CloudWatch anomaly detectors fan out to SNS, PagerDuty, and Slack.',
        specs: ['Detect: Anomaly + threshold', 'Route: SNS to PagerDuty/Slack', 'Purge: Retention Lambda'],
        codeFile: 'elog_alerts.tf',
        code: `resource "aws_sns_topic" "elog_pager" {
  name = "elog-anomaly-alerts"
}
resource "aws_cloudwatch_metric_alarm" "ingest_lag" {
  alarm_name          = "elog-ingest-lag"
  comparison_operator = "GreaterThanThreshold"
  threshold           = 60
  alarm_actions       = [aws_sns_topic.elog_pager.arn]
}`
      }
    ]
  },
  'awt': {
    group: 'ai',
    shortLabel: 'AWT Workflow Engine',
    title: 'AWT — Automated Workflow Technology Engine',
    budget: '$100 – $250 (Pay on Delivery)',
    nodes: [
      {
        id: 'awt-trigger',
        icon: 'zap',
        title: 'Event Triggers',
        desc: 'EventBridge + Schedules',
        badge: 'Event-Driven',
        infoTitle: 'EventBridge Workflow Triggers',
        infoDesc: 'API events, S3 notifications, and cron schedules enter EventBridge and start AWT orchestrations.',
        specs: ['Bus: EventBridge custom bus', 'Schedules: Cron batch jobs', 'Sources: API, S3, SaaS events'],
        codeFile: 'awt_events.tf',
        code: `resource "aws_cloudwatch_event_bus" "awt" {
  name = "awt-orchestrator"
}
resource "aws_cloudwatch_event_rule" "nightly" {
  name                = "awt-nightly-batch"
  schedule_expression = "cron(0 2 * * ? *)"
}`
      },
      {
        id: 'awt-orch',
        icon: 'workflow',
        title: 'AWT Orchestrator',
        desc: 'ECS Control Plane',
        badge: 'Multi-Step',
        infoTitle: 'ECS Fargate Orchestrator',
        infoDesc: 'Control plane on Fargate expands workflow graphs, persists state, and fans work to SQS worker queues.',
        specs: ['Compute: ECS Fargate orchestrator', 'State: Workflow step store', 'Fan-out: Per-step SQS queues'],
        codeFile: 'awt_orchestrator.tf',
        code: `resource "aws_ecs_service" "awt" {
  name        = "awt-orchestrator"
  launch_type = "FARGATE"
  desired_count = 2
}`
      },
      {
        id: 'awt-sqs',
        icon: 'layers',
        title: 'SQS Worker Pools',
        desc: 'Fargate + DLQ Healing',
        badge: 'Self-Healing',
        infoTitle: 'SQS Workers and Dead-Letter Queues',
        infoDesc: 'Step workers scale on queue depth. Failures retry then land on DLQs with webhook alerts and replay.',
        specs: ['Queues: Per-step SQS + DLQ', 'Scale: Queue-depth tracking', 'Heal: Replay from DLQ'],
        codeFile: 'awt_sqs.tf',
        code: `resource "aws_sqs_queue" "awt_steps" {
  name = "awt-step-workers"
  redrive_policy = jsonencode({
    deadLetterTargetArn = aws_sqs_queue.awt_dlq.arn
    maxReceiveCount     = 5
  })
}`
      },
      {
        id: 'awt-handlers',
        icon: 'plug',
        title: 'Integration Handlers',
        desc: 'Lambda + Partner APIs',
        badge: 'Connectors',
        infoTitle: 'Lambda Integration Handlers',
        infoDesc: 'Lambda connectors call partner APIs, transform payloads, and write results back to the orchestrator.',
        specs: ['Runtime: Lambda Python 3.11', 'Secrets: Secrets Manager per connector', 'Timeout: 29s with async continue'],
        codeFile: 'awt_lambda.tf',
        code: `resource "aws_lambda_function" "awt_handler" {
  function_name = "awt-integration-handler"
  runtime       = "python3.11"
  handler       = "handler.main"
  timeout       = 29
}`
      },
      {
        id: 'awt-obs',
        icon: 'bell',
        title: 'Failure Webhooks',
        desc: 'SNS + CloudWatch',
        badge: 'Ops',
        infoTitle: 'Failure Notifications',
        infoDesc: 'CloudWatch alarms and SNS fan-out notify Slack/email when a workflow exhausts retries.',
        specs: ['Metrics: Step fail rate', 'Notify: SNS webhooks', 'Trace: X-Ray on handlers'],
        codeFile: 'awt_alerts.tf',
        code: `resource "aws_sns_topic" "awt_failures" {
  name = "awt-workflow-failures"
}`
      }
    ]
  }
};

const ARCH_GROUP_LABELS = {
  platform: 'Platform Patterns',
  fintech: 'FinTech & Banking',
  ai: 'AI & Automation',
  cloud: 'Enterprise & Cloud'
};

const ARCH_GROUP_ORDER = ['platform', 'fintech', 'ai', 'cloud'];

const mermaidDiagrams = {
  'emp-portal': `flowchart TD
    Users["End Users India and US"]
    DevOps["GitHub Actions CI/CD OIDC"]

    subgraph EdgeLayer ["Edge and DNS Layer"]
      R53["Route 53 DNS"]
      Amplify["AWS Amplify Hosting React 18 SPA"]
    end

    subgraph VPC ["AWS VPC ap-south-1"]
      subgraph PublicSubnets ["Public Subnets Multi-AZ"]
        ALB["Application Load Balancer ALB"]
        APIGW["API Gateway HTTP Facade"]
        NAT["NAT Gateways"]
      end

      subgraph PrivateCompute ["Private Subnets Compute Tier"]
        EB["Elastic Beanstalk FastAPI Python 3.11"]
      end

      subgraph PrivateData ["Private Subnets Data Tier"]
        RDS[("Amazon RDS MySQL 8 Multi-AZ")]
      end
    end

    subgraph OperatorPlane ["Operator and Admin Plane"]
      SSM["AWS SSM Session Manager"]
      Bastion["VPC-Peered Bastion Host"]
    end

    subgraph SupportingServices ["Supporting AWS Services"]
      S3[("Amazon S3 Assets and Deploy Zips")]
      Secrets["AWS Secrets Manager"]
      SES["Amazon SES Transactional Email"]
      CW["CloudWatch Logs"]
    end

    Users -->|"1. HTTPS SPA"| Amplify
    Amplify -->|"2. API Requests"| R53
    R53 --> ALB
    ALB -->|"3. Forward port 8000"| EB
    EB -->|"4. SQL Query port 3306"| RDS
    EB -->|"Fetch Secrets"| Secrets
    EB -->|"Uploads"| S3
    EB -->|"Alerts"| SES
    EB -.->|"Outbound"| NAT
    SSM --> Bastion
    Bastion -->|"Secure Tunnel port 3306"| RDS
    DevOps -->|"CDK Deploy"| EB
    DevOps -->|"Web Deploy"| Amplify`,

  'aws-3tier': `flowchart TB
    users["End Users"]
    subgraph EDGE["Edge and DNS"]
      r53["Route 53 + ACM"]
      amp["AWS Amplify SPA"]
    end
    subgraph VPC["AWS VPC Multi-AZ"]
      subgraph PUB["Public Subnets"]
        alb["Application Load Balancer"]
      end
      subgraph COMP["Private Compute"]
        ecs["ECS Fargate Microservices"]
      end
      subgraph DATA["Private Data"]
        aurora["Aurora RDS + Redis"]
      end
    end
    users -->|"HTTPS"| r53
    r53 --> amp
    r53 --> alb
    alb --> ecs
    ecs --> aurora`,

  'gitops-cicd': `flowchart LR
    pr["GitHub PR / Commit"] --> gates["SonarQube and Trivy"]
    gates --> build["Docker Build + ECR"]
    build --> argo["ArgoCD GitOps Sync"]
    argo --> k8s["Kubernetes Cluster"]
    k8s -->|"Zero drift"| live["Live Workloads"]`,

  'k8s-microservices': `flowchart TB
    users["Clients"] --> ing["NGINX Ingress"]
    subgraph CLUSTER["Kubernetes Cluster"]
      mesh["Istio Service Mesh"]
      pods["Microservices Pods"]
      redis["Redis Cluster"]
    end
    ing --> mesh
    mesh --> pods
    pods --> redis`,

  'serverless-event': `flowchart TB
    clients["Clients"] --> apigw["API Gateway"]
    apigw --> lambda["AWS Lambda Functions"]
    lambda --> bus["EventBridge + SQS"]
    lambda --> ddb["Amazon DynamoDB"]
    bus --> lambda`,

  'multi-region-dr': `flowchart TB
    users["Global Users"] --> r53["Route 53 DNS Failover"]
    subgraph PRI["Primary Region"]
      papp["Primary App + Data"]
    end
    subgraph STBY["Standby Region"]
      sapp["Standby App + Data"]
    end
    r53 -->|"Active"| papp
    r53 -->|"Failover"| sapp
    papp -->|"Async replication"| sapp`,

  'hyper': `flowchart TB
    investors["Investors"] --> amp["Amplify Web App"]
    amp --> r53["Route 53 + ACM"]
    r53 --> waf["WAF + ALB"]
    subgraph VPC["AWS VPC"]
      eng["Scoring and Sim Engine"]
      data["Aurora + ElastiCache"]
    end
    waf --> eng
    eng --> data`,

  'finxserve': `flowchart TB
    gha["GitHub Actions CI/CD"] --> ecs["EC2 / ECS Docker"]
    clients["Banking Clients"] --> ngx["Nginx Reverse Proxy"]
    ngx --> ecs
    subgraph DATA["Private Data"]
      pg["PostgreSQL + pgAdmin"]
      s3["S3 Backups + SNS"]
    end
    ecs --> pg
    ecs --> s3`,

  'claim-pioneer': `flowchart TB
    adj["Adjusters"] --> ui["Amplify Claims UI"]
    ui --> r53["Route 53 + ALB"]
    subgraph VPC["AWS VPC"]
      br["Bedrock Assignment"]
      ecs["ECS Fargate Dispatcher"]
      os["OpenSearch Live Claims"]
    end
    r53 --> ecs
    ecs --> br
    ecs --> os`,

  'aira': `flowchart TB
    api["OneAPI Ingress"] --> r53["Route 53 / ACM / ALB"]
    subgraph VPC["AWS VPC"]
      agents["AIRA Agents Fargate"]
      guard["Compliance Guardrails"]
      mem["Aurora + OpenSearch"]
    end
    r53 --> agents
    agents --> guard
    agents --> mem`,

  'drive30': `flowchart TB
    oem["Dealer / OEM feeds"] --> sftp["Transfer Family SFTP"]
    sftp --> s3["S3 incoming"]
    s3 --> sqs["SQS + ECS Fargate"]
    sqs --> evb["EventBridge Sync"]
    evb --> ui["Amplify Command Center"]`,

  'vlf': `flowchart TB
    borrowers["Borrowers"] --> ui["Amplify Origination UI"]
    ui --> r53["Route 53 + WAF"]
    r53 --> alb["ALB Target Groups"]
    subgraph VPC["AWS VPC"]
      eng["Loan Engine ECS"]
      rds["RDS Multi-AZ + KMS"]
    end
    alb --> eng
    eng --> rds`,

  'eazy-school': `flowchart TB
    staff["Staff and Parents"] --> cdn["CloudFront / Amplify"]
    cdn --> alb["ALB + Nginx"]
    subgraph VPC["AWS VPC"]
      app["Node / Python on ECS"]
      pg["PostgreSQL Multi-Tenant"]
      s3["S3 Snapshots and Media"]
    end
    alb --> app
    app --> pg
    app --> s3`,

  'people-fund': `flowchart TB
    donors["Campaign visitors"] --> ui["Amplify Campaign UI"]
    ui --> edge["Route 53 / ACM / WAF"]
    edge --> alb["ALB Micro-Lending API"]
    subgraph VPC["AWS VPC"]
      eng["Micro-Lending Engine"]
      pay["Payment Webhooks"]
    end
    alb --> eng
    eng --> pay`,

  'employee-portal': `flowchart TB
    staff["Employees"] --> sso["Entra ID SSO"]
    sso --> alb["ALB + Nginx"]
    subgraph VPC["AWS VPC"]
      app["Portal App ECS / Docker"]
      db["PostgreSQL HR Data"]
      s3["S3 Backup Vault"]
    end
    alb --> app
    app --> db
    app --> s3`,

  'document-manager': `flowchart TB
    users["Staff"] --> ui["Amplify / CloudFront"]
    ui --> api["Document APIs"]
    subgraph VPC["AWS VPC"]
      app["Document Service"]
      s3["S3 Object Store"]
      db["Metadata Database"]
    end
    api --> app
    app --> s3
    app --> db`,

  'buildzbit': `flowchart TB
    builders["Builders"] --> studio["Builder Studio Amplify"]
    studio --> eng["Template Engine Fargate"]
    eng --> docker["Docker Builder"]
    docker --> s3["S3 hashed artifacts"]
    s3 --> edge["CloudFront published sites"]`,

  'elog': `flowchart TB
    apps["Cluster workloads"] --> fb["FluentBit Agents"]
    fb --> msk["MSK / Kafka Queue"]
    subgraph PIPE["Observability Pipeline"]
      os["OpenSearch Index"]
      cw["CloudWatch Alarms"]
    end
    msk --> os
    os --> cw`,

  'awt': `flowchart TB
    src["API / S3 / Cron"] --> evb["EventBridge Triggers"]
    evb --> orch["AWT Orchestrator ECS"]
    orch --> sqs["Per-step SQS queues"]
    sqs --> workers["Workflow Workers"]
    workers --> store["Step State Store"]
    workers --> sns["SNS failure alerts"]`
};

function initMermaidEngine() {
  if (!window.mermaid) return;
  mermaid.initialize({
    startOnLoad: false,
    theme: 'dark',
    securityLevel: 'loose',
    themeVariables: {
      darkMode: true,
      background: '#09090b',
      primaryColor: '#18181b',
      primaryTextColor: '#fafafa',
      primaryBorderColor: '#5e6ad2',
      lineColor: '#5e6ad2',
      secondaryColor: '#111113',
      tertiaryColor: '#09090b'
    }
  });
}

async function renderMermaidDiagram(containerId, diagramCode) {
  const container = document.getElementById(containerId);
  if (!container || !window.mermaid || !diagramCode) return;
  container.removeAttribute('data-processed');
  try {
    const id = 'mermaid-svg-' + Math.floor(Math.random() * 100000);
    const { svg } = await mermaid.render(id, diagramCode);
    container.innerHTML = svg;
  } catch (err) {
    container.textContent = 'Architecture diagram failed to render.';
    console.error('Mermaid render error:', err);
  }
}

async function renderProjectMermaid(archKey) {
  const source = mermaidDiagrams[archKey] || mermaidDiagrams['emp-portal'];
  await renderMermaidDiagram('project-mermaid-diagram', source);
}

function initArchitectureExplorer() {
  const nodesContainer = document.getElementById('arch-nodes-container');
  const diagramTitle = document.getElementById('arch-diagram-title');
  const inspectorTitle = document.getElementById('inspector-title');
  const inspectorDesc = document.getElementById('inspector-desc');
  const inspectorSpecs = document.getElementById('inspector-specs');
  const codeFilename = document.getElementById('code-filename');
  const iacCodeDisplay = document.getElementById('iac-code-display');
  const btnCopyIaC = document.getElementById('btn-copy-iac');
  const archSelect = document.getElementById('arch-project-select');
  const filterGroup = document.getElementById('arch-filter-group');

  if (!nodesContainer) return;

  let currentGroup = 'all';
  let currentArchKey = 'emp-portal';

  function keysForGroup(group) {
    return Object.keys(architectureData).filter((key) => {
      if (group === 'all') return true;
      return architectureData[key].group === group;
    });
  }

  function populateSelect(group, selectedKey) {
    if (!archSelect) return;
    const keys = keysForGroup(group);
    const grouped = {};
    keys.forEach((key) => {
      const g = architectureData[key].group || 'platform';
      if (!grouped[g]) grouped[g] = [];
      grouped[g].push(key);
    });

    archSelect.innerHTML = '';
    ARCH_GROUP_ORDER.forEach((g) => {
      if (!grouped[g] || grouped[g].length === 0) return;
      const optgroup = document.createElement('optgroup');
      optgroup.label = ARCH_GROUP_LABELS[g] || g;
      grouped[g].forEach((key) => {
        const opt = document.createElement('option');
        opt.value = key;
        opt.textContent = architectureData[key].shortLabel || architectureData[key].title;
        optgroup.appendChild(opt);
      });
      archSelect.appendChild(optgroup);
    });

    const fallback = keys[0] || 'aws-3tier';
    const nextKey = keys.includes(selectedKey) ? selectedKey : fallback;
    archSelect.value = nextKey;
    return nextKey;
  }

  function loadArchitecture(archKey) {
    const arch = architectureData[archKey];
    if (!arch) return;

    currentArchKey = archKey;

    if (diagramTitle) {
      diagramTitle.innerHTML = `<i data-lucide="shield"></i> ${arch.title}`;
    }

    const budgetBadge = document.getElementById('arch-budget-badge');
    if (budgetBadge && arch.budget) {
      budgetBadge.textContent = `● Est. Setup: ${arch.budget}`;
    }

    const groupBadge = document.getElementById('arch-group-badge');
    if (groupBadge) {
      groupBadge.textContent = ARCH_GROUP_LABELS[arch.group] || arch.group || 'Architecture';
    }

    nodesContainer.innerHTML = '';
    arch.nodes.forEach((node, index) => {
      const nodeEl = document.createElement('div');
      nodeEl.className = `arch-node ${index === 0 ? 'selected' : ''}`;
      nodeEl.setAttribute('data-node-id', node.id);
      nodeEl.innerHTML = `
        <div class="arch-node-icon"><i data-lucide="${node.icon}"></i></div>
        <div class="arch-node-title">${node.title}</div>
        <div class="arch-node-desc">${node.desc}</div>
        <div class="arch-node-badge">${node.badge}</div>
      `;
      nodeEl.addEventListener('click', () => {
        document.querySelectorAll('.arch-node').forEach((n) => n.classList.remove('selected'));
        nodeEl.classList.add('selected');
        updateInspector(node);
      });
      nodesContainer.appendChild(nodeEl);
    });

    if (arch.nodes.length > 0) {
      updateInspector(arch.nodes[0]);
    }

    if (archSelect && archSelect.value !== archKey) {
      if (![...archSelect.options].some((o) => o.value === archKey)) {
        populateSelect('all', archKey);
        currentGroup = 'all';
        document.querySelectorAll('.arch-filter-pill').forEach((pill) => {
          pill.classList.toggle('active', pill.getAttribute('data-arch-group') === 'all');
        });
      }
      archSelect.value = archKey;
    }

    if (window.lucide) {
      lucide.createIcons();
    }

    renderProjectMermaid(archKey);
  }

  function updateInspector(node) {
    inspectorTitle.textContent = node.infoTitle;
    inspectorDesc.textContent = node.infoDesc;

    inspectorSpecs.innerHTML = '';
    node.specs.forEach((spec) => {
      const [label, val] = spec.split(': ');
      const specEl = document.createElement('div');
      specEl.className = 'spec-item';
      specEl.innerHTML = `<strong>${label}:</strong> ${val || ''}`;
      inspectorSpecs.appendChild(specEl);
    });

    codeFilename.innerHTML = `<i data-lucide="file-code" style="width:12px; display:inline-block; vertical-align:middle;"></i> ${node.codeFile}`;
    iacCodeDisplay.textContent = node.code;

    if (window.lucide) {
      lucide.createIcons();
    }
  }

  function openProjectArchitecture(archKey) {
    if (!architectureData[archKey]) return false;
    currentGroup = 'all';
    populateSelect('all', archKey);
    document.querySelectorAll('.arch-filter-pill').forEach((pill) => {
      pill.classList.toggle('active', pill.getAttribute('data-arch-group') === 'all');
    });
    loadArchitecture(archKey);
    const section = document.getElementById('architectures');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    return true;
  }

  window.openProjectArchitecture = openProjectArchitecture;

  if (filterGroup) {
    filterGroup.addEventListener('click', (e) => {
      const pill = e.target.closest('.arch-filter-pill');
      if (!pill) return;
      currentGroup = pill.getAttribute('data-arch-group') || 'all';
      filterGroup.querySelectorAll('.arch-filter-pill').forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');
      const nextKey = populateSelect(currentGroup, currentArchKey);
      loadArchitecture(nextKey);
    });
  }

  if (archSelect) {
    archSelect.addEventListener('change', () => {
      loadArchitecture(archSelect.value);
    });
  }

  document.addEventListener('click', (e) => {
    const link = e.target.closest('[data-open-arch]');
    if (!link) return;
    const key = link.getAttribute('data-open-arch');
    if (key && architectureData[key]) {
      openProjectArchitecture(key);
    }
  });

  if (btnCopyIaC) {
    btnCopyIaC.addEventListener('click', () => {
      const code = iacCodeDisplay.textContent;
      navigator.clipboard.writeText(code).then(() => {
        btnCopyIaC.innerHTML = `<i data-lucide="check" style="width:12px;"></i> Copied!`;
        if (window.lucide) lucide.createIcons();
        setTimeout(() => {
          btnCopyIaC.innerHTML = `<i data-lucide="copy" style="width:12px;"></i> Copy IaC`;
          if (window.lucide) lucide.createIcons();
        }, 2000);
      });
    });
  }

  let initialKey = 'emp-portal';
  const hash = (window.location.hash || '').replace('#', '');
  if (hash.startsWith('arch-')) {
    const fromHash = hash.slice(5);
    if (architectureData[fromHash]) initialKey = fromHash;
  }

  populateSelect('all', initialKey);
  loadArchitecture(initialKey);
}

/* ==========================================================================
   Featured Projects Interactive Slide & Grid Showcase Engine
   ========================================================================== */
function initProjectSlider() {
  const stage = document.getElementById('projects-slider-stage');
  const track = document.getElementById('projects-slider-track');
  const allSlides = Array.from(document.querySelectorAll('.project-slide-item'));
  const filterPills = document.querySelectorAll('.project-filter-pill');
  const btnPrev = document.getElementById('btn-prev-project');
  const btnNext = document.getElementById('btn-next-project');
  const indicator = document.getElementById('project-slide-indicator');
  const btnToggleView = document.getElementById('btn-toggle-view');
  const viewModeLabel = document.getElementById('view-mode-label');
  const btnAutoplay = document.getElementById('btn-autoplay-project');
  const autoplayIcon = document.getElementById('autoplay-icon');
  const paginationNav = document.getElementById('slider-pagination-nav');

  if (!track || allSlides.length === 0) return;

  let currentFilter = 'all';
  let visibleSlides = allSlides;
  let activeIndex = 0;
  let isGridMode = false;
  let autoplayInterval = null;

  function getVisibleSlides() {
    if (currentFilter === 'all') {
      return allSlides;
    }
    return allSlides.filter((slide) => slide.getAttribute('data-cat') === currentFilter);
  }

  function updateSlider() {
    visibleSlides = getVisibleSlides();
    if (visibleSlides.length === 0) return;

    if (activeIndex >= visibleSlides.length) {
      activeIndex = 0;
    } else if (activeIndex < 0) {
      activeIndex = visibleSlides.length - 1;
    }

    // Update display of all slides based on filter
    allSlides.forEach((slide) => {
      const match = currentFilter === 'all' || slide.getAttribute('data-cat') === currentFilter;
      if (match) {
        slide.style.display = isGridMode ? 'flex' : 'block';
      } else {
        slide.style.display = 'none';
      }
      slide.classList.remove('active');
    });

    if (visibleSlides[activeIndex]) {
      visibleSlides[activeIndex].classList.add('active');
    }

    // In slide mode, shift track based on visible index
    if (!isGridMode) {
      const visibleIndex = activeIndex;
      track.style.transform = `translateX(-${visibleIndex * 100}%)`;
    } else {
      track.style.transform = 'none';
    }

    // Update Indicator Badge
    if (indicator) {
      const curNum = (activeIndex + 1).toString().padStart(2, '0');
      const totNum = visibleSlides.length.toString().padStart(2, '0');
      indicator.textContent = `${curNum} / ${totNum}`;
    }

    // Update Pagination Dots
    renderDots();
  }

  function renderDots() {
    if (!paginationNav) return;
    paginationNav.innerHTML = '';

    if (isGridMode) {
      paginationNav.style.display = 'none';
      return;
    } else {
      paginationNav.style.display = 'flex';
    }

    visibleSlides.forEach((slide, idx) => {
      const dot = document.createElement('button');
      dot.className = `slide-dot ${idx === activeIndex ? 'active' : ''}`;
      const titleEl = slide.querySelector('.project-title');
      const title = titleEl ? titleEl.textContent : `Slide ${idx + 1}`;
      dot.setAttribute('aria-label', `Go to ${title}`);
      dot.setAttribute('title', title);

      dot.addEventListener('click', () => {
        activeIndex = idx;
        updateSlider();
      });

      paginationNav.appendChild(dot);
    });
  }

  // Next / Previous buttons
  if (btnNext) {
    btnNext.addEventListener('click', () => {
      activeIndex++;
      updateSlider();
    });
  }

  if (btnPrev) {
    btnPrev.addEventListener('click', () => {
      activeIndex--;
      updateSlider();
    });
  }

  // Category Filters
  filterPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      filterPills.forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');
      currentFilter = pill.getAttribute('data-filter') || 'all';
      activeIndex = 0;
      updateSlider();
    });
  });

  // View Mode Toggle (Slide / Grid)
  if (btnToggleView) {
    btnToggleView.addEventListener('click', () => {
      isGridMode = !isGridMode;
      if (isGridMode) {
        stage.classList.add('grid-mode');
        btnToggleView.classList.remove('active');
        if (viewModeLabel) viewModeLabel.textContent = 'Grid View';
        if (btnAutoplay) btnAutoplay.style.display = 'none';
        if (btnNext) btnNext.style.display = 'none';
        if (btnPrev) btnPrev.style.display = 'none';
        if (indicator) indicator.style.display = 'none';
        stopAutoplay();
      } else {
        stage.classList.remove('grid-mode');
        btnToggleView.classList.add('active');
        if (viewModeLabel) viewModeLabel.textContent = 'Slide View';
        if (btnAutoplay) btnAutoplay.style.display = 'flex';
        if (btnNext) btnNext.style.display = 'flex';
        if (btnPrev) btnPrev.style.display = 'flex';
        if (indicator) indicator.style.display = 'block';
      }
      updateSlider();
    });
  }

  // Autoplay functionality
  function startAutoplay() {
    stopAutoplay();
    autoplayInterval = setInterval(() => {
      if (!isGridMode && visibleSlides.length > 1) {
        activeIndex = (activeIndex + 1) % visibleSlides.length;
        updateSlider();
      }
    }, 5000);
    if (autoplayIcon) {
      autoplayIcon.setAttribute('data-lucide', 'pause');
      if (window.lucide) lucide.createIcons();
    }
  }

  function stopAutoplay() {
    if (autoplayInterval) {
      clearInterval(autoplayInterval);
      autoplayInterval = null;
    }
    if (autoplayIcon) {
      autoplayIcon.setAttribute('data-lucide', 'play');
      if (window.lucide) lucide.createIcons();
    }
  }

  if (btnAutoplay) {
    btnAutoplay.addEventListener('click', () => {
      if (autoplayInterval) {
        stopAutoplay();
      } else {
        startAutoplay();
      }
    });
  }

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (!stage) return;
    const projectsRect = stage.getBoundingClientRect();
    const isInViewport = projectsRect.top < window.innerHeight && projectsRect.bottom > 0;
    if (isInViewport && !isGridMode) {
      if (e.key === 'ArrowRight') {
        activeIndex++;
        updateSlider();
      } else if (e.key === 'ArrowLeft') {
        activeIndex--;
        updateSlider();
      }
    }
  });

  // Touch swipe support
  let touchStartX = 0;
  let touchEndX = 0;

  stage.addEventListener(
    'touchstart',
    (e) => {
      touchStartX = e.changedTouches[0].screenX;
    },
    { passive: true }
  );

  stage.addEventListener(
    'touchend',
    (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const threshold = 40;
      if (touchEndX < touchStartX - threshold) {
        activeIndex++;
        updateSlider();
      } else if (touchEndX > touchStartX + threshold) {
        activeIndex--;
        updateSlider();
      }
    },
    { passive: true }
  );

  // Initialize view
  updateSlider();
}

/* ==========================================================================
   Freelance Scope & Cost Estimator
   ========================================================================== */
function initFreelanceEstimator() {
  const scopeChips = document.querySelectorAll('.scope-chip[data-scope]');
  const cloudChips = document.querySelectorAll('.scope-chip[data-cloud]');
  const slider = document.getElementById('scale-slider');
  const scaleLabel = document.getElementById('scale-label');
  const estTimeline = document.getElementById('est-timeline');
  const estCost = document.getElementById('est-cost');
  const estDeliverables = document.getElementById('est-deliverables');
  const btnWhatsApp = document.getElementById('btn-calc-whatsapp');

  if (!slider) return;

  const scaleNames = ['Small (Dev + Staging)', 'Medium (Dev + Stage + Prod)', 'Enterprise (Multi-Region / High Scale)'];

  let selectedScope = 'iac-setup';
  let selectedCloud = 'AWS';
  let scaleIndex = 1;

  const deliverablesMap = {
    'iac-setup': [
      'Terraform Modular Codebase with Remote State Locking',
      'Multi-AZ VPC, Subnet Segmentation & NAT Gateways',
      'Automated CI/CD GitHub Actions Infrastructure Pipeline',
      '14 Days Post-Deployment Warranty & Architecture Handover'
    ],
    'cicd-pipeline': [
      'Automated GitHub Actions / Jenkins Multi-Stage Pipeline',
      'SonarQube & Trivy Security & Vulnerability Gates',
      'Zero-Downtime Blue/Green or Canary Deployment Strategy',
      'Slack / Discord Automated Build & Rollback Notifications'
    ],
    'k8s-migration': [
      'Production-Ready EKS / AKS / GKE Cluster Setup',
      'Helm Packaging & Ingress Nginx Controller with TLS',
      'Horizontal Pod Autoscaling (HPA) & Resource Quotas',
      'Prometheus & Grafana Observability Dashboards'
    ],
    'cost-audit': [
      'Comprehensive Cloud Resource & Billing Deep-Dive Audit',
      'Idle / Orphaned Resource Identification & Removal Plan',
      'Spot Fleet & Reserved Instance / Savings Plan Blueprint',
      'Targeting 30% to 60% Monthly Infrastructure Bill Reduction'
    ],
    'full-consulting': [
      'Dedicated Weekly Architecture & Sprint Planning Sessions',
      'Continuous Cloud Monitoring, Backup & Patch Management',
      'Priority SLA 2-Hour Response Time for Production Incidents',
      'End-to-End DevSecOps Guidance & Team Mentorship'
    ]
  };

  const basePricing = {
    'iac-setup': { time: '1 - 2 Weeks' },
    'cicd-pipeline': { time: '1 - 2 Weeks' },
    'k8s-migration': { time: '2 - 3 Weeks' },
    'cost-audit': { time: '3 - 5 Days' },
    'full-consulting': { time: 'Monthly Retainer' }
  };

  function updateCalculation() {
    const scopeData = basePricing[selectedScope];

    estTimeline.textContent = `Estimated Delivery: ${scopeData.time}`;
    estCost.textContent = 'Free Consult · $100–$250 on Delivery';

    // Update Deliverables
    const deliverables = deliverablesMap[selectedScope] || [];
    estDeliverables.innerHTML = '';
    deliverables.forEach((item) => {
      const li = document.createElement('li');
      li.innerHTML = `<i data-lucide="check" style="color: var(--neon-green); width:14px;"></i> ${item}`;
      estDeliverables.appendChild(li);
    });

    if (window.lucide) lucide.createIcons();

    // Update WhatsApp link with pre-filled message
    const message = encodeURIComponent(
      `Hello Narayana, I am inquiring about your Cloud, DevOps & DevSecOps Consulting.\n` +
      `• Selected Scope: ${selectedScope}\n` +
      `• Target Cloud: ${selectedCloud}\n` +
      `• Scale: ${scaleNames[scaleIndex]}\n` +
      `• Commercial model: 100% Free Consultation. Standard setups $100-$250 pay on delivery.\n` +
      `Let's discuss my project details.`
    );
    btnWhatsApp.href = `https://wa.me/919666143335?text=${message}`;
  }

  scopeChips.forEach((chip) => {
    chip.addEventListener('click', () => {
      scopeChips.forEach((c) => c.classList.remove('selected'));
      chip.classList.add('selected');
      selectedScope = chip.getAttribute('data-scope');
      updateCalculation();
    });
  });

  cloudChips.forEach((chip) => {
    chip.addEventListener('click', () => {
      cloudChips.forEach((c) => c.classList.remove('selected'));
      chip.classList.add('selected');
      selectedCloud = chip.getAttribute('data-cloud');
      updateCalculation();
    });
  });

  slider.addEventListener('input', (e) => {
    scaleIndex = parseInt(e.target.value, 10) - 1;
    scaleLabel.textContent = scaleNames[scaleIndex];
    updateCalculation();
  });

  updateCalculation();
}

/* ==========================================================================
   Interactive Web CLI Terminal Simulator
   ========================================================================== */
function initDevOpsTerminal() {
  const modal = document.getElementById('terminal-modal');
  const openBtn = document.getElementById('open-terminal-btn');
  const closeBtn = document.getElementById('close-terminal-btn');
  const input = document.getElementById('terminal-input');
  const output = document.getElementById('terminal-output');

  if (!modal || !input || !output) return;

  // Toggle modal
  openBtn.addEventListener('click', () => {
    modal.classList.add('open');
    input.focus();
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('open');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('open');
    }
  });

  // Hotkey Ctrl + ` to open terminal
  window.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === '`') {
      e.preventDefault();
      modal.classList.toggle('open');
      if (modal.classList.contains('open')) input.focus();
    } else if (e.key === 'Escape' && modal.classList.contains('open')) {
      modal.classList.remove('open');
    }
  });

  const commandHistory = [];
  let historyIndex = -1;

  const commands = {
    help: () => `
Available commands:
  <span class="term-cmd">about</span>          - Bio and career progression
  <span class="term-cmd">experience</span>     - 4+ years career milestones
  <span class="term-cmd">education</span>      - Academic qualifications & grades (YVU)
  <span class="term-cmd">skills</span>         - Technical skills and tools matrix
  <span class="term-cmd">directory</span>      - Full 80+ AWS, Azure, GCP & Open-Source stack
  <span class="term-cmd">certifications</span> - Target certification roadmap (In Prep)
  <span class="term-cmd">architecture</span>   - List all diagrams; <span class="term-cmd">architecture &lt;key&gt;</span> opens one
  <span class="term-cmd">projects</span>       - Production projects & case studies
  <span class="term-cmd">linux</span>          - 26-Domain Enterprise Linux Administration matrix
  <span class="term-cmd">admin</span>          - Jira, GitHub Org & Microsoft 365 Administration
  <span class="term-cmd">hire</span>           - Freelance: 100% free consultation + pay on delivery
  <span class="term-cmd">resume</span>         - Summary ATS resume & contact
  <span class="term-cmd">contact</span>        - Direct email, phone, and WhatsApp
  <span class="term-cmd">neofetch</span>       - System specs HUD banner
  <span class="term-cmd">matrix</span>         - Simulated cyber matrix stream
  <span class="term-cmd">clear</span>          - Clear terminal output
    `,
    about: () => `
<span class="term-info">Narayana Kanaka</span> (He/Him) - Cloud, DevOps & DevSecOps Engineer (Bengaluru, India).
4+ years of dedicated experience across System Administration, Cloud Infrastructure, Toolchain Governance, and DevOps & DevSecOps Automation.
Architecting & managing multi-tier environments (Dev, Pre-Prod, UAT, Prod) for 13 enterprise products:
• <span class="term-success">FinXServe</span> — Digital banking experience layer (Salesforce-native).
• <span class="term-success">Claim Pioneer</span> — Automated AI claims lifecycle & tracking.
• <span class="term-success">AIRA</span> — Autonomous Intelligent Reasoning Agent with OneAPI.
• <span class="term-success">Hyper</span> — Digital investment journey & portfolio simulation.
DevOps Core: AWS Amplify, AWS ECS Fargate, ALB, Route 53, GoDaddy ACM, GitHub Actions, DevSecOps Quality Gates, Jira Administration, Microsoft 365 Admin.
    `,
    experience: () => `
<span class="term-success">Professional Experience (4 yrs 2 mos · Bengaluru, India):</span>
1. <span class="term-info">Cloud, DevOps & DevSecOps Engineer & Systems Administrator</span> (Dec 2024 – Present · 1 yr 9 mos):
   • Multi-tier environments: Development, Pre-Production, UAT, and Production for 13 enterprise products.
   • Front-end deployments via AWS Amplify; containerized backend on AWS ECS Fargate via GitHub Actions CI/CD and DevSecOps security checks.
   • Configured Application Load Balancers (ALB), Route 53 DNS, GoDaddy domains, ACM SSL/TLS certificates.
   • <span class="term-cmd">GitHub Org Administration:</span> Repositories lifecycle, user onboarding/offboarding, team RBAC, branch protection rules, code owners, seat and billing management.
   • <span class="term-cmd">Jira Administration:</span> Custom workflows, issue types, screens, transition validators, Agile Scrum/Kanban boards, executive tracking dashboards, permission schemes.
2. <span class="term-info">Cloud Engineer</span> (Jul 2023 – Dec 2024 · 1 yr 6 mos):
   • Provisioned core AWS: EC2, EBS, VPC, Route 53, API Gateway, SNS, SQS, SES.
   • CI/CD pipeline components via CodeCommit, Jenkins, GitHub Actions; Jira sprint and incident resolution tracking.
   • Administered <span class="term-cmd">Azure AD / Microsoft Entra ID</span> and <span class="term-cmd">Microsoft 365 Admin Center</span>: users, groups, license allocations, enterprise app registrations (OAuth 2.0 / OIDC).
3. <span class="term-info">System Engineer</span> (Jul 2022 – Jul 2023 · 1 yr 1 mo):
   • Enterprise IT infrastructure, LAN/WAN networks, routers, switches, firewalls, and secure VPNs.
   • Active Directory, Microsoft 365 Admin Center, Bitdefender, Defender, CrowdStrike, Vanta compliance governance.
    `,
    linux: () => `
<span class="term-success">Enterprise Linux Mastery Matrix (26 Core Domains):</span>
1.  <span class="term-info">Linux Basics:</span> uname, hostname, whoami, date, uptime, server identification
2.  <span class="term-info">Filesystem (FHS):</span> /, /bin, /etc, /home, /var, /tmp, /usr, /opt, /root, /dev, /proc, pwd, ls, ls -la
3.  <span class="term-info">Directory Management:</span> mkdir, mkdir -p, cd, cd .., cd ~, rmdir, rm -rf
4.  <span class="term-info">File Operations:</span> touch, cp, cp -r, mv (rename/move), rm
5.  <span class="term-info">Viewing Files:</span> cat, less, head, tail, tail -f (real-time streaming)
6.  <span class="term-info">File Editing:</span> nano, vim (:wq save/quit, :q! force discard, insert mode i)
7.  <span class="term-info">Permissions:</span> chmod numeric (754, 640, 700, 740, 453) & symbolic (u+x), r=4 w=2 x=1
8.  <span class="term-info">Ownership:</span> chown -R user:group, chgrp, owner vs group separation
9.  <span class="term-info">Users Management:</span> whoami, /etc/passwd, adduser, su -, userdel -r
10. <span class="term-info">Groups Management:</span> groupadd, usermod -aG (sudo, docker), groups
11. <span class="term-info">Root & Sudo:</span> Root superuser, sudo, sudo -i, visudo least-privilege delegation
12. <span class="term-info">Package Management:</span> apt update, apt upgrade, apt install, apt remove, apt search
13. <span class="term-info">Process Management:</span> ps aux, top, htop, grep processes, PID, kill, kill -9 (SIGKILL)
14. <span class="term-info">Services (systemd):</span> systemctl status/start/stop/restart/enable, difference between start & enable
15. <span class="term-info">Disk Management:</span> df -h, du -sh, lsblk, disk utilization audits
16. <span class="term-info">Memory & CPU:</span> free -h (RAM & Swap), top/htop, lscpu architecture
17. <span class="term-info">Searching (find):</span> find -name, find directories, find by extension, size & time filters
18. <span class="term-info">Text Searching:</span> grep, grep -i, grep -r, grep -n, regex filters
19. <span class="term-info">Pipes & Redirection:</span> Pipe |, overwrite >, append >>, input <, stderr 2>&1
20. <span class="term-info">Text Processing:</span> sort, uniq -c, wc -l, cut -d, awk '{print $1}', sed 's/old/new/g'
21. <span class="term-info">Networking:</span> ip addr, ip route, ping, nslookup, dig, ss -tuln, nc -zv
22. <span class="term-info">SSH & SCP:</span> ssh -i key.pem, scp remote copy, ssh-keygen, key authentication
23. <span class="term-info">Environment:</span> env, echo $HOME, export, PATH variables, which
24. <span class="term-info">System Logs:</span> /var/log/*, tail -f, journalctl -u, journalctl -f, --since
25. <span class="term-info">Cron Scheduling:</span> crontab -e, crontab -l, 5-field syntax (min hr dom mon dow)
26. <span class="term-info">Shell Scripting:</span> #!/bin/bash, variables, command substitution $(), if/else, for loops, chmod +x
    `,
    admin: () => `
<span class="term-success">Enterprise Administration, Security & Governance:</span>
• <span class="term-info">Jira Administration:</span>
  - Designed & maintained custom issue types, transition screens, custom fields, and validators.
  - Architected Agile Scrum & Kanban sprint boards, release versions, and backlog workflows.
  - Built executive tracking dashboards with custom JQL filters and gadget analytics.
  - Managed user permissions, project roles, group schemes, and automated SLA escalation alerts.
• <span class="term-info">GitHub Organization Administration:</span>
  - Managed repository lifecycles (creation, archiving, templating) across engineering squads.
  - Handled user onboarding/offboarding, team invitations, and role-based permissions (Admin/Write/Read).
  - Enforced branch protection rules, required PR approvals, Code Owners, and signed commits.
  - Managed enterprise subscription plans, billings, and seat allocation optimization.
• <span class="term-info">Microsoft 365 Admin Center & Entra ID:</span>
  - Administered user identities, license assignments (E5/Business Premium), and dynamic groups.
  - Configured Enterprise App Registrations, Single Sign-On (SSO), and OAuth 2.0 / OIDC integrations.
  - Enforced Multi-Factor Authentication (MFA), Conditional Access, and security baselines.
• <span class="term-info">Endpoint Security, Web Filtering & Compliance:</span>
  - Vanta Compliance: Continuous automated SOC 2 & ISO 27001 posture tracking and agent management.
  - Bitdefender GravityZone: Centralized EDR, Anti-Malware, and Web Access / URL category blocking.
  - Microsoft Defender for Endpoint: Next-Gen Protection, Attack Surface Reduction, and Cloud App Security.
  - Web & Application Control: Corporate DNS filtering, malicious/unapproved website blocking, and process restrictions.
    `,
    education: () => `
<span class="term-success">Academic Background &bull; Yogi Vemana University, Kadapa:</span>
🎓 <span class="term-info">Master of Business Administration (MBA):</span> Human Resources Management (Aug 2019 – Aug 2021) &bull; <span class="term-success">Grade: 77% (Distinction)</span>
🎓 <span class="term-info">Bachelor of Computer Applications (BCA):</span> Computer Science (Jul 2015 – May 2018) &bull; <span class="term-success">Grade: 71% (First Class)</span>
    `,
    skills: () => `
<span class="term-cmd">AWS (30+):</span> Amplify, ECS Fargate, EKS, EC2, Lambda, S3, CloudFront, Route 53, VPC, ALB, Target Groups, ACM, RDS Aurora, DynamoDB, IAM, KMS, WAF, CloudWatch, ECR, SQS, SNS
<span class="term-cmd">Azure (14):</span> VMs, AKS, App Service, VNet, Azure SQL, Blob, Azure DevOps, Entra ID, Load Balancer, Monitor, Key Vault, ACR, Cosmos DB
<span class="term-cmd">GCP (12):</span> GKE, Cloud Run, Compute Engine, Cloud Storage, Cloud SQL, BigQuery, VPC, Cloud Load Balancing, IAM, Artifact Registry, Stackdriver, Pub/Sub
<span class="term-cmd">DevOps & IaC:</span> Terraform, Terragrunt, Ansible, Docker, Kubernetes, Helm, ArgoCD, GitHub Actions, Jenkins, GitLab CI
<span class="term-cmd">Security & Compliance:</span> Vanta (SOC 2 / ISO 27001), Bitdefender GravityZone, Microsoft Defender for Endpoint, Intune Device Compliance, Web Filtering & Blocking
<span class="term-cmd">Observability & OS:</span> Prometheus, Grafana, Alertmanager, Datadog, ELK / OpenSearch, OpenTelemetry, Nginx, Envoy, Istio, Linux (Ubuntu, RHEL, Amazon Linux), Python, Bash
<span class="term-cmd">Databases & Web:</span> PostgreSQL, MySQL, Redis, DynamoDB, MongoDB, REST APIs, WebSockets, OneAPI
    `,
    directory: () => `
<span class="term-success">Multi-Cloud & Open-Source Services Directory (80+ Technologies):</span>
• <span class="term-info">AWS:</span> Amplify, ECS Fargate, EKS, EC2, Lambda, S3, CloudFront, Route53, VPC, ALB, Target Groups, ACM, RDS, Aurora, DynamoDB, ElastiCache, IAM, KMS, WAF, CloudWatch, ECR, SQS, SNS
• <span class="term-info">Azure:</span> Virtual Machines, AKS, App Service, VNet, Azure SQL, Blob, Azure DevOps, Entra ID, Load Balancer, Monitor, Key Vault, ACR, Cosmos DB
• <span class="term-info">GCP:</span> GKE, Cloud Run, Compute Engine, Cloud Storage, Cloud SQL, BigQuery, VPC, Cloud Load Balancing, IAM, Artifact Registry, Stackdriver, Pub/Sub
• <span class="term-info">DevOps:</span> Terraform, Terragrunt, Ansible, Docker, Kubernetes, Helm, ArgoCD, GitHub Actions, Jenkins, GitLab CI
• <span class="term-info">Security:</span> Vanta Compliance, Bitdefender GravityZone, MS Defender for Endpoint, Corporate Web/URL Filtering
• <span class="term-info">Observability:</span> Prometheus, Grafana, Alertmanager, Datadog, ELK, OpenSearch, OpenTelemetry, Nginx, Envoy, Istio, Linux, Python, Bash
    `,
    certifications: () => `
<span class="term-warn">Certification Roadmap (In Active Preparation - Coming Soon / Target 2026):</span>
🎯 AWS Certified Solutions Architect - Associate (SAA-C03) [85% Prep & Labs]
🎯 AWS Certified DevOps Engineer - Professional (DOP-C02) [75% Prep & Labs]
🎯 HashiCorp Certified: Terraform Associate (003) [85% Prep & Labs]
🎯 Certified Kubernetes Administrator (CKA) [70% Prep & Labs]
⏳ Microsoft Certified: Azure Administrator (AZ-104) [60% Roadmap Goal]
    `,
    projects: () => `
<span class="term-success">Enterprise Production Platforms & Case Studies (14 Projects):</span>
1.  <span class="term-info">Hyper:</span> Wealth management platform with guided goal discovery, portfolio recommendations & real-time simulations.
2.  <span class="term-info">FinXServe:</span> Salesforce-native digital banking layer with EC2/ECS Docker, Nginx proxy, PostgreSQL + pgAdmin, S3 & CI/CD.
3.  <span class="term-info">Claim Pioneer (Uberization):</span> Automated AI claims assignment, live tracking & end-to-end workflow visibility.
4.  <span class="term-info">AIRA:</span> Autonomous Intelligent Reasoning Agent with OneAPI integration & regulatory compliance guardrails.
5.  <span class="term-info">Drive30:</span> Automotive inventory processing &amp; Command Center platform with AWS Transfer Family (SFTP), Lambda IdP, S3, SQS, ECS Fargate &amp; Next.js on Amplify.
6.  <span class="term-info">VLF:</span> Vehicle Loan & Finance origination platform with automated underwriting pipelines on AWS.
7.  <span class="term-info">EAzy School:</span> Cloud-native school ERP & EdTech SaaS with ECS Fargate and automated S3 backups.
8.  <span class="term-info">People Fund:</span> Peer-to-peer crowdfunding & micro-lending platform with secure payment webhooks.
9.  <span class="term-info">Employee Portal:</span> Enterprise HRMS workspace with Microsoft Entra ID (Azure AD) SSO and RBAC governance.
10. <span class="term-info">Document Manager:</span> Secure cloud document vault with AWS S3 KMS encryption and automated virus scanning.
11. <span class="term-info">Buildzbit:</span> Modular no-code website builder with containerized rendering and CloudFront edge CDN.
12. <span class="term-info">ELog:</span> High-throughput enterprise log aggregation & audit trail engine with OpenSearch and Kafka.
13. <span class="term-info">AWT:</span> Automated Workflow Technology engine for enterprise task scheduling and event queues.
14. <span class="term-info">emp-portal:</span> Enterprise Workforce & Delivery Platform — Amplify SPA, Beanstalk FastAPI, private Multi-AZ RDS MySQL 8 (India + US).
    `,
    architecture: (arg) => {
      const key = (arg || '').trim().toLowerCase();
      if (key) {
        if (architectureData[key] && typeof window.openProjectArchitecture === 'function') {
          const modal = document.getElementById('terminal-modal');
          if (modal) modal.classList.remove('open');
          window.openProjectArchitecture(key);
          return `<span class="term-success">Opening interactive diagram:</span> ${architectureData[key].title}`;
        }
        return `<span class="term-error">Unknown architecture key '${key}'.</span> Type <span class="term-cmd">architecture</span> to list keys.`;
      }

      const lines = [
        '<span class="term-success">Interactive AWS Architecture Catalog (type architecture &lt;key&gt; to open):</span>',
        '',
        '<span class="term-info">Platform Patterns:</span>',
        '  aws-3tier            AWS 3-Tier Enterprise (Amplify + ALB + ECS + Aurora)',
        '  gitops-cicd          GitOps CI/CD (GitHub + Trivy + ECR + ArgoCD)',
        '  k8s-microservices    Kubernetes Microservices Mesh (Istio + HPA)',
        '  serverless-event     AWS Serverless Event-Driven (APIGW + Lambda + DDB)',
        '  multi-region-dr      Multi-Region Disaster Recovery (Route 53 + Global DB)',
        '',
        '<span class="term-info">FinTech (4):</span>',
        '  hyper                Hyper — Digital investment journeys',
        '  finxserve            FinXServe — Omnichannel digital banking',
        '  vlf                  VLF — Vehicle loan origination',
        '  people-fund         People Fund — PCI-DSS P2P crowdfunding',
        '',
        '<span class="term-info">AI &amp; Automation (4):</span>',
        '  claim-pioneer        Claim Pioneer — AI claims dispatcher',
        '  aira                 AIRA — Autonomous reasoning agents',
        '  buildzbit            Buildzbit — Modular builder + edge publish',
        '  awt                  AWT — Event-driven workflow engine',
        '',
        '<span class="term-info">Enterprise &amp; Cloud (6):</span>',
        '  drive30              Drive30 — SFTP inventory command center',
        '  eazy-school          EAzy School — Multi-tenant EdTech ERP',
        '  employee-portal      Employee Portal — Entra ID HRMS (India)',
        '  document-manager     Document Manager — KMS archival vault',
        '  elog                 ELog — Kafka + OpenSearch audit trail',
        '  emp-portal           emp-portal — Workforce &amp; delivery platform (India + US)'
      ];
      return lines.join('\n');
    },
    hire: () => `
Freelance & Consultancy Services:
• Step 1: 100% Free Consultation ($0 upfront)
• Step 2: Clear Scope ($100-$250 standard; custom/hourly for large projects)
• Step 3: Pay Only When Live and Working (zero risk)
• IaC & Cloud Architecture Setup (Terraform)
• Zero-Downtime CI/CD Pipeline Automation
• Kubernetes / EKS Cluster Migration
• Cloud Cost (FinOps) & Security Audits
• Dedicated Monthly DevOps Retainer
Direct WhatsApp: <a href="https://wa.me/919666143335" target="_blank" style="color:var(--cyber-cyan); text-decoration:underline;">+91 9666143335</a>
    `,
    resume: () => `
Opening resume viewer...
Type 'contact' to reach Narayana directly at <span class="term-cmd">kanakanarayana99@gmail.com</span>
    `,
    contact: () => `
<span class="term-success">Direct Contact Channels:</span>
📧 Email: <a href="mailto:kanakanarayana99@gmail.com" style="color:var(--cyber-cyan);">kanakanarayana99@gmail.com</a>
📱 Mobile / WhatsApp: <a href="tel:+919666143335" style="color:var(--cyber-cyan);">+91 9666143335</a>
🔗 LinkedIn: <a href="https://www.linkedin.com/in/narayana-kanaka-641b19229/" target="_blank" style="color:var(--cyber-cyan);">linkedin.com/in/narayana-kanaka-641b19229</a>
💻 GitHub: <a href="https://github.com/narayanahyniva" target="_blank" style="color:var(--cyber-cyan);">github.com/narayanahyniva</a>
    `,
    neofetch: () => `
<span class="term-user">narayana</span>@<span class="term-host">cloud-devops-pro</span>
-------------------------
<span class="term-info">OS:</span> Cloud Linux / AWS Amazon Linux 2023
<span class="term-info">Host:</span> Multi-Cloud Kubernetes Cluster
<span class="term-info">Kernel:</span> 6.1.0-cloud-devops
<span class="term-info">Uptime:</span> 99.99% SLA Guaranteed
<span class="term-info">Shell:</span> zsh 5.9 with Starship Prompt
<span class="term-info">Containers:</span> 140 running, 0 paused, 0 stopped
<span class="term-info">Cloud Stacks:</span> AWS • Azure • GCP • Terraform
<span class="term-info">Memory:</span> 64GiB Distributed Cloud Node
    `,
    matrix: () => `
<span class="term-success">01000011 01001100 01001111 01010101 01000100</span><br>
<span class="term-success">01000100 01000101 01010110 01001111 01010000</span><br>
<span class="term-success">01010011 00100000 01010000 01010010 01001111</span><br>
<span class="term-info">Initializing autonomous GitOps cluster deployment... COMPLETE!</span>
    `,
    clear: () => {
      output.innerHTML = '';
      return '';
    }
  };

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const rawCmd = input.value.trim();
      const cmd = rawCmd.toLowerCase();

      if (rawCmd.length > 0) {
        commandHistory.push(rawCmd);
        historyIndex = commandHistory.length;
      }

      // Print prompt line
      const line = document.createElement('div');
      line.className = 'term-line';
      line.innerHTML = `<span class="term-user">narayana</span>@<span class="term-host">cloud-devops</span>:~$ <span class="term-cmd">${rawCmd}</span>`;
      output.appendChild(line);

      const parts = cmd.split(/\s+/);
      const base = parts[0];
      const arg = parts.slice(1).join(' ');

      // Execute command
      if (base === 'clear') {
        commands.clear();
      } else if (commands[base]) {
        const res = commands[base](arg);
        if (res) {
          const resLine = document.createElement('div');
          resLine.className = 'term-line';
          resLine.innerHTML = res;
          output.appendChild(resLine);
        }
        if (base === 'resume') {
          const resumeModal = document.getElementById('resume-modal');
          if (resumeModal) resumeModal.classList.add('open');
        }
      } else if (cmd.length > 0) {
        const errLine = document.createElement('div');
        errLine.className = 'term-line term-error';
        errLine.innerHTML = `zsh: command not found: ${rawCmd}. Type <span class="term-cmd">'help'</span> for list of commands.`;
        output.appendChild(errLine);
      }

      input.value = '';
      output.scrollTop = output.scrollHeight;
    } else if (e.key === 'ArrowUp') {
      if (historyIndex > 0) {
        historyIndex--;
        input.value = commandHistory[historyIndex];
      }
    } else if (e.key === 'ArrowDown') {
      if (historyIndex < commandHistory.length - 1) {
        historyIndex++;
        input.value = commandHistory[historyIndex];
      } else {
        historyIndex = commandHistory.length;
        input.value = '';
      }
    }
  });
}

/* ==========================================================================
   Resume ATS Modal Handlers
   ========================================================================== */
function initResumeModal() {
  const resumeModal = document.getElementById('resume-modal');
  const openResumeBtn = document.getElementById('open-resume-btn');
  const closeResumeBtn = document.getElementById('close-resume-btn');

  if (!resumeModal) return;

  if (openResumeBtn) {
    openResumeBtn.addEventListener('click', () => {
      resumeModal.classList.add('open');
    });
  }

  if (closeResumeBtn) {
    closeResumeBtn.addEventListener('click', () => {
      resumeModal.classList.remove('open');
    });
  }

  resumeModal.addEventListener('click', (e) => {
    if (e.target === resumeModal) {
      resumeModal.classList.remove('open');
    }
  });
}

/* ==========================================================================
   Contact Form Submission Handler
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('consultation-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const service = document.getElementById('contact-service').value || 'General Consultation';
    const message = document.getElementById('contact-message').value;

    const subject = encodeURIComponent(`Consultation Request: ${service} from ${name}`);
    const body = encodeURIComponent(`Client Name: ${name}\nClient Email: ${email}\nService: ${service}\n\nProject Scope:\n${message}`);

    window.location.href = `mailto:kanakanarayana99@gmail.com?subject=${subject}&body=${body}`;

    alert(`Thank you, ${name}! Your consultation request email draft has been generated. I will respond to you within 2 business hours.`);
    form.reset();
  });
}

/* ==========================================================================
   Back to Top Button
   ========================================================================== */
function initBackToTop() {
  const btn = document.getElementById('btn-back-top');
  if (!btn) return;

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  const yearEl = document.getElementById('footer-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/* ==========================================================================
   DevSecOps Security, Notification & Observability (Slide & Box Engine)
   ========================================================================== */
function initDevSecOpsHub() {
  const track = document.getElementById('devsec-slider-track');
  const stage = document.getElementById('devsec-slider-stage');
  const slides = document.querySelectorAll('.devsec-slide-item');
  const stepperPills = document.querySelectorAll('.step-pill');
  const paginationNav = document.getElementById('devsec-pagination-nav');
  const slideBadge = document.getElementById('devsec-slide-badge');
  const slideCategory = document.getElementById('devsec-slide-cat');
  const prevBtn = document.getElementById('btn-prev-devsec');
  const nextBtn = document.getElementById('btn-next-devsec');
  const autoplayBtn = document.getElementById('btn-autoplay-devsec');
  const autoplayIcon = document.getElementById('devsec-autoplay-icon');
  const modeBtn = document.getElementById('btn-toggle-devsec-mode');
  const modeLabel = document.getElementById('devsec-mode-label');
  const copyBtn = document.getElementById('copy-devsec-code-btn');

  if (!track || slides.length === 0) return;

  const totalSlides = slides.length;
  let currentSlide = 0;
  let autoplayTimer = null;
  let isAutoplaying = false;
  let isGridMode = false;

  const categoryTitles = [
    'Shift-Left (Pre-Commit)',
    'Build (SAST Analysis)',
    'Dependencies (SCA & SBOM)',
    'IaC & Cloud Provisioning',
    'Artifacts (Containers)',
    'Staging (DAST Pen-Test)',
    'Production (CSPM & Runtime)',
    'Multi-Channel Alert Routing',
    'Observability & Quality Gates',
    'CI/CD Automation Pipeline'
  ];

  const viewport = document.querySelector('.devsec-slider-viewport');

  function updateViewportHeight() {
    if (isGridMode) {
      if (viewport) viewport.style.height = 'auto';
      return;
    }
    const activeSlideEl = slides[currentSlide];
    if (activeSlideEl && viewport) {
      const box = activeSlideEl.querySelector('.devsec-slide-box');
      const h = box ? box.offsetHeight : activeSlideEl.offsetHeight;
      if (h > 0) {
        viewport.style.height = `${h}px`;
      }
    }
  }

  // 1. Build pagination dots dynamically
  if (paginationNav) {
    paginationNav.innerHTML = '';
    slides.forEach((_, idx) => {
      const dot = document.createElement('button');
      dot.className = `devsec-dot ${idx === 0 ? 'active' : ''}`;
      dot.setAttribute('aria-label', `Navigate to stage ${idx + 1}`);
      dot.addEventListener('click', () => goToSlide(idx));
      paginationNav.appendChild(dot);
    });
  }

  // 2. Core Go to Slide function
  function goToSlide(index) {
    if (isGridMode) {
      // If in grid mode, switch back to slider mode first
      toggleMode(false);
    }

    currentSlide = (index + totalSlides) % totalSlides;

    // Apply track transform
    track.style.transform = `translateX(-${currentSlide * 100}%)`;

    // Update active slide class
    slides.forEach((slide, idx) => {
      if (idx === currentSlide) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });

    // Dynamically adjust viewport height to match active slide perfectly
    requestAnimationFrame(() => {
      updateViewportHeight();
    });

    // Update Badge & Category Text
    if (slideBadge) {
      slideBadge.textContent = `STAGE ${String(currentSlide + 1).padStart(2, '0')} OF ${String(totalSlides).padStart(2, '0')}`;
    }
    if (slideCategory) {
      slideCategory.textContent = categoryTitles[currentSlide] || `Stage ${currentSlide + 1}`;
    }

    // Update Stepper Ribbon Active State & Auto-scroll
    stepperPills.forEach((pill, idx) => {
      if (idx === currentSlide) {
        pill.classList.add('active');
        pill.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      } else {
        pill.classList.remove('active');
      }
    });

    // Update Pagination Dots
    const dots = paginationNav ? paginationNav.querySelectorAll('.devsec-dot') : [];
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentSlide);
    });

    // Re-render Lucide Icons
    if (window.lucide) {
      lucide.createIcons();
    }
  }

  // 3. Next / Prev Event Handlers
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      goToSlide(currentSlide + 1);
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      goToSlide(currentSlide - 1);
    });
  }

  // 4. Stepper Pills Click Event Delegation
  stepperPills.forEach((pill, idx) => {
    pill.addEventListener('click', () => {
      goToSlide(idx);
    });
  });

  // 5. Autoplay Toggle
  function startAutoplay() {
    isAutoplaying = true;
    autoplayBtn.classList.add('playing');
    autoplayBtn.querySelector('span').textContent = 'Pause';
    if (autoplayIcon) autoplayIcon.setAttribute('data-lucide', 'pause');
    if (window.lucide) lucide.createIcons();

    autoplayTimer = setInterval(() => {
      goToSlide(currentSlide + 1);
    }, 5500);
  }

  function stopAutoplay() {
    isAutoplaying = false;
    autoplayBtn.classList.remove('playing');
    autoplayBtn.querySelector('span').textContent = 'Auto Slide';
    if (autoplayIcon) autoplayIcon.setAttribute('data-lucide', 'play');
    if (window.lucide) lucide.createIcons();

    if (autoplayTimer) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  }

  if (autoplayBtn) {
    autoplayBtn.addEventListener('click', () => {
      if (isAutoplaying) {
        stopAutoplay();
      } else {
        startAutoplay();
      }
    });
  }

  // 6. Grid Mode vs Slider Mode Toggle
  function toggleMode(forceGridState) {
    isGridMode = typeof forceGridState === 'boolean' ? forceGridState : !isGridMode;

    if (isGridMode) {
      stage.classList.add('grid-mode');
      if (viewport) viewport.style.height = 'auto';
      if (modeLabel) modeLabel.textContent = 'Slide View';
      if (modeBtn) {
        const icon = modeBtn.querySelector('i');
        if (icon) icon.setAttribute('data-lucide', 'layers');
      }
      stopAutoplay();
    } else {
      stage.classList.remove('grid-mode');
      if (modeLabel) modeLabel.textContent = 'Grid View';
      if (modeBtn) {
        const icon = modeBtn.querySelector('i');
        if (icon) icon.setAttribute('data-lucide', 'grid');
      }
      track.style.transform = `translateX(-${currentSlide * 100}%)`;
      requestAnimationFrame(updateViewportHeight);
    }

    if (window.lucide) lucide.createIcons();
  }

  if (modeBtn) {
    modeBtn.addEventListener('click', () => toggleMode());
  }

  // 7. Copy CI/CD Pipeline YAML Snippet
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const codeBlock = document.querySelector('.workflow-code-block code');
      if (codeBlock) {
        navigator.clipboard.writeText(codeBlock.innerText).then(() => {
          const originalHTML = copyBtn.innerHTML;
          copyBtn.innerHTML = '<i data-lucide="check"></i> Copied!';
          if (window.lucide) lucide.createIcons();

          setTimeout(() => {
            copyBtn.innerHTML = originalHTML;
            if (window.lucide) lucide.createIcons();
          }, 2000);
        });
      }
    });
  }

  // Touch Swipe Support for Mobile
  let touchStartX = 0;
  let touchEndX = 0;

  track.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  track.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });

  function handleSwipe() {
    if (isGridMode) return;
    const swipeThreshold = 50;
    if (touchEndX < touchStartX - swipeThreshold) {
      goToSlide(currentSlide + 1); // Swipe Left -> Next
    }
    if (touchEndX > touchStartX + swipeThreshold) {
      goToSlide(currentSlide - 1); // Swipe Right -> Prev
    }
  }

  window.addEventListener('resize', () => {
    updateViewportHeight();
  });

  // Initialize First Slide & height
  goToSlide(0);
  setTimeout(updateViewportHeight, 150);
}

/* ==========================================================================
   Glassmorphism 2.0 Dynamic Spotlight & 3D Interactive Tilt Engine
   ========================================================================== */
function initGlassmorphismEngine() {
  const cardSelector = 
    '.service-card, .project-card, .hero-pulse-card, .cloud-badge-card, .skill-bar-card, .sphere-container-card, .linux-card, .arch-node, .dir-card, .education-card, .cert-badge-card, .contact-item, .contact-info-card, .contact-form-card, .about-bio-card, .timeline-card, .calculator-wrapper-card, .calc-summary-side, .terminal-window, .resume-modal-content, .devsec-slide-box, .sim-terminal-box, .sim-report-card, .sim-table-box, .sim-iac-box, .sim-trivy-box, .sim-dast-box, .sim-falco-box, .workflow-code-wrapper, .pane-gate-card, .case-study-stage, .case-study-panel, .c2c-pipeline-stage, .c2c-vpc-stage, .c2c-node, .c2c-step';

  document.addEventListener('mousemove', (e) => {
    const card = e.target.closest(cardSelector);
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);

    // Subtle 3D Perspective Tilt for non-modal elements
    if (!card.classList.contains('no-tilt') && !card.closest('.terminal-modal-overlay') && !card.closest('.resume-modal-overlay')) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const tiltX = (y - centerY) / centerY; // -1 to 1
      const tiltY = (centerX - x) / centerX; // -1 to 1
      const maxTilt = 4.0; // degrees

      card.style.transform = `perspective(1000px) rotateX(${tiltX * maxTilt}deg) rotateY(${tiltY * maxTilt}deg) translateY(-4px)`;
    }
  });

  // Smooth reset on mouse leave
  document.querySelectorAll(cardSelector).forEach(card => {
    card.addEventListener('mouseleave', () => {
      if (!card.closest('.terminal-modal-overlay') && !card.closest('.resume-modal-overlay')) {
        card.style.transform = '';
      }
    });
  });
}


/* ==========================================================================
   emp-portal Code-to-Cloud Lab — Architecture Stage + Deployment Simulator
   ========================================================================== */

const EMP_PORTAL_C2C_NODES = {
  amplify: {
    title: 'AWS Amplify Hosting (CloudFront CDN)',
    desc: 'React 18 SPA for emp-portal served from Amplify with CloudFront edge caching, SPA rewrites, and TLS on the production web app.',
    specs: [
      'Host: Production web application',
      'Stack: React 18 SPA + hashed production bundles',
      'CDN: CloudFront global edge with instant invalidation',
      'Security: Managed SSL, HSTS, SPA 200 rewrites'
    ],
    codeFile: 'amplify-stack.ts',
    code: `new amplify.CfnApp(this, 'EmpPortalFrontend', {
  name: 'emp-portal-spa',
  platform: 'WEB',
  customRules: [{
    source: '/<*>',
    target: '/index.html',
    status: '200'
  }]
});`
  },
  r53: {
    title: 'Route 53 DNS + ACM Certificates',
    desc: 'Custom domain records alias Amplify and the API ALB. ACM issues TLS 1.3 certificates with DNS validation.',
    specs: [
      'Zone: Production hosted zone',
      'Records: Web app (Amplify) and API (ALB)',
      'TLS: ACM TLS 1.3, HTTP to HTTPS redirect',
      'Region: Primary AWS region for ALB, edge region for CloudFront'
    ],
    codeFile: 'dns-stack.ts',
    code: `new route53.ARecord(this, 'EmpPortalAlias', {
  zone: hostedZone,
  recordName: 'app',
  target: route53.RecordTarget.fromAlias(
    new targets.CloudFrontTarget(amplifyDistro)
  )
});`
  },
  alb: {
    title: 'Application Load Balancer',
    desc: 'Internet-facing ALB in public subnets terminates TLS for the production API and health-checks the Elastic Beanstalk FastAPI origin.',
    specs: [
      'DNS: Production API hostname',
      'Listener: 443 HTTPS, HTTP 80 redirect',
      'Health: GET /health every 15s',
      'AZ: Public subnets across two availability zones'
    ],
    codeFile: 'alb-stack.ts',
    code: `const alb = new elbv2.ApplicationLoadBalancer(this, 'EmpPortalAlb', {
  vpc,
  internetFacing: true,
  loadBalancerName: 'emp-portal-alb',
  vpcSubnets: { subnetType: ec2.SubnetType.PUBLIC }
});`
  },
  apigw: {
    title: 'API Gateway HTTP Facade',
    desc: 'HTTP API facade in front of the ALB origin with JWT authorizer for partner and browser sessions.',
    specs: [
      'Type: API Gateway HTTP API',
      'Auth: JWT authorizer (httpOnly cookie session)',
      'Origin: HTTPS to ALB / FastAPI',
      'Throttle: Burst protection on /api/*'
    ],
    codeFile: 'apigw-stack.ts',
    code: `new apigwv2.HttpApi(this, 'EmpPortalFacade', {
  apiName: 'emp-portal-http',
  corsPreflight: { allowOrigins: [portalOrigin] }
});`
  },
  nat: {
    title: 'NAT Gateways (Multi-AZ)',
    desc: 'NAT gateways in public subnets provide egress for Elastic Beanstalk tasks in private subnets (patches, SES, Secrets Manager) without inbound exposure.',
    specs: [
      'Placement: Public subnets, one per AZ',
      'Use: Private compute egress only',
      'Inbound: None',
      'HA: Multi-AZ redundant'
    ],
    codeFile: 'nat-stack.ts',
    code: `new ec2.Vpc(this, 'EmpPortalVpc', {
  natGateways: 2,
  maxAzs: 2
});`
  },
  eb: {
    title: 'Elastic Beanstalk FastAPI Origin',
    desc: 'Python 3.11 on Amazon Linux 2023 running FastAPI with Uvicorn on port 8000. Roughly 900 API endpoints. Tasks stay in private subnets; ingress only from the ALB security group.',
    specs: [
      'Runtime: Python 3.11 / AL2023',
      'Server: Uvicorn ASGI :8000',
      'Surface: ~900 FastAPI endpoints',
      'Network: Private subnets, no public exposure'
    ],
    codeFile: 'api-stack.ts',
    code: `new elasticbeanstalk.CfnEnvironment(this, 'EmpPortalApiEnv', {
  applicationName: 'emp-portal-api',
  solutionStackName: '64bit Amazon Linux 2023 v4.3 running Python 3.11',
  optionSettings: [{
    namespace: 'aws:elasticbeanstalk:application:environment',
    optionName: 'PORT',
    value: '8000'
  }]
});`
  },
  rds: {
    title: 'Amazon RDS MySQL 8 (Private Isolated)',
    desc: 'Multi-AZ MySQL 8 with storage encryption. Port 3306 accepts traffic only from the Elastic Beanstalk security group. Zero public internet exposure.',
    specs: [
      'Engine: MySQL 8 Multi-AZ',
      'Network: PRIVATE_ISOLATED subnets',
      'SG: 3306 from EB only',
      'Encryption: KMS at rest, TLS in transit'
    ],
    codeFile: 'database-stack.ts',
    code: `new rds.DatabaseInstance(this, 'EmpPortalMysql', {
  engine: rds.DatabaseInstanceEngine.mysql({
    version: rds.MysqlEngineVersion.VER_8_0
  }),
  vpc,
  vpcSubnets: { subnetType: ec2.SubnetType.PRIVATE_ISOLATED },
  multiAz: true,
  storageEncrypted: true,
  publiclyAccessible: false
});`
  },
  ssm: {
    title: 'SSM Session Manager + VPC-Peered Bastion',
    desc: 'Operators reach the private database through SSM Session Manager and a VPC-peered bastion. No inbound SSH security-group rules exist.',
    specs: [
      'Access: ssm:StartSession only',
      'Bastion: VPC-peered, no public SSH',
      'Access: No inbound SSH from the public internet',
      'Audit: Session logs to CloudWatch'
    ],
    codeFile: 'ssm-bastion.ts',
    code: `new iam.ManagedPolicy(this, 'SsmBastionPolicy', {
  statements: [new iam.PolicyStatement({
    actions: ['ssm:StartSession'],
    resources: ['arn:aws:ec2:*:*:instance/*']
  })]
});`
  },
  secrets: {
    title: 'AWS Secrets Manager',
    desc: 'JWT signing keys, RDS credentials, and integration tokens are KMS-wrapped in Secrets Manager and injected into Beanstalk at deploy time.',
    specs: [
      'Secret: emp-portal/prod/app',
      'Contents: JWT, RDS, integration tokens',
      'Rotation: RDS credentials enabled',
      'IAM: EB instance role GetSecretValue only'
    ],
    codeFile: 'secrets-stack.ts',
    code: `new secretsmanager.Secret(this, 'EmpPortalSecrets', {
  secretName: 'emp-portal/prod/app',
  description: 'JWT keys, RDS credentials, integration tokens'
});`
  },
  ses: {
    title: 'Amazon SES + S3 Assets',
    desc: 'SES sends leave, approver, and payroll-adjacent mail from a generic sender identity. S3 holds static assets and Elastic Beanstalk / Amplify deploy zips.',
    specs: [
      'From: noreply@example.com',
      'Mail: SES transactional notifications',
      'Bucket: emp-portal-prod-artifacts',
      'Access: TLS only, block public access'
    ],
    codeFile: 'ops-stack.ts',
    code: `new ses.EmailIdentity(this, 'PortalFrom', {
  identity: ses.Identity.email('noreply@example.com')
});

new s3.Bucket(this, 'EmpPortalArtifacts', {
  bucketName: 'emp-portal-prod-artifacts',
  blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
  encryption: s3.BucketEncryption.S3_MANAGED
});`
  }
};

const C2C_FLOW_PAIRS = [
  ['amplify', 'r53'],
  ['r53', 'alb'],
  ['alb', 'apigw'],
  ['apigw', 'eb'],
  ['eb', 'rds'],
  ['nat', 'eb'],
  ['ssm', 'rds'],
  ['secrets', 'eb'],
  ['ses', 'amplify']
];

const C2C_STEP_NODES = {
  1: [],
  2: [],
  3: ['secrets', 'ssm'],
  4: ['ses', 'eb', 'amplify'],
  5: ['alb', 'eb', 'amplify', 'rds']
};

const C2C_STEP_LOGS = {
  1: [
    ['info', 'git push origin main'],
    ['ok', 'Branch protection satisfied. Local STS caller identity verified.']
  ],
  2: [
    ['info', 'GitHub Actions: gitleaks, pytest (MySQL 8 container), alembic check'],
    ['ok', 'CI gates passed. Artifact emp-portal-api.zip published.']
  ],
  3: [
    ['warn', 'OIDC federation assuming the production deploy role'],
    ['ok', 'Deploy role verified. CDK synth Network / Database / API stacks.']
  ],
  4: [
    ['info', 'Parallel rollout: S3 artifacts, Elastic Beanstalk, Amplify release'],
    ['ok', 'Beanstalk environment updated. Amplify CloudFront invalidating.']
  ],
  5: [
    ['info', 'GET /health on the production API'],
    ['ok', '200 OK. Production web app is live.']
  ]
};

function initEmpPortalCloudLab() {
  const stage = document.getElementById('c2c-vpc-stage');
  const diagram = document.getElementById('c2c-diagram');
  const runBtn = document.getElementById('c2c-run-btn');
  if (!stage || !diagram || !runBtn) return;

  const flowGroup = document.getElementById('c2c-flow-paths');
  const beam = document.getElementById('c2c-pipe-beam');
  const logEl = document.getElementById('c2c-sim-log');
  const copyBtn = document.getElementById('c2c-copy-iac');
  const nodes = Array.from(document.querySelectorAll('.c2c-node[data-c2c-node]'));
  let running = false;
  let timers = [];

  function selectNode(key) {
    const data = EMP_PORTAL_C2C_NODES[key];
    if (!data) return;
    nodes.forEach((n) => n.classList.toggle('is-selected', n.getAttribute('data-c2c-node') === key));
    document.getElementById('c2c-inspector-title').textContent = data.title;
    document.getElementById('c2c-inspector-desc').textContent = data.desc;
    const specs = document.getElementById('c2c-inspector-specs');
    specs.innerHTML = '';
    data.specs.forEach((spec) => {
      const [label, val] = spec.split(': ');
      const el = document.createElement('div');
      el.className = 'spec-item';
      el.innerHTML = `<strong>${label}:</strong> ${val || ''}`;
      specs.appendChild(el);
    });
    document.getElementById('c2c-code-filename').innerHTML =
      `<i data-lucide="file-code" style="width:12px; display:inline-block; vertical-align:middle;"></i> ${data.codeFile}`;
    document.getElementById('c2c-iac-display').textContent = data.code;
    if (window.lucide) lucide.createIcons();
  }

  function drawFlows() {
    if (!flowGroup) return;
    const wrap = diagram.getBoundingClientRect();
    if (wrap.width < 8 || wrap.height < 8) return;
    flowGroup.innerHTML = '';
    const svg = document.getElementById('c2c-flow-svg');
    if (svg) {
      svg.setAttribute('viewBox', `0 0 ${Math.round(wrap.width)} ${Math.round(wrap.height)}`);
    }
    C2C_FLOW_PAIRS.forEach(([from, to], idx) => {
      const a = document.getElementById(`c2c-node-${from}`);
      const b = document.getElementById(`c2c-node-${to}`);
      if (!a || !b) return;
      const ra = a.getBoundingClientRect();
      const rb = b.getBoundingClientRect();
      const x1 = ra.left + ra.width / 2 - wrap.left;
      const y1 = ra.top + ra.height / 2 - wrap.top;
      const x2 = rb.left + rb.width / 2 - wrap.left;
      const y2 = rb.top + rb.height / 2 - wrap.top;
      const cx = (x1 + x2) / 2;
      const cy = (y1 + y2) / 2 - 24;
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', `M ${x1.toFixed(1)} ${y1.toFixed(1)} Q ${cx.toFixed(1)} ${cy.toFixed(1)} ${x2.toFixed(1)} ${y2.toFixed(1)}`);
      path.setAttribute('class', 'c2c-flow-path');
      path.setAttribute('data-c2c-flow', `${from}-${to}`);
      path.style.animationDelay = `${idx * 0.12}s`;
      flowGroup.appendChild(path);
    });
  }

  function setPill(step, state, text) {
    const pill = document.querySelector(`[data-c2c-pill="${step}"]`);
    const card = document.querySelector(`[data-c2c-step="${step}"]`);
    if (!pill || !card) return;
    pill.classList.remove('is-running', 'is-ok');
    card.classList.remove('is-active', 'is-passed');
    if (state === 'running') {
      pill.classList.add('is-running');
      card.classList.add('is-active');
    } else if (state === 'ok') {
      pill.classList.add('is-ok');
      card.classList.add('is-passed');
    }
    pill.textContent = text;
  }

  function heatNodes(keys) {
    nodes.forEach((n) => {
      const id = n.getAttribute('data-c2c-node');
      n.classList.toggle('is-hot', keys.includes(id));
    });
    document.querySelectorAll('.c2c-flow-path').forEach((p) => {
      const pair = p.getAttribute('data-c2c-flow') || '';
      const hit = keys.some((k) => pair.startsWith(`${k}-`) || pair.endsWith(`-${k}`));
      p.classList.toggle('is-hot', hit);
    });
  }

  function logLine(kind, message) {
    if (!logEl) return;
    const muted = logEl.querySelector('.c2c-log-line.muted');
    if (muted) muted.remove();
    const row = document.createElement('div');
    row.className = `c2c-log-line ${kind}`;
    const ts = new Date().toISOString().substring(11, 19);
    row.textContent = `[${ts}] ${message}`;
    logEl.appendChild(row);
    logEl.scrollTop = logEl.scrollHeight;
  }

  function clearTimers() {
    timers.forEach((t) => clearTimeout(t));
    timers = [];
  }

  function resetVisuals(keepLog) {
    for (let i = 1; i <= 5; i++) setPill(i, 'idle', 'Pending');
    heatNodes([]);
    if (beam) {
      beam.classList.remove('is-on');
      beam.setAttribute('cx', '10');
    }
    if (!keepLog && logEl) {
      logEl.innerHTML = '<div class="c2c-log-line muted">Ready. Press <span class="c2c-mono">Run Live Deployment Simulation</span> to push main into production.</div>';
    }
  }

  function runSimulation() {
    if (running) return;
    running = true;
    clearTimers();
    resetVisuals(true);
    if (logEl) logEl.innerHTML = '';
    runBtn.classList.add('is-running');
    const label = document.getElementById('c2c-run-label');
    const icon = document.getElementById('c2c-run-icon');
    if (label) label.textContent = 'Deploying to production…';
    if (icon) icon.setAttribute('data-lucide', 'loader');
    if (window.lucide) lucide.createIcons();
    logLine('info', 'Simulation started. Tracing commit through CI/CD into the production VPC.');

    const cadence = 1550;
    for (let step = 1; step <= 5; step++) {
      timers.push(setTimeout(() => {
        for (let prev = 1; prev < step; prev++) setPill(prev, 'ok', 'Passed');
        setPill(step, 'running', 'In-Progress');
        if (beam) {
          beam.classList.add('is-on');
          beam.setAttribute('cx', String(10 + ((step - 1) / 4) * 980));
        }
        heatNodes(C2C_STEP_NODES[step] || []);
        (C2C_STEP_LOGS[step] || []).forEach(([kind, msg]) => logLine(kind, msg));
        if (C2C_STEP_NODES[step] && C2C_STEP_NODES[step][0]) {
          selectNode(C2C_STEP_NODES[step][0]);
        }
      }, (step - 1) * cadence));
    }

    timers.push(setTimeout(() => {
      for (let i = 1; i <= 5; i++) setPill(i, 'ok', i === 5 ? '200 OK' : 'Passed');
      if (beam) beam.setAttribute('cx', '990');
      heatNodes(['amplify', 'alb', 'eb', 'rds']);
      logLine('ok', 'Zero-downtime rollout complete. Workforce platform is live.');
      if (label) label.textContent = 'Replay Live Deployment';
      if (icon) icon.setAttribute('data-lucide', 'refresh-cw');
      runBtn.classList.remove('is-running');
      running = false;
      if (window.lucide) lucide.createIcons();
    }, 5 * cadence + 400));
  }

  nodes.forEach((node) => {
    node.addEventListener('click', () => {
      selectNode(node.getAttribute('data-c2c-node'));
    });
  });

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const code = document.getElementById('c2c-iac-display').textContent;
      navigator.clipboard.writeText(code).then(() => {
        copyBtn.innerHTML = `<i data-lucide="check" style="width:12px;"></i> Copied!`;
        if (window.lucide) lucide.createIcons();
        setTimeout(() => {
          copyBtn.innerHTML = `<i data-lucide="copy" style="width:12px;"></i> Copy IaC`;
          if (window.lucide) lucide.createIcons();
        }, 1800);
      });
    });
  }

  runBtn.addEventListener('click', runSimulation);

  const draw = () => requestAnimationFrame(drawFlows);
  window.addEventListener('resize', draw);
  if (typeof ResizeObserver !== 'undefined') {
    new ResizeObserver(draw).observe(diagram);
  }
  drawFlows();
  selectNode('amplify');
}



