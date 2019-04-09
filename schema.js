const { merge } = require('lodash');
const expressGraphql = require('express-graphql');
const { makeExecutableSchema } = require('graphql-tools');

const Course = require('./schema/course');

exports.schema = makeExecutableSchema({
    typeDefs: [Course.typeDef],
    resolvers: merge(Course.resolvers)
});

