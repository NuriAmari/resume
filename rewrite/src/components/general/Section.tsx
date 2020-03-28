import * as React from 'react';

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

const Section: React.FC<SectionProps> = (props) => {
  return (
    <div className="section">
      <h2>{props.title}</h2>
      {props.children}
    </div>
  );
};

export default Section;
