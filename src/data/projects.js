import morse from '../images/projects/morseRounded.png';
import ticket from '../images/projects/ticket2.png';
import calculator from '../images/projects/calculator.png';
import snake from '../images/projects/snake.png';

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
  {
    id: 2,
    strName: 'Calculator',
    strImg: calculator,
    strBlurb:
      'A super simple Js calculator',
    strPages: 'https://joe-fol.github.io/Calculator/',
    strCode: 'https://github.com/joe-fol/Calculator',
  },
  {
    id: 3,
    strName: 'Snake',
    strImg: snake,
    strBlurb:
      'Simple Snake clone that was built in a week',
    strPages: 'https://joe-fol.github.io/Snake/',
    strCode: 'https://github.com/joe-fol/Snake',
  } 
];

export default projects;
