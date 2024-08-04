const positions = [
  {
    company: 'UBS Switzerland AG',
    position: 'Senior Software Engineer',
    link: 'https://www.ubs.com/',
    startDate: 'October 2021',
    highlights: [
      'Technical lead for the migration of a business-owned risk and portfolio management platform into Azure Cloud.',
      'Improved service scalability and uptime by migrating monolithic python application to microservice-based, API-first architecture using cloud-native resources like Kubernetes.',
      'Significant business risk reduction by reducing the portfolio data pipeline lag from 3 to 1 business days through implementation of a data feed from the central mainframe.',
      'Increase allocation and pledge structure transparency through bespoke network-based asset allocation algorithm.',
      'Improvements to team efficiency, time to market and SLA through introduction of comprehensive CI/CD pipelines for all projects.',
    ],
  },
  {
    company: 'Ludwig-Maximilians-University Munich',
    position: 'Research Fellow',
    link: 'https://www.etp.physik.uni-muenchen.de',
    startDate: 'November 2018',
    endDate: 'September 2021',
    highlights: [
      'Analysis of petabyte-scale data recorded with the ATLAS experiment at the Large Hadron Collider at CERN.',
      'Performed exploratory data analysis, identifying relevant predictors and classifiers, relying on high-dimensional hyperparameter optimizations. Investigated feature engineering using neural nets and boosted decision trees',
      'Developed method for approximating statistical models using PCA, enabling up to 250x faster MLE-based statistical inference. Used in large-scale interpretations to deliver actionable insights into ongoing search program of the experimental collaboration.',
      'Developed containerized workflows using parameterized job templates for scalable data analysis as a service',
      'Implemented low-latency grid computing monitoring and anomaly detection',
    ],
  }, {
    company: 'Weabe',
    position: 'Software Engineer, Consultant',
    link: 'https://weabe.lu',
    startDate: 'March 2016',
    endDate: 'October 2018',
    highlights: [
      'Frontend and backend development of a digital marketplace platform for iOS.',
      'The application I developed was crucial for securing the venture capital needed for founding the start-up and expanding onto other platforms.',
      'Frontend built with Swift, backend with JavaScript. Databases used were MongoDB and PostgreSQL.',
      'Co-founded the start-up Weabe S.A, reached 100k unique users in the first year of operation.',
    ],
  }, {
    company: 'Codelight',
    position: 'Software Engineer, Consultant (self-employed)',
    link: '',
    startDate: 'March 2014',
    endDate: 'October 2018',
    highlights: [
      'Developed various iOS applications and offered consulting services in IT-related business problems.',
      'Implemented and deployed a real-time chat app in Objective-C using Firebase database.',
      'Developed and launched a social networking app marketed for Luxembourg.',
      'Implemented software solution allowing client to meet financial audit deadline.',
    ],
  }, {
    company: 'Ludwig-Maximilians-University Munich',
    position: 'Teaching Assistant',
    link: 'https://www.physik.uni-muenchen.de',
    startDate: 'April 2015',
    endDate: 'July 2018',
    highlights: [
      'Teaching assistant for practical course in physics for about 800 medical students.',
      'Assisting students with assignments and general inquiries.',
      'Supervision of students during practical course.',
      'Organization and grading of final exams.',
    ],
  }, {
    company: 'Dealis Fund Operations (now State Street)',
    position: 'Analyst Intern',
    link: 'https://www.statestreet.com/about/office-locations/luxembourg.html',
    startDate: 'July 2015',
    endDate: 'September 2015',
    highlights: [
      'Identified and implemented improvements to key processes for internal accounting and reporting processes.',
      'Implemented analysis and reporting pipeline, crucial in allowing Fund Operations Division to meet deadline for financial audit by regulatory agency.',
    ],
  }, {
    company: 'UBS Luxembourg',
    position: 'Analyst Intern',
    link: 'https://www.ubs.com/lu/en.html',
    startDate: 'June 2013',
    endDate: 'September 2013',
    highlights: [
      'Developed packages for analysis and reporting of financial statements using Excel VBA and internal databases.',
      'Assisted in creation of ad-hoc, monthly and quarterly financial reports, including customization for various analytical and presentation needs.',
    ],
  },
];

export default positions;
