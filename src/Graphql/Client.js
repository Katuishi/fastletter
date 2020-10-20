import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: String(process.env.REACT_APP_URL_SERVER),
  cache: new InMemoryCache(),
});
