import * as React from 'react';

import { SkillList as SkillListType } from '../models/models';

const SkillList: React.FC<SkillListType> = (props) => (
  <div className="skill-list">
    <h4>{props.title}</h4>
    <div>
      {props.skills.map((skill, index) => (
        <div key={index} className="skill-item">
          {skill}
        </div>
      ))}
    </div>
  </div>
);

export default SkillList;
