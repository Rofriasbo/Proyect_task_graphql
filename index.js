const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const typeDefs = require('./src/schemas/projectSchema');
const resolvers = require('./src/resolvers/projectResolver');

const startServer = async()=>{
await mongoose.connect('mongodb+srv://rofriasbo:cDJ8T7ZrVJDyqSa9@taskgraphql.vnsuj.mongodb.net/?retryWrites=true&w=majority&appName=TaskGraphql')

const server  = new ApolloServer({typeDefs,resolvers});
server.listen().then(({url})=>{

    console.log(`Servidor corriendo en ${url}`);
});
};

startServer();
//