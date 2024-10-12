import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		discount: {
			type: Number,
			required: false,
		},
		image: {
			type: Buffer,
			contentType: String,
		},
		outOfStock: {
			type: Boolean,
		},
		priceHistory: [
			{
				price: { type: Number, required: true },
				date: { type: Date, required: true },
			},
		],
	},
	{
		timestamps: true,
	}
);

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
		},
		email: {
			type: String,
			required: true,
			unique: true, // Ensure unique email addresses
			trim: true,
		},
		password: {
			type: String,
			required: true, // You’ll need to hash this before saving
		},
		role: {
			type: String,
			enum: ["user", "admin"], // Can add roles for authorization
			default: "user",
		},
		createdAt: {
			type: Date,
			default: Date.now,
		},
	},
	{
		timestamps: true,
	}
);

// New Cart Schema
const cartSchema = new mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User", // Reference to UserData
			required: true,
		},
		items: [
			{
				product: {
					type: mongoose.Schema.Types.ObjectId,
					ref: "ProductInfo", // Reference to ProductInfo
					required: true,
				},
				quantity: {
					type: Number,
					required: true,
					min: 1, // Minimum quantity of 1
				},
			},
		],
	},
	{
		timestamps: true,
	}
);

const Cart = mongoose.models.Cart || mongoose.model("Cart", cartSchema);

const ProductInfo =
	mongoose.models.ProductInfo || mongoose.model("ProductInfo", itemSchema);

const UserData =
	mongoose.models.UserData || mongoose.model("UserData", userSchema);
export { ProductInfo, UserData, Cart };
