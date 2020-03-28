export type Job = {
  company: string,
  role: string,
  location: string,
  time: string,
  points: string[],
};

export type Project = {
  title: string,
  githubURL: Link,
  points: string[],
}

export type Education = {
  school: string,
  degree: string,
  gradDate: string,
}

export type SkillList = {
  title: string,
  skills: string[],
}

export type Link = {
  label: string,
  href: string,
  icon: string,
  key?: number,
};

export type List = {
  points: string[],
}

export type Section = {
  title: string,
  sectionType: string,
  subsections: (Job | Education | Project | SkillList | List)[],
};

export type Content = {

  header: {
    name: string,
    links: Link[],
  },
  body: {
    columns: Section[][],
  },
}
