import { gql } from 'apollo-server'

const typeDefs = gql`
  type User {
    id: Int
    firstname: String
    lastname: String
  }

  type Query {
    users: [User]
    user(id: Int, firstname: String, lastname: String): User
  }

  type Mutation {
    addUser(firstname: String!, lastname: String!): User!
    updateUser(id: Int!, firstname: String, lastname: String): User!
    deleteUser(id: Int!): User!
  }
`

export default typeDefs
