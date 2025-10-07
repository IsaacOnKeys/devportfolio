export const siteConfig = {
  name: "Isaac Haire",
  title: "Data Engineer",
  description: "Portfolio website of Isaac Haire",
  accentColor: "#4285F4cd ",
  social: {
    email: "isaachaire@protonmail.com",
    linkedin: "www.linkedin.com/in/isaac-haire",
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
      link: "/projects/cocoa-pipeline/",
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
      title: "Co-founder · Data/Tech Lead",
      dateRange: "2017 - Present",
      bullets: [
        "Built and maintained website/landing pages (SEO, schema, Core Web Vitals, e-commerce shop); deployed via FTP; managed hosting and SSL/TLS; caching & image optimization.",
        "Owned Amazon Seller Central: ASIN setup, Brand Store",
        "Managed FBA ops: inbound shipments, labeling/cartonization, restock limits, IPI and account health monitoring",
        "Implemented pricing/keyword strategy; ran PPC campaigns and A/B tests tied to conversion KPIs",
        "Produced print-ready cards/packaging in Adobe InDesign; used master pages/styles and dielines; added bleed/crop marks, managed CMYK color profiles; ran preflight; exported PDF/X; coordinated proofs and press checks.",
        "Designed product visuals and dielines; coordinated vendor proofs and production timelines",
        "Optimized product pages for search and conversion (titles, bullets, backend terms, images, video)",
        "Led branding, UX, and asset production across web, Amazon Storefront, and marketing",
      ],
    },
  ],
  education: [
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
      degree: "Bachelor of Music",
      dateRange: "2006",
      achievements: ["🎹"],
    },
  ],
};
