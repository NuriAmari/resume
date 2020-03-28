import * as React from 'react';

import Section from './general/Section';


export const generateSections = (sections) => {

  const result: Section[] = []

  for (const section in sections) {
    result.push(
      <Section title={section.title}>

      </Section>
    );
  }
};

