import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
    secret: "abc123",
    // Configure one or more authentication providers
    providers: [
        // GithubProvider({
        //   clientId: process.env.GITHUB_ID,
        //   clientSecret: process.env.GITHUB_SECRET,
        // }),
        // ...add more providers here
        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Credentials',
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
            username: { label: "Username", type: "text", placeholder: "admin" },
            password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                
                if (credentials.username === "admin" && credentials.password === "password") {
                    console.log("authing");
                    // Since we don't have a concept of a user, I'm just leaving this unused bool as a marker.
                    // Ideally with actual server auth, this would return a user object.
                    return {
                        isLoggedIn: true,
                    }
                }
                return null
            }
        })
    ],
}
export default NextAuth(authOptions)