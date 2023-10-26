export interface Response<T> {
  data: T;
  error: boolean;
  status: number;
  message?: string;
}
