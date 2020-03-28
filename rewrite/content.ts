import { Content } from './src/models/models';

export const content: Content = {
  header: {
    name: 'Nuri Amari',
    links: [
      {
        label: '',
        href: '',
        icon: '',
      },
    ],
  },
  body: {
    columns: [
      [
        {
          title: 'Experience',
          sectionType: 'Experience',
          subsections: [
            {
              company: 'A Thinking Ape',
              location: 'Vancouver',
              role: 'Software Engineer',
              time: 'Jan => April 2020',
              points: ['Wrote Redis wrapper and Django middleware to gather per request Redis latency stats'],
            },
            {
              company: 'Splunk Inc',
              location: 'San Jose / San Francisco',
              role: 'Software Engineer',
              time: 'May => August 2019',
              points: [
                'Created a patent pending JSON viewer capable of smoothly rendering, searching and manipulating JSON files 10x large than competitors',
                'Using virtualization, web workers, memoization and careful use of the event loop, achieved performance simply not offered by currently available browser based alternatives',
                'Produced animated, reusable and interactive data visualization components with SVG, d3.js and React',
              ],
            },
            {
              company: 'York Region',
              location: 'Toronto',
              role: 'Software Developer',
              time: 'April => August 2018',
              points: [
                'Developed an internal communication tool with Node, Express and the Handlebars templating engine',
              ],
            },
          ],
        },
        {
          title: 'Education',
          sectionType: 'Education',
          subsections: [
            {
              school: 'University of Waterloo',
              degree: 'Candidate for Bachelors of Computer Science',
              gradDate: 'Grad: 04/2022',
            },
          ],
        },
        {
          title: 'Interest & Activities',
          sectionType: 'List',
          subsections: [
            {
              points: [
                'Static analysis tool implementation',
                'Computer networking + browser implementation',
                'Vim, Tmux + standard unix tools',
              ],
            },
          ],
        },
      ],
      [
        {
          title: 'Skills',
          sectionType: 'Skills',
          subsections: [
            {
              title: 'Languages',
              skills: ['Python', 'JavaScript', 'C++', 'C', 'Bash'],
            },
            {
              title: 'Libraries',
              skills: ['Typescript', 'React', 'Django', 'd3', 'Sass'],
            },
            {
              title: 'Technologies',
              skills: ['Python', 'JavaScript', 'C++', 'C', 'Bash'],
            },
          ],
        },
        {
          title: 'Projects',
          sectionType: 'Projects',
          subsections: [
            {
              title: 'JSON Formatter & Linter',
              githubURL: {
                href: 'https://github.com/NuriAmari/json-pretty-print',
                label: 'github repo',
                icon: 'fa fa-github',
              },
              points: [
                'Implemented in Python, tokenizes chosen JSON file using a deterministic finite automaton and maximal munch algorithm',
                'Prases and validates the file using a context free grammar and a top down parsing strategy',
              ],
            },
            {
              title: 'Personal Website',
              githubURL: {
                href: 'https://github.com/NuriAmari/react-personal-website',
                label: 'github repo',
                icon: 'fa fa-github',
              },
              points: [
                'Created a terminal emulator allowing hte user to navigate the entire site through text commands',
                'Populated site from a single JSON file for efficient content management',
                'Produced interactive SVG graphcs, CSS animations and a responsive design',
                'Implemented using React, SASS, Adobe Illustrator and Sketch',
              ],
            },
            {
              title: 'C++ Multiplayer Tetris',
              githubURL: { href: '', label: 'private repo', icon: 'fa fa-github' },
              points: [
                'Implemented text-commmand autocompletion with a trie and flexible block rotation using linear algebra',
                'Modified object behavior at runtime using a doubly-linked list based implementation of the decorator pattern',
              ],
            },
            {
              title: 'JavaScript Chess AI',
              githubURL: { href: 'https://github.com/NuriAmari/chess-ai', label: 'github repo', icon: 'fa fa-github' },
              points: [
                'Determines next move by evaluating possible scenarios a variable number of moves into the future',
                'Uses a minimax tree with alpha-beta pruning and a hash-map based board state representation',
              ],
            },
          ],
        },
      ],
    ],
  },
};
