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

  // Three.js 3D Hero Cloud Mesh
  initHeroThreeCanvas();

  // Cloud & Open-Source Services Directory
  initCloudDirectory();

  // Interactive 3D Technology Sphere (Canvas 3D Engine)
  initTechSphere();

  // Skills Category Filter
  initSkillsFilter();

  // Linux Mastery Matrix & Command Reference Engine
  initLinuxMatrix();

  // Flagship Feature: Interactive Architecture Explorer
  initArchitectureExplorer();

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
    'Systems Engineer → Cloud Engineer → Cloud DevOps Engineer',
    'Multi-Cloud Infrastructure: AWS • Azure • GCP',
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
   Three.js 3D Hero Cloud Mesh & Particle Network
   ========================================================================== */
function initHeroThreeCanvas() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas || !window.THREE) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 80;

  const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Particles & Connection Points
  const particleCount = 150;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);
  const velocities = [];

  const palette = [
    new THREE.Color('#ff782e'), // sunset orange
    new THREE.Color('#ec4899'), // vibrant magenta
    new THREE.Color('#a855f7'), // electric purple
    new THREE.Color('#818cf8'), // royal indigo
    new THREE.Color('#38bdf8')  // sky azure
  ];

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 160;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 120;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 80;

    const chosenColor = palette[Math.floor(Math.random() * palette.length)];
    colors[i * 3] = chosenColor.r;
    colors[i * 3 + 1] = chosenColor.g;
    colors[i * 3 + 2] = chosenColor.b;

    velocities.push({
      x: (Math.random() - 0.5) * 0.12,
      y: (Math.random() - 0.5) * 0.12,
      z: (Math.random() - 0.5) * 0.08
    });
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  // Particle Material
  const pMaterial = new THREE.PointsMaterial({
    size: 2.4,
    vertexColors: true,
    transparent: true,
    opacity: 0.9,
    blending: THREE.AdditiveBlending
  });

  const particleSystem = new THREE.Points(geometry, pMaterial);
  scene.add(particleSystem);

  // Line Mesh for Dynamic Network Connections
  const lineMaterial = new THREE.LineBasicMaterial({
    color: 0x818cf8,
    transparent: true,
    opacity: 0.22,
    blending: THREE.AdditiveBlending
  });

  let lineGeometry = new THREE.BufferGeometry();
  let lineMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
  scene.add(lineMesh);

  // Floating 3D Geometric Cloud Nodes (representing cloud servers)
  const cubeGeo = new THREE.IcosahedronGeometry(2.5, 0);
  const cubeMat = new THREE.MeshBasicMaterial({
    color: 0xc084fc,
    wireframe: true,
    transparent: true,
    opacity: 0.35
  });

  const cloudNodes = [];
  for (let i = 0; i < 8; i++) {
    const node = new THREE.Mesh(cubeGeo, cubeMat);
    node.position.set(
      (Math.random() - 0.5) * 120,
      (Math.random() - 0.5) * 80,
      (Math.random() - 0.5) * 40
    );
    scene.add(node);
    cloudNodes.push(node);
  }

  // Mouse Parallax Interaction
  let mouseX = 0;
  let mouseY = 0;
  let targetX = 0;
  let targetY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX - window.innerWidth / 2) * 0.04;
    mouseY = (e.clientY - window.innerHeight / 2) * 0.04;
  });

  // Animation Loop
  function animate() {
    requestAnimationFrame(animate);

    targetX += (mouseX - targetX) * 0.05;
    targetY += (mouseY - targetY) * 0.05;

    camera.position.x = targetX;
    camera.position.y = -targetY;
    camera.lookAt(scene.position);

    // Update particles position
    const pos = geometry.attributes.position.array;
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] += velocities[i].x;
      pos[i * 3 + 1] += velocities[i].y;
      pos[i * 3 + 2] += velocities[i].z;

      if (pos[i * 3] > 80 || pos[i * 3] < -80) velocities[i].x = -velocities[i].x;
      if (pos[i * 3 + 1] > 60 || pos[i * 3 + 1] < -60) velocities[i].y = -velocities[i].y;
      if (pos[i * 3 + 2] > 40 || pos[i * 3 + 2] < -40) velocities[i].z = -velocities[i].z;
    }
    geometry.attributes.position.needsUpdate = true;

    // Connect close particles with lines
    const linePositions = [];
    for (let i = 0; i < particleCount; i++) {
      for (let j = i + 1; j < particleCount; j++) {
        const dx = pos[i * 3] - pos[j * 3];
        const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
        const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < 22) {
          linePositions.push(pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2]);
          linePositions.push(pos[j * 3], pos[j * 3 + 1], pos[j * 3 + 2]);
        }
      }
    }

    lineGeometry.dispose();
    lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    lineMesh.geometry = lineGeometry;

    // Rotate geometric cloud nodes
    cloudNodes.forEach((node, idx) => {
      node.rotation.x += 0.005 * (idx % 2 === 0 ? 1 : -1);
      node.rotation.y += 0.008;
    });

    particleSystem.rotation.y += 0.001;

    renderer.render(scene, camera);
  }

  animate();

  // Resize Handler
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
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
    { text: 'Docker', color: '#00f0ff', size: 15 },
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
    { text: 'DevSecOps', color: '#f43f5e', size: 14 },
    { text: 'AWS ECS', color: '#ff9900', size: 14 },
    { text: 'AWS Lambda', color: '#ff9900', size: 13 },
    { text: 'Azure AKS', color: '#0089d6', size: 13 },
    { text: 'Google GKE', color: '#ea4335', size: 13 },
    { text: 'Istio Mesh', color: '#466bb0', size: 13 }
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
    title: 'Hyniva Enterprise Production Architecture (Amplify + ECS Fargate + ALB + Route 53)',
    budget: '$250 – $500',
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
  domain_name       = "app.hyniva.com"
  validation_method = "DNS"

  subject_alternative_names = [
    "*.hyniva.com",
    "dev.hyniva.com",
    "uat.hyniva.com"
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
  name       = "hyniva-enterprise-portal"
  repository = "https://github.com/Hyniva-LLC/FinxServe_React"

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
    title: 'Automated GitOps & Zero-Downtime CI/CD Pipeline',
    budget: '$200 – $400',
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
    repoURL: 'https://github.com/Hyniva-LLC/helm-charts'
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
    title: 'Enterprise Kubernetes Microservices Architecture',
    budget: '$300 – $500',
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
    title: 'AWS Serverless Event-Driven Microservices Architecture',
    budget: '$200 – $450',
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
    title: 'Multi-Region High Availability & Disaster Recovery',
    budget: '$350 – $500',
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
  }
};

