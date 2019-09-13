import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import Profile from "./Profile";

const client = new ApolloClient({
  uri: "https://www.graphqlhub.com/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Profile />
    </ApolloProvider>
  );
}

export default App;
