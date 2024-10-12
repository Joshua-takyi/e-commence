import localFont from "next/font/local";
import "./globals.css";
import { Open_Sans } from "next/font/google";
import { Nav } from "@/components/Nav";

// Font setup
const inter = Open_Sans({
	weight: "400",
	subsets: ["latin"],
});

const campton = localFont({
	src: "./fonts/CamptonBold.otf",
	variable: "--font-campton",
	weight: "100 900",
});

// Export Metadata object
export const metadata = {
	title: "shop.to | Best Online Shopping | Come and Go with Ease",
	description:
		"Discover the best deals on electronics, fashion, and more at shop.to. Shop and enjoy easy returns and fast shipping.",
	keywords:
		"online shopping, electronics, fashion, fast shipping, deals, easy returns",
	icons: {
		icon: "/favicon.ico", // Favicon
	},
	// viewport: {
	// 	width: "device-width",
	// 	initialScale: 1,
	// },
	openGraph: {
		title: "shop.to | Best Online Shopping",
		description:
			"Shop the best deals at shop.to with easy returns and fast shipping.",
		url: "https://shop.to/",
		siteName: "shop.to",
		images: [
			{
				url: "https://shop.to/static/images/shop-thumbnail.jpg",
				width: 1200,
				height: 630,
				alt: "shop.to thumbnail",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "shop.to | Best Online Shopping",
		description:
			"Shop the best deals at shop.to with easy returns and fast shipping.",
		images: ["https://shop.to/static/images/shop-thumbnail.jpg"],
	},
	robots: {
		index: true,
		follow: true,
	},
	alternates: {
		canonical: "https://shop.to/",
	},
};

// Layout Component
export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${inter.className} ${campton.variable} antialiased`}>
				<Nav />
				{children}
			</body>
		</html>
	);
}
