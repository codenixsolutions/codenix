"use client";
import React, {useEffect} from "react";
import {Prompt} from "next/font/google";
import ReactPlayer from "react-player";

const prompt = Prompt({subsets: ["latin"], weight: ["400", "700", "500", "900"], variable: ["--font-prompt"]});

export default function Home() {
	useEffect(() => {
		const ctx = new (window.AudioContext || window.webkitAudioContext)();

		const osc = ctx.createOscillator();

		osc.connect(ctx.destination);

		osc.start(0);
		osc.stop(2);

		document.querySelector("#video").onload;
	});

	return (
		<main className={`h-screen flex justify-center items-center`}>
			<div className="h-screen overflow-hidden absolute p-0 m-0">
				<video id="video" preload="auto" loop autoPlay muted>
					<source src="/media/videos/network.mp4" type="video/mp4" />
				</video>
			</div>
			<div className={`${prompt.variable} font-prompt text-9xl animate-pulse`}>Launching Soon</div>
		</main>
	);
}
