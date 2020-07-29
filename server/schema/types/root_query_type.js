const graphql = require("graphql");
const { GraphQLObjectType, GraphQLID } = graphql;
const UserType = require("./user_type");
const StoryType = require("./story_type");
const mongoose = require("mongoose");

const User = mongoose.model("user");
const Story = mongoose.model("story");

const RootQueryType = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, args, req) {
        return User.findById(args.id);
      },
    },
    story: {
      type: StoryType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, args, req) {
        return Story.findById(args.id);
      },
    },
  },
});

module.exports = RootQueryType;
