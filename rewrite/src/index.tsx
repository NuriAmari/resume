import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { content } from '../content';

import Page from './components/Page';
import Section from './components/general/Section';

const generateSections = (sections: SectionType[]) => {
  const result: Section[] = [];

  for (const section in sections) {

  }
};

const Resume = (
  <Page {...content.header}>
    {
      content.body.map((column, index) => generateSections()
    }
  </Page>
);

ReactDOM.render(Resume, document.getElementById('react-root'));
