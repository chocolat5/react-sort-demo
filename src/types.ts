export interface Sort {
  key: string;
  order: number | undefined;
}

export interface Movie {
  id: number;
  title: string;
  category: string;
  year: string;
}
