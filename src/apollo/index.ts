import ApolloClient, { InMemoryCache } from 'apollo-boost';

// Connects to the GraphQL Server for further querying and mutations
const apolloClient = new ApolloClient({
  uri: 'https://fitkit-backend.herokuapp.com/graphql',
  cache: new InMemoryCache(),
})

export default apolloClient;
