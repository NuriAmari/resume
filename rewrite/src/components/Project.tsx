import * as React from 'react';

import List from './general/List';
import { Project as ProjectType } from '../models/models';

const Project: React.FC<ProjectType> = (props) => (
  <React.Fragment>
    <div className="project-header">
        <h3>{props.title}</h3>
        <p><i className="fa fa-github"/><a href={props.githubURL}>github repo</a></p>
    </div>
    <List points={props.points}/>
  </React.Fragment>
);

export default Project;
