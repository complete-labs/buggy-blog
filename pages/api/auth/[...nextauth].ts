import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' }
      },

      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        let user
        if (
          credentials?.username === 'admin' &&
          credentials?.password === 'password'
        ) {
          user = {
            id: '1',
            name: 'John Benedict Miranda',
            email: 'johnbene@example.com'
          }
        }

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      }
    })
  ]
}

export default NextAuth(options)
