import * as React from 'react';

import { Link as LinkType } from '../models/models';

import Link from './general/Link';

type PageProps = {
  title: string,
  links: LinkType[],
  children: React.ReactNodeArray,
};

const Page: React.FC<PageProps> = (props) => {

  return (
    <div className="page">
      <div className="header">
        <h1>{props.title}</h1>
        <ul>
          {props.links.map((link, index) => (<Link key={index} {...link}/>))}
        </ul>
      </div>
      <div className="content">
        {props.children}
      </div>
    </div>
  );
};

export default Page;
