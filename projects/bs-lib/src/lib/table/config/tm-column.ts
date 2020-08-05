export interface TmColumn {

  name?: string;
  data: string | ((obj: any, td?: HTMLElement) => any);
}
