import * as React from 'react';

type ListProps = {
  points: string[];
};

const List: React.FC<ListProps> = (props) => (
  <ul className="list">
    {props.points.map((point, index) => (
      <li key={index}>
        <span className="bullet">=></span>
        {point}
      </li>
    ))}
  </ul>
);

export default List;
