import React from "react";
import { InMemoryCache } from "apollo-cache-inmemory";
import ApolloBoost, { gql } from "apollo-boost";
import DataAp from './todoItem'
import { ApolloProvider } from "react-apollo";
import {client} from './client'

class Testing extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
          <DataAp />
      </ApolloProvider>
    );
  }
}

export default Testing;
