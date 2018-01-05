
const { graphql, buildSchema } = require('graphql'),
graphqlTools = require('graphql-tools');

// json data for post
const post =
[
    {
      "postid": 1,
      "postedBy" : 1,
      "message": "hello friends !",
      "postTime" : ""
    },
    {
      "postid": 2,
      "postedBy" : 1,
      "message": "how are you ? ",
      "postTime" : ""
    },
    {
      "postid": 3,
      "postedBy" : 1,
      "message": "happy new year !",
      "postTime" : ""
    }
];

// Schema definition

const typeDefs = `
type post {
  postid: ID,
  postedBy :  profile,
  message: String,
  postTime : { type: Date }
}
`;
/* var postType = buildSchema(`
  name: 'post',
  fields: function() {
    return {
      postid: ID!,
      postedBy : { type: profile! },
      message: String,
      postTime : { type: Date }
    }
  }
`);

var queryType1 = buildSchema(`
  name: 'query1',
  fields: function() {
    return {
      postQuery : {
        type: new graphql(profileType),
        resolve: function() {
          return new Promise(function(resolve, reject) {
            resolve(post);
          })
        }
      }
    }
  }
`); */
const postschema = graphqlTools.makeExecutableSchema({ typeDefs });
module.exports = postschema;