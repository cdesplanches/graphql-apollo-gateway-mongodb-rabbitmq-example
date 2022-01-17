const { ApolloServer } = require ('apollo-server');
const { ApolloGateway } = require ('@apollo/gateway');
const { PORT, environment } = require ('./app-config.js');

const env = process.env.NODE_ENV || "development";


const srvList = environment[env].dbServiceURLs.map( (it) => {
  console.log(`GraphQL Gateway will listen to service: ${it.name} on ${it.url}`)
  return { name: it.name, url: it.url }
});

const gateway = new ApolloGateway({
  serviceList: srvList,
});

const server = new ApolloServer({ gateway, subscriptions: false });

server.listen({ port: PORT })
  .then(({ url }) => {
      console.log(`GraphQL Gateway (Apollo Gateway) service ready at url: ${url}`);
  });