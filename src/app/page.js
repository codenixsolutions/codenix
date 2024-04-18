"use client";
import React, {useEffect} from "react";
import {Prompt} from "next/font/google";

const prompt = Prompt({subsets: ["latin"], weight: ["400", "700", "500", "900"], variable: ["--font-prompt"]});

export default function Home() {
	return (
		<main className={`h-screen w-screen flex justify-center items-center `}>
			<div className="absolute h-screen w-screen hidden lg:inline md:inline overflow-hidden top-0 left-0">
				<video className={"rotate-90 lg:rotate-0"} preload="auto" loop autoPlay muted>
					<source src="/media/videos/network.mp4" type="video/mp4" />
				</video>
			</div>
			<div className={`${prompt.variable} font-prompt lg:text-9xl md:text-6xl sm:text-6xl animate-pulse`}>Launching Soon</div>
		</main>
	);
}
