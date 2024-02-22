import {Roboto} from "next/font/google";
import "./globals.css";
import "./custom.css";

const roboto = Roboto({subsets: ["cyrillic"], weight: ["400", "700", "900"], variable: ["--font-roboto"]});

export const metadata = {
	title: "Launching Soon",
	description: "Codenix Solutions @ Online",
};

export default function RootLayout({children}) {
	return (
		<html lang="en">
			<body className={roboto.className}>{children}</body>
		</html>
	);
}
