import axios from "axios";

const API_URL = `${process.env.API_ROOT}`;

const client = axios.create({
  baseURL: API_URL
});

const private_client = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" }
});

const private_client_upload = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "multipart/form-data" },
  withCredentials: true
});

if (typeof window !== "undefined") {
  let token;
  try {
    token = JSON.parse(
      JSON.parse(window.localStorage.getItem("persist:P&FProject")).login
    ).token;
  } catch {
    token = null;
  }

  private_client.interceptors.request.use(config => {
    return (config.headers.Authorization = `Bearer ${token}`);
  });

  private_client_upload.interceptors.request.use(config => {
    return (config.headers.Authorization = `Bearer ${token}`);
  });
}

export { client, private_client, private_client_upload };

export * from "./data";
