import * as React from 'react';

import { Link as LinkType } from '../../models/models';

const Link: React.FC<LinkType> = (props) => (
  <a href={props.href}><i className={props.icon}/>{props.label}</a>
);

export default Link;