function initArchitectureExplorer() {
  const tabs = document.querySelectorAll('.tab-arch-btn');
  const nodesContainer = document.getElementById('arch-nodes-container');
  const diagramTitle = document.getElementById('arch-diagram-title');
  const inspectorTitle = document.getElementById('inspector-title');
  const inspectorDesc = document.getElementById('inspector-desc');
  const inspectorSpecs = document.getElementById('inspector-specs');
  const codeFilename = document.getElementById('code-filename');
  const iacCodeDisplay = document.getElementById('iac-code-display');
  const btnCopyIaC = document.getElementById('btn-copy-iac');

  if (!nodesContainer) return;

  function loadArchitecture(archKey) {
    const arch = architectureData[archKey];
    if (!arch) return;

    diagramTitle.innerHTML = `<i data-lucide="shield"></i> ${arch.title}`;

    const budgetBadge = document.getElementById('arch-budget-badge');
    if (budgetBadge && arch.budget) {
      budgetBadge.textContent = `● Est. Setup: ${arch.budget}`;
    }

    // Render nodes
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

    // Select first node by default
    if (arch.nodes.length > 0) {
      updateInspector(arch.nodes[0]);
    }

    if (window.lucide) {
      lucide.createIcons();
    }
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

  // Tab click handler
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
      const archKey = tab.getAttribute('data-arch');
      loadArchitecture(archKey);
    });
  });

  // Copy IaC code snippet button
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

  // Load initial default architecture
  loadArchitecture('aws-3tier');
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
  const scaleMultipliers = [0.85, 1.0, 1.25];

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
    'iac-setup': { time: '1 - 2 Weeks', minCost: 250, maxCost: 500 },
    'cicd-pipeline': { time: '1 - 2 Weeks', minCost: 200, maxCost: 400 },
    'k8s-migration': { time: '2 - 3 Weeks', minCost: 300, maxCost: 500 },
    'cost-audit': { time: '3 - 5 Days', minCost: 150, maxCost: 300 },
    'full-consulting': { time: 'Monthly Retainer', minCost: 350, maxCost: 500, isMonthly: true }
  };

  function updateCalculation() {
    const scopeData = basePricing[selectedScope];
    const mult = scaleMultipliers[scaleIndex];

    const minC = Math.round(scopeData.minCost * mult);
    const maxC = Math.round(scopeData.maxCost * mult);

    estTimeline.textContent = `Estimated Delivery: ${scopeData.time}`;

    if (scopeData.isMonthly) {
      estCost.textContent = `$${minC.toLocaleString()} / Month`;
    } else {
      estCost.textContent = `$${minC.toLocaleString()} – $${maxC.toLocaleString()}`;
    }

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
      `Hello Narayana, I am inquiring about your Cloud DevOps Consulting.\n` +
      `• Selected Scope: ${selectedScope}\n` +
      `• Target Cloud: ${selectedCloud}\n` +
      `• Scale: ${scaleNames[scaleIndex]}\n` +
      `• Estimated Budget: ${estCost.textContent}\n` +
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
  <span class="term-cmd">about</span>          - Bio and career progression at Hyniva
  <span class="term-cmd">experience</span>     - 4+ years career milestones at Hyniva
  <span class="term-cmd">education</span>      - Academic qualifications & grades (YVU)
  <span class="term-cmd">skills</span>         - Technical skills and tools matrix
  <span class="term-cmd">directory</span>      - Full 80+ AWS, Azure, GCP & Open-Source stack
  <span class="term-cmd">certifications</span> - Target certification roadmap (In Prep)
  <span class="term-cmd">architecture</span>   - Cloud architecture overview
  <span class="term-cmd">projects</span>       - Production projects & case studies
  <span class="term-cmd">skills</span>         - Complete technology stack & capabilities
  <span class="term-cmd">linux</span>          - 26-Domain Enterprise Linux Administration matrix
  <span class="term-cmd">admin</span>          - Jira, GitHub Org & Microsoft 365 Administration
  <span class="term-cmd">directory</span>      - 80+ Multi-Cloud & Open-Source Services
  <span class="term-cmd">projects</span>       - Production enterprise case studies (13 projects)
  <span class="term-cmd">architecture</span>   - Active production cloud topology designs
  <span class="term-cmd">certifications</span> - Official certification roadmap & prep
  <span class="term-cmd">experience</span>     - Professional career at Hyniva (4 yrs 2 mos)
  <span class="term-cmd">education</span>      - Academic degrees & credentials
  <span class="term-cmd">hire</span>           - Freelance consultation & pricing options ($250-$500)
  <span class="term-cmd">resume</span>         - Summary ATS resume & contact
  <span class="term-cmd">contact</span>        - Direct email, phone, and WhatsApp
  <span class="term-cmd">neofetch</span>       - System specs HUD banner
  <span class="term-cmd">matrix</span>         - Simulated cyber matrix stream
  <span class="term-cmd">clear</span>          - Clear terminal output
    `,
    about: () => `
<span class="term-info">Narayana Kanaka</span> (He/Him) - Cloud DevOps Engineer & Administrator at Hyniva (Bengaluru, India).
4+ years of dedicated experience across System Administration, Cloud Infrastructure, Toolchain Governance, and DevOps Automation.
Architecting & managing multi-tier environments (Dev, Pre-Prod, UAT, Prod) for 13 enterprise products:
• <span class="term-success">FinXServe</span> — Digital banking experience layer (Salesforce-native).
• <span class="term-success">Claim Pioneer</span> — Automated AI claims lifecycle & tracking.
• <span class="term-success">AIRA</span> — Autonomous Intelligent Reasoning Agent with OneAPI.
• <span class="term-success">Hyper</span> — Digital investment journey & portfolio simulation.
DevOps Core: AWS Amplify, AWS ECS Fargate, ALB, Route 53, GoDaddy ACM, GitHub Actions, Jira Administration, Microsoft 365 Admin.
    `,
    experience: () => `
<span class="term-success">Professional Experience at Hyniva (4 yrs 2 mos · Bengaluru, India):</span>
1. <span class="term-info">Cloud DevOps Engineer & Systems Administrator</span> (Dec 2024 – Present · 1 yr 9 mos):
   • Multi-tier environments: Development, Pre-Production, UAT, and Production for 13 enterprise products.
   • Front-end deployments via AWS Amplify; containerized backend on AWS ECS Fargate via GitHub Actions CI/CD.
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
<span class="term-success">Enterprise Administration & Governance:</span>
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
<span class="term-cmd">Observability & OS:</span> Prometheus, Grafana, Alertmanager, Datadog, ELK / OpenSearch, OpenTelemetry, Nginx, Envoy, Istio, Linux (Ubuntu, RHEL, Amazon Linux), Python, Bash
<span class="term-cmd">Databases & Web:</span> PostgreSQL, MySQL, Redis, DynamoDB, MongoDB, REST APIs, WebSockets, OneAPI
    `,
    directory: () => `
<span class="term-success">Multi-Cloud & Open-Source Services Directory (80+ Technologies):</span>
• <span class="term-info">AWS:</span> Amplify, ECS Fargate, EKS, EC2, Lambda, S3, CloudFront, Route53, VPC, ALB, Target Groups, ACM, RDS, Aurora, DynamoDB, ElastiCache, IAM, KMS, WAF, CloudWatch, ECR, SQS, SNS
• <span class="term-info">Azure:</span> Virtual Machines, AKS, App Service, VNet, Azure SQL, Blob, Azure DevOps, Entra ID, Load Balancer, Monitor, Key Vault, ACR, Cosmos DB
• <span class="term-info">GCP:</span> GKE, Cloud Run, Compute Engine, Cloud Storage, Cloud SQL, BigQuery, VPC, Cloud Load Balancing, IAM, Artifact Registry, Stackdriver, Pub/Sub
• <span class="term-info">DevOps:</span> Terraform, Terragrunt, Ansible, Docker, Kubernetes, Helm, ArgoCD, GitHub Actions, Jenkins, GitLab CI
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
<span class="term-success">Enterprise Production Platforms & Case Studies (13 Projects):</span>
1.  <span class="term-info">Hyper:</span> Wealth management platform with guided goal discovery, portfolio recommendations & real-time simulations.
2.  <span class="term-info">FinXServe:</span> Salesforce-native digital banking layer with EC2/ECS Docker, Nginx proxy, PostgreSQL + pgAdmin, S3 & CI/CD.
3.  <span class="term-info">Claim Pioneer (Uberization):</span> Automated AI claims assignment, live tracking & end-to-end workflow visibility.
4.  <span class="term-info">AIRA:</span> Autonomous Intelligent Reasoning Agent with OneAPI integration & regulatory compliance guardrails.
5.  <span class="term-info">Drive30:</span> High-frequency vehicle telemetry command center on Kubernetes & Redis streaming.
6.  <span class="term-info">VLF:</span> Vehicle Loan & Finance origination platform with automated underwriting pipelines on AWS.
7.  <span class="term-info">EAzy School:</span> Cloud-native school ERP & EdTech SaaS with ECS Fargate and automated S3 backups.
8.  <span class="term-info">People Fund:</span> Peer-to-peer crowdfunding & micro-lending platform with secure payment webhooks.
9.  <span class="term-info">Employee Portal:</span> Enterprise HRMS workspace with Microsoft Entra ID (Azure AD) SSO and RBAC governance.
10. <span class="term-info">Document Manager:</span> Secure cloud document vault with AWS S3 KMS encryption and automated virus scanning.
11. <span class="term-info">Buildzbit:</span> Modular no-code website builder with containerized rendering and CloudFront edge CDN.
12. <span class="term-info">ELog:</span> High-throughput enterprise log aggregation & audit trail engine with OpenSearch and Kafka.
13. <span class="term-info">AWT:</span> Automated Workflow Technology engine for enterprise task scheduling and event queues.
    `,
    architecture: () => `
Active production architectures:
1. AWS 3-Tier Enterprise Web Application (ALB + ECS + Aurora Multi-AZ)
2. Automated GitOps CI/CD Pipeline (GitHub + SonarQube + Docker + ArgoCD)
3. Kubernetes Microservices Mesh (Istio + Ingress + HPA Autoscaling)
4. AWS Serverless Event-Driven (API Gateway + Lambda + DynamoDB)
5. Multi-Region Disaster Recovery (Route 53 DNS Failover + Aurora Global DB)
    `,
    hire: () => `
Freelance & Consultancy Services (Budget: $250 – $500):
• IaC & Cloud Architecture Setup (Terraform): $250 – $500
• Zero-Downtime CI/CD Pipeline Automation: $200 – $400
• Kubernetes / EKS Cluster Migration: $300 – $500
• Cloud Cost (FinOps) & Security Audits: $150 – $300
• Dedicated Monthly DevOps Retainer: $350 – $500 / Month
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

      // Execute command
      if (cmd === 'clear') {
        commands.clear();
      } else if (commands[cmd]) {
        const res = commands[cmd]();
        if (res) {
          const resLine = document.createElement('div');
          resLine.className = 'term-line';
          resLine.innerHTML = res;
          output.appendChild(resLine);
        }
        if (cmd === 'resume') {
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