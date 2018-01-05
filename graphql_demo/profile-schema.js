

const { graphql, buildSchema }  = require('graphql'),
    graphqlTools = require('graphql-tools');

// Json data for profile
var profile =
[
  {
    "id": 1,
    "nickName": "Sam",
    "age": 30,
    "joiningDate" : "13-05-2011",
    "friends": [
      2,
      4,
      6,
      8,
      10
    ]
  },
  {
    "id": 2,
    "nickName": "Tiger",
    "age": 32,
    "joiningDate" : "15-06-2013",
    "friends": [
      1,
      3,
      5,
      7,
      9
    ]
  },
  {
    "id": 3,
    "nickName": "Krish",
    "age": 30,
    "joiningDate" : "20-08-2013",
    "friends": [
      2,
      4,
      5,
      6,
      7
    ]
  },
  {
    "id": 4,
    "nickName": "Samuel",
    "age": 30,
    "joiningDate" : "25-05-2012",
    "friends": [
      2,
      4,
      5,
      6,
      7
    ]
  },
  {
    "id": 5,
    "nickName": "Krish",
    "age": 30,
    "joiningDate" : "13-05-2012",
    "friends": [
      2,
      4,
      5,
      6,
      7
    ]
  },
  {
    "id": 6,
    "nickName": "Krish",
    "age": 30,
    "joiningDate" : "14-06-2012",
    "friends": [
      2,
      4,
      5,
      6,
      7
    ]
  },
  {
    "id": 7,
    "nickName": "Ximanta",
    "age": 32,
    "joiningDate" : "17-07-2014",
    "friends": [
      2,
      4,
      5,
      6,
      7
    ]
  },
  {
    "id": 8,
    "nickName": "Maverick",
    "age": 30,
    "joiningDate" : "24-12-2014",
    "friends": [
      2,
      4,
      5,
      6,
      7
    ]
  },
  {
    "id": 9,
    "nickName": "Krish",
    "age": 30,
    "joiningDate" : "28-10-2015",
    "friends": [
      2,
      4,
      5,
      6,
      7
    ]
  },
  {
    "id": 10,
    "nickName": "Guns",
    "age": 30,
    "joiningDate" : "20-10-2013",
    "friends": [
      2,
      4,
      5,
      6,
      7
    ]
  }
];

// Schema definition
const typeDefs = `
type profile {
  id: ID,
  nickName : String,
  age: Int,
  joiningDate : { type: Date },
  friends: [profile]
}
`;


const profileschema = graphqlTools.makeExecutableSchema({ typeDefs });
module.exports = profileschema;