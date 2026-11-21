import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

const clientId = process.env.GITHUB_ID;
const clientSecret = process.env.GITHUB_SECRET;

if (clientId == undefined || clientSecret == undefined)
  throw new Error("Credentials needed");

const options = {
  providers: [
    GitHubProvider({
      clientId,
      clientSecret,
    }),
  ],
};

const handler = NextAuth(options);

export { handler as GET, handler as POST };
