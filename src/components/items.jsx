import { GoodsCard } from "./GoodsCard";

export default function GoodsAvailable() {
	return (
		<section className="container mx-auto">
			<div className="grid md:grid-cols-3 grid-cols-1  gap-10 auto-cols-auto place-items-center">
				<GoodsCard />
				<GoodsCard />
				<GoodsCard />
			</div>
		</section>
	);
}
