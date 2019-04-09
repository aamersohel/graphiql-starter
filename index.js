const express = require('express');;
const {schema} = require("./schema");
var expressGraphql = require('express-graphql');

var app = express();

// Create an express server and a GraphQL endpoint
app.use('/graphql', expressGraphql({
    schema: schema,
    graphiql: true
}));


app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));
