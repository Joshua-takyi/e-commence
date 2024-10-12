import { CarouselComponent } from "./carousel";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function HeroSection() {
	return (
		<section className="container mx-auto md:p-4 p-2">
			<div className="flex md:flex-row flex-col">
				<div className="md:w-1/2 w-full flex flex-col md:gap-5 gap-3 p-2">
					<h1 className="capitalize md:text-lg-h1 font-Campton text-[30px]">
						shop at ease
					</h1>
					<p className="md:text-[15px] text-[13px]  leading-[1.8] tracking-[3px]">
						Your one-stop destination for quality products and effortless
						shopping. Browse our diverse collection, enjoy secure transactions,
						and fast shipping. Experience the ease of online shopping with
						ShopEase today.
					</p>
					{/* input form */}
					<section className="md:my-8 my-3">
						<form>
							<div className="flex flex-col gap-2">
								<label htmlFor="search" className="text-[15px] font-Campton">
									Search
								</label>
								<div className="flex flex-col gap-3">
									<Input
										type="text"
										placeholder="search item here"
										id="search"
										className=" rounded-md outline-none ring-1 flex-1"
									/>
									<Button>search</Button>
								</div>
							</div>
						</form>
					</section>
				</div>
				<div className="md:w-1/2 w-full">
					<CarouselComponent />
				</div>
			</div>
		</section>
	);
}
