export interface Role {
  readonly title: string;
  readonly start: string;
  readonly end: string | null; // null = current
}

export interface Position {
  readonly org: string;
  readonly location: string;
  readonly href?: string;
  readonly roles: readonly Role[];
  readonly summary: string;
  readonly highlights: readonly string[];
}

export interface Degree {
  readonly year: number;
  readonly degree: string;
  readonly institution: string;
  readonly thesis: string;
  readonly grade: string;
}

export const profile = {
  name: 'Eric Schanet',
  title: 'Senior DevOps Engineer',
  location: 'Zurich, Switzerland',
  timezone: 'Europe/Zurich',
  summary:
    'Senior engineer with 5+ years building scalable, production-ready systems for complex and ' +
    'quantitative problems. I work across cloud infrastructure, distributed systems and platform ' +
    'engineering, and I care about owning things end to end — from architecture through to the ' +
    'pipeline that ships them.',
} as const;

export const links = {
  email: 'eric.schanet@gmail.com',
  github: 'https://github.com/eschanet',
  linkedin: 'https://linkedin.com/in/eschanet',
  scholar: 'https://scholar.google.com',
} as const;

export const positions: readonly Position[] = [
  {
    org: 'Bank Vontobel AG',
    location: 'Zurich, Switzerland',
    href: 'https://www.vontobel.com',
    roles: [{ title: 'Senior DevOps Engineer', start: '2026-07', end: null }],
    summary: 'Platform and delivery engineering for banking systems.',
    highlights: [],
  },
  {
    org: 'UBS Switzerland AG',
    location: 'Zurich, Switzerland',
    href: 'https://www.ubs.com',
    roles: [
      { title: 'Senior Software Engineer', start: '2024-02', end: '2026-06' },
      { title: 'Software Engineer', start: '2021-10', end: '2024-01' },
    ],
    summary:
      'Technical lead for the migration of a global risk and loan portfolio management platform ' +
      'into Azure Cloud.',
    highlights: [
      'Migrated a monolithic on-premises application to a microservice-based, API-first architecture on Azure Kubernetes, improving service scalability and availability.',
      'Designed and productionised the first highly available Kubernetes batch cluster in the organisation, running a wide range of workloads.',
      'Increased coverage, timeliness and availability of instrument market data via a dedicated cloud-based service interfacing with market data providers.',
      'Reduced the portfolio data pipeline lag from 3 business days to 1 by implementing a mainframe data feed.',
      'Cut false-positive rate in loan portfolio risk events by 30% through a bespoke network-based asset allocation algorithm.',
      'Raised team velocity and code health by introducing automated releases, tests, linters and CI/CD pipelines.',
    ],
  },
  {
    org: 'LMU Munich, CERN',
    location: 'Munich, Germany / Geneva, Switzerland',
    href: 'https://www.etp.physik.uni-muenchen.de',
    roles: [{ title: 'Research Fellow, High Energy Physics', start: '2018-11', end: '2021-09' }],
    summary: 'Petabyte-scale statistical data analysis of CERN data using Monte Carlo models.',
    highlights: [
      'Developed a novel method to approximate the statistical models of particle physics analyses, achieving a 250x improvement in CPU performance for statistical inference.',
      'Used in production for large-scale interpretations of 200+ million models, with results published in multiple scientific papers.',
      'Implemented distributed, containerised workflows for scalable Data Analysis as a Service on the CERN Kubernetes cluster.',
      'Built ETL pipelines over raw CERN and WLCG data into InfluxDB time-series and SQL databases, with Grafana dashboards and alerting.',
      'Achieved a 6x latency reduction over the alternative system, used in production by CERN grid computing operations.',
    ],
  },
];

export const education: readonly Degree[] = [
  {
    year: 2021,
    degree: 'Ph.D. Physics',
    institution: 'LMU Munich, CERN',
    thesis: 'Searches for supersymmetry using data recorded at the LHC at CERN.',
    grade: 'Summa cum laude',
  },
  {
    year: 2018,
    degree: 'M.Sc. Physics',
    institution: 'LMU Munich, CERN',
    thesis: 'Multivariate statistical analysis of LHC data leveraging machine learning techniques.',
    grade: 'Very good',
  },
  {
    year: 2016,
    degree: 'B.Sc. Physics',
    institution: 'LMU Munich, LFU Innsbruck',
    thesis: 'Optimization studies on the search for gluinos and squarks.',
    grade: 'Good',
  },
];

export const skills: readonly { readonly group: string; readonly items: readonly string[] }[] = [
  {
    group: 'Languages',
    items: ['Python', 'TypeScript', 'Go', 'Rust', 'C/C++', 'Java', 'Shell'],
  },
  {
    group: 'Cloud & Platform',
    items: ['Azure', 'AWS', 'Kubernetes', 'Docker', 'Terraform', 'Bicep', 'OpenShift'],
  },
  {
    group: 'Data',
    items: ['SQL Server', 'PostgreSQL', 'InfluxDB', 'MongoDB', 'Elasticsearch', 'Databricks'],
  },
  {
    group: 'ML & Analysis',
    items: ['NumPy', 'Pandas', 'PyTorch', 'scikit-learn', 'Dask', 'FastAPI'],
  },
  {
    group: 'Observability',
    items: ['Grafana', 'Prometheus', 'CI/CD', 'GitHub Actions'],
  },
];

export const spokenLanguages = [
  { language: 'Luxembourgish', level: 'Native' },
  { language: 'English', level: 'Fluent' },
  { language: 'German', level: 'Fluent' },
  { language: 'French', level: 'Fluent' },
] as const;
