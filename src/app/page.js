import Image from "next/image";

import {Prompt} from "next/font/google";

const prompt = Prompt({subsets: ["latin"], weight: ["400", "700", "500", "900"], variable: ["--font-prompt"]});

export default function Home() {
	return (
		<main className={`h-screen flex justify-center items-center`}>
			<div className={`${prompt.variable} font-prompt text-9xl animate-pulse`}>Launching Soon</div>
		</main>
	);
}
