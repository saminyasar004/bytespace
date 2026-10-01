import Image from "next/image";
import { Search } from "lucide-react";
import { partnerLogos } from "@/lib/data";

/* Decorative shapes, measured directly off the 1440px design. They are placed
 * inside a centred 1440px frame so they keep their relationship to the
 * content on wider screens, and are hidden below `lg`. Coordinates are
 * relative to the top of the blue block (page y - 120px navbar). */
const DECORATIONS = [
	{
		src: "/assets/marshmellow-1.svg",
		w: 267,
		h: 387,
		x: -1,
		y: 102,
		side: "left",
	},
	{
		src: "/assets/marshmellow-2.svg",
		w: 177,
		h: 176,
		x: 184,
		y: 357,
		side: "left",
	},
	{ src: "/assets/donut-1.svg", w: 346, h: 343, x: 16, y: 562, side: "left" },
	{ src: "/assets/cone-1.svg", w: 213, h: 372, x: -1, y: 100, side: "right" },
	{
		src: "/assets/cone-2.svg",
		w: 190,
		h: 189,
		x: 144,
		y: 344,
		side: "right",
	},
	{
		src: "/assets/marshmellow-3.svg",
		w: 317,
		h: 332,
		x: -1,
		y: 552,
		side: "right",
	},
] as const;

export function Hero() {
	return (
		<section className="relative overflow-hidden bg-brand">
			{/* 120px blueprint grid */}
			<div className="grid-overlay absolute inset-0" aria-hidden />

			{/* Floating shapes sit above the grid but below the hero composite */}
			<div
				className="pointer-events-none absolute inset-0 mx-auto hidden w-full max-w-[100%] lg:block"
				aria-hidden
			>
				{DECORATIONS.map((d) => (
					<Image
						key={d.src}
						src={d.src}
						alt=""
						width={d.w}
						height={d.h}
						className="absolute max-w-none"
						style={{
							top: d.y,
							width: d.w,
							height: d.h,
							...(d.side === "left"
								? { left: d.x }
								: { right: d.x }),
						}}
					/>
				))}
			</div>

			{/* Lime circle + photo + stat cards composite, flush with the block bottom */}
			<Image
				src="/assets/hero-image.svg"
				alt=""
				width={1149}
				height={515}
				priority
				aria-hidden
				className="absolute bottom-0 left-1/2 z-0 w-[112%] max-w-none -translate-x-1/2 sm:w-[92%] lg:w-[79.8%] lg:max-w-[1149px]"
			/>

			<div className="container-site relative z-10 min-h-[600px] pt-12 text-center sm:min-h-[700px] lg:min-h-[904px]">
				<h1
					className="heading-xl text-[40px] text-white sm:text-[56px] lg:text-[70px]"
					style={{ lineHeight: 1.229, letterSpacing: "0.022em" }}
				>
					Get Access to Hundreds
					<br />
					Courses Available
				</h1>

				<p className="mx-auto mt-8 max-w-[900px] text-[17px] leading-[1.6] tracking-[-0.01em] text-[#e5e6e8] lg:whitespace-nowrap">
					Unlock your creativity, gain valuable knowledge, and grow
					your business with our wide range of courses.
				</p>

				<form
					action="/search"
					className="mx-auto mt-[64px] flex w-full max-w-[580px] items-start gap-4"
				>
					<div className="flex h-[50px] min-w-0 flex-1 items-center gap-3 rounded-full bg-white pl-7 pr-5">
						<Search
							className="h-[18px] w-[18px] shrink-0 text-ink-700"
							strokeWidth={1.8}
							aria-hidden
						/>
						<label htmlFor="hero-search" className="sr-only">
							Search courses
						</label>
						<input
							id="hero-search"
							name="q"
							type="search"
							placeholder="Course, topic, creator"
							className="min-w-0 flex-1 bg-transparent text-[16px] text-ink outline-none placeholder:text-muted"
						/>
					</div>
					<button
						type="submit"
						className="h-[46px] w-[104px] shrink-0 cursor-pointer rounded-full bg-lime text-[16px] font-medium text-ink-900 transition-colors hover:bg-lime-dark"
					>
						Search
					</button>
				</form>
			</div>
		</section>
	);
}

export function Partners() {
	return (
		<section className="border-b border-line bg-surface">
			<div className="container-site flex flex-col items-center gap-8 py-12 lg:flex-row lg:justify-between">
				<ul className="flex flex-wrap items-center justify-center gap-x-14 gap-y-8">
					{partnerLogos.map((src) => (
						<li key={src} className="flex items-center">
							<Image
								src={src}
								alt=""
								width={104}
								height={28}
								className="h-auto w-auto opacity-70"
							/>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
