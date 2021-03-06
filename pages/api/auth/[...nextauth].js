import NextAuth from "next-auth";
import TwitterProvider from 'next-auth/providers/twitter'


export default NextAuth({
    // configure one or more authentication providers
    providers: [
        TwitterProvider({
            clientId: process.env.TWITTER_CLIENT_ID,
            clientSecret: process.env.TWITTER_CLIENT_SECRET,
            version: '2.0' // opt-in to Twitter 0Auth 2.0
        }),
        // ..add more providers here
    ],
})