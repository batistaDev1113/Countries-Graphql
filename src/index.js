import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink
} from "@apollo/client";

import App from "./App";

const link = new HttpLink({ uri: "https://countries.trevorblades.com" });

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
});

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
