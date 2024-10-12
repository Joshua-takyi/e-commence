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
	await connectDb();

	// find existingUser
	const existingUser = await UserData.findOne({ email });
	const hashedPassword = await bcrypt.hash(password, 12);
	if (existingUser) {
		console.log("User already exists");
		return {
			success: false,
			message: "User already exists",
		};
	}
	await UserData.create({
		name,
		email,
		password: hashedPassword,
	});
	// ! why dafuq is the redirecting not working 💀
	redirect("/login");
};
const Login = async (formData) => {
	const email = formData.get("email");
	const password = formData.get("password");

	const result = await signIn("credentials", {
		redirect: false,
		callbackUrl: "/",
		email,
		password,
	});
	if (result.error) {
		console.log("Login failed:", result.error);
		return {
			success: false,
			message: "Login failed",
		};
	}

	//? redirect after a successful signIn
	return redirect("/product-listed"); // Ensure to return the redirect
};

export { AddUser, Login };
