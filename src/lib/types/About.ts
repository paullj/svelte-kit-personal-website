interface Entry {
  title: string;
  subtitle?: string;
  date: string;
  description?: string;
  links?: { [to: string]: string };
}

interface About {
  summary: string;
  sections: {
    [heading: string]: Entry[];
  };
}

export type { About };
