import dbConnect from "@/lib/db";
import { isMatchingPassword } from "@/lib/password";
import User from "@/models/User";
import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "email", type: "text", placeholder: "jsmith" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials) {
          return null;
        }

        const { username, password } = credentials;

        await dbConnect();
        const existingUser = await User.findOne({ email: username });
        if (!existingUser) {
          console.error("no user found for given email");
          return null;
        }

        const isCorrectPassword = await isMatchingPassword(
          password,
          existingUser.passwordHash
        );

        if (!isCorrectPassword) {
          console.error("invalid credentials");
          return null;
        }

        return existingUser;
      },
    }),
  ],
  session: {
    maxAge: 6 * 60 * 60,
  },
  pages: {
    signIn: "/login",
    newUser: "/signup",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
