import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import connectDb from "./utils/connect";
import { compare } from "bcryptjs";
import { UserData } from "./modal/schema";
export const { handlers, signIn, signOut, auth } = NextAuth({
	providers: [
		Credentials({
			name: "credentials",

			credentials: {
				email: { label: "email", type: "email", placeHolder: "email" },
				password: {
					label: "password",
					type: "password",
					placeHolder: "password",
				},
			},
			authorize: async (credentials) => {
				const email = credentials?.email;
				const password = credentials?.password;

				if (!email || !password) {
					throw new Error("Missing required fields");
				}

				await connectDb();

				// check for existingUser
				const User = await UserData.findOne({ email }).select(
					"+password +role"
				);

				if (!User) {
					throw new Error("incorrect email or password");
				}
				if (!User.password) {
					throw new Error("incorrect email or password");
				}

				// !compare passwords

				const isMatch = compare(password, User.password);
				if (!isMatch) {
					throw new Error("password did not match");
				}

				const Data = {
					name: User.name,
					email: User.email,
					password: User.password,
					role: User.role,
					id: User._id,
				};
				return Data;
			},
		}),
	],
	pages: {
		signIn: "/sign-in",
	},
});
