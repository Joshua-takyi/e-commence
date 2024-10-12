import HeroSection from "@/components/Hero";
import GoodsAvailable from "@/components/items";
import Image from "next/image";

export default function Home() {
	return (
		<div>
			<HeroSection />
			<GoodsAvailable />
		</div>
	);
}
