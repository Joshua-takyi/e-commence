import Link from "next/link";
import heart from "../assets/icons/heart.svg";
import cart from "../assets/icons/shopping-cart.svg";
import user from "../assets/icons/user.svg";
import Image from "next/image";

const navData = [
	{
		id: "1",
		icon: user,
		label: "user",
		href: "/account/users",
	},
	{
		id: "2",
		icon: cart,
		label: "cart",
		href: "/account/cart",
	},
	{
		id: "3",
		icon: heart,
		label: "favorite",
		href: "/account/favorite",
	},
];

export const Nav = () => {
	return (
		<header className="container mx-auto md:p-4 p-3">
			<nav className="flex  justify-between">
				<div>
					<Link href={"/"}>
						<p className="uppercase font-Campton">shop.to</p>
					</Link>
				</div>
				<ul className="flex gap-5">
					{navData.map((i) => (
						<Link key={i.id} href={i.href}>
							<li>
								<Image src={i.icon} alt={i.label} width={20} height={20} />
							</li>
						</Link>
					))}
				</ul>
			</nav>
		</header>
	);
};

// const HamburgerIcon = ({ isOpen }) => {
// 	return (
// 		<div className="flex flex-col gap-2 ">
// 			<motion.div
// 				className="h-1 w-14 bg-black/45"
// 				animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
// 				transition={{ duration: 0.3 }}
// 			/>
// 			<motion.div
// 				className="h-1 w-14 bg-black/45"
// 				animate={isOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
// 				transition={{ duration: 0.3 }}
// 			/>
// 		</div>
// 	);
// };
