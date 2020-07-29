const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt } = graphql;

const UserType = new GraphQLObjectType({
  name: "UserType",
  fields: {
    id: { type: GraphQLID },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    age: { type: GraphQLInt },
  },
});

module.exports = UserType;
