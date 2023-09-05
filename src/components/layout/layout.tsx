import React, { ReactNode } from 'react';
import Menu from '@/components/menu/Menu';
import Head from 'next/head';

interface LayoutProps {
	children: ReactNode;
	title: string;
}
export default function Layout({ children, title }: LayoutProps) {
	return (
		<>
			<Head>
				<title>{title} | AlcoCritics</title>
			</Head>
			<Menu />
			<main>{children}</main>
		</>
	);
}
