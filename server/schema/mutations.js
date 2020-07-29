const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
} = graphql;

const mongoose = require("mongoose");
const UserType = require("./types/user_type.js");
const AuthService = require("../services/auth");
const StoryType = require("./types/story_type.js");
const ChapterType = require("./types/chapter_type.js");

const Story = mongoose.model("story");
const Chapter = mongoose.model("chapter");

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    signup: {
      type: UserType,
      args: {
        email: { type: GraphQLNonNull(GraphQLString) },
        password: { type: GraphQLNonNull(GraphQLString) },
      },
      // request below is the Request Object that is passed from the FE
      // (browser) to GraphQL.  (request === 'context' in some literature)
      resolve(parentValue, { email, password }, req) {
        return AuthService.signup({ email, password, req });
      },
    },
    logout: {
      type: UserType,
      resolve(parentValue, args, req) {
        const { user } = req;
        req.logout();
        return user;
      },
    },
    login: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(parentValue, { email, password }, req) {
        return AuthService.login({ email, password, req });
      },
    },
    addStory: {
      type: StoryType,
      args: {
        title: { type: new GraphQLNonNull(GraphQLString) },
        genre: { type: new GraphQLNonNull(GraphQLString) },
        tags: { type: GraphQLString },
        views: { type: GraphQLInt },
        userId: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parentValue, args, req) {
        let story = new Story({
          title: args.title,
          genre: args.genre,
          views: 0,
          tags: args.tags,
          userId: args.userId,
        });
        return story.save();
      },
    },
    addChapter: {
      type: ChapterType,
      args: {
        header: { type: new GraphQLNonNull(GraphQLString) },
        content: { type: new GraphQLNonNull(GraphQLString) },
        chapterNum: { type: new GraphQLNonNull(GraphQLInt) },
        storyId: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        let chapter = new Chapter({
          header: args.header,
          content: args.content,
          storyId: args.storyId,
        });
        return chapter.save();
      },
    },
  },
});

module.exports = mutation;
