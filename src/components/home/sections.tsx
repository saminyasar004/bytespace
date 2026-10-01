import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { Award, Check, ChevronLeft, ChevronRight, Star } from "lucide-react";
import {
	categoryFilters,
	courses,
	creatorCtaIntro,
	creatorPillars,
	creatorSupportCopy,
	discoverIntro,
	growthIntro,
	growthStats,
	learningPaths,
	pathsIntro,
	revenueStats,
	testimonials,
	testimonialsIntro,
	type Course,
} from "@/lib/data";
import { CourseCard } from "@/components/course/course-card";

/* ------------------------------------------------------------------ *
 * Discover Your Passion / Build Your Skills  (centred, chip cloud)
 * ------------------------------------------------------------------ */

export function DiscoverSkills() {
	return (
		<section className="bg-white py-24">
			<div className="container-site text-center">
				<h2 className="heading-xl text-[44px] text-ink lg:text-[48px]">
					Discover Your Passion
					<br />
					Build Your Skills
				</h2>
				<p className="mx-auto mt-6 max-w-[900px] text-[16px] leading-[1.7] text-ink-500">
					{discoverIntro}
				</p>

				<ul className="mx-auto mt-11 flex max-w-[1120px] flex-wrap items-center justify-center gap-3">
					{categoryFilters.map((cat) => (
						<li key={cat}>
							<Link
								href={`/search?category=${encodeURIComponent(cat)}`}
								className="inline-flex h-10 items-center rounded-full border border-line bg-white px-5 text-[16px] text-ink transition-colors hover:border-brand hover:text-brand"
							>
								{cat}
							</Link>
						</li>
					))}
					<li>
						<Link
							href="/search"
							className="inline-flex h-10 items-center rounded-full border border-brand px-5 text-[16px] text-brand transition-colors hover:bg-brand hover:text-surface"
						>
							+ More
						</Link>
					</li>
				</ul>
			</div>
		</section>
	);
}

/* ------------------------------------------------------------------ *
 * Popular courses — two rows of three
 * ------------------------------------------------------------------ */

function SectionHeading({ title, href }: { title: string; href?: string }) {
	return (
		<div className="mb-10 flex items-center justify-between gap-6">
			<h2 className="heading-lg text-[32px] text-ink">{title}</h2>
			{href && (
				<Link
					href={href}
					className="inline-flex shrink-0 items-center gap-2 text-[16px] text-ink transition-colors hover:text-brand"
				>
					View All
					<ChevronRight className="h-4 w-4" aria-hidden />
				</Link>
			)}
		</div>
	);
}

export function PopularCourses() {
	return (
		<section className="bg-white pb-18">
			<div className="container-wide">
				<SectionHeading title="Popular Courses" href="/search" />
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{courses.slice(0, 6).map((course) => (
						<CourseCard key={course.slug} course={course} />
					))}
				</div>
			</div>
		</section>
	);
}

/* ------------------------------------------------------------------ *
 * Explore Diverse Learning Paths
 * ------------------------------------------------------------------ */

