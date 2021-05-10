// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Javascript',
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Node.JS',
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'React',
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Bash',
    category: ['Tools', 'Languages'],
  },
  {
    title: 'C++',
    category: ['Languages'],
  },
  {
    title: 'Objective-C',
    category: ['Languages'],
  },
  {
    title: 'Swift',
    category: ['Languages'],
  },
  {
    title: 'Amazon Web Services',
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'MongoDB',
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'ElasticSearch',
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'InfluxDB',
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'SQL/SQLite',
    category: ['Web Development', 'Databases', 'Languages'],
  },
  {
    title: 'Data Mining',
    category: ['Data Science'],
  },
  {
    title: 'Git',
    category: ['Tools'],
  },
  {
    title: 'Subversion',
    category: ['Tools'],
  },
  {
    title: 'Numpy',
    category: ['Data Science', 'Data Engineering', 'Python'],
  },
  {
    title: 'Tensorflow + Keras',
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Jupyter',
    category: ['Data Science', 'Python'],
  },
  {
    title: 'HTML + (S)CSS',
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Python',
    category: ['Languages', 'Python'],
  },
  {
    title: 'MATLAB',
    category: ['Languages'],
  },
  {
    title: 'R',
    category: ['Languages'],
  },
  {
    title: 'Data Visualization',
    category: ['Data Science', 'Javascript'],
  },
  {
    title: 'Pandas',
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'Matplotlib',
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'Scikit-Learn',
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'Scikit-HEP',
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'SciPy',
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'Mypy',
    category: ['Python'],
  },
  {
    title: 'Pylint',
    category: ['Data Engineering', 'Python'],
  },
  {
    title: 'TeX',
    category: ['Tools', 'Languages'],
  },
  {
    title: 'Docker',
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'OpenShift',
    category: ['Web Development', 'Tools'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
