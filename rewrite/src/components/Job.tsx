import * as React from 'react';

import List from './general/List';
import { Job as JobType } from '../models/models';

const Job: React.FC<JobType> = (props) => (
  <React.Fragment>
    <div className="job-header">
      <div>
        <h3>{props.company}</h3>
        <p>{props.location}</p>
      </div>
      <div>
        <p>{props.role}</p>
        <p>{props.time}</p>
      </div>
    </div>
    <List points={props.points}/>
  </React.Fragment>
);

export default Job;
