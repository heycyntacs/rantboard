export interface Rant {
  id: string;
  created_at: Date;
  title: string;
  content: string;
}

export interface RantPagination {
  page: number;
  limit: number;
  count: number;
  hasNextPage: boolean;
}
