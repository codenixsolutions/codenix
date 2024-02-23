import {Roboto} from "next/font/google";
import "./css/globals.css";
import "./css/custom.css";

const roboto = Roboto({subsets: ["cyrillic"], weight: ["400", "700", "900"], variable: ["--font-roboto"]});

export const metadata = {
	title: "Launching Soon",
	description: "Codenix Solutions @ Online",
};

export default function RootLayout({children}) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/media/favicon.ico" />
			</head>
			<body className={roboto.className}>{children}</body>
		</html>
	);
}
