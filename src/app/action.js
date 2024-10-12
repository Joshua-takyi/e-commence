"use server";
import { signIn } from "@/auth";
import { UserData } from "@/modal/schema";
import connectDb from "@/utils/connect";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
const AddUser = async (formData) => {
	const name = formData.get("name");
	const email = formData.get("email");
	const password = formData.get("password");
	if (!name || !email || !password) {
		throw new Error("Missing required fields");
	}
	try {
		await connectDb();

		// find existingUser

		const existingUser = await UserData.findOne({ email }).select(
			"+password +role"
		);
		const hashedPassword = await bcrypt.hash(password, 12);
		if (existingUser) {
			console.log("User already exists");
		}
		await UserData.create({
			name,
			email,
			password: hashedPassword,
		});
		return {
			success: true,
			message: "User created successfully",
		};
	} catch (error) {
		console.log("failed to create user", error.message);
		return {
			success: false,
			message: error.message,
		};
	}
	// redirect("/sign-in");
};

const Login = async (formData) => {
	const email = formData.get("email");
	const password = formData.get("password");
	try {
		await signIn("credentials", {
			redirect: false,
			callbackUrl: "/",
			email,
			password,
		});
		return {
			success: true,
			message: "User logged in successfully",
		};
	} catch (error) {
		const errorMessage = "failed to login";
		console.log(errorMessage, error);
	}
	redirect("/product-listed");
};
// redirect("/product-listed")

export { AddUser, Login };
