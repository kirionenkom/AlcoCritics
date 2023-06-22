import React, { ReactNode} from "react";
import Menu from "@/components/Menu";

interface LayoutProps {
	children: ReactNode
}
export default function Layout({children} : LayoutProps) {
	return (
		<>
		<Menu/>
		<main>
			{children}
		</main>
		</>
	)
}