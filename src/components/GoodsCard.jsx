import Image from "next/image";
import Link from "next/link";
import AnimeCase from "../assets/images/anime-case.jpg";

export const GoodsCard = () => {
	return (
		<Link href={"/products"} className="product-card">
			<div className="product-card_img-container">
				<Image
					src={AnimeCase}
					// alt={title}
					width={400}
					height={400}
					className="product-card_img"
				/>
			</div>
			<div className="flex flex-col gap-3">
				<h3 className="product-title">case</h3>
				{/* <div className="flex justify-between"></div> */}
			</div>
		</Link>
	);
};
