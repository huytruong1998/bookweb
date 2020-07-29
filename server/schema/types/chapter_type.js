const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt } = graphql;
const StoryType = require("./story_type");

const ChapterType = new GraphQLObjectType({
  name: "ChapterType",
  fields: () => ({
    id: { type: GraphQLID },
    header: { type: GraphQLString },
    content: { type: GraphQLString },
    chapterNum: { type: GraphQLInt },
    story: {
      type: StoryType,
      resolve(parent, args) {
        return Story.findById(parent.storyId);
      },
    },
  }),
});

module.exports = ChapterType;
