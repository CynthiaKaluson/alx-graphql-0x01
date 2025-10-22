import { ApolloClient, InMemoryCache, HttpLink, ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";

const client = new ApolloClient({
  // Use HttpLink explicitly so Apollo's runtime checks are satisfied
  link: new HttpLink({
    uri: "https://rickandmortyapi.com/graphql",
  }),
  cache: new InMemoryCache(),
  // optional: ssrMode if you want to optimize for SSR detection
  // ssrMode: typeof window === "undefined",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}