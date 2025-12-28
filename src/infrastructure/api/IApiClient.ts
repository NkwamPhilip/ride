export interface IApiClient {
  get<T = any>(endpoint: string): Promise<T>
  post<T = any>(endpoint: string, data?: any): Promise<T>
  patch<T = any>(endpoint: string, data?: any): Promise<T>
  put<T = any>(endpoint: string, data?: any): Promise<T>
  delete<T = any>(endpoint: string): Promise<T>
}

