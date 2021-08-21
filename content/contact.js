import { faGitlab } from '@fortawesome/free-brands-svg-icons/faGitlab';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';

const data = [
  {
    link: 'https://github.com/eschanet',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://gitlab.com/eschanet',
    label: 'GitLab',
    icon: faGitlab,
  },

  {
    link: 'https://www.linkedin.com/in/eschanet',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://twitter.com/eschanet',
    label: 'Twitter',
    icon: faTwitter,
  },
  {
    link: 'mailto:eric.schanet@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