function LearningIcon({ name }: { name: string }) {
	const d: Record<string, string> = {
		design: "M4 20h16M6 16l4-6 3 4 5-8",
		development: "m8 8-4 4 4 4m8-8 4 4-4 4m-2-11-4 18",
		software: "M4 6h16v12H4zm4 4h3m-3 4h3m4-2h4",
		business: "M4 20V9l5 3V9l5 3V9l6 4v7zM3 20h18",
		marketing:
			"M4 10v4h3l6 4V6L7 10zm11-2a3 3 0 0 1 0 8m3-11a7 7 0 0 1 0 14",
		photography:
			"M3 8h4l2-3h6l2 3h4v11H3zm9 2.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6z",
	};
	return (
		<svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
			<path
				d={d[name] ?? d.development}
				stroke="currentColor"
				strokeWidth="1.6"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

export function LearningPathSection() {
	return (
		<section className="bg-white pb-18">
			<div className="container-site text-center">
				<h2 className="heading-lg text-[36px] text-ink lg:text-[40px]">
					Explore Diverse Learning Paths at Bytespace
				</h2>
				<p className="mx-auto mt-5 max-w-[820px] text-[16px] leading-[1.7] text-ink-500">
					{pathsIntro}
				</p>

				<ul className="mt-12 grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
					{learningPaths.map((path) => (
						<li key={path.label}>
							<Link
								href={`/search?category=${encodeURIComponent(path.label)}`}
								className="group flex flex-col items-center gap-3"
							>
								<span className="grid h-14 w-14 place-items-center rounded-2xl bg-lime text-ink-900 transition-transform group-hover:-translate-y-1">
									<LearningIcon name={path.icon} />
								</span>
								<span className="text-[16px] text-ink transition-colors group-hover:text-brand">
									{path.label}
								</span>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}

/* ------------------------------------------------------------------ *
 * "Your Path to Professional Growth Starts Here!" — gradient block
 * ------------------------------------------------------------------ */

const growthChecklist = [
	"Share Your Expertise",
	"Monetize Your Passion",
	"Flexibility and Autonomy",
	"Build a Community",
];

export function GrowthSection() {
	return (
		<section className="relative isolate overflow-hidden">
			<div
				aria-hidden
				className="absolute inset-0"
				style={{
					backgroundImage: "url(/assets/growth-gradient.svg)",
					backgroundSize: "cover",
					backgroundPosition: "center center",
				}}
			/>

			<div className="container-site relative py-16 lg:h-[1461px] lg:py-0">
				<div className="lg:absolute lg:left-6 lg:top-[192px] lg:w-[560px]">
					<h2
						className="heading-lg text-[30px] text-ink lg:text-[44px]"
						style={{ lineHeight: 1.24 }}
					>
						Your Path to Professional
						<br />
						Growth Starts Here!
					</h2>
					<p className="mt-7 max-w-[475px] text-[16px] leading-[29px] text-ink-500">
						{growthIntro}
					</p>
					<ul className="mt-12 flex flex-wrap items-start gap-x-14 gap-y-6">
						{growthStats.map((s) => (
							<li key={s.label}>
								<p className="text-[38px] font-semibold leading-none text-brand">
									{s.value}
								</p>
								<p className="mt-3 text-[16px] leading-none text-ink-500">
									{s.label}
								</p>
							</li>
						))}
					</ul>
				</div>

				<figure className="mt-12 lg:absolute lg:left-[639px] lg:top-[96px] lg:mt-0 lg:w-[640px]">
					<Image
						src="/assets/growth-collage-1.svg"
						alt="Course preview showing learning progress and a featured Figma course"
						width={640}
						height={610}
						sizes="(min-width: 1024px) 640px, 100vw"
						className="h-auto w-full"
					/>
				</figure>

				<figure className="mt-12 lg:absolute lg:left-[-4px] lg:top-[753px] lg:mt-0 lg:w-[599px]">
					<Image
						src="/assets/growth-collage-2.svg"
						alt="Creator dashboard with revenue stats and happy students"
						width={599}
						height={628}
						sizes="(min-width: 1024px) 599px, 100vw"
						className="h-auto w-full"
					/>
				</figure>

				<div className="mt-14 lg:absolute lg:left-[647px] lg:top-[848px] lg:mt-0 lg:w-[580px]">
					<h2
						className="heading-lg text-[30px] text-ink lg:text-[44px]"
						style={{ lineHeight: 1.24 }}
					>
						Create &amp; Manage
						<br />
						Courses Easily.
					</h2>
					<p className="mt-8 max-w-[550px] text-[16px] leading-[30px] text-ink-500">
						{creatorSupportCopy}
					</p>
					<ul className="mt-9 space-y-5">
						{growthChecklist.map((item) => (
							<li
								key={item}
								className="flex items-center gap-3 text-[16px] leading-none text-ink-900"
							>
								<span className="grid h-[21px] w-[21px] shrink-0 place-items-center rounded-full bg-brand">
									<Check
										className="h-3 w-3 text-white"
										strokeWidth={3.5}
										aria-hidden
									/>
								</span>
								{item}
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}

/* ------------------------------------------------------------------ *
 * Blue creator CTA
 * ------------------------------------------------------------------ */

/* Decorative shapes, measured directly off the 1440px design. They sit in a
 * centred 1440px frame so they keep their relationship to the content on
 * wider screens; left shapes anchor to the frame's left edge, right shapes
 * to its right edge, and the ring / bottom zigzag to the block's bottom. */
const CREATOR_CTA_SHAPES: {
	src: string;
	w: number;
	h: number;
	style: CSSProperties;
}[] = [
	{
		src: "/assets/marshmellow-4.svg",
		w: 267,
		h: 225,
		style: { left: 0, top: 0 },
	},
	{
		src: "/assets/marshmellow-5.svg",
		w: 177,
		h: 176,
		style: { left: 179, top: 5 },
	},
	{ src: "/assets/cone-3.svg", w: 140, h: 189, style: { left: 0, top: 226 } },
	{
		src: "/assets/donut-2.svg",
		w: 346,
		h: 190,
		style: { left: 17, bottom: 0 },
	},
	{
		src: "/assets/cone-4.svg",
		w: 190,
		h: 189,
		style: { right: 170, top: 1 },
	},
	{ src: "/assets/cone-5.svg", w: 218, h: 372, style: { right: 0, top: 7 } },
	{
		src: "/assets/marshmellow-6.svg",
		w: 334,
		h: 199,
		style: { right: 0, bottom: 0 },
	},
];

export function CreatorCta() {
	return (
		<section className="relative overflow-hidden bg-brand">
			<div className="grid-overlay absolute inset-0" aria-hidden />
			<div
				className="pointer-events-none absolute inset-0 mx-auto hidden max-w-[100%] xl:block"
				aria-hidden
			>
				{CREATOR_CTA_SHAPES.map((shape) => (
					<Image
						key={shape.src}
						src={shape.src}
						alt=""
						width={shape.w}
						height={shape.h}
						className="absolute max-w-none"
						style={{
							...shape.style,
							width: shape.w,
							height: shape.h,
						}}
					/>
				))}
			</div>
			<div className="container-site relative flex flex-col items-center py-20 text-center">
				<h2 className="heading-lg text-[40px] text-surface lg:text-[46px]">
					Unlock Your Potential as a
					<br />
					Creator with Bytespace
				</h2>
				<p className="mt-6 max-w-[900px] text-[16px] leading-[1.7] text-surface/85">
					{creatorCtaIntro}
				</p>
				<Link
					href="/register"
					className="mt-9 inline-flex h-13 items-center rounded-full bg-lime px-9 text-[16px] font-medium text-ink-900 transition-colors hover:bg-lime-dark"
				>
					Join as Creator
				</Link>
			</div>
		</section>
	);
}

/* ------------------------------------------------------------------ *
 * Testimonials
 * ------------------------------------------------------------------ */

function TestimonialCard({ item }: { item: (typeof testimonials)[number] }) {
	return (
		<figure className="flex h-full flex-col rounded-card border border-line bg-white p-8 shadow-[0_18px_50px_-32px_rgba(0,0,0,0.35)]">
			<span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full bg-surface">
				<Image
					src={item.avatar}
					alt={item.name}
					fill
					sizes="64px"
					className="object-cover"
				/>
			</span>
			<figcaption className="mt-6">
				<span className="block text-[16px] font-bold text-ink">
					{item.name}
				</span>
				<span className="mt-1 block text-[14px] font-medium text-brand">
					{item.role}
				</span>
			</figcaption>
			<blockquote className="mt-5 flex-1 text-[14px] leading-[1.75] text-ink-500">
				“{item.quote}”
			</blockquote>
		</figure>
	);
}

export function Testimonials() {
	return (
		<section
			className="bg-[#fafafa] py-32"
			style={{
				backgroundImage: "url(/assets/testimonial-bg.svg)",
				backgroundSize: "cover",
				backgroundPosition: "center center",
			}}
		>
			<div className="container-site">
				<div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
					<h2 className="heading-lg text-[40px] text-ink">
						Discover What Our
						<br />
						Community Is Saying
					</h2>
					<div className="flex items-start justify-between gap-6">
						<p className="max-w-[580px] text-[16px] leading-[1.7] text-ink-500">
							{testimonialsIntro}
						</p>
					</div>
				</div>

				<div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
					{testimonials.map((t) => (
						<TestimonialCard key={t.name} item={t} />
					))}
				</div>
			</div>
		</section>
	);
}

export { SectionHeading, LearningIcon };
export type { Course };
