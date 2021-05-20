import morse from '../images/projects/morse.png';
import ticket from '../images/projects/ticket.png';

const projects = [
  {
    id: 0,
    strName: 'Morse Code Translator',
    strImg: morse,
    strBlurb: 'A simple morse code translator using vanilla Javascript',
    strPages: 'https://joe-fol.github.io/morse-code-translator/',
    strCode: 'https://github.com/joe-fol/morse-code-translator',
  },
  {
    id: 1,
    strName: 'Ticket Tracker',
    strImg: ticket,
    strBlurb:
      'React built ticket tracker using a data sorce to dynamicaly render content',
    strPages: 'https://joe-fol.github.io/ticket-tracker/',
    strCode: 'https://github.com/joe-fol/ticket-tracker',
  },
];

export default projects;