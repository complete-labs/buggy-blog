import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

// authenticating user, uses NextAuth to verify credentials. then uses callback to return 'user' or 'null' depending on if corrent information
export default NextAuth({
    secret: process.env.AUTH_SECRET,
    session: {
        strategy: "jwt",
      },
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
              username: { label: "Username", type: "text", placeholder: "completetest" },
              password: {  label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
              // Add logic here to look up the user from the credentials supplied
              const user = { id: 1, name: "Complete Test", email: "completetest@example.com" }
              if(credentials?.username=="completetest@gmail.com" && credentials?.password=="complete123"){
                return user
              }else{
                return null;
              }
            }
          })
  ],
  callbacks: {
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
      },
    }),
  },
})