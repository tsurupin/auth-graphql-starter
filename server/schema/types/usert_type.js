const graphql = require('graphql');

const = {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID
} = graphql;


const UsertType = new GraphQLObjectType({
  name: 'UserType',
  fields: {
    id: { type: GraphQLID }
    email: { type: GraphQLString }
  }
});

module.export = UserType;
