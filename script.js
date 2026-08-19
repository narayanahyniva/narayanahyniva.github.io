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

  // Interactive 3D Technology Sphere (Canvas 3D Engine)
  initTechSphere();

  // Skills Category Filter
  initSkillsFilter();

  // Flagship Feature: Interactive Architecture Explorer
  initArchitectureExplorer();

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
    'Designing Scalable Multi-Cloud Architectures (AWS • Azure • GCP)',
    'Automating Zero-Downtime GitOps & CI/CD Pipelines',
    'Kubernetes Cluster Orchestration & Microservices',
    'Infrastructure as Code with Terraform & Ansible',
    'DevSecOps Hardening & 35%+ Cloud Cost Optimization'
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
  const particleCount = 140;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const velocities = [];

  for (let i = 0; i < particleCount * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 160;
    positions[i + 1] = (Math.random() - 0.5) * 120;
    positions[i + 2] = (Math.random() - 0.5) * 80;

    velocities.push({
      x: (Math.random() - 0.5) * 0.12,
      y: (Math.random() - 0.5) * 0.12,
      z: (Math.random() - 0.5) * 0.08
    });
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  // Particle Material
  const pMaterial = new THREE.PointsMaterial({
    color: 0x00f0ff,
    size: 2.2,
    transparent: true,
    opacity: 0.85,
    blending: THREE.AdditiveBlending
  });

  const particleSystem = new THREE.Points(geometry, pMaterial);
  scene.add(particleSystem);

  // Line Mesh for Dynamic Network Connections
  const lineMaterial = new THREE.LineBasicMaterial({
    color: 0x0ea5e9,
    transparent: true,
    opacity: 0.18,
    blending: THREE.AdditiveBlending
  });

  let lineGeometry = new THREE.BufferGeometry();
  let lineMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
  scene.add(lineMesh);

  // Floating 3D Geometric Cloud Nodes (representing cloud servers)
  const cubeGeo = new THREE.IcosahedronGeometry(2.5, 0);
  const cubeMat = new THREE.MeshBasicMaterial({
    color: 0x00f0ff,
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
    { text: 'DevSecOps', color: '#f43f5e', size: 14 }
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
   Flagship Feature: Interactive Cloud Architecture Playground
   ========================================================================== */
const architectureData = {
  'aws-3tier': {
    title: 'AWS 3-Tier Enterprise Web Application Architecture',
    budget: '$250 – $500',
    nodes: [
      {
        id: 'node-user',
        icon: 'users',
        title: 'Global Clients',
        desc: 'HTTPS Requests',
        badge: 'TLS 1.3',
        infoTitle: 'Global Client Traffic',
        infoDesc: 'End users accessing the web application through secure HTTPS protocol with global Anycast routing.',
        specs: [
          'Protocol: TLS 1.3 / HTTP/2',
          'Routing: Global Anycast DNS via Route 53',
          'DDOS Protection: AWS Shield Standard'
        ],
        codeFile: 'route53_routing.tf',
        code: `resource "aws_route53_record" "app_apex" {
  zone_id = aws_route53_zone.primary.zone_id
  name    = "narayana.dev"
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.cdn.domain_name
    zone_id                = aws_cloudfront_distribution.cdn.hosted_zone_id
    evaluate_target_health = true
  }
}`
      },
      {
        id: 'node-cdn',
        icon: 'cloud',
        title: 'CloudFront & WAF',
        desc: 'Edge CDN & Security',
        badge: 'Edge Caching',
        infoTitle: 'Amazon CloudFront & AWS WAF',
        infoDesc: 'Edge caching layer providing sub-20ms asset delivery and managed web application firewall protection against SQLi and XSS attacks.',
        specs: [
          'Edge Locations: 400+ PoPs globally',
          'Security: AWS WAF Managed Core Rule Set',
          'Origin Shield: Enabled with strict SSL origin policy'
        ],
        codeFile: 'cloudfront_waf.tf',
        code: `resource "aws_cloudfront_distribution" "cdn" {
  origin {
    domain_name = aws_lb.main_alb.dns_name
    origin_id   = "ALB-Origin"

    custom_origin_config {
      http_port              = 80
      https_port             = 443
      origin_protocol_policy = "https-only"
      origin_ssl_protocols   = ["TLSv1.2"]
    }
  }

  web_acl_id = aws_wafv2_web_acl.main_waf.arn
  enabled    = true
}`
      },
      {
        id: 'node-alb',
        icon: 'network',
        title: 'Application Load Balancer',
        desc: 'Multi-AZ Layer 7',
        badge: 'High-Throughput',
        infoTitle: 'Application Load Balancer (ALB)',
        infoDesc: 'Distributes incoming traffic across redundant Amazon ECS container tasks in private subnets across 3 Availability Zones.',
        specs: [
          'Health Checks: /healthz every 15s with auto-deregistration',
          'Target Group: Dynamic port mapping to ECS Fargate',
          'Security: Private VPC peering & SG ingress'
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
        title: 'ECS / EC2 Private Subnets',
        desc: 'Auto-Scaling Microservices',
        badge: 'Auto-Healing',
        infoTitle: 'Amazon ECS Fargate / EC2 Container Cluster',
        infoDesc: 'Stateless application containers deployed in isolated private subnets with auto-scaling policies based on CPU/memory utilization.',
        specs: [
          'Isolation: Zero public IPs, outbound via NAT Gateways',
          'Scaling: Target tracking policy (CPU @ 65%)',
          'Deploy Strategy: Blue/Green rolling zero-downtime'
        ],
        codeFile: 'ecs_fargate.tf',
        code: `resource "aws_ecs_service" "app_service" {
  name            = "finxserve-core"
  cluster         = aws_ecs_cluster.main.id
  task_definition = aws_ecs_task_definition.app.arn
  desired_count   = 4
  launch_type     = "FARGATE"

  network_configuration {
    subnets         = module.vpc.private_subnets
    security_groups = [aws_security_group.ecs_sg.id]
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
  <span class="term-cmd">about</span>          - Bio and cloud background
  <span class="term-cmd">skills</span>         - Technical skills and tools matrix
  <span class="term-cmd">architecture</span>   - Cloud architecture overview
  <span class="term-cmd">projects</span>       - Production projects & case studies
  <span class="term-cmd">hire</span>           - Freelance consultation & pricing options
  <span class="term-cmd">resume</span>         - Summary ATS resume & contact
  <span class="term-cmd">contact</span>        - Direct email, phone, and WhatsApp
  <span class="term-cmd">neofetch</span>       - System specs HUD banner
  <span class="term-cmd">matrix</span>         - Simulated cyber matrix stream
  <span class="term-cmd">clear</span>          - Clear terminal output
    `,
    about: () => `
<span class="term-info">Narayana Kanaka</span> - Principal Cloud & DevOps Architect at HYNIVA LLC.
4+ years designing high-availability infrastructure on AWS, Azure, and GCP.
Specializing in Kubernetes orchestration, Terraform Infrastructure as Code, and GitOps CI/CD.
    `,
    skills: () => `
<span class="term-cmd">Cloud:</span> AWS (ECS, EKS, RDS, VPC, Lambda, S3, Route53), Azure, GCP
<span class="term-cmd">Containers:</span> Docker, Kubernetes, Helm, Istio Service Mesh
<span class="term-cmd">IaC & OS:</span> Terraform, Terragrunt, Ansible, Linux, Nginx
<span class="term-cmd">CI/CD:</span> GitHub Actions, AWS CodePipeline, Jenkins, ArgoCD
<span class="term-cmd">Monitoring:</span> Prometheus, Grafana, AWS CloudWatch, Datadog
<span class="term-cmd">Languages:</span> Python, Bash, YAML, SQL
    `,
    projects: () => `
1. <span class="term-info">FinXServe Cloud Infrastructure:</span> AWS ECS Docker deployment with ALB, ECR, SSL, and CloudWatch.
2. <span class="term-info">Drive30 Command Center:</span> Distributed Kubernetes microservices with Redis caching.
3. <span class="term-info">Hyniva Multi-Tenant IaC:</span> Modular Terraform multi-environment infrastructure.
4. <span class="term-info">Zero-Downtime CI/CD:</span> AWS CodePipeline & Jenkins with blue/green deployment.
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