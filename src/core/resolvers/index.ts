import userQueries from './queries/users'
import addUser from './mutations/addUser'

const resolvers = {
  Query: {
    ...userQueries,
  },
  Mutation: {
    addUser,
  },
}

export default resolvers
