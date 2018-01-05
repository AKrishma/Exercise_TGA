
const   http = require('http'),
        express = require('express'),
        { graphql, buildSchema } = require('graphql'),
        graphqlHTTP = require('express-graphql'),
        router = express.Router()
        profileSchema = require('./profile-schema'),
        postSchema = require('./post-schema');


// Queries and Mutation call using parameters.
 const   schema = buildSchema(`
        type Query { 
                sayHello: String 
        } 
        `);
const  root =  { sayHello: () => console.log('Hello World') };

graphql(schema, ' { sayHello }', root).then((response) => {
        console.log('response: '+ JSON.stringify(response));
}); 

var profileQuery = 'query { profile {name, age, friends} }'

// Server  
// Listening to server 
let port = process.env.port || 3000;
app = express()
        .use('/', graphqlHTTP({
                schema: schema, 
                rootValue: root,
                pretty: true,
                graphiql: true
                })
        )
        .use('/profile', graphqlHTTP({
                profileSchema: schema,
                pretty: true
        }))

        .use('/posts', graphqlHTTP({
                postSchema: schema,
                pretty: true
        }))

        .listen(port, (err) => {
                if(err) {
                        return console.log('Error in server connection: '+ err);
                }
                console.log('Server is listening to the port '+port+ ' for requests!');
        });