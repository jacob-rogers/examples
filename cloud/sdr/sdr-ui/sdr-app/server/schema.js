// const GraphQLSchema = require('graphql').GraphQLSchema;
const makeExecutableSchema = require('graphql-tools').makeExecutableSchema;

const resolvers = require('./resolvers-node-postgres').resolvers;
// console.log('my resolver object:'); console.log(resolvers);

/* Define the graphql queries supported. Examples of queries to the svr:
    query { nouns {noun sentiment numberofmentions timeupdated } }
    query { noun(noun: "trump") { noun sentiment numberofmentions timeupdated } }
*/
const typeDefs = `
scalar Date

type Noun {
    noun: String!
    sentiment: String
    numberofmentions: Int
    timeupdated: Date
}

type Query {
    nouns: [Noun]!
    noun(noun: String!): Noun
}
`;

exports.schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
