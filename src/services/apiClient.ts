import axios from "axios";

const apiKey = process.env.REACT_APP_GHL_API_KEY;

const axiosInstance = axios.create({
  baseURL: "https://rest.gohighlevel.com",
  headers: { Authorization: `Bearer ${apiKey}` },
});

export interface ApiResponse<T> {
  [key: string]: T[];
}

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = () => {
    return axiosInstance
      .get<ApiResponse<T>>(this.endpoint)
      .then((res) => res.data);
  };

  post = (data: T) => {
    return axiosInstance.post<T>(this.endpoint, data).then((res) => res.data);
  };

  patch = (id: number, updates: Partial<T>) => {
    return axiosInstance
      .patch<T>(`${this.endpoint}/${id}`, updates)
      .then((res) => res.data);
  };

  delete = (id: number) => {
    return axiosInstance
      .delete(`${this.endpoint}/${id}`)
      .then((res) => res.data);
  };
}

export default APIClient;
