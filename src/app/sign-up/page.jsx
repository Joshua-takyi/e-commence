import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AddUser } from "../action";

export default function SignUp() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
			<div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 space-y-6">
				<h2 className="text-2xl font-bold text-center text-gray-800">
					Sign Up
				</h2>
				<form className="space-y-4" action={AddUser}>
					<div className="space-y-2">
						<Label htmlFor="name">Name</Label>
						<Input id="name" placeholder="John Doe" required name="name" />
					</div>
					<div className="space-y-2">
						<Label htmlFor="email">Email</Label>
						<Input
							id="email"
							type="email"
							placeholder="john@example.com"
							required
							name="email"
						/>
					</div>
					<div className="space-y-2">
						<Label htmlFor="password">Password</Label>
						<Input id="password" type="password" required name="password" />
					</div>
					<Button type="submit" className="w-full">
						Sign Up
					</Button>
				</form>
			</div>
		</div>
	);
}
