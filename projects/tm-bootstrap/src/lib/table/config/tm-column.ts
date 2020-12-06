export interface TmColumn {
  name?: string;
  data: string | ((obj: any) => any);
}
