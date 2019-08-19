import ApolloBoost from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";

const cache = new InMemoryCache({
    dataIdFromObject: object => object.id || null
  });
  
export const client = new ApolloBoost({
    cache,
    uri: "https://apollo-graphql-todo.glitch.me/graphql"
  });
  