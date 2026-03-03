"use client";

import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
	return (
		<section className="wrapper pt-28 mb-10 md:mb-16">
			<div className="library-hero-card">
				<div className="library-hero-content">

					{/* LEFT SIDE */}
					<div className="library-hero-text">
						<h1 className="library-hero-title">
							Your Library
						</h1>

						<p className="library-hero-description">
							Convert your books into interactive AI conversations.
							<br />
							Listen, learn, and discuss your favorite reads.
						</p>

						<Link href="/books/new" className="library-cta-primary">
							<span className="text-xl">＋</span>
							Add new book
						</Link>
					</div>

					{/* CENTER ILLUSTRATION */}
					<div className="library-hero-illustration-desktop">
						<Image
							src="/assets/hero-illustration.png"
							alt="Vintage books and globe"
							width={360}
							height={260}
							priority
						/>
					</div>

					{/* RIGHT SIDE - STEPS CARD */}
					<div className="hidden lg:block">
						<div className="library-steps-card shadow-soft-sm space-y-5 min-w-[260px]">

							{/* Step 1 */}
							<div className="library-step-item">
								<div className="library-step-number">1</div>
								<div>
									<div className="library-step-title">Upload PDF</div>
									<div className="library-step-description">
										Add your book file
									</div>
								</div>
							</div>

							{/* Step 2 */}
							<div className="library-step-item">
								<div className="library-step-number">2</div>
								<div>
									<div className="library-step-title">AI Processing</div>
									<div className="library-step-description">
										We analyze the content
									</div>
								</div>
							</div>

							{/* Step 3 */}
							<div className="library-step-item">
								<div className="library-step-number">3</div>
								<div>
									<div className="library-step-title">Voice Chat</div>
									<div className="library-step-description">
										Discuss with AI
									</div>
								</div>
							</div>

						</div>
					</div>

				</div>
			</div>


		</section>
	);
};

export default HeroSection;