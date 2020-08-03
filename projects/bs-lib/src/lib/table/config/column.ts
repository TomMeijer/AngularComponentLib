export interface Column {

  name?: string;
  data: string | ((obj: any, td?: HTMLElement) => any);
}
