export const siteConfig = {
  name: "Isaac Haire",
  title: "Data Engineer | Software Engineer | BI & Analytics",
  description: "Portfolio website of Isaac Haire",
  accentColor: "#4285F4cd ",
  social: {
    email: "isaachaire@protonmail.com",
    linkedin: "https://www.linkedin.com/in/isaac-haire",
    github: "https://github.com/IsaacOnKeys",
  },
  aboutMe:
    "GCP-certified data engineer (IBM DevOps & Software Engineering; Google Business Intelligence). Co-founded a two-person card-game publisher—owned web, ops, and design; launched on Amazon. Classically trained pianist: precision, iteration, work-ethic, performance under pressure. Alaska-born, Germany-based.",
  skills: [
    "Python",
    "SQL",
    "JavaScript",
    "Bash",
    "Apache Beam",
    "GCP",
    "ETL/ELT",
    "Streaming Data",
    "Data Modeling",
    "Tableau",
    "Git",
    "TDD",
  ],
  projects: [
    {
      name: "Swiss Cocoa Prices Streaming & Forecasting (GCP)",
      description:
        "End-to-end data engineering pipeline on Google Cloud: live cocoa, oil, and weather data ingested daily via web scraping and API calls, published to Pub/Sub topics with Avro schemas through Cloud Functions; raw feeds cleaned, validated, and transformed extensively with Dataflow (Apache Beam) into BigQuery staging tables; orchestration and scheduling managed cost-efficiently on a self-hosted Airflow VM (Docker Compose, Secret Manager, IAM roles); feature engineering automated in BigQuery SQL stored procedures; predictive models trained and evaluated with BigQuery ML; forecasts and KPIs delivered through a Looker Studio dashboard; version-controlled with GitHub and monitored via Cloud Logging/Ops Agent.",
      link: "/devportfolio/projects/cocoa-pipeline/",
      skills: [
        "Python",
        "SQL",
        "Bash",
        "GCP",
        "BigQuery",
        "Pub/Sub",
        "Dataflow",
        "Cloud Functions",
        "Apache Beam",
        "Apache Airflow",
        "BigQuery ML",
        "Looker Studio",
        "Docker",
        "Cloud Scheduler",
      ],
      dashboardUrl:
        "https://lookerstudio.google.com/embed/reporting/0458444b-cbb3-4adf-afad-6e9b2ebb93ff/page/BGEqE",
    },
  ],
  experience: [
    {
      company: "GRAMMARGON",
      website: ["https://grammargon.de"],
      title: "Co-founder · Software Developer · Technical Operations",
      dateRange: "2017 - Present",
      bullets: [
        "Currently developing the GRAMMARGON mobile application in Unity and C#, including game logic, UI systems, data-driven card architecture, asset integration, responsive layouts, and Android device support.",
        "Built and maintain the company’s customer-facing web presence and e-commerce infrastructure, including hosting, domain configuration, SSL/TLS, databases, caching, image optimization, and third-party service integrations.",
        "Implemented technical SEO and performance improvements using structured data, metadata, Core Web Vitals analysis, page optimization, and search-performance monitoring.",
        "Developed and maintain operational workflows connecting the website, online sales channels, reporting systems, product data, and internal content-management processes.",
        "Manage live production systems, including deployments, updates, troubleshooting, integration maintenance, backups, and infrastructure changes.",
        "Built and maintained technical components supporting Amazon and direct e-commerce operations, including product data, storefront configuration, inventory workflows, and reporting.",
        "Created and maintained digital and production assets using structured Adobe InDesign workflows, reusable templates, preflight validation, color-management standards, and print-ready PDF output."
      ],
    },
  ],
  education: [
    {
      school: "MIT OpenCourseWare",
      degree: "Introduction to Computer Science and Programming",
      dateRange: "Jan 2026",
      achievements: [
        "MIT-6.100L Introduction to Computer Science and Programming in Python",
      ],
    },
        {
      school: "MITx",
      degree: "Probability - The Science of Uncertainty and Data",
      dateRange: "Sep 2025",
      achievements: [
        "6.431x — Statistical modeling, estimation, hypothesis testing, confidence intervals, regression, and statistical inference",
      ],
    },
    {
      school: "IBM",
      degree: "DevOps and Software Engineering — Professional Certificate",
      dateRange: "Dec 2024",
      achievements: [
        "15-course program, Agile & Scrum, Git/GitHub, Linux shell scripting, Python & Flask apps, Microservices & Serverless, Containers (Docker/Kubernetes/OpenShift), CI/CD pipelines, TDD & BDD, App security, Monitoring & observability, DevOps capstone",
      ],
    },
    {
      school: "Google Cloud",
      degree: "Professional Data Engineer Certification",
      dateRange: "Jul 2024",
      achievements: [
        "BigQuery (SQL, partitioning, clustering), Dataflow with Apache Beam (batch + streaming, windowing, stateful processing, exactly-once), Pub/Sub (event ingestion), Dataproc (Spark/Hadoop migration), Cloud Storage (data lake design), Bigtable (wide-column NoSQL), Spanner & Cloud SQL/AlloyDB (relational at scale), Datastream & Database Migration Service (CDC/replication), Data Fusion & Cloud Composer (orchestration/integration), Dataplex & Data Catalog (governance, lineage, metadata), Looker & BigQuery ML/Vertex AI AutoML (analytics & ML operationalization), IAM-based security & governance, Monitoring/Logging & alerting, cost optimization & quotas, reliability patterns (backfills, SLAs)",
      ],
    },
    {
      school: "Google (Coursera)",
      degree: "Business Intelligence — Professional Certificate",
      dateRange: "Feb 2024",
      achievements: [
        "BI foundations, Data modeling, Data visualization, Dashboarding & reporting, Portfolio projects",
      ],
    },
    {
      school: "DataCamp",
      degree: "Python Developer Certificate",
      dateRange: "Sep 2023",
      achievements: [
        "71 hours, Testing code, Version control, Web scraping, Package development, Core Python & OOP",
      ],
    },
    {
      school: "DataCamp",
      degree: "Associate Data Engineer Certification",
      dateRange: "Aug 2023",
      achievements: [
        "Passed 2 timed exams + 1 practical, SQL & data management theory, ETL/ELT & joins/aggregations, Data quality & validation, Cloud tools for pipelines, Communicate with visuals",
      ],
    },
    {
      school: "Cornish College of the Arts",
      degree: "Bachelor of Music 🎹",
      dateRange: "May 2006",
      achievements: ["Piano Performance"],
    },
  ],
};
