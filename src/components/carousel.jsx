"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the CSS for the carousel
import { Carousel } from "react-responsive-carousel";
import AnimeCase from "../assets/images/anime-case.jpg";
import charger from "../assets/images/charger.jpg";
import iphone from "../assets/images/iphone-13.jpg";
import Image from "next/image";

// Array of images for the carousel
const images = [
	{
		label: "Anime Case",
		image: AnimeCase,
	},
	{
		label: "Charger",
		image: charger,
	},
	{
		label: "iPhone 13",
		image: iphone,
	},
];

export const CarouselComponent = () => {
	return (
		<div className="hero-carousel">
			<Carousel
				showThumbs={false}
				autoPlay
				infiniteLoop
				interval={2000}
				showArrows={false}
				showStatus={false}
			>
				{images.map((item, index) => (
					<div key={index}>
						<Image
							src={item.image}
							alt={item.label}
							width={800} // Provide a specific width
							height={600} // Provide a specific height
							// objectFit="cover" // Optional: Ensure the image scales properly
						/>
					</div>
				))}
			</Carousel>
		</div>
	);
};
