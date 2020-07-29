const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID } = graphql;
const UserType = require("./user_type");
const mongoose = require("mongoose");
const User = mongoose.model("user");

const StoryType = new GraphQLObjectType({
  name: "StoryType",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    genre: { type: GraphQLString },
    tags: { type: GraphQLString },
    views: { type: GraphQLInt },
    user: {
      type: UserType,
      resolve(parent, args) {
        return User.findById(parent.id);
      },
    },
  }),
});

module.exports = StoryType;
