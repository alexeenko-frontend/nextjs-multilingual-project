import { client } from "./API";

export const getData = () =>
  client.get("constructor").then(response => response.data);
